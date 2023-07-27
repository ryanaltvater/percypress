const screenWidths = [576, 768, 992, 1200];

describe("Training Industry - Contact", () => {
    it("should visit the 'Contact' page", () => {
        cy.visit("https://trainingindustry.com/contact");

        cy.percySnapshot('Visited the "Contact" page', {
            widths: screenWidths
        });
    });
});
