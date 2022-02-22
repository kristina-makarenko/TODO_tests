/// <reference types="cypress" />

import {BeforeEachfun} from "../pages/beforeEach_page"
const beforeEachfun = new BeforeEachfun()

describe('Tests for TODO', () => {

    beforeEach(() => {
        beforeEachfun.viewport();
        beforeEachfun.visit('https://todomvc.com/examples/react/#/');
    })

    it('Every basic elements exist', () => {
        cy.contains('todos').should('have.text','todos')
        cy.get('.new-todo').invoke('attr','placeholder').should('contain','What needs to be done?')
        cy.contains('Double-click to edit a todo').should('have.text','Double-click to edit a todo')
        cy.contains('Created by petehunt').should('have.text','Created by petehunt')
        cy.contains('Part of TodoMVC').should('have.text','Part of TodoMVC')

    })


    it('Actions are added', () => {  
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')


    })

    it('Select all actions and deselect all', () => {  
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

        cy.get('[for="toggle-all"]').click()

        cy.get('[data-reactid=".0.2.1.4"] > a').click()

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('0 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.get('[for="toggle-all"]').click()
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')
        cy.contains('3 items left').should('exist')
        cy.contains('Clear completed').should('not.exist')

    })

    it('Double-click to edit a todo action', () => {
        cy.contains('go to the gym').should('not.exist')
        cy.get('.new-todo').type('go to the gym{enter}')
        cy.contains('go to the gym').should('exist')
        cy.get('.view > label').dblclick()
        cy.get('.edit').type('{backspace}{enter}')
        cy.contains('go to the gym').should('not.exist')
        cy.contains('go to the gy').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

    })

    it('Action is chosen', () => {
        
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('3 items left').should('exist')

        cy.get('[type="checkbox"]').eq(1).check()
        
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

    })

    it('One action removed', () => {
        
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('3 items left').should('exist')

        cy.get('.destroy').eq(0).click({force: true})
        cy.contains('go to the gym').should('not.exist')
        cy.contains('2 items left').should('exist')


        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

    })

    it('Only active actions are shown', () => {
        
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('3 items left').should('exist')

        cy.get('[type="checkbox"]').eq(1).check()
        
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

        cy.get('[data-reactid=".0.2.1.2"] > a').click()

        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

    })

    it('Only completed actions are shown', () => {
        
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('3 items left').should('exist')

        cy.get('[type="checkbox"]').eq(2).check()
        
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

        cy.get('[data-reactid=".0.2.1.4"] > a').click()

        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('not.exist')
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

    })

    it('All actions are shown', () => {
        
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('3 items left').should('exist')

        cy.get('[type="checkbox"]').eq(1).check()
        
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

        cy.get('[data-reactid=".0.2.1.2"] > a').click()

        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.get('[data-reactid=".0.2.1.0.0"]').click()
        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

    })

    it('All completed actions are deleted', () => {
        
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')

        cy.get('.new-todo').type('go to the gym{enter}')
        cy.get('.new-todo').type('feed the dog{enter}')
        cy.get('.new-todo').type('buy products{enter}')

        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('exist')
        cy.contains('3 items left').should('exist')

        cy.get('[type="checkbox"]').eq(2).check()
        
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.contains('All').should('exist')
        cy.contains('Active').should('exist')
        cy.contains('Completed').should('exist')

        cy.get('[data-reactid=".0.2.1.4"] > a').click()

        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('exist')
        cy.contains('buy products').should('not.exist')
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('exist')

        cy.get('.clear-completed').click()
        cy.contains('go to the gym').should('not.exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('not.exist')
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('not.exist')

        cy.get('[data-reactid=".0.2.1.0.0"]').click()
        cy.contains('go to the gym').should('exist')
        cy.contains('feed the dog').should('not.exist')
        cy.contains('buy products').should('exist')
        cy.contains('2 items left').should('exist')
        cy.contains('Clear completed').should('not.exist')

    })
})