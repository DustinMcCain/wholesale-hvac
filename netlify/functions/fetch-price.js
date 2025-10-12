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
    console.log('========================================');
    console.log('Fetching price from:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }
    
    const html = await response.text();
    
    // Find and log all price-related HTML sections
    const priceRegex = /woocommerce-Price-amount[\s\S]{0,200}/gi;
    const priceMatches = html.match(priceRegex);
    
    console.log('Found price sections:', priceMatches ? priceMatches.length : 0);
    if (priceMatches) {
      priceMatches.forEach((match, i) => {
        console.log(`Price section ${i + 1}:`, match);
      });
    }
    
    const price = extractPrice(html);

    console.log('Final extracted price:', price);
    console.log('========================================');

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        price,
        url,
        timestamp: new Date().toISOString(),
        debugInfo: priceMatches ? priceMatches.slice(0, 3) : null // Include in response
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
  
  // Try to find ANY occurrence of woocommerce-Price-currencySymbol followed by numbers
  const simplestPattern = /woocommerce-Price-currencySymbol[^>]*>.*?\$([\d,]+\.?\d*)/i;
  const simpleMatch = html.match(simplestPattern);
  
  if (simpleMatch) {
    console.log('Simple pattern matched:', simpleMatch[0]);
    const price = parseFloat(simpleMatch[1].replace(/,/g, ''));
    if (!isNaN(price) && price >= 100 && price <= 50000) {
      console.log('✓ Valid price from simple pattern:', price);
      return price;
    }
  }
  
  // Try to find dollar sign followed by numbers anywhere
  const dollarPattern = /\$\s*([\d,]+\.\d{2})/g;
  const dollarMatches = html.match(dollarPattern);
  
  if (dollarMatches) {
    console.log('Found dollar amounts:', dollarMatches.slice(0, 5));
    
    // Get the first reasonable HVAC price
    for (const match of dollarMatches) {
      const priceStr = match.replace('$', '').replace(/,/g, '').trim();
      const price = parseFloat(priceStr);
      
      if (!isNaN(price) && price >= 1000 && price <= 50000) {
        console.log('✓ Valid price from dollar pattern:', price);
        return price;
      }
    }
  }
  
  console.log('✗ No valid price found');
  return null;
}