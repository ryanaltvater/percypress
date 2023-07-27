const screenWidths = [576, 768, 992, 1200];

describe("Our Process", () => {
    it("should visit the 'Our Process' page", () => {
        cy.visit("https://www.atlanticbt.com/our-process");

        cy.percySnapshot('Visited the "Our Process" page', {
            widths: screenWidths
        });
    });
});
