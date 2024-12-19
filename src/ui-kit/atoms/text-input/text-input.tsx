import clsx from 'clsx';
import { FC, InputHTMLAttributes, ReactNode, useRef } from 'react';
import { Typography } from '../typography/typography';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  inputClassName?: string;
  helperText?: string;
  error?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  name,
  helperText,
  className,
  inputClassName,
  leftIcon,
  rightIcon,
  disabled,
  error,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={clsx('flex flex-col gap-2', className)}>
      {label && (
        <label htmlFor={name}>
          <Typography
            variant="h3"
            className={clsx({ 'text-grey-600': disabled })}
          >
            {label}
          </Typography>
        </label>
      )}
      <div
        onClick={() => inputRef.current?.focus()}
        className={clsx(
          'flex h-10 items-center gap-2 rounded-[4px] border px-4 py-2.5 outline-2',
          {
            'cursor-default bg-grey-25 [&_svg]:text-grey-400': disabled,
            'border-error-500 outline outline-error-100 [&_svg]:text-error-500':
              error,
            'cursor-text border-grey-300 focus-within:border-ink-primary focus-within:outline focus-within:outline-ink-100 hover:border-ink-primary [&_svg]:text-grey-400':
              !disabled && !error,
          },
        )}
      >
        {leftIcon}
        <input
          {...rest}
          ref={inputRef}
          id={name}
          name={name}
          disabled={disabled}
          size={1}
          className={clsx(
            'flex-grow appearance-none text-[14px] font-[430] leading-[1.42em] tracking-[0.005em] text-black  focus:outline-none',
            inputClassName,
            disabled
              ? 'bg-transparent placeholder:text-grey-300'
              : 'placeholder:text-grey-400',
          )}
        />
        {rightIcon}
      </div>
      {helperText && (
        <Typography
          variant="small"
          className={clsx({
            'text-grey-500': disabled,
            'text-error-500': error,
          })}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};
