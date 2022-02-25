describe('Pizza Form Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    
    const nameInput = () => cy.get('input[name=name]')    
    const sizeInput = () => cy.get('select[name=size]')
    const pepperoniInput = () => cy.get('input[name=pepperoni]')
    const baconInput = () => cy.get('input[name=bacon]')
    const mushroomInput = () => cy.get('[type="checkbox"]').check('mushroom')
    const artichokeInput = () => cy.get('input[name=artichoke]')
    const pineappleInput = () => cy.get('input[name=pineapple]')
    const instructionsInput = () => cy.get('input[name=instructions]')
    const specialInput = () => cy.get('input[name=special-text]')
    const submitButton = () => cy.get('button[id=order-button]')

    it('Sanity Check', () => {
        expect(1+2).to.equal(3)
    })

    it('proper elements are showing', () => {
        nameInput().should('exist')
        sizeInput().should('exist')
        pepperoniInput().should('exist')
        baconInput().should('exist')
        mushroomInput().should('exist')
        artichokeInput().should('exist')
        pineappleInput().should('exist')
        instructionsInput().should('exist')
        specialInput().should('exist')
        submitButton().should('exist')
    })

    
})