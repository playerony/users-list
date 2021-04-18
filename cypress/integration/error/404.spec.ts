describe('NotFoundPage', () => {
  it('should contain proper label', () => {
    cy.visit('/404');
    cy.contains('404');
  });
});
