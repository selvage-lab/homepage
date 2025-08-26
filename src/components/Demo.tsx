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
          
          {/* Process steps */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">1</span>
              </div>
              <h3 className="text-xl mb-2 text-slate-900">코드 변경</h3>
              <p className="text-slate-600">Git으로 코드를 수정하고 변경사항을 만듭니다</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-slate-900">AI 분석</h3>
              <p className="text-slate-600">selvage가 변경사항을 AI로 분석합니다</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">3</span>
              </div>
              <h3 className="text-xl mb-2 text-slate-900">리뷰 결과</h3>
              <p className="text-slate-600">품질 개선 및 버그 수정 제안을 받습니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}