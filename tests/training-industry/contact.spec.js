const screenWidths = [576, 768, 992, 1200];

describe("Contact page", () => {
    beforeEach(() => {
        cy.visit("https://trainingindustry.com/contact");
    });

    it("should visit the 'Contact' page", () => {
        cy.percySnapshot('Visited the "Contact" page', {
            widths: screenWidths
        });
    });

    it("should visit the 'Contact' page", () => {
        cy.get("page__heading title--page").should("have.text", "Contact");
    });
});
