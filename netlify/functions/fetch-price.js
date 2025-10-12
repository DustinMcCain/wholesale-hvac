exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

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
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    const html = await response.text();
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
  // Remove excessive whitespace but keep structure
  const cleanHtml = html.replace(/\s+/g, ' ');
  
  // Pattern for your specific HTML structure:
  // <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>4,131.00</span>
  const pricePatterns = [
    // Pattern 1: Your exact structure
    /<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">\$<\/span>([\d,]+\.?\d*)<\/span>/i,
    
    // Pattern 2: More flexible version
    /<span[^>]*class="[^"]*woocommerce-Price-amount[^"]*"[^>]*><span[^>]*class="[^"]*woocommerce-Price-currencySymbol[^"]*"[^>]*>\$<\/span>([\d,]+\.?\d*)<\/span>/i,
    
    // Pattern 3: Even more flexible
    /woocommerce-Price-amount[^>]*>.*?woocommerce-Price-currencySymbol[^>]*>\$<\/span>\s*([\d,]+\.?\d*)/i,
    
    // Pattern 4: Just currency symbol followed by price
    /<span[^>]*woocommerce-Price-currencySymbol[^>]*>\$<\/span>\s*([\d,]+\.?\d*)/i,
    
    // Pattern 5: Fallback - any dollar amount
    /\$([\d,]+\.?\d*)/,
  ];

  for (let i = 0; i < pricePatterns.length; i++) {
    const pattern = pricePatterns[i];
    const match = cleanHtml.match(pattern);
    
    if (match && match[1]) {
      console.log(`Match found with pattern ${i + 1}:`, match[1]);
      
      // Remove commas and convert to number
      const numericPrice = parseFloat(match[1].replace(/,/g, ''));
      
      // Validate it's a reasonable HVAC price (between $100 and $50,000)
      if (!isNaN(numericPrice) && numericPrice >= 100 && numericPrice <= 50000) {
        console.log('Valid price found:', numericPrice);
        return numericPrice;
      }
    }
  }

  console.log('No valid price found');
  return null;
}