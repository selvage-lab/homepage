import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const features = [
    {
      icon: Bot,
      title: t('features.items.aiModels.title'),
      description: t('features.items.aiModels.description'),
      badge: t('features.items.aiModels.badge')
    },
    {
      icon: GitBranch,
      title: t('features.items.gitWorkflow.title'),
      description: t('features.items.gitWorkflow.description'),
      badge: t('features.items.gitWorkflow.badge')
    },
    {
      icon: Bug,
      title: t('features.items.codeReview.title'),
      description: t('features.items.codeReview.description'),
      badge: t('features.items.codeReview.badge')
    },
    {
      icon: Target,
      title: t('features.items.smartContext.title'),
      description: t('features.items.smartContext.description'),
      badge: t('features.items.smartContext.badge')
    },
    {
      icon: RotateCcw,
      title: t('features.items.largeContext.title'),
      description: t('features.items.largeContext.description'),
      badge: t('features.items.largeContext.badge')
    },
    {
      icon: BookOpen,
      title: t('features.items.opensource.title'),
      description: t('features.items.opensource.description'),
      badge: t('features.items.opensource.badge')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            {t('features.titlePrefix')}<span className="text-blue-600">{t('features.titleHighlight')}</span>{t('features.titleSuffix')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
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
      </div>
    </section>
  );
}