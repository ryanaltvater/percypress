const screenWidths = [576, 768, 992, 1200];

describe("About page", () => {
    it("should visit the 'About' page", () => {
        cy.visit("https://trainingindustry.com/about");

        cy.percySnapshot('Visited the "About" page', {
            widths: screenWidths
        });
    });
});
