Feature('Test Website has valid URL');

Scenario('WebsiteURL', ({ I }) => {
    I.amOnPage("/");

    I.seeAttributesOnElements('//*[@id="g7-website"]', {type: "url"});
    
});