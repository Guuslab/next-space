// import { useEffect } from 'react';
import styles from '@/styles/Home.module.css';

import space from '@/javascript/space';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <>
    <Navigation />
      <div className="hero">
        <h1 className="space-text">guus.space</h1>
        <canvas id="space"></canvas>
      </div>
      <Footer />
    </>
  )
}