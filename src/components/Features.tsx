import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Bot, 
  GitBranch, 
  Bug, 
  Target, 
  RotateCcw, 
  BookOpen,
  Cpu,
  Shield
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Bot,
      title: "다양한 AI 모델 지원",
      description: "OpenAI GPT-5, Anthropic Claude Sonnet-4, Google Gemini 등 최신 LLM 모델 활용",
      badge: "최신 AI"
    },
    {
      icon: GitBranch,
      title: "Git 워크플로우 통합",
      description: "staged, unstaged, 특정 커밋/브랜치 간 변경사항 분석 지원",
      badge: "Git 친화적"
    },
    {
      icon: Bug,
      title: "포괄적 코드 검토",
      description: "버그 및 논리 오류 탐지, 코드 품질 및 가독성 향상 제안",
      badge: "버그 탐지"
    },
    {
      icon: Target,
      title: "최적화된 컨텍스트 분석",
      description: "Tree-sitter 기반 AST 분석을 통해 상황에 따라 최적화된 컨텍스트 제공",
      badge: "스마트 분석"
    },
    {
      icon: RotateCcw,
      title: "자동 멀티턴 처리",
      description: "컨텍스트 제한 초과 시 프롬프트를 자동 분할하여 안정적인 대용량 코드 리뷰 지원",
      badge: "대용량 지원"
    },
    {
      icon: BookOpen,
      title: "오픈소스",
      description: "Apache-2.0 라이선스로 자유롭게 사용 및 수정 가능",
      badge: "무료"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-blue-600">Selvage</span>가 특별한 이유
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            최신 AI 기술과 개발자 친화적인 워크플로우가 만나 완전히 새로운 코드 리뷰 경험을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-slate-50 to-blue-50/30">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Security note */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg text-amber-900 mb-2">보안 및 개인정보 보호</h3>
                  <p className="text-amber-800">
                    Selvage는 개인정보 수집이나 민감한 데이터 보안을 위해 설계되지 않았습니다. 
                    코드 분석 시 민감한 정보는 제외하고 사용해 주세요.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}