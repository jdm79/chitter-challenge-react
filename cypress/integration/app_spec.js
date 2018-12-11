describe('Home page', () => {

  beforeEach( () => {
    cy.visit('/')
  })

  it('successfully loads the home page', () => {
    cy.contains('Chitter Frontend')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  // So that I can let people know what I am doing  
  // I want to post a message (peep) to chitter
  it('posts a message to chitter', () => {
    cy.get('.post-peep')
      .type('hullo world')
    cy.contains('Post').click()
  })

  it('fills in log in form and clicks button', () => {
    // add tests to fill in email
    cy.get('.email')
      .type('james.malvern@email.com')
      .should('have.value', 'james.malvern@email.com')
    // add test to fill in password
    cy.get('.password')
      .type('password1234')
    // // add test to click log in
    cy.contains('Log in').click()
  })

  // it('displays tweeps when logged in', () => {
  //   cy.contains('Tweeps')
  // })
})