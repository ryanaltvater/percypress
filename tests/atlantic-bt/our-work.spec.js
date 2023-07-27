const screenWidths = [576, 768, 992, 1200];

describe("Our Work", () => {
    it("should visit the 'Our Work' page", () => {
        cy.visit("https://www.atlanticbt.com/our-work");

        cy.percySnapshot('Visited the "Our Work" page', {
            widths: screenWidths
        });
    });
});
