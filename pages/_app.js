import { useEffect } from 'react';

import '@/styles/globals.css'
import '@/styles/home.css';
import '@/styles/header.css';
import '@/styles/footer.css';

import adobeFont from '@/javascript/adobe-font.js';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    adobeFont(document);
  }, []);

  return <Component {...pageProps} />
}