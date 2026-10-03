# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitest.spec.js >> Create user and validate response
- Location: tests\Apitest.spec.js:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 429
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | let userId;
  4  | 
  5  | // Post
  6  | test('Create user and validate response', async ({ request }) => {
  7  |   const response = await request.post('https://reqres.in/api/users', {
  8  |     data: { name: 'Tharun N', job: 'QA Engineer' },
  9  |   });
  10 | 
  11 |   // status code
> 12 |   expect(response.status()).toBe(201);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  13 | 
  14 |   
  15 |   const body = await response.json();
  16 |   userId = body.id;
  17 |   console.log('Created User ID:', userId);
  18 | });
  19 | 
  20 | // Get 
  21 | test('Fetch user details', async ({ request }) => {
  22 |    const randomId = Math.floor(Math.random() * 12) + 1; 
  23 |    const response = await request.get(`https://reqres.in/api/users/${randomId}`);
  24 | 
  25 |    //Status code
  26 |    expect(response.status()).toBe(200);
  27 | });
  28 | 
  29 | // Put
  30 | test('Update user name and validate', async ({ request }) => {
  31 |   const response = await request.put(`https://reqres.in/api/users/${userId}`, {
  32 |     data: { name: 'Tharun Nettyam', job: 'Senior QA' },
  33 |   });
  34 |   
  35 |   expect(response.status()).toBe(200);
  36 | });
  37 | 
```