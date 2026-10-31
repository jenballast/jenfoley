exports.handler = async (event) => {
  try {
    console.log('Function called');

    const response = await fetch('https://jenfoley.substack.com/feed');
    console.log('Fetch status:', response.status);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: 'Failed to fetch feed'
      };
    }

    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Access-Control-Allow-Origin': '*',
      },
      body: text,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
