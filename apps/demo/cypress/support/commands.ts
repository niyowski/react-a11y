/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
// -- This is a parent command --
// Example:
// Cypress.Commands.add('login', (email, password) => {
//   console.log('Custom command example: Login', email, password);
// });
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import { AxeResults, RunOptions } from 'axe-core';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
    interface Chainable<Subject> {
      task<T>(event: 'log', message?: string): Chainable<T>;
      task<T>(event: 'table', data?: unknown[]): Chainable<T>;
      injectAndConfigureAxe(): void;
      auditAccessibility(options?: RunOptions): void;
    }
  }
}

Cypress.Commands.add('injectAndConfigureAxe', () => {
  const axeCorePath = '../../node_modules/axe-core/axe.min.js';
  const axeConfig = {
    rules: [
      // Temporarily disable axe rules to be able to commit
      { id: 'button-name', enabled: false },
      { id: 'color-contrast', enabled: false },
      { id: 'heading-order', enabled: false },
      { id: 'html-has-lang', enabled: false },
      { id: 'image-alt', enabled: false },
      { id: 'label', enabled: false },
      { id: 'landmark-one-main', enabled: false },
      { id: 'nested-interactive', enabled: false },
      { id: 'region', enabled: false },
    ],
  };

  cy.injectAxe({ axeCorePath });
  cy.configureAxe(axeConfig);
});

Cypress.Commands.add('auditAccessibility', (options?: RunOptions) => {
  function summarize(violations: AxeResults['violations']) {
    const summary = `
      ${violations.length} accessibility violation${
        violations.length === 1 ? '' : 's'
      } ${violations.length === 1 ? 'was' : 'were'} detected
    `.trim();

    const data = violations.map(({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }));

    cy.task('log', summary);
    cy.task('table', data);
  }

  cy.checkA11y(undefined, options, summarize);
});
