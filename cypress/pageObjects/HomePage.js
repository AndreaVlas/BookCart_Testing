class HomePage {
  goTo(url) {
    cy.visit(url);
  }

  successfulLogin() {
    cy.successfulLogin();
  }
}
export default HomePage;
