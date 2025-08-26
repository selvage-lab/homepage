import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Code, 
  Brain, 
  FileCode,
  Star,
  Zap,
  Globe
} from "lucide-react";

export function TechSupport() {
  const languages = [
    "Python", "JavaScript", "TypeScript", "Java", "Kotlin", "Go", 
    "Ruby", "PHP", "C#", "C/C++", "HTML", "CSS/SCSS", 
    "Shell", "SQL", "Markdown", "JSON", "YAML", "XML"
  ];

  const aiModels = [
    {
      category: "OpenAI",
      models: [
        { name: "GPT-5", description: "최신 고급 추론 모델 (400K 컨텍스트)", recommended: false },
        { name: "GPT-5 High", description: "높은 정확도의 추론 모델 (400K 컨텍스트)", recommended: true },
        { name: "GPT-5 Mini", description: "경량화된 빠른 응답 모델 (400K 컨텍스트)", recommended: false }
      ]
    },
    {
      category: "Anthropic",
      models: [
        { name: "Claude Sonnet-4", description: "하이브리드 추론 모델로 고급 코딩 최적화 (200K 컨텍스트)", recommended: false },
        { name: "Claude Sonnet-4 Thinking", description: "확장 사고 프로세스 지원 (200K 컨텍스트)", recommended: true }
      ]
    },
    {
      category: "Google",
      models: [
        { name: "Gemini 2.5 Pro", description: "대용량 컨텍스트 및 고급 추론 (1M+ 토큰)", recommended: false },
        { name: "Gemini 2.5 Flash", description: "응답 속도와 비용 효율성 최적화 (1M+ 토큰)", recommended: false }
      ]
    },
    {
      category: "OpenRouter 전용",
      models: [
        { name: "Qwen3 Coder", description: "480B 파라미터 MoE 코딩 특화 모델 (1M+ 토큰)", recommended: true },
        { name: "Kimi K2", description: "1T 파라미터 MoE 대용량 추론 모델 (128K 토큰)", recommended: false }
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-blue-600">광범위한</span> 언어 및 모델 지원
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            20개 이상의 프로그래밍 언어와 최신 AI 모델들을 지원하여 모든 개발 환경에서 사용 가능합니다
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="languages" className="flex items-center space-x-2">
                <FileCode className="w-4 h-4" />
                <span>지원 언어</span>
              </TabsTrigger>
              <TabsTrigger value="models" className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>AI 모델</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="w-6 h-6 text-blue-600" />
                    <span>지원하는 프로그래밍 언어</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {languages.map((language, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-700">{language}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800">
                      <strong>Tree-sitter 기반 AST 분석</strong>으로 각 언어의 구조를 정확히 파악하여 
                      컨텍스트에 맞는 최적화된 코드 리뷰를 제공합니다.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="models" className="space-y-6">
              {aiModels.map((provider, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Brain className="w-6 h-6 text-blue-600" />
                      <span>{provider.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {provider.models.map((model, modelIndex) => (
                        <div key={modelIndex} className="flex items-start justify-between p-4 bg-white rounded-lg border border-slate-200">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-lg text-slate-900">{model.name}</h4>
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

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg text-blue-900 mb-2">OpenRouter API 키 하나로 모든 모델 통합 관리</h3>
                      <p className="text-blue-800">
                        OpenRouter를 통해 하나의 API 키로 모든 AI 모델에 접근할 수 있습니다. 
                        개별 Provider API 키도 지원합니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}