import React from 'react';
import Head from 'next/head';
import type { Metadata } from 'next'
import './globals.css';
import localFont from 'next/font/local';

const ppLight = localFont({
  src: '../public/fonts/PP-Light.ttf',
  weight: '400',
  variable: '--font-pp-light',
});

const ppLightItalic = localFont({
  src: '../public/fonts/PP-LightItalic.ttf',
  weight: '400',
  variable: '--font-pp-light-italic',
});

const gracia = localFont({
  src: '../public/fonts/Gracia.ttf',
  weight: '400',
  variable: '--font-gracia',
});

export const metadata: Metadata = {
  title: 'East Park Holdings Group ⎯ Crafting Tomorrow\'s Narratives',
  description: 'East Park is P307, Cooper’s Garden, A Palé Films, and our foundational teams. © 2023 East Park, Inc.',
  themeColor: '#73FFA2',
  keywords: ['P307', 'solomonGPT', 'East Park Holdings\' Group', 'Asset Holding Company', 'New York'],
  authors: [{ name: 'Parth Patel', url: 'https://parth.ski' }],
  openGraph: {
    title: 'East Park Holdings Group',
    description: 'We invest, curate, and build with a vision of a greener, brighter, and more accessible future.',
    url: 'https://www.eastpark.xyz',
    siteName: 'East Park Holdings Group ⎯ Crafting Tomorrow\'s Narratives',
    images: [
      {
        url: '@mountains.jpg',
        width: 800,
        height: 600,
        alt: 'Mountains',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    siteId: 'Your Twitter ID',
    creator: '@YourTwitterHandle',
    creatorId: 'Your Twitter ID',
    title: 'Your Application Title',
    description: 'A brief description of your application',
    images: ['https://image.mux.com/syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c/animated.gif?fps=15&end=5'],
  },
}

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
