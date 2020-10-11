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
          description: "Alexander Benko's Portfolio Website - Made with NextJs",
          locale: 'en_IE',
          url: 'https://www.alexanderbenko.dev',
          site_name: "Alexander Benko-Software Engineer",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}
