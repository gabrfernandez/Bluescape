Feature('Test Name and Email');

Scenario('NameEmail', ({ I }) => {
    I.amOnPage("/");

    I.seeAttributesOnElements('//*[@id="g7-name"]', {'aria-required': "true"});
    I.seeAttributesOnElements('//*[@id="g7-email"]', {'aria-required': "true"});
});