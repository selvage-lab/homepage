import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
      title: t('techSupport.smartContext.autoApplication.strategies.smallChanges.title'),
      description: t('techSupport.smartContext.autoApplication.strategies.smallChanges.description')
    },
    {
      title: t('techSupport.smartContext.autoApplication.strategies.smallFiles.title'),
      description: t('techSupport.smartContext.autoApplication.strategies.smallFiles.description')
    },
    {
      title: t('techSupport.smartContext.autoApplication.strategies.largeFilesPartial.title'),
      description: t('techSupport.smartContext.autoApplication.strategies.largeFilesPartial.description')
    },
    {
      title: t('techSupport.smartContext.autoApplication.strategies.largeFilesLarge.title'),
      description: t('techSupport.smartContext.autoApplication.strategies.largeFilesLarge.description')
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-blue-600">{t('techSupport.smartContext.titlePrefix')}</span>{t('techSupport.smartContext.titleSuffix')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* 소개 카드 */}
          <div className="p-6 bg-blue-50 rounded-lg mb-10">
                <p className="text-blue-900 text-lg leading-relaxed">
                  {t('techSupport.smartContext.introPrefix')}
                  <strong>{t('techSupport.smartContext.introBold1')}</strong>
                  {t('techSupport.smartContext.introMiddle')}
                  <strong>{t('techSupport.smartContext.introBold2')}</strong>
                  {t('techSupport.smartContext.introSuffix')}
                </p>
          </div>

          {/* Smart Context 작동 방식 */}
          <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 mb-10">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>{t('techSupport.smartContext.howItWorks.title')}</span>
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#10b981' }}></div>
                    <span className="font-semibold text-slate-900 text-lg">{t('techSupport.smartContext.howItWorks.preciseExtraction.title')}</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">{t('techSupport.smartContext.howItWorks.preciseExtraction.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#3b82f6' }}></div>
                    <span className="font-semibold text-slate-900 text-lg">{t('techSupport.smartContext.howItWorks.costOptimization.title')}</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">{t('techSupport.smartContext.howItWorks.costOptimization.description')}</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#a855f7' }}></div>
                    <span className="font-semibold text-slate-900 text-lg">{t('techSupport.smartContext.howItWorks.qualityAssurance.title')}</span>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed">{t('techSupport.smartContext.howItWorks.qualityAssurance.description')}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Context 자동 적용 */}
          <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 mb-10">
            <CardContent className="p-8">
              <h4 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center space-x-3">
                <Brain className="w-6 h-6 text-blue-600" />
                <span>{t('techSupport.smartContext.autoApplication.title')}</span>
              </h4>
              <div className="px-6 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-2">
                <p className="text-slate-800 mb-6 text-lg leading-relaxed">
                  {t('techSupport.smartContext.autoApplication.descriptionPrefix')}
                  <strong>{t('techSupport.smartContext.autoApplication.descriptionBold')}</strong>
                  {t('techSupport.smartContext.autoApplication.descriptionSuffix')}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {contextStrategies.map((strategy, index) => {
                    const titleColors = [
                      '#059669', // green-600
                      '#2563eb', // blue-600
                      '#9333ea', // purple-600
                      '#ea580c'  // orange-600
                    ];
                    return (
                      <div key={index} className="p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all duration-200">
                        <div 
                          className="font-bold text-xl mb-3"
                          style={{ color: titleColors[index] }}
                        >
                          {strategy.title}
                        </div>
                        <div className="text-lg text-slate-600 leading-relaxed">
                          {strategy.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="px-6 py-4 bg-green-50 rounded-lg">
                <p className="text-green-800 flex items-center space-x-3 text-lg leading-relaxed">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    <strong>{t('techSupport.smartContext.autoApplication.autoOptimizationBold')}</strong>
                    {t('techSupport.smartContext.autoApplication.autoOptimizationSuffix')}
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 언어 지원 */}
          <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-8">
              <div>
                <h4 className="text-xl font-semibold text-slate-900 mb-6 flex items-center space-x-3">
                  <Code className="w-6 h-6 text-green-600" />
                  <span>{t('techSupport.smartContext.languageSupport.smartContextTitle')}</span>
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
                <h4 className="text-xl font-semibold text-slate-900 mb-3 flex items-center space-x-3">
                  <FileCode className="w-6 h-6 text-blue-600" />
                  <span>{t('techSupport.smartContext.languageSupport.generalContextTitle')}</span>
                </h4>
                <p className="text-slate-600 text-sm mb-4">{t('techSupport.smartContext.languageSupport.generalContextSubtitle')}</p>
                <div className="flex flex-wrap gap-3">
                  {["Go", "Ruby", "PHP", "C#", "C/C++", "Rust", "Swift", "Dart"].map((language, index) => (
                    <Badge key={index} variant="outline" className="border-slate-300 text-slate-700 text-sm py-2 px-3 bg-blue-100">
                      {language}
                    </Badge>
                  ))}
                  <Badge variant="default" style={{ backgroundColor: '#f97316', color: 'white', borderColor: '#f97316' }} className="text-sm py-2 px-3">
                    + More
                  </Badge>
                </div>
              </div>

              {/* 마무리 메시지 서브섹션 */}
              <div className="mt-8 pt-6 border-slate-200">
                  <p className="text-slate-800 text-lg leading-relaxed">
                    <strong className="text-blue-700">{t('techSupport.smartContext.languageSupport.conclusionBold1')}</strong>
                    {t('techSupport.smartContext.languageSupport.conclusionMiddle')}
                    <strong>{t('techSupport.smartContext.languageSupport.conclusionBold2')}</strong>
                    {t('techSupport.smartContext.languageSupport.conclusionMiddle2')}
                    <strong>{t('techSupport.smartContext.languageSupport.conclusionBold3')}</strong>
                    {t('techSupport.smartContext.languageSupport.conclusionSuffix')}
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
  const { t } = useTranslation();

  const aiModels = [
    {
      category: t('techSupport.aiModels.categories.openai.title'),
      subtitle: t('techSupport.aiModels.categories.openai.subtitle'),
      models: [
        { name: "gpt-5-high", description: t('techSupport.aiModels.models.gpt5High'), recommended: true, provider: undefined },
        { name: "gpt-5", description: t('techSupport.aiModels.models.gpt5'), recommended: false, provider: undefined },
        { name: "gpt-5-mini", description: t('techSupport.aiModels.models.gpt5Mini'), recommended: false, provider: undefined }
      ]
    },
    {
      category: t('techSupport.aiModels.categories.anthropic.title'),
      subtitle: t('techSupport.aiModels.categories.anthropic.subtitle'),
      models: [
        { name: "claude-sonnet-4-thinking", description: t('techSupport.aiModels.models.claudeSonnet4Thinking'), recommended: true, provider: undefined },
        { name: "claude-sonnet-4", description: t('techSupport.aiModels.models.claudeSonnet4'), recommended: false, provider: undefined },
      ]
    },
    {
      category: t('techSupport.aiModels.categories.google.title'),
      subtitle: t('techSupport.aiModels.categories.google.subtitle'),
      models: [
        { name: "gemini-2.5-pro", description: t('techSupport.aiModels.models.gemini25Pro'), recommended: false, provider: undefined },
        { name: "gemini-2.5-flash", description: t('techSupport.aiModels.models.gemini25Flash'), recommended: true, provider: undefined },
      ]
    },
    {
      category: t('techSupport.aiModels.categories.openrouter.title'),
      subtitle: t('techSupport.aiModels.categories.openrouter.subtitle'),
      special: true,
      models: [
        { name: "qwen3-coder", description: t('techSupport.aiModels.models.qwen3Coder'), provider: "Qwen", recommended: true },
        { name: "kimi-k2", description: t('techSupport.aiModels.models.kimiK2'), provider: "Moonshot AI", recommended: false }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            {t('techSupport.aiModels.titlePrefix')}<span className="text-blue-600">{t('techSupport.aiModels.titleHighlight')}</span>{t('techSupport.aiModels.titleSuffix')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('techSupport.aiModels.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Zap className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl text-blue-900 mb-2">{t('techSupport.aiModels.openRouterInfo.title')}</h3>
                  <p className="text-blue-800">
                    {t('techSupport.aiModels.openRouterInfo.description')}
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
                                {t('techSupport.aiModels.recommended')}
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