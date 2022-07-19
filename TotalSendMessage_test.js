Feature('Send a Message Total Tests');

Scenario('NameEmail', ({ I }) => {
    I.amOnPage("/");

    I.seeAttributesOnElements('//*[@id="g7-name"]', {'aria-required': "true"});
    I.seeAttributesOnElements('//*[@id="g7-email"]', {'aria-required': "true"});
});

Scenario('WebsiteURL', ({ I }) => {
    I.amOnPage("/");

    I.seeAttributesOnElements('//*[@id="g7-website"]', {type: "url"});
});

Scenario('SendMessage', ({ I }) => {
    I.amOnPage("/");

    I.fillField('Name', 'Gabe');
    I.fillField('Email', 'gabe@yahoo.com');
    I.fillField('Website', 'https://gabefernandezdev.com/');
    I.fillField('Date', 'July 18, 2022');
    I.click('Submit')

    I.see('Message Sent')
});
