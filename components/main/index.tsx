import React from 'react';
import Head from 'next/head';

export const Main: React.FC = (props) => {

  const { children } = props;
  const title = "Oppidum - L'agence tourisme de poche";
  const description = "Oppidum est une application qui fournit des informations culturelles, historiques et touristiques sur différentes villes."
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="touch-icon-ipad-retina.png"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          href="/apple_splash_2048.png"
          sizes="2048x2732"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1668.png"
          sizes="1668x2224"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1536.png"
          sizes="1536x2048"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1125.png"
          sizes="1125x2436"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1242.png"
          sizes="1242x2208"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_750.png"
          sizes="750x1334"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_640.png"
          sizes="640x1136"
          rel="apple-touch-startup-image"
        />

        <meta name="theme-color" content="#4db9c2" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="Content-Language" content={'Fr-fr'} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content="https://oppidum.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/oppidum.png" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/assets/oppidum.png" />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta name="keywords" content="Tourisme, Travel, France, Discovery, history, Glob trotters" />
        <meta name="author" content="Oppidum" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://oppidum.com/" />

        <link rel="shortlink" href="https://oppidum.com/" />
        <link rel="icon" type="image/png" href="/assets/oppidum.png" />
       
        {/* <link rel="stylesheet" href="/styles/global.scss" /> */}
        <title>{title}</title>
      </Head>

      <main>{children}</main>
    </>
  );
};
