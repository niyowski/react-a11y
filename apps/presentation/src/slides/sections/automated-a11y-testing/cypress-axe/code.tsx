import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const codeInstall = `
npm install cypress-axe --save-dev

# Install additional dependencies if needed
npm install axe-core --save-dev
`;

const installation: CodeBlock = {
  id: 'cypress-axe-installation',
  language: 'bash',
  code: codeInstall,
};

const codeImpl = `
// tsconfig.json
{
  "compilerOptions": {
    "types": ["node", "cypress", "cypress-axe"],
  },
}

// cypress.config.ts
export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('task', {
        log(message: string) {
          console.log(message);
          return null;
        },
        table(data: unknown[]) {
          console.table(data);
          return null;
        },
      });
    },
  },
  component: {
    // Same as above
  }
});

// cypress/support/e2e.ts
import 'cypress-axe';

// cypress/support/commands.ts
import { AxeResults, RunOptions } from 'axe-core';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      task<T>(event: 'log', message?: string): Chainable<T>;
      task<T>(event: 'table', data?: unknown[]): Chainable<T>;
      injectAndConfigureAxe(): void;
      auditAccessibility(options?: RunOptions): void;
    }
  }
}

Cypress.Commands.add('injectAndConfigureAxe', () => {
  const axeCorePath = 'path-to-/node_modules/axe-core/axe.min.js';
  const options = {
    rules: [{ id: 'a-rule-that-is-disabled-always', enabled: false }],
  };

  cy.injectAxe({ axeCorePath });
  cy.configureAxe(options);
});

Cypress.Commands.add('auditAccessibility', (options?: RunOptions) => {
  function summarize(violations: AxeResults['violations']) {
    const summary = \`
      \${violations.length} accessibility violation\${
        violations.length === 1 ? '' : 's'
      } \${violations.length === 1 ? 'was' : 'were'} detected
    \`.trim();

    const data = violations.map(
      ({ id, impact, description, nodes }) => ({
        id,
        impact,
        description,
        nodes: nodes.length,
      }),
    );

    cy.task('log', summary);
    cy.task('table', data);
  }

  cy.checkA11y(undefined, options, summarize);
});

// Audit accessibility in an e2e test
describe('e2e', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAndConfigureAxe(); // This should occur between page load and test run
  });


  it('should not have any a11y violations', () => {
    cy.auditAccessibility();
  });

  it('should not have any a11y violations', () => {
    cy.auditAccessibility({
      rules: {
        'a-rule-that-is-disabled-temporarily': { enabled: false },
      },
    });
  });
});

// Audit accessibility in a component test
describe('component', () => {
  it('should not have any a11y violations', () => {
    // Act
    cy.mount(<MyComponent />);
    cy.injectAndConfigureAxe();

    // Assert
    cy.auditAccessibility();
  });
});
`;

const implementation: CodeBlock = {
  id: 'cypress-axe-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="cypress-axe-code"
      aria-label="How to use cypress-axe?"
      title="How to use"
      blocks={[installation, implementation]}
      alignTop
      centerContent
    />
  );
};
