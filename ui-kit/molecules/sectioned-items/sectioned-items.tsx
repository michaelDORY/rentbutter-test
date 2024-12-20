import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface SectionedItemsProps {
  items: ReactNode[];
  className?: string;
  itemsClassName?: string | string[];
  withFullWidthDivider?: boolean;
}

export const SectionedItems: FC<SectionedItemsProps> = ({
  items,
  className,
  itemsClassName,
  withFullWidthDivider = true,
}) => {
  return (
    <div
      className={clsx(
        'rounded-[4px] border border-grey-100 bg-white shadow-[0_2px_4px_0px_rgba(13,18,28,0.08)]',
        className,
        {
          'px-4': !withFullWidthDivider,
        },
      )}
    >
      {items.map((child, index) => (
        <div
          className={clsx(
            'flex items-start gap-4 py-5',
            typeof itemsClassName === 'string'
              ? itemsClassName
              : itemsClassName?.[index],
            {
              'border-t border-grey-100': index !== 0,
              'px-4': withFullWidthDivider,
            },
          )}
          key={index}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
