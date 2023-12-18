import { Slide } from '~/reveal/templates/slide';

type Presentation = {
  title: React.ReactNode;
  description: React.ReactNode;
  author: string;
  year: string;
};

const presentation: Presentation = {
  title: (
    <>
      <span>Unveiling</span>
      <p className="text-primary-500 my-4 block -skew-y-3 text-8xl">
        Accessibility
      </p>
      <span>challenges in </span>
      <span className="text-secondary-500 text-8xl">React</span>
    </>
  ),
  description: `Identify, address, and prevent accessibility issues within React applications`,
  author: 'Mehmet Yarar',
  year: '2023',
};

export default () => {
  return (
    <Slide id="intro">
      <h1 className="text-6xl">{presentation.title}</h1>
      <p className="text-base-300 m-0 mt-16 text-lg">
        {presentation.description}
      </p>
      <p className="text-base-300 m-0 font-serif text-base italic">
        {presentation.author}, {presentation.year}
      </p>
    </Slide>
  );
};
