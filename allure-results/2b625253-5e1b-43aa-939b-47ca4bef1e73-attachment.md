# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookStore.spec.js >> Bookstore UI automation
- Location: tests\BookStore.spec.js:4:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Logout' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('button', { name: 'Logout' }) with timeout 5000ms
  - waiting for getByRole('button', { name: 'Logout' })

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- list:
  - listitem:
    - link "Login":
      - /url: /login
      - img
      - text: Login
  - listitem:
    - link "Book Store":
      - /url: /books
      - img
      - text: Book Store
  - listitem:
    - link "Profile":
      - /url: /profile
      - img
      - text: Profile
  - listitem:
    - link "Book Store API":
      - /url: /swagger
      - img
      - text: Book Store API
- heading "Login" [level=1]
- heading "Welcome," [level=2]
- heading "Login in Book Store" [level=5]
- text: "UserName :"
- textbox "UserName"
- text: "Password :"
- textbox "Password"
- button "Login"
- button "New User"
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const fs = require('fs');
  3  | 
  4  | test('Bookstore UI automation', async ({page}) => {
  5  |   await page.goto('https://demoqa.com');
  6  | 
  7  |   //Navigation step for the Book store application
  8  |   await page.getByText('Book Store Application').click();
  9  |   await page.getByRole('button', { name: 'Login' }).click();
  10 | 
  11 |   //Login steps
  12 |   await page.locator('#userName').fill('Tharun');
  13 |   await page.locator('#password').fill('Test@12345');
  14 |   await page.getByRole('button', { name: 'Login' }).click();
> 15 |   await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
     |                                                              ^ Error: expect(locator).toBeVisible() failed
  16 |   await page.getByRole('link', { name: 'Profile' }).click();
  17 | 
  18 |   //to validate profile name and logout button
  19 |   await expect(page.locator('#userName-value')).toHaveText('Tharun');
  20 |   await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  21 | 
  22 |   //Book store 
  23 |   await page.getByRole('button', { name: 'Go To Book Store' }).click();
  24 |   await page.locator('#searchBox').fill('Learning JavaScript Design Patterns');
  25 |   const bookLocator = page.getByRole('link',{name :'Learning JavaScript Design Patterns'});
  26 | 
  27 |   //Validate the search result to contain this book
  28 |   await expect(bookLocator).toBeVisible();
  29 |   await bookLocator.click()
  30 | 
  31 |   //Book details
  32 |   const title = await page.locator('#title-wrapper label').last().textContent();
  33 |   const author = await page.locator('#author-wrapper label').last().textContent();
  34 |   const publisher = await page.locator('#publisher-wrapper label').last().textContent();
  35 | 
  36 |   //File
  37 |   const bookData = `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}`;
  38 |   fs.writeFileSync('bookData.txt',bookData);
  39 |   
  40 |   //Logout
  41 |   await page.getByRole('link', { name: 'Profile' }).click();
  42 |   await page.getByRole('button', { name: 'Logout' }).click();
  43 | 
  44 | });
```