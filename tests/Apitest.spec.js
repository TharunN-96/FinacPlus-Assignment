import { test, expect } from '@playwright/test';

let userId;

// Post
test('Create user and validate response', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    data: { name: 'Tharun N', job: 'QA Engineer' },
  });

  // status code
  expect(response.status()).toBe(201);

  const body = await response.json();
  userId = body.id;
  console.log('Created User ID:', userId);
  expect(body).toHaveProperty('id');
});

// Get 
test('Fetch user details', async ({ request }) => {
   const randomId = Math.floor(Math.random() * 12) + 1; 
   const response = await request.get(`https://reqres.in/api/users/${randomId}`);
   //Status code
   expect(response.status()).toBe(200);
});

// Put
test('Update user name and validate', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: { name: 'Tharun Nettyam', job: 'Senior QA' },
  });
  expect(response.status()).toBe(200);
  
  
});
