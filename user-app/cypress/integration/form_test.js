
describe('Tests of some kind, not sure yet', () => {
    it('can nav?', () => {
        cy.visit('http://localhost:3000/')

        cy.url().should('include', 'http://localhost:3000/')
    })

    it('get name and check if can input', () => {
        cy.get('input[name=name]')
            .type('Brian')
            .should('have.value', 'Brian')
    })

    it('get email and check if can input', () => {
        cy.get('input[name=email]')
            .type('Brian@brian.com')
            .should('have.value', 'Brian@brian.com')
    })

    it('get password and check if can input', () => {
        cy.get('input[name=password]')
            .type('123456')
            .should('have.value', '123456')
    })

    it('check if user can use the TOS check box', () => {
        cy.get('input[name=terms]')
            .click()
            .should('be.checked')
    })
})

describe('testing the creation of a new form and submitting it', () => {
    it('can nav?', () => {
        cy.visit('http://localhost:3000/')

        cy.url().should('include', 'http://localhost:3000/')
    })
    
    it('can user submit form data?', () => {
        cy.get('input[name=name]')
            .type('Brian')

        cy.get('input[name=email]')
            .type('Brian@brian.com')
            .should('have.value', 'Brian@brian.com')

        cy.get('input[name=password]')
            .type('123456')
            .should('have.value', '123456')

        cy.get('input[name=terms]')
            .click()
            .should('be.checked')

        cy.get('button#buttonBtn').click()

    })
})

describe('checking form validation with an empty input', () => {
    it('can nav?', () => {
        cy.visit('http://localhost:3000/')

        cy.url().should('include', 'http://localhost:3000/')
    })
    
    it('can user submit form data?', () => {
        cy.get('input[name=name]')

        cy.get('input[name=email]')
            .type('Brian@brian.com')
            .should('have.value', 'Brian@brian.com')

        cy.get('input[name=password]')
            .type('123456')
            .should('have.value', '123456')

        cy.get('input[name=terms]')
            .click()
            .should('be.checked')

        cy.get('button#buttonBtn').click()

    })
})