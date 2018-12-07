describe('Home page', () => {
  it('successfully loads the home page', () => {
    cy.visit('/')
    cy.contains('Chitter Frontend')

  })
})