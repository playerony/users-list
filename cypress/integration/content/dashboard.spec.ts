describe('DashboardPage', () => {
  it('should contain proper header', () => {
    cy.visit('/');
    cy.contains('users list');
  });

  it('should fetch and render users list', () => {
    cy.visit('/');
    cy.contains('users list');

    cy.get('ul').find('li').should('have.length', 10);
  });

  it('should filter users list by name', () => {
    cy.visit('/');
    cy.contains('users list');

    cy.get('input').type('    ńa    ');

    cy.wait(300);
    cy.get('ul').find('li').should('have.length', 3);
  });
});
