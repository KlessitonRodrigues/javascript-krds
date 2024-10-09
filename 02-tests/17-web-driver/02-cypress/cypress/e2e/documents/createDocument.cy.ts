import { loginSteps } from 'cy/e2e/login/login.cy';
import { getItemGridItem } from 'cy/utils/HTML';

// STEPS
const createDocumentSteps = () => {
  cy.get('span').contains('Documentos').click();
  cy.get('a[href="/dashboard/documents"').click();
  cy.get('a[href="documents/contract/new"').click();

  cy.wait(10000);
  cy.get(getItemGridItem(3)).click();
  cy.get('button').contains('Próximo').click();

  cy.get(getItemGridItem(1)).click();
  cy.get('#term_in_months input').type('12');
  cy.get('#property_start_rent_value input').type('250000');
  cy.get('#reajust_frequency input').type('12');
};

// TEST
describe('Create Document Test', () => {
  it('Should create a document successfully', () => {
    loginSteps();
    createDocumentSteps();
  });
});
