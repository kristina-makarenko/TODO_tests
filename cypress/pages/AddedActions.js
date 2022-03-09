export class AddedActions{

    action1 = 'go to the gym'
    action2 = 'feed the dog'
    action3 = 'buy products'
    add_actions = '.new-todo'
    filter_number = '3 items left'
    filter_all = 'All'
    filter_active = 'Active'
    filter_completed = 'Completed'

    checkActionsNotExist() {
        cy.contains(this.action1).should('not.exist')
        cy.contains(this.action2).should('not.exist')
        cy.contains(this.action3).should('not.exist')
    }

    addActions() {
        cy.get(this.add_actions).type(this.action1).type('{enter}')
        cy.get(this.add_actions).type(this.action2).type('{enter}')
        cy.get(this.add_actions).type(this.action3).type('{enter}')
    }

    checkActionsExist() {
        cy.contains(this.action1).should('exist')
        cy.contains(this.action2).should('exist')
        cy.contains(this.action3).should('exist')

    }
    
    checkFiltersExist(){
        cy.contains(this.filter_number).should('exist')
        cy.contains(this.filter_all).should('exist')
        cy.contains(this.filter_active).should('exist')
        cy.contains(this.filter_completed).should('exist')
    }

}
