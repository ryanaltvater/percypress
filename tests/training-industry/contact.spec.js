const screenWidths = [576, 768, 992, 1200];

describe("Contact page", () => {
    beforeEach(() => {
        cy.visit("https://trainingindustry.com/contact");
    });

    // Takes a snapshot
    it("should visit the 'Contact' page", () => {
        cy.percySnapshot('Visited the "Contact" page', {
            widths: screenWidths
        });
    });

    // Checks some text
    it("should visit the 'Contact' page", () => {
        cy.get("page__heading title--page").should("have.text", "Contact");
    });
});
