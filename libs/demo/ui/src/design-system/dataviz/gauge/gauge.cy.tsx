import { testId } from './constants';
import { Gauge, type GaugeProps } from './gauge';

const mount = (props: GaugeProps) => {
  cy.mount(<Gauge {...props} data-testid={testId.gauge} />);
  cy.injectAndConfigureAxe();
};

const getByTestId = (id: string) => cy.get(`[data-testid=${id}]`);

describe('Gauge', () => {
  // Arrange
  const props: GaugeProps = {
    value: 42,
    title: 'The answer',
    description:
      'The answer to the ultimate question of life, the universe, and everything.',
  };

  it('should render correctly', () => {
    // Act
    mount(props);

    // Assert
    getByTestId(testId.gauge).should('exist');
    getByTestId(testId.gaugeValue).should('contains.text', props.value);
    getByTestId(testId.gaugeTitle).should('contains.text', props.title);
    getByTestId(testId.gaugeDescr).should('contains.text', props.description);
  });

  it('should not have any a11y violations', () => {
    // Act
    mount(props);

    // Assert
    cy.auditAccessibility();
  });
});
