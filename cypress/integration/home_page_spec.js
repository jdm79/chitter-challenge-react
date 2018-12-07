describe('Home page', () => {
  it('successfully loads the home page', () => {
    cy.visit('/')
    cy.contains('Chitter Frontend')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.contains('Log in').click()

  })
})