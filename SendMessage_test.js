Feature('Send a Message');

Scenario('SendMessage', ({ I }) => {
    I.amOnPage("/");

    I.fillField('Name', 'Gabe');
    I.fillField('Email', 'gabe@yahoo.com');
    I.fillField('Website', 'https://gabefernandezdev.com/');
    I.fillField('Date', 'July 18, 2022');
    I.click('Submit')

    // I.dontSee('Please fill out this field.');
    // pause()
    I.see('Message Sent')
});
