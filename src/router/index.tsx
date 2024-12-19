import { RoutesEnum } from '@/enums';
import { lazy } from 'react';
import { Route } from '@/router/components/Route/Route.tsx';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

const Welcome = lazy(() => import('@/pages/Welcome/Welcome.tsx'));

const Checklist = lazy(() => import('@/pages/Checklist/Checklist.tsx'));
const AdditionalInfo = lazy(
  () => import('@/pages/Checklist/AdditionalInfo/AdditionalInfo.tsx'),
);
const AddressInfo = lazy(
  () => import('@/pages/Checklist/AddressInfo/AddressInfo.tsx'),
);
const ConfirmID = lazy(
  () => import('@/pages/Checklist/ConfirmID/ConfirmID.tsx'),
);
const IDVerification = lazy(
  () => import('@/pages/Checklist/IDVerification/IDVerification.tsx'),
);
const LivePhoto = lazy(
  () => import('@/pages/Checklist/LivePhoto/LivePhoto.tsx'),
);

const Resume = lazy(() => import('@/pages/Resume/Resume.tsx'));
const PrivacyPolicy = lazy(
  () => import('@/pages/PrivacyPolicy/PrivacyPolicy.tsx'),
);

const routes: RouteObject[] = [
  {
    path: RoutesEnum.WELCOME,
    element: <Route component={Welcome} />,
  },
  {
    path: RoutesEnum.CHECKLIST,
    element: <Route component={Checklist} />,
  },
  {
    path: RoutesEnum.ID_VERIFICATION,
    element: <Route component={IDVerification} />,
    children: [
      {
        path: RoutesEnum.CONFIRM_ID,
        element: <Route component={ConfirmID} />,
      },
      {
        path: RoutesEnum.LIVE_PHOTO,
        element: <Route component={LivePhoto} />,
      },
      {
        path: RoutesEnum.ADDRESS_INFO,
        element: <Route component={AddressInfo} />,
      },
      {
        path: RoutesEnum.ADDITIONAL_INFO,
        element: <Route component={AdditionalInfo} />,
      },
    ],
  },
  {
    path: RoutesEnum.RESUME,
    element: <Route component={Resume} />,
  },
  {
    path: RoutesEnum.PRIVACY_POLICY,
    element: <Route component={PrivacyPolicy} />,
  },
  {
    path: '*',
    element: <Navigate to={RoutesEnum.WELCOME} />,
  },
];

export const router = createBrowserRouter(routes);
