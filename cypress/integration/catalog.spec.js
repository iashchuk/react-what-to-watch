describe(`Catalog`, () => {
  it(`Adds 4 movie card after show more click`, () => {
    cy.visit(`http://localhost:1337`);
    cy.get(`.catalog__movies-list > .catalog__movies-card`).should(($articles) => {
      expect($articles, `6 items`).to.have.length(6);
    });
    cy.contains(`Show more`).click();
    cy.get(`.catalog__movies-list > .catalog__movies-card`).should(($articles) => {
      expect($articles, `10 items`).to.have.length(10);
    });
  });
  it(`Filter catalog by comedy`, () => {
    cy.visit(`http://localhost:1337`);
    cy.contains(`Dramas`).click();
    cy.get(`.catalog__genres-item--active`).contains(`Dramas`);
  });
});
