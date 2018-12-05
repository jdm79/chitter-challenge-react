describe('My first test', () => {
  it('visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io')

    // this is an example of chaining #declarative
    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('james.malvern@gmail.com')
      .should('have.value', 'james.malvern@gmail.com')
  })
})