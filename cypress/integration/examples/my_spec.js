// describe('my first test function', function() {
//     it('does not do much', function() {
//         expect(true).to.equal(false)
//     })
// })

// describe('visit website', function() {
//     it('Visits the kitchen sink', function() {
//         cy.visit('');
//         cy.contains('title')
//         cy.get('h1')
//         .should('have.text','this is the title')

//     })
// })

describe('visit website', function() {
    it('checks for 9 boxes', function() {
        cy.visit('');
        cy.get('button')
        .should('have.length', '9')
        
    })
})
