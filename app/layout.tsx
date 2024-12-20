import { Montserrat } from 'next/font/google';
import { Footer } from '@/ui-kit';
import StoreProvider from '@/store/StoreProvider';

import './index.css';

const inter = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <div id="root">
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 ">
              <div className="modal-bg relative relative h-full max-h-[620px] w-full max-w-[360px] rounded-2xl shadow-xl">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
