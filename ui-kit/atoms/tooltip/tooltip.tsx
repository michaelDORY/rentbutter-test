import Tippy, { TippyProps } from '@tippyjs/react';
import { FC } from 'react';
import 'tippy.js/dist/tippy.css';

export const Tooltip: FC<TippyProps> = ({ children, ...rest }) => {
  return (
    <Tippy
      offset={[60, 12]}
      placement="bottom"
      interactive
      {...rest}
      theme="custom"
    >
      {children}
    </Tippy>
  );
};
