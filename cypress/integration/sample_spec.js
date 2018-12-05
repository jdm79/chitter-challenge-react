describe('My first test', () => {
  it('visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io')

    // this is an example of chaining #declarative
    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')
  })
})