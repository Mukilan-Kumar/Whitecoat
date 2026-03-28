// Test script for backend APIs
// Run with: node scripts/testBackend.js

const BASE_URL = 'http://localhost:3000';

async function testContactAPI() {
  console.log('\n🧪 Testing Contact API...');
  
  try {
    const response = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Dr. Test User',
        email: 'test@example.com',
        phone: '+91 9876543210',
        propertyInterest: 'Luxury Villa',
        message: 'This is a test message from the backend test script.'
      })
    });
    
    const data = await response.json();
    console.log('✅ Contact API Response:', data);
  } catch (error) {
    console.error('❌ Contact API Error:', error.message);
  }
}

async function testPartnersAPI() {
  console.log('\n🧪 Testing Partners API...');
  
  try {
    const response = await fetch(`${BASE_URL}/api/partners`);
    const data = await response.json();
    console.log('✅ Partners API Response:', {
      count: data.partners?.length || 0,
      sample: data.partners?.[0] || 'No partners found'
    });
  } catch (error) {
    console.error('❌ Partners API Error:', error.message);
  }
}

async function runTests() {
  console.log('🚀 Starting Backend API Tests...');
  console.log('Make sure your dev server is running on http://localhost:3000\n');
  
  await testContactAPI();
  await testPartnersAPI();
  
  console.log('\n✨ Tests completed!');
}

runTests();
