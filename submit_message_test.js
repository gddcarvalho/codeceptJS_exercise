Feature('Submit Test Messages to Bluescape QA Test Site');

Scenario('Test Submit Message', (I) => {
  I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
  I.waitForElement('#g7-name', 10);
  I.fillField('#g7-name', 'Test Title');
  I.fillField('#g7-email', 'test@gmail.com');
  I.fillField('#g7-website', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200');
  I.fillField('#g7-date', 'July 15, 2020');
  I.click('Submit');
  I.see('Message Sent');
  I.see('Name: Test Title');
  I.see('Email: test@gmail.com');
  I.see('Website: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200');
  I.see('Date: July 15, 2020');
});

Scenario('Test Submit Missing Required Parameters', (I) => {
  I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
  I.waitForElement('#g7-name', 10);
  I.fillField('#g7-name', 'Test Title');
  I.fillField('#g7-email', 'test@');
  I.see('Send Us a Message');
  I.dontSee('Message Sent');
});

Scenario('Test Submit Invalid Email', (I) => {
  I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
  I.waitForElement('#contact-form-7', 10);
  I.fillField('#g7-name', 'Test Title');
  I.fillField('#g7-email', 'test');
  I.see('Send Us a Message');
  I.dontSee('Message Sent');
});

Scenario('Test Submit Missing Missing Required Title', (I) => {
  //Missing Required Title
  I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
  I.waitForElement('#contact-form-7', 10);
  I.fillField('#g7-email', 'test@gmail.com');
  I.fillField('#g7-website', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200');
  I.fillField('#g7-date', 'July 15, 2020');
  I.click('Submit');
  I.see('Send Us a Message');
  I.dontSee('Message Sent');
});

Scenario('Test Submit Missing Missing Required Email', (I) => {
  //Missing Required Email
  I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
  I.waitForElement('#contact-form-7', 10);
  I.fillField('#g7-name', 'Test Title');
  I.fillField('#g7-website', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200');
  I.fillField('#g7-date', 'July 15, 2020');
  I.click('Submit');
  I.see('Send Us a Message');
  I.dontSee('Message Sent');
});

Scenario('Test Submit Missing Missing Required Date', (I) => {
  //Missing Required Date
  I.amOnPage('https://bluescapeqainterview.wordpress.com/contact/');
  I.waitForElement('#contact-form-7', 10);
  I.fillField('#g7-name', 'Test Title');
  I.fillField('#g7-email', 'test@gmail.com');
  I.fillField('#g7-website', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200');
  I.click('Submit');
  I.see('Send Us a Message');
  I.dontSee('Message Sent');
});