import React from "react";
import { Hero } from "./components/Hero";
import { Demo } from "./components/Demo";
import { Features } from "./components/Features";
import { TechSupport } from "./components/TechSupport";
import { QuickStart } from "./components/QuickStart";
import { Footer } from "./components/Footer";
import { TopNavigation } from "./components/TopNavigation";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      
      {/* Add top padding to prevent content overlap */}
      <div className="pt-20">
        <Hero />
        <Demo />
        <Features />
        <TechSupport />
        <QuickStart />
        <Footer />
      </div>
    </div>
  );
}