import { Gauge, GaugeProps } from './gauge';

const mount = (props: GaugeProps) => {
  return cy.mount(<Gauge data-cy="gauge" {...props} />);
};

const getGauge = () => cy.get('[data-cy=gauge]');

describe('Button', () => {
  it('should render correctly', () => {
    // Arrange
    const props: GaugeProps = {
      value: 42,
      title: 'The answer',
      description:
        'The answer to the ultimate question of life, the universe, and everything.',
    };

    // Act
    mount(props);

    // Assert
    getGauge().should('contains.text', props.value);
    getGauge().should('contains.text', props.title);
    getGauge().should('contains.text', props.description);
  });
});
