import HomePage from "../../pageObjects/HomePage";
import Login from "../../pageObjects/Login";

describe("Open my page", () => {
  it("Successful login", () => {
    const homePage = new HomePage();
    const loginPage = new Login();
    let addedBookTitle;

    homePage.goTo(Cypress.env("url"));
    cy.get(".card-title.my-2 strong")
      .first()
      .invoke("text")
      .then((bookTitle) => {
        addedBookTitle = bookTitle;
      });

    homePage.addToCart();
    homePage.viewCart();
    cy.get("td.mat-mdc-cell.mat-column-title")
      .first()
      .invoke("text")
      .then((otherTitle) => {
        expect(otherTitle).to.equal(addedBookTitle);
      });

    cy.get(".my-2 > .mdc-button__label").click();
    loginPage.goTo(Cypress.env("url") + "/login#");
    cy.get(".mat-mdc-card-header").should("be.visible");
  });
});
