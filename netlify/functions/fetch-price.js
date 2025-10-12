exports.handler = async (event, context) => {
  // Enable CORS so your React app can call this function
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  // Handle preflight requests (browser checks)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Get the URL from the query parameters
  const { url } = event.queryStringParameters || {};

  if (!url) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'URL parameter is required' }),
    };
  }

  try {
    console.log('Fetching price from:', url);
    
    // Fetch the product page
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    const html = await response.text();

    // Extract price from HTML
    const price = extractPrice(html);

    console.log('Extracted price:', price);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        price,
        url,
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error('Error fetching price:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to fetch price',
        message: error.message,
        url 
      }),
    };
  }
};

function extractPrice(html) {
  // Multiple patterns to find prices in WooCommerce HTML
  const pricePatterns = [
    // Pattern 1: <bdi>$1,234.56</bdi>
    /<bdi>\$?([\d,]+\.?\d*)<\/bdi>/i,
    
    // Pattern 2: <span class="woocommerce-Price-amount amount"><bdi>$1,234.56</bdi></span>
    /<span[^>]*class="[^"]*woocommerce-Price-amount[^"]*"[^>]*>.*?<bdi>\$?([\d,]+\.?\d*)<\/bdi>/i,
    
    // Pattern 3: In <ins> tags (sale prices)
    /<ins>.*?<span[^>]*class="[^"]*woocommerce-Price-amount[^"]*"[^>]*>.*?<bdi>\$?([\d,]+\.?\d*)<\/bdi>/i,
    
    // Pattern 4: Direct in span with class
    /<span[^>]*class="[^"]*amount[^"]*"[^>]*>\$?([\d,]+\.?\d*)<\/span>/i,
    
    // Pattern 5: Any price-like number with dollar sign
    /\$\s*([\d,]+\.?\d*)/,
  ];

  for (const pattern of pricePatterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      // Remove commas and convert to number
      const numericPrice = parseFloat(match[1].replace(/,/g, ''));
      
      // Validate it's a reasonable price (between $100 and $50,000)
      if (!isNaN(numericPrice) && numericPrice >= 100 && numericPrice <= 50000) {
        return numericPrice;
      }
    }
  }

  console.log('No price found in HTML');
  return null;
}