import { getGreeting } from '../support/app.po';

describe('animals', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to animals!');
  });
});
