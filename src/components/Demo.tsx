import { Badge } from "./ui/badge";
import { Play, Terminal, Zap } from "lucide-react";
import { useTranslation } from 'react-i18next';
import demoVideo from "../assets/demo.mp4";

export function Demo() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6 text-slate-900">
            <span className="text-blue-600">{t('demo.titlePrefix')}</span>{t('demo.titleHighlight')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo video container */}
          <div className="relative">
            <video 
              src={demoVideo}
              width="100%" 
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-2xl shadow-2xl"
              poster=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}