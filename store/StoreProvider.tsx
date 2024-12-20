'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/store/store';
import { setValue } from '@/store/slices/stepperSlice';

interface StoreProviderProps {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(setValue(1));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
