import HomePage from "../../pageObjects/HomePage";
import Login from "../../pageObjects/Login";

describe("Open my page", () => {
  let loginData; // Declare variables for fixture data

  // Load the fixture data before the tests
  before(() => {
    cy.fixture("login").then((data) => {
      loginData = data;
    });
  });

  it("Successful login", () => {
    const homePage = new HomePage();
    const loginPage = new Login();

    // Navigate to login page
    loginPage.goTo(Cypress.env("url") + "/login#");

    // Perform login with valid credentials
    cy.login(loginData.validUser.userName, loginData.validUser.password).then(
      () => {
        homePage.goTo(Cypress.env("url"));
      }
    );

    // Assertion
    cy.get(".mdc-button__label").should("contain", "Book Cart");
  });

  it("Invalid login", () => {
    const loginPage = new Login();

    // Navigate to login page
    loginPage.goTo(Cypress.env("url") + "/login#");

    // Perform login with invalid credentials
    cy.login(loginData.invalidUser.userName, loginData.invalidUser.password);
    cy.contains("button", "Login").click();

    // Assertion for error message
    cy.get("#mat-mdc-error-0").should(
      "contain",
      "Username or Password is incorrect."
    );
  });
});
