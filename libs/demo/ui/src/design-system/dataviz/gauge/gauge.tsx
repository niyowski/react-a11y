/**
 * See: https://github.com/mfts/gauge-demo/blob/main/app/gauge.tsx
 */

import type { Styleable, Testable } from '../../types';
import { classNames } from '../../utils/css';
import { DataVizComponentProps } from '../types';
import { GAUGE_RADIUS, testId } from './constants';
import { useGaugeParams } from './use-gauge-params';
import { type GaugeVariants, gaugeVariants } from './variants';

type Variant = GaugeVariants;
export interface GaugeProps
  extends DataVizComponentProps,
    Variant,
    Styleable,
    Testable {
  titleElement?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Gauge: React.FC<GaugeProps> = ({
  color,
  size,
  value,
  titleElement: Title = 'h2',
  title,
  description,
  className,
  ...props
}) => {
  const { initialOffset, strokeDasharray, strokeDashoffset } =
    useGaugeParams(value);

  return (
    <div
      {...props}
      className={classNames('flex max-w-xs flex-col text-center', className)}
    >
      {Boolean(title) && (
        <Title className="m-0 mb-2" data-testid={testId.gaugeTitle}>
          {title}
        </Title>
      )}
      <div className="relative flex flex-col items-center justify-center">
        <svg
          fill="none"
          shapeRendering="crispEdges"
          viewBox="0 0 120 120"
          strokeWidth="2"
          className={classNames(
            '-rotate-90 transform',
            gaugeVariants({ size }),
          )}
        >
          <circle
            className="text-base-300"
            strokeWidth="12"
            stroke="currentColor"
            fill="transparent"
            shapeRendering="geometricPrecision"
            r={GAUGE_RADIUS}
            cx="60"
            cy="60"
          />
          <circle
            className={classNames(
              'animate-gauge_fill',
              gaugeVariants({ color }),
            )}
            strokeWidth="12"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={initialOffset}
            shapeRendering="geometricPrecision"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={GAUGE_RADIUS}
            cx="60"
            cy="60"
            style={{
              strokeDashoffset,
              transition: 'stroke-dasharray 1s ease 0s,stroke 1s ease 0s',
            }}
          />
        </svg>
        <div className="animate-gauge_fadeIn absolute flex">
          <p
            className={classNames('font-bold', {
              'text-sm': size === 'small',
              'text-base': size === 'medium',
              'text-xl': size === 'large',
            })}
            data-testid={testId.gaugeValue}
          >
            {value}
          </p>
        </div>
      </div>
      {Boolean(description) && (
        <p className="mt-2" data-testid={testId.gaugeDescr}>
          {description}
        </p>
      )}
    </div>
  );
};
