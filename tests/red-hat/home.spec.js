const screenWidths = [576, 768, 992, 1200];

describe("Home page", () => {
    it("should visit the 'Home' page", () => {
        cy.visit("https://redhat.com");

        cy.percySnapshot('Visited the "Home" page', {
            widths: screenWidths
        });
    });
});
