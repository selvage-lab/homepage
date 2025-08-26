import React from "react";
import { Button } from "./ui/button";
import { ChevronRight, Download, Github } from "lucide-react";

export function FloatingNav() {
  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-3">
        <Button 
          size="default" 
          className="bg-blue-600/90 hover:bg-blue-700 text-white shadow-xl backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 h-12 px-4"
          onClick={() => {
            const quickStartSection = document.getElementById('quick-start') || document.querySelector('[id*="quick"]') || document.querySelector('section:nth-child(2)');
            quickStartSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Download className="w-5 h-5 mr-2" />
          빠른 시작
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
        
        <Button 
          variant="outline" 
          size="default" 
          className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-xl transition-all duration-300 hover:scale-105 h-12 px-4"
          asChild
        >
          <a href="https://github.com/anomie7/selvage" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-col gap-2">
        <Button 
          size="default" 
          className="bg-blue-600/90 hover:bg-blue-700 text-white shadow-xl backdrop-blur-md border border-white/10 transition-all duration-300 h-10"
          onClick={() => {
            const quickStartSection = document.getElementById('quick-start') || document.querySelector('[id*="quick"]') || document.querySelector('section:nth-child(2)');
            quickStartSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Download className="w-4 h-4 mr-1" />
          시작
        </Button>
        
        <Button 
          variant="outline" 
          size="default" 
          className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-xl transition-all duration-300 h-10"
          asChild
        >
          <a href="https://github.com/anomie7/selvage" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </nav>
  );
}