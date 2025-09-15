import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useTranslation } from 'react-i18next';
import {
  Download,
  Key,
  Play,
  Copy,
  ArrowRight,
  Terminal,
  CheckCircle,
  Settings,
  Code,
  List
} from "lucide-react";

export function QuickStart() {
  const { t } = useTranslation();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // 복사 성공 시 피드백을 줄 수 있습니다 (선택사항)
      console.log('복사되었습니다:', text);
    }).catch(err => {
      console.error('복사 실패:', err);
    });
  };

  const steps = [
    {
      icon: Download,
      title: t('quickStart.steps.install.title'),
      description: t('quickStart.steps.install.description'),
      code: "uv tool install selvage",
      note: t('quickStart.steps.install.note')
    },
    {
      icon: Key,
      title: t('quickStart.steps.apiKey.title'),
      description: t('quickStart.steps.apiKey.description'),
      code: "export OPENROUTER_API_KEY=\"your_openrouter_api_key_here\"",
      note: t('quickStart.steps.apiKey.note')
    },
    {
      icon: Play,
      title: t('quickStart.steps.start.title'),
      description: t('quickStart.steps.start.description'),
      code: "selvage review --model claude-sonnet-4-thinking",
      note: t('quickStart.steps.start.note')
    }
  ];

  const configExamples = [
    {
      title: "모든 설정 보기",
      code: "selvage config list"
    },
    {
      title: "기본 모델 설정",
      code: "selvage config model <모델명>",
      examples: "예시: claude-sonnet-4-thinking"
    },
    {
      title: "리뷰 결과 언어 설정",
      code: "selvage config language <언어명>",
      examples: "예시: English, Korean"
    }
  ];

  const reviewOptions = [
    {
      option: "--repo-path <경로>",
      description: "Git 저장소 경로 (기본값: 현재 디렉토리)"
    },
    {
      option: "--staged",
      description: "스테이징된 변경사항만 리뷰"
    },
    {
      option: "--target-commit <커밋ID>",
      description: "특정 커밋부터 HEAD까지의 변경사항 리뷰 (예: abc1234)"
    },
    {
      option: "--target-branch <브랜치명>",
      description: "현재 브랜치와 지정된 브랜치 간 변경사항 리뷰 (예: main)"
    },
    {
      option: "--model <모델명>",
      description: "사용할 AI 모델 (예: claude-sonnet-4-thinking)"
    },
    {
      option: "--open-ui",
      description: "리뷰 완료 후 자동으로 UI 실행"
    },
    {
      option: "--no-print",
      description: "터미널에 리뷰 결과를 출력하지 않음 (기본적으로 터미널 출력 활성화)"
    },
    {
      option: "--skip-cache",
      description: "캐시를 사용하지 않고 새로운 리뷰 수행"
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
      title: "특정 파일들만 리뷰",
      code: "git add specific_files.py && selvage review --staged"
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

  const resultExamples = [
    {
      title: "저장된 모든 리뷰 결과를 웹 UI로 관리",
      code: "selvage view"
    },
    {
      title: "다른 포트에서 UI 실행",
      code: "selvage view --port 8502"
    }
  ];

  return (
    <section id="quick-start" className="py-20 bg-slate-50 relative">
      {/* 구분선 */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-blue-600">{t('quickStart.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('quickStart.subtitle')}
          </p>
        </div>

        {/* Installation steps */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-stretch">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-white">
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
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy(step.code)}>
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

        {/* CLI 사용법 */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl mb-4 text-slate-900 flex items-center justify-center gap-3">
              <Terminal className="w-8 h-8 text-blue-600" />
              CLI 사용법
            </h3>
            <p className="text-lg text-slate-600">Selvage의 다양한 명령어와 옵션을 확인해보세요</p>
          </div>

          {/* Selvage 설치하기 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Download className="w-6 h-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-slate-900">Selvage 설치하기</h4>
            </div>
            <div className="space-y-4">
              <Card className="border border-slate-200 hover:border-blue-300 transition-colors bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="text-lg text-slate-900 mb-2">권장 방법 (uv 사용)</h5>
                      <div className="bg-slate-900 rounded-lg p-4 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-400 text-sm">명령어</span>
                          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy(`curl -LsSf https://astral.sh/uv/install.sh | sh\nuv tool install selvage`)}>
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <code className="text-blue-400 font-mono text-sm block">
                            #uv 설치
                          </code>
                          <code className="text-blue-400 font-mono text-sm block">
                            curl -LsSf https://astral.sh/uv/install.sh | sh 
                          </code>
                          <br></br>
                          <code className="text-blue-400 font-mono text-sm block">
                            #selvage 설치
                          </code>
                          <code className="text-blue-400 font-mono text-sm block">
                            uv tool install selvage
                          </code>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 bg-slate-100 px-3 py-2 rounded-md">
                        uv는 한 번만 설치하면 됩니다
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:border-blue-300 transition-colors bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="text-lg text-slate-900 mb-2">대안 방법 (pipx 사용)</h5>
                      <div className="bg-slate-900 rounded-lg p-4 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-400 text-sm">명령어</span>
                          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy(`brew install pipx\npipx install selvage`)}>
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <code className="text-blue-400 font-mono text-sm block">
                            #pipx 설치
                          </code>
                          <code className="text-blue-400 font-mono text-sm block">
                            brew install pipx
                          </code>
                          <br></br>
                          <code className="text-blue-400 font-mono text-sm block">
                            #selvage 설치
                          </code>
                          <code className="text-blue-400 font-mono text-sm block">
                            pipx install selvage
                          </code>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 bg-slate-100 px-3 py-2 rounded-md">
                        macOS 사용자를 위한 대안 방법
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-slate-200 hover:border-blue-300 transition-colors bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h5 className="text-lg text-slate-900 mb-2">전통적 방법 (pip)</h5>
                      <div className="bg-slate-900 rounded-lg p-4 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-400 text-sm">명령어</span>
                          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy("pip install selvage")}>
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <code className="text-blue-400 font-mono text-sm block">
                          pip install selvage
                        </code>
                      </div>
                      <p className="text-sm text-slate-600 bg-slate-100 px-3 py-2 rounded-md">
                        ⚠️ 일부 환경에서 externally-managed-environment 에러 발생 가능
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Selvage 설정하기 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Settings className="w-6 h-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-slate-900">Selvage 설정하기</h4>
            </div>
            <div className="space-y-4">
              {configExamples.map((example, index) => (
                <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h5 className="text-lg text-slate-900 mb-2">{example.title}</h5>
                        <div className="bg-slate-900 rounded-lg p-4 mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-400 text-sm">명령어</span>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy(example.code)}>
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                          <code className="text-blue-400 font-mono text-sm block">
                            {example.code}
                          </code>
                        </div>
                        {example.examples && (
                          <p className="text-sm text-slate-600 bg-slate-100 px-3 py-2 rounded-md">
                            {example.examples}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 코드 리뷰하기 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-blue-600" />
              <h4 className="text-xl font-semibold text-slate-900">코드 리뷰하기</h4>
            </div>
            
            <div className="bg-slate-900 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm">기본 명령어</span>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy("selvage review [OPTIONS]")}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <code className="text-green-400 font-mono text-lg block">
                selvage review [OPTIONS]
              </code>
            </div>

            {/* 주요 옵션 */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <List className="w-5 h-5 text-blue-600" />
                <h5 className="text-lg font-semibold text-slate-900">주요 옵션</h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reviewOptions.map((option, index) => (
                  <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors bg-white">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <code className="text-blue-600 font-mono text-sm font-semibold block">
                          {option.option}
                        </code>
                        <p className="text-slate-600 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 사용 예시 */}
            <div>
              <h5 className="text-lg font-semibold text-slate-900 mb-6">사용 예시</h5>
              <div className="space-y-4">
                {usageExamples.map((example, index) => (
                  <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h6 className="text-lg text-slate-900 mb-2">{example.title}</h6>
                          <div className="bg-slate-900 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-slate-400 text-sm">명령어</span>
                              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy(example.code)}>
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

          {/* 결과 확인하기 */}
          <div>
            <h4 className="text-xl font-semibold text-slate-900 mb-6">{t('quickStart.results.title')}</h4>
            <p className="text-slate-600 mb-6">
              {t('quickStart.results.descriptionPrefix')}
              <strong>{t('quickStart.results.descriptionBold')}</strong>
              {t('quickStart.results.descriptionSuffix')}
            </p>
            <p className="text-slate-600 mb-8">
              {t('quickStart.results.additionalInfoPrefix')}
              <strong>{t('quickStart.results.additionalInfoBold')}</strong>
              {t('quickStart.results.additionalInfoSuffix')}
            </p>
            
            <div className="space-y-4">
              {resultExamples.map((example, index) => (
                <Card key={index} className="border border-slate-200 hover:border-blue-300 transition-colors bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h5 className="text-lg text-slate-900 mb-2">{example.title}</h5>
                        <div className="bg-slate-900 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-400 text-sm">명령어</span>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy(example.code)}>
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
      </div>
    </section>
  );
}