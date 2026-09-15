import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import { SmoothScroll } from "./Component/Common/SmoothScroll";
import { Navbar } from "./Component/Common/Navbar";
import { Footer } from "./Component/Common/Footer";
import { PageTransition } from "./Component/Common/PageTransition";

import { HomePage } from "./Page/HomePage";
import { ServicePage } from "./Page/ServicePage";
import { ProjectsPage } from "./Page/ProjectsPage";
import { CareerPage } from "./Page/CareerPage";
import { AboutPage } from "./Page/AboutPage";
import { ContactPage } from "./Page/ContactPage";

// Animated route outlet that transitions softly on route changes
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <PageTransition key={location.pathname}>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/service"
          element={
            <PageTransition key={location.pathname}>
              <ServicePage />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition key={location.pathname}>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/career"
          element={
            <PageTransition key={location.pathname}>
              <CareerPage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition key={location.pathname}>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition key={location.pathname}>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition key={location.pathname}>
              <HomePage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-[#FDFCFF] text-[#0F172A] font-sans antialiased selection:bg-[#5B4DFC]/15 selection:text-[#5B4DFC]">
          <Navbar />
          <div className="flex-1">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}
