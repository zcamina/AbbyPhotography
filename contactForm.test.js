// tests contactForm.test.js

const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('@jest/globals');

let driver;

// Setup before all tests
beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

// Cleanup after all tests
afterAll(async () => {
  await driver.quit();
});

test('Contact form should submit successfully and show success message', async () => {
  // Navigate to the contact form page
  await driver.get('https://zcamina.github.io/AbbyPhotography/'); 

  // Fill out the contact form
  await driver.findElement(By.name('name')).sendKeys('John Doe');
  await driver.findElement(By.name('email')).sendKeys('john@example.com');
  await driver.findElement(By.name('message')).sendKeys('This is a test message.');

  // Submit the form
  await driver.findElement(By.css('form')).submit();

  // Wait for the success message to appear
  const successMessageElement = await driver.wait(until.elementLocated(By.css('.success-message')), 10000);
  const successMessageText = await successMessageElement.getText();

  // Assert that the success message is as expected
  expect(successMessageText).toContain('Thank you for your message');
});
