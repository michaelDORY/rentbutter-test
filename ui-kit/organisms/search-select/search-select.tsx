'use client';

import { Button, Icon, TextInput, Typography } from '@/ui-kit/atoms';
import clsx from 'clsx';
import { Check, Search as SearchIcon, X } from 'lucide-react';
import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';

type SearchProps = {
  options: { value: string; title: string; subtitle?: string }[];
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchSelect: FC<SearchProps> = ({
  options,
  className,
  ...rest
}) => {
  const [selected, setSelected] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOptionClick = (value: string) => {
    setSelected(value);
    setSearchQuery(value);
  };

  const clearFields = () => {
    setSelected('');
    setSearchQuery('');
  };

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSelected('');
  };

  return (
    <div className={clsx('py-5', className)}>
      <TextInput
        {...rest}
        leftIcon={<Icon icon={SearchIcon} size="sm" />}
        rightIcon={
          <Button variant="icon" size="sm" onClick={clearFields}>
            <X className="h-4 w-4 text-primary" />
          </Button>
        }
        className="mb-3 px-6"
        inputClassName="pr-2.5"
        value={searchQuery}
        onChange={onSearchInputChange}
      />
      <div className="flex flex-col">
        {options.map(({ value, title, subtitle }) => {
          const isSelected = selected === value;
          return (
            <div
              className={clsx(
                'flex cursor-pointer items-center justify-between px-6 py-3 transition-colors hover:bg-blue-100',
                isSelected ? 'bg-blue-100' : 'bg-white',
              )}
              key={value}
              onClick={() => handleOptionClick(value)}
            >
              <div>
                <Typography variant="h4" className="text-[14px]">
                  {title}
                </Typography>
                {subtitle && (
                  <Typography variant="small" className="!text-grey-500">
                    {subtitle}
                  </Typography>
                )}
              </div>
              {isSelected && <Icon icon={Check} color="primary" size="sm" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
