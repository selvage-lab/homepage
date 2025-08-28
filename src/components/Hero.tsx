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
        {/* Main heading - 적절한 사이즈로 조정 */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 text-white leading-tight font-bold">
          AI 코드 리뷰, <span className="text-blue-300">지금 시작하세요</span>
        </h1>
        
        {/* Subtitle - 타이포그래피 중심 미니멀리즘 */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="space-y-2 text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-100 leading-relaxed font-light">
            <p>Selvage는 AI 코드 리뷰 CLI 입니다.</p>
            <p>리뷰 대기 없이 즉시 피드백을 받으세요.</p>
            <p>구독 없이 사용량 기반으로 지불합니다.</p>
            <p>AI가 변경된 코드를 분석해 품질을 높이고 버그를 미리 막습니다.</p>
          </div>
        </div>
        
        {/* Installation preview - 적절한 사이즈로 조정 */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-300/20 rounded-xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="text-left space-y-3 font-mono text-base md:text-lg">
            <div className="text-blue-300 flex items-center">
              <span className="text-blue-500 text-xl mr-3">$</span> 
              <span>uv tool install selvage</span>
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