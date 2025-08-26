import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Download, 
  Key, 
  Play, 
  Copy,
  ArrowRight,
  Terminal,
  CheckCircle
} from "lucide-react";

export function QuickStart() {
  const steps = [
    {
      icon: Download,
      title: "설치",
      description: "pip로 간단 설치",
      code: "pip install selvage",
      note: "Python 3.10+ 필요"
    },
    {
      icon: Key,
      title: "API 키 설정",
      description: "OpenRouter API 키 설정",
      code: "export OPENROUTER_API_KEY=\"your_openrouter_api_key_here\"",
      note: "다양한 AI 모델 사용 가능"
    },
    {
      icon: Play,
      title: "코드 리뷰 시작",
      description: "AI 코드 리뷰 실행",
      code: "selvage review --model claude-sonnet-4-thinking",
      note: "터미널에 즉시 출력"
    }
  ];

  const usageExamples = [
    {
      title: "현재 워킹 디렉토리 변경사항 리뷰",
      code: "selvage review"
    },
    {
      title: "커밋 전 최종 점검",
      code: "selvage review --staged"
    },
    {
      title: "PR 보내기 전 코드 리뷰",
      code: "selvage review --target-branch develop"
    },
    {
      title: "빠르고 경제적인 모델로 간단한 변경사항 리뷰",
      code: "selvage review --model gemini-2.5-flash"
    },
    {
      title: "리뷰 후 웹 UI로 자세히 확인",
      code: "selvage review --target-branch main --open-ui"
    }
  ];

  return (
    <section id="quick-start" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-green-600">3단계</span>로 시작하세요
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            복잡한 설정 없이 몇 분 안에 AI 기반 코드 리뷰를 시작할 수 있습니다
          </p>
        </div>

        {/* Installation steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-stretch">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-blue-400" />
                    </div>
                  )}
                  <CardHeader className="text-center pb-4 flex-shrink-0 h-40">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 mb-3">{step.title}</CardTitle>
                    <p className="text-lg text-slate-600 text-center px-2 h-12 flex items-center justify-center leading-tight">{step.description}</p>
                    <p className="text-sm text-slate-500 text-center px-2 h-12 flex items-center justify-center">{step.note}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="bg-slate-900 rounded-lg p-4 mb-4 h-32 flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">터미널</span>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex-grow flex items-center">
                        <code className="text-green-400 font-mono text-sm block break-all">
                          {step.code}
                        </code>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Usage examples */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl mb-4 text-slate-900">사용 예시</h3>
            <p className="text-lg text-slate-600">다양한 Git 워크플로우에 맞는 사용법을 확인해보세요</p>
          </div>

          <div className="space-y-4">
            {usageExamples.map((example, index) => (
              <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="text-lg text-slate-900 mb-2">{example.title}</h4>
                      <div className="bg-slate-900 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-400 text-sm">명령어</span>
                          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <code className="text-blue-400 font-mono text-sm block">
                          {example.code}
                        </code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}