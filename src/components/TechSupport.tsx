import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Code, 
  Brain, 
  FileCode,
  Star,
  Zap,
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function SmartContext() {
  const astLanguages = [
    "Python", "JavaScript", "TypeScript", "Java", "Kotlin"
  ];

  const allLanguages = [
    "Go", "Ruby", "PHP", "C#", "C/C++", "Rust", "Swift", "Dart",
    "HTML", "CSS", "Markdown", "JSON", "YAML", "XML", 
    "Shell", "SQL", "Dockerfile"
  ];

  const contextStrategies = [
    {
      icon: <Target className="w-5 h-5 text-green-600" />,
      title: "작은 변경사항",
      description: "Smart Context로 빠르고 정확한 분석"
    },
    {
      icon: <FileCode className="w-5 h-5 text-blue-600" />,
      title: "작은 파일",
      description: "전체 파일 분석으로 완전한 맥락 파악"
    },
    {
      icon: <Code className="w-5 h-5 text-purple-600" />,
      title: "큰 파일의 부분 수정",
      description: "Smart Context로 관련 코드만 집중 분석"
    },
    {
      icon: <Brain className="w-5 h-5 text-orange-600" />,
      title: "큰 파일의 대규모 변경",
      description: "전체 파일 분석으로 종합적 검토"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-blue-600">Smart Context</span> 추출
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tree-sitter 기반 AST 분석으로 필요한 코드만 정확히 추출하여 비용을 절감하고 리뷰 품질을 향상시킵니다
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {/* 소개 카드 */}
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <p className="text-blue-900 text-lg leading-relaxed">
                  Selvage는 <strong>Tree-sitter 기반 AST 분석</strong>을 통해 변경된 라인과 관련된 코드 블록만 정확히 추출하여, 
                  <strong className="text-blue-700"> 비용 효율성과 리뷰 품질을 동시에 보장</strong>합니다.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Smart Context 작동 방식 */}
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>Smart Context 작동 방식</span>
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-slate-900 text-lg">정밀 추출</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">변경된 라인이 속한 최소 함수/클래스 블록 + 관련 의존성(import 등)만 추출</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="font-semibold text-slate-900 text-lg">비용 최적화</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">전체 파일 대신 필요한 컨텍스트만 전송하여 토큰 사용량 대폭 절감</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="font-semibold text-slate-900 text-lg">품질 보장</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">AST 기반 정확한 코드 구조 이해로 높은 리뷰 정확도 유지</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Context 자동 적용 */}
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center space-x-3">
                <Brain className="w-6 h-6 text-blue-600" />
                <span>Smart Context 자동 적용</span>
              </h4>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-6">
                <p className="text-slate-800 mb-6 text-lg leading-relaxed">
                  Selvage는 파일 크기와 변경 범위를 분석하여 <strong>가장 효율적인 리뷰 방식을 자동 선택</strong>합니다:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {contextStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200 hover:shadow-sm transition-shadow">
                      {strategy.icon}
                      <div>
                        <div className="font-semibold text-slate-900 text-lg mb-2">{strategy.title}</div>
                        <div className="text-base text-slate-600 flex items-center space-x-2 leading-relaxed">
                          <ArrowRight className="w-4 h-4 flex-shrink-0" />
                          <span>{strategy.description}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <p className="text-green-800 flex items-center space-x-3 text-lg leading-relaxed">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span><strong>자동 최적화</strong>: 별도 설정 없이 상황에 맞는 최적의 분석 방식이 자동 적용됩니다.</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 언어 지원 */}
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-6 flex items-center space-x-3">
                  <Code className="w-6 h-6 text-green-600" />
                  <span>지원 언어 (AST 기반)</span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {astLanguages.map((language, index) => (
                    <Badge key={index} variant="default" className="bg-green-100 text-green-800 border-green-300 text-sm py-2 px-3">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="h-9"></div>
              
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-6 flex items-center space-x-3">
                  <FileCode className="w-6 h-6 text-blue-600" />
                  <span>전체 언어 지원</span>
                </h4>
                <div className="flex flex-wrap gap-3">
                  {allLanguages.map((language, index) => (
                    <Badge key={index} variant="outline" className="border-slate-300 text-slate-700 text-sm py-2 px-3">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 마무리 메시지 */}
          <Card className="border-blue-200">
            <CardContent className="p-8">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <p className="text-slate-800 text-lg leading-relaxed">
                  <strong className="text-blue-700">범용 컨텍스트 추출 방식</strong>으로 모든 언어에서 <strong>우수한 코드 리뷰 품질</strong>을 제공합니다.<br />
                  AST 기반 지원 언어는 지속적으로 확장하고 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function AIModels() {
  const aiModels = [
    {
      category: "OpenAI 모델",
      subtitle: "(OpenRouter 또는 OpenAI API 키)",
      models: [
        { name: "gpt-5", description: "최신 고급 추론 모델 (400K 컨텍스트)", recommended: false, provider: undefined },
        { name: "gpt-5-high", description: "높은 정확도의 추론 모델 (400K 컨텍스트)", recommended: true, provider: undefined },
        { name: "gpt-5-mini", description: "경량화된 빠른 응답 모델 (400K 컨텍스트)", recommended: false, provider: undefined }
      ]
    },
    {
      category: "Anthropic 모델",
      subtitle: "(OpenRouter 또는 Anthropic API 키)",
      models: [
        { name: "claude-sonnet-4", description: "하이브리드 추론 모델로 고급 코딩 최적화 (200K 컨텍스트)", recommended: false, provider: undefined },
        { name: "claude-sonnet-4-thinking", description: "확장 사고 프로세스 지원 (200K 컨텍스트)", recommended: true, provider: undefined }
      ]
    },
    {
      category: "Google 모델",
      subtitle: "(OpenRouter 또는 Google API 키)",
      models: [
        { name: "gemini-2.5-pro", description: "대용량 컨텍스트 및 고급 추론 (1M+ 토큰)", recommended: false, provider: undefined },
        { name: "gemini-2.5-flash", description: "응답 속도와 비용 효율성 최적화 (1M+ 토큰)", recommended: false, provider: undefined }
      ]
    },
    {
      category: "OpenRouter 제공 모델",
      subtitle: "(OpenRouter API 키만 필요)",
      special: true,
      models: [
        { name: "qwen3-coder", description: "480B 파라미터 MoE 코딩 특화 모델 (1M+ 토큰)", provider: "Qwen", recommended: true },
        { name: "kimi-k2", description: "1T 파라미터 MoE 대용량 추론 모델 (128K 토큰)", provider: "Moonshot AI", recommended: false }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            최신 <span className="text-blue-600">AI 모델</span> 지원
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            OpenRouter 통합으로 다양한 최신 AI 모델을 하나의 API 키로 간편하게 사용하세요
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl text-blue-900 mb-2">OpenRouter API 키 하나로 아래 모든 모델을 통합 관리하세요!</h3>
                  <p className="text-blue-800">
                    OpenRouter를 통해 하나의 API 키로 모든 AI 모델에 접근할 수 있습니다. 개별 Provider API 키도 지원합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {aiModels.map((provider, index) => (
              <Card key={index} className={provider.special ? "border-yellow-200 bg-yellow-50" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-5 h-5 text-blue-600" />
                      <span>{provider.category}</span>
                      {provider.special && <Badge className="bg-yellow-200 text-yellow-800 border-yellow-300">특별 제공</Badge>}
                    </div>
                    <span className="text-sm text-slate-500 font-normal">{provider.subtitle}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {provider.models.map((model, modelIndex) => (
                      <div key={modelIndex} className="flex items-start justify-between p-4 bg-white rounded-lg border border-slate-200">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg text-slate-900 font-mono">{model.name}</h4>
                            {model.provider && (
                              <Badge variant="outline" className="text-xs">
                                {model.provider}
                              </Badge>
                            )}
                            {model.recommended && (
                              <Badge variant="default" className="bg-green-100 text-green-700 border-green-200">
                                <Star className="w-3 h-3 mr-1 fill-current" />
                                추천
                              </Badge>
                            )}
                          </div>
                          <p className="text-slate-600">{model.description}</p>
                        </div>
                      </div>
                    ))}
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

// 기존 TechSupport 컴포넌트는 두 섹션을 모두 포함하는 래퍼로 유지
export function TechSupport() {
  return (
    <>
      <SmartContext />
      <AIModels />
    </>
  );
}