'use client';

import React from 'react';

import Footer from '@/app/components/footer';
import Home from '@/app/components/home';
import Navbar from '@/app/components/navbar';
import Testimonial from '@/app/components/testimonials';
import { ThemeProvider } from '@/app/context/ThemeContext';


export default function HomePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <Testimonial />
      <Footer />
    </ThemeProvider>
  );
}
