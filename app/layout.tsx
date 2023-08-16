import React from 'react';
import Head from 'next/head';
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

export const metadata = {
  title: 'East Park ⎯ A New York Holdings Group',
  description: 'East Park, located in New York City, unites commerce, media, and environmental enthusiasts to build a greener, brighter future. © 2023 East Park, Inc.',
  siteUrl: 'https://www.eastpark.xyz', 
  twitterHandle: '@eastpark',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="East Park Holdings Group" />
        <link rel="canonical" href={metadata.siteUrl} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metadata.twitterHandle} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <body className={`${ppLight.variable} ${ppLightItalic.variable} ${gracia.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
