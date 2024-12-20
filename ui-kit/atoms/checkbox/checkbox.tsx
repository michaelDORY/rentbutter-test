import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { Typography } from '../typography/typography';
import { Check } from 'lucide-react';

type CheckboxProps = { label?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: FC<CheckboxProps> = ({ label, disabled, ...rest }) => {
  return (
    <label
      className={clsx('group/label flex items-center gap-3', {
        'cursor-pointer': !disabled,
      })}
    >
      <div className="group relative flex items-center">
        <input
          {...rest}
          type="checkbox"
          disabled={disabled}
          className={clsx(
            'size-[18px] shrink-0 appearance-none rounded-[4px] border border-grey-300 outline-2 checked:border-ink-primary checked:bg-ink-primary',
            disabled
              ? 'bg-grey-50'
              : 'cursor-pointer group-hover/label:border-ink-primary group-hover/label:outline group-hover/label:outline-ink-100',
          )}
        />
        <Check
          className={clsx(
            'absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-[&:has(*:checked)]:block',
          )}
          size={12}
          strokeWidth={3}
          color="white"
        />
      </div>
      <Typography className={clsx({ 'text-grey-500': disabled })}>
        {label}
      </Typography>
    </label>
  );
};
