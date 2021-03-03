import React from "react";
import { NextSeo } from 'next-seo';
import '../public/index.css'

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
      <Layout>
        <NextSeo
        title="Alexander Benko"
        description="The portfolio website for Alexander Benko, a full stack software engineer with a specialty in Full Stack web applications."
          openGraph={{
            type: 'website',
            description: "Alexander Benko,your next Software Engineer",
            images : [
              {
                url: require('../images/me.jpg'),
                width: 800,
                height: 600,
                alt: 'It is me'
              }
            ],
            locale: 'en_IE',
            url: 'https://www.alexanderbenko.dev',
            site_name: "Alexander Benko",
          }}
        />
          <Component {...pageProps} />
      </Layout>
  )
}
