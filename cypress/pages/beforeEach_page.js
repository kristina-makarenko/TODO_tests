export class BeforeEachfun{

    viewport() {
        cy.viewport(1280,720)
    }

    visit(url) {
        cy.visit(url)
    }




}