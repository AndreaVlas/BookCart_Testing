import HomePage from "../../pageObjects/HomePage";
import Registration from "../../pageObjects/Register";
describe("Open my page", () => {
  // Load test data before running the tests
  before(function () {
    // Load the "registration" fixture file and assign its data to `this.data` for access in tests
    cy.fixture("registration").then(function (data) {
      this.data = data; // Stores the fixture data in `this` for test use
    });
  });

  it("Successful registration", function () {
    // Create instances of the HomePage and Registration page objects
    const homePage = new HomePage();
    const registrationPage = new Registration();

    // Navigate to the registration page
    registrationPage.goTo(Cypress.env("url") + "/register#");

    // Perform registration with data from the fixture
    cy.successfulRegistration(
      this.data.firstName,
      this.data.lastName,
      this.data.userName,
      this.data.password,
      this.data.confirmPassword
    ).then(() => {
      // After successful registration, navigate to the login page
      homePage.goTo(Cypress.env("url") + "/login#");
    });
  });
});
