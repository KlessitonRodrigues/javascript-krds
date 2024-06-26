import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';

import 'src/styles/app.scss';

const roboto = Roboto({ weight: ['500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
