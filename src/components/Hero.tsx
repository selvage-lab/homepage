import React from "react";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Primary background with denim-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:50px_50px] opacity-30"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main heading - 더 적절한 크기로 조정 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-white leading-tight font-bold">
          AI 코드 리뷰, <span className="text-blue-300">지금 시작하세요</span>
        </h1>
        
        {/* Subtitle - 간결하고 명확한 설명 */}
        <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Selvage는 AI 기반 코드 리뷰 CLI 도구입니다.
          <br />
          더 이상 리뷰를 기다리지 마세요.<br></br>AI가 코드 변경사항을 즉시 분석하여 품질 개선과 버그 예방을 제공합니다.
        </p>
        
        {/* Installation preview - 더 깔끔하게 정리 */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-300/20 rounded-xl p-6 md:p-8 max-w-3xl mx-auto shadow-2xl">
          <div className="text-left space-y-3 font-mono text-base md:text-lg">
            <div className="text-blue-300 flex items-center">
              <span className="text-blue-500 text-xl mr-3">$</span> 
              <span>pip install selvage</span>
            </div>
            <div className="text-blue-300 flex items-center">
              <span className="text-blue-500 text-xl mr-3">$</span> 
              <span>export OPENROUTER_API_KEY="your_key"</span>
            </div>
            <div className="text-blue-300 flex items-center">
              <span className="text-blue-500 text-xl mr-3">$</span> 
              <span>selvage review --model claude-sonnet-4-thinking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}