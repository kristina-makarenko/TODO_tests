export class BasicElements{

    basicElements_TODO = 'todos'
    basicElements_Placeholder = '.new-todo'
    options = 'attr'
    functionName = 'placeholder'
    basicElements_Edit = 'Double-click to edit a todo'
    textPetehunt = 'Created by petehunt'
    textTodoMVC = 'Part of TodoMVC'
    
    checkTODO(text){
        cy.contains(this.basicElements_TODO).should('have.text',text)
    }

    checkPlaceholder(placeholder){
        cy.get(this.basicElements_Placeholder).invoke(this.options,this.functionName).should('contain',placeholder)
    }

    checkEdit(text_edit){
        cy.contains(this.basicElements_Edit).should('have.text',text_edit)

    }
    checkPetehunt(petehunt){
        cy.contains(this.textPetehunt).should('have.text',petehunt)

    }
    checkTodoMVС(TodoMVC){
        cy.contains(this.textTodoMVC).should('have.text',TodoMVC)

    }
}