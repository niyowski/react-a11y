import {
  AtomIcon,
  AtSignIcon,
  BriefcaseIcon,
  CheckCheckIcon,
  Code2Icon,
  DollarSignIcon,
  GithubIcon,
  PersonStandingIcon,
  StarIcon,
} from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';

type SvgIconProps = SVGProps<SVGSVGElement>;
export type IconName =
  | 'at-sign'
  | 'atom'
  | 'briefcase'
  | 'check'
  | 'code'
  | 'dollar-sign'
  | 'github'
  | 'person-standing'
  | 'star';

const icons = new Map([
  ['at-sign', AtSignIcon],
  ['atom', AtomIcon],
  ['briefcase', BriefcaseIcon],
  ['check', CheckCheckIcon],
  ['code', Code2Icon],
  ['dollar-sign', DollarSignIcon],
  ['github', GithubIcon],
  ['person-standing', PersonStandingIcon],
  ['star', StarIcon],
]);

type IconProps = SvgIconProps & {
  name: IconName;
};

export const Icon = ({ name, ...rest }: IconProps) => {
  const IconComponent = icons.get(name) as ComponentType<SvgIconProps>;
  return <IconComponent {...rest} />;
};
