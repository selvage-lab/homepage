import { Badge } from "./ui/badge";
import { Play, Terminal, Zap } from "lucide-react";
import demoGif from "figma:asset/3a72e2378cb2bb6ca456e2fe188fe5332b654bf6.png";

export function Demo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-blue-600">코드 리뷰도 </span>엣지있게!
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            간단한 명령어 하나로 코드 변경사항을 분석하고, 품질 개선 제안을 받아보세요
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Demo container */}
          <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center ml-4 text-slate-400">
                <Terminal className="w-4 h-4 mr-2" />
                selvage CLI
              </div>
            </div>
            
            {/* Demo image/gif placeholder */}
            <div className="bg-slate-800 rounded-lg p-6 mb-6">
              <img 
                src={demoGif} 
                alt="Selvage CLI Demo" 
                className="w-full h-auto rounded-lg border border-slate-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}