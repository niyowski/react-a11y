import { IntroSlide } from '~/reveal/templates/intro';

export default function Slide() {
  return (
    <IntroSlide
      title={
        <>
          <span className="text-4xl">Unveiling</span>
          <span className="text-primary-500 my-4 block -skew-y-3 text-8xl">
            Accessibility
          </span>
          <span className="text-4xl italic">Challenges</span>
          <span className="text-4xl"> in</span>
          <span className="text-secondary-500"> React</span>
        </>
      }
      subtitle="Identify, address, and prevent accessibility issues within React applications"
    />
  );
}
