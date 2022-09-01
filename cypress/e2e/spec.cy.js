 /// <reference types="cypress" />
 import { faker } from '@faker-js/faker';



describe('Demoblaze', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/')


  });

  it('Registration', () => {
    cy.get('#signin2').click()

    cy.get('#sign-username').type(faker.name.firstName())

    cy.get('#sign-password').type('superparol')

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click()
  })

  it('Login', () => {
    //cy.visit('https://www.demoblaze.com/')

    cy.get('#login2').click()

    cy.get('#loginusername').type('Tester3000')

    cy.get('#loginpassword').type('superparol')

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click()

    cy.get('#nameofuser').should('contain.text', 'Tester3000')
  })

  it('Add item to the cart', () => {  
    cy.get('#login2').click()
  
    cy.get('#loginusername').type('Tester3000')
  
    cy.get('#loginpassword').type('superparol')
  
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .click()

    cy.get('a[href="prod.html?idp_=1"][class="hrefch"]')
      .click({force: true})
      .reload()

    cy.get('.col-sm-12 > .btn').click()

    cy.get('#cartur').click()

    cy.get('.success > :nth-child(2)').should('contain.text', 'Samsung galaxy s6')
    })
})
