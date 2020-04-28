
describe('When not logged in', function() {
  beforeEach(function() {
    cy.visit('http://localhost')
  })

  it('frontpage is showing information for non-logged user', function() {
    cy.contains('Login to Ninja Ranking')
    cy.contains('Create account')
    cy.contains('Username')
    cy.contains('Password')
    cy.contains('Login')
  })

  it('frontpage is not showing information for logged user', function() {
    cy.get('html').should('not.contain', 'Manage tournament')
    cy.get('html').should('not.contain', 'Create new tournament')
    cy.get('html').should('not.contain', 'Logout')
    cy.get('html').should('not.contain', 'Here is some recent tournaments to check:')
  })

  describe('When clicking create account link', function() {
    beforeEach(function() {
      cy.contains('Create account').click()
    })

    it('page shows information about creating account', function() {
      cy.contains('Create new Ninja Account')
      cy.contains('Name')
      cy.contains('Username')
      cy.contains('Password')
      cy.contains('Register')
    })
  })
})