const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Bookstore UI automation', async ({page}) => {
  await page.goto('https://demoqa.com');

  //Navigation step for the Book store application
  await page.getByText('Book Store Application').click();
  await page.getByRole('button', { name: 'Login' }).click();

  //Login steps
  await page.locator('#userName').fill('Tharun');
  await page.locator('#password').fill('Test@12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
  await page.getByRole('link', { name: 'Profile' }).click();

  //to validate profile name and logout button
  await expect(page.locator('#userName-value')).toHaveText('Tharun');
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

  //Book store 
  await page.getByRole('button', { name: 'Go To Book Store' }).click();
  await page.locator('#searchBox').fill('Learning JavaScript Design Patterns');
  const bookLocator = page.getByRole('link',{name :'Learning JavaScript Design Patterns'});

  //Validate the search result to contain this book
  await expect(bookLocator).toBeVisible();
  await bookLocator.click()

  //Book details
  const title = await page.locator('#title-wrapper label').last().textContent();
  const author = await page.locator('#author-wrapper label').last().textContent();
  const publisher = await page.locator('#publisher-wrapper label').last().textContent();

  //File
  const bookData = `Title: ${title}\nAuthor: ${author}\nPublisher: ${publisher}`;
  fs.writeFileSync('bookData.txt',bookData);
  
  //Logout
  await page.getByRole('link', { name: 'Profile' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();

});