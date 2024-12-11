class HomePage {
  goTo(url) {
    cy.visit(url);
  }

  successfulLogin() {
    cy.successfulLogin();
  }

  addToCart() {
    cy.contains(
      ":nth-child(1) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label",
      "Add to Cart"
    ).click();
  }

  // Method to view the cart
  viewCart() {
    cy.get(".d-flex > .mdc-icon-button > .mat-mdc-button-touch-target").click();
  }
}
export default HomePage;
