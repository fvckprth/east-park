import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const ppLight = localFont({
  src: '../public/fonts/PP-Light.ttf',
  weight: '400',
  variable: '--font-pp-light'
});

const ppLightItalic = localFont({
  src: '../public/fonts/PP-LightItalic.ttf',
  weight: '400',
  variable: '--font-pp-light-italic'
});

const gracia = localFont({
  src: '../public/fonts/Gracia.ttf',
  weight: '400',
  variable: '--font-gracia'
});

export const metadata: Metadata = {
  title: 'East Park',
  description: 'Generated by create next app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${ppLight.variable} ${ppLightItalic.variable} ${gracia.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
