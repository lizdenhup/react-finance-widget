module.exports = {

  'get to signup page': (client) => {
    client
      .url(client.launchUrl)
      .waitForElementVisible('.navbar', 1000)
      .click('a[href="/signup')

    client.assert.urlContains('signup')
    // client.assert.cssClassPresent("#form", "uk-form-stacked");
  },

  'signup user and redirect to dashboard': (client) => {
    client
      .setValue('input[type=text]', 'testUser')
      .setValue('input[type=password]', 'testPass')
      .click('input[type=submit]')
      .waitForElementVisible('.navbar', 1000)
      .getText('h1', function(response) {
        this.assert.equal(response.value, 'Thank you for signing up!')
      })
      client.assert.urlContains('/dashboard')
  },
  'close': (client) => client.end()
}