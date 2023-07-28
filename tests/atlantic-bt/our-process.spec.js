const screenWidths = [576, 768, 992, 1200];

describe("Our Process page", () => {
    beforeEach(() => {
        cy.visit("https://www.atlanticbt.com/our-process");
    });

    // Takes a snapshot
    it("should visit the 'Our Process' page", () => {
        cy.percySnapshot('Visited the "Our Process" page', {
            widths: screenWidths
        });
    });

    // Checks a link
    it("should test the Atlantic BT logo link", () => {
        cy.get(".site-logo__link")
            .should("have.attr", "href", "https://www.atlanticbt.com")
            .should("have.attr", "aria-label", "Atlanticbt.com");
    });

    // Checks some text (fails on purpose as a demonstration)
    it("should check the 'Contact' button text", () => {
        cy.get(".nav-desktop__link.js-menu-contact").should(
            "have.text",
            "Contact us"
        );
    });

    // Checks a color
    it("should have purple subtitles", () => {
        cy.get(".band__subtitle").should(
            "have.css",
            "color",
            "rgb(87, 8, 211)"
        );
    });
});
