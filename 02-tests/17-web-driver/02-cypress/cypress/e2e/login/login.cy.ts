import { credentials, urls } from "cy/utils/enviroment";

// STEPS
export const loginSteps = () => {
  cy.viewport("macbook-16");
  cy.visit(urls.baseUrl);

  cy.get("input[type=email]").type(credentials.email);
  cy.get("input[type=password]").type(credentials.password);
  cy.get("button[type=submit]").click();

  cy.url().should("include", "/dashboard");
  cy.reload();
  cy.url().should("include", "/dashboard");
};

// TEST
describe("Login tests", () => {
  it("Should login successfully", () => {
    loginSteps();
  });
});
