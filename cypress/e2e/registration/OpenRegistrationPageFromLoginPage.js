import Login from "../../pageObjects/Login";
import Registration from "../../pageObjects/Register";

describe("Open my page", () => {
  it("Successful login", () => {
    const loginPage = new Login();
    const registrationPage = new Registration();

    // Navigate to login page
    loginPage.goTo(Cypress.env("url") + "/login#");
    cy.contains("button", "Register").click();
    registrationPage.goTo(Cypress.env("url") + "/register#");
    cy.get(".mat-mdc-card-content").should("be.visible");
  });
});
