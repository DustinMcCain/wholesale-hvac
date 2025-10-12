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
  console.log('Starting price extraction...');
  
  // Pattern 1: Match HTML entity dollar sign (&#036; or &#36;) followed by price
  // This matches: <span class="woocommerce-Price-currencySymbol">&#036;</span>3,727.00</span>
  const pattern1 = /woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#0?36;<\/span>([\d,]+\.?\d*)<\/span>/i;
  const match1 = html.match(pattern1);
  
  if (match1 && match1[1]) {
    console.log('✓ Pattern 1 matched (HTML entity $):', match1[1]);
    const price = parseFloat(match1[1].replace(/,/g, ''));
    if (!isNaN(price) && price >= 100 && price <= 50000) {
      return price;
    }
  }
  
  // Pattern 2: With <bdi> tag (for related products)
  // This matches: <bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>4,189.00</bdi>
  const pattern2 = /woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#0?36;<\/span>([\d,]+\.?\d*)<\/bdi>/i;
  const match2 = html.match(pattern2);
  
  if (match2 && match2[1]) {
    console.log('✓ Pattern 2 matched (with bdi):', match2[1]);
    const price = parseFloat(match2[1].replace(/,/g, ''));
    if (!isNaN(price) && price >= 100 && price <= 50000) {
      return price;
    }
  }
  
  // Pattern 3: Look in JSON data (seen in section 4)
  // "original_product_price":3727
  const pattern3 = /"original_product_price":([\d,]+\.?\d*)/i;
  const match3 = html.match(pattern3);
  
  if (match3 && match3[1]) {
    console.log('✓ Pattern 3 matched (JSON data):', match3[1]);
    const price = parseFloat(match3[1].replace(/,/g, ''));
    if (!isNaN(price) && price >= 100 && price <= 50000) {
      return price;
    }
  }
  
  // Pattern 4: Literal $ symbol (fallback)
  const pattern4 = /woocommerce-Price-currencySymbol">\$<\/span>([\d,]+\.?\d*)/i;
  const match4 = html.match(pattern4);
  
  if (match4 && match4[1]) {
    console.log('✓ Pattern 4 matched (literal $):', match4[1]);
    const price = parseFloat(match4[1].replace(/,/g, ''));
    if (!isNaN(price) && price >= 100 && price <= 50000) {
      return price;
    }
  }
  
  console.log('✗ No valid price found');
  return null;
}