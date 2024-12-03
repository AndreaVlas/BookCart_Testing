import Login from "../../pageObjects/Login";

describe("Password Toggle Functionality", () => {
  it("should toggle the password visibility", () => {
    const loginPage = new Login();
    loginPage.goTo(Cypress.env("url") + "/login#");
    const passwordField = "#mat-input-1"; //Select the id of the input
    const toggleButton = ".mat-mdc-form-field-icon-suffix > .mat-icon"; //Select the class of the input

    // Verify the password field is hidden by default
    cy.get(passwordField).should("have.attr", "type", "password");

    //Click the toggle button to show the password
    cy.get(toggleButton).click();

    //Verify if the password field is visible
    cy.get(passwordField).should("have.attr", "type", "text");

    cy.get(toggleButton).click();

    //Verify if the password field is hidden again
    cy.get(passwordField).should("have.attr", "type", "password");
  });
});
