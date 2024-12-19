import { FC, Suspense } from 'react';

interface RouteProps {
  component: FC;
}

export const Route: FC<RouteProps> = ({ component: Component }) => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
};
