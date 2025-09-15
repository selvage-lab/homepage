import React from "react";
import { Button } from "./ui/button";
import { ChevronRight, Download, Github } from "lucide-react";
import { useTranslation } from 'react-i18next';

// Google Analytics gtag 함수 타입 선언
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export function FloatingNav() {
  const { t } = useTranslation();

  const handleGitHubClick = () => {
    // Google Ads 전환 추적
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17531799704/ZonbCLbSoJQbEJiR6KdB',
        'value': 1.0,
        'currency': 'KRW'
      });
    }

    // GitHub 페이지로 이동
    window.open('https://github.com/selvage-lab/selvage', '_blank', 'noopener,noreferrer');
  };

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
          {t('nav.quickStart')}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>

        <Button
          variant="outline"
          size="default"
          className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-xl transition-all duration-300 hover:scale-105 h-12 px-4"
          onClick={handleGitHubClick}
        >
          <Github className="w-5 h-5 mr-2" />
          {t('nav.github')}
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
          {t('nav.start')}
        </Button>

        <Button
          variant="outline"
          size="default"
          className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-xl transition-all duration-300 h-10"
          onClick={handleGitHubClick}
        >
          <Github className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
}