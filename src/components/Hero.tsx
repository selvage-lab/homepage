import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

type TabKey = 'plugin' | 'mcp' | 'cli';

export function Hero() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabKey>('plugin');

  const tabs: { key: TabKey; label: string; accent: string }[] = [
    { key: 'plugin', label: t('hero.tabs.plugin'), accent: 'from-emerald-400 to-green-500' },
    { key: 'mcp', label: t('hero.tabs.mcp'), accent: 'from-purple-400 to-indigo-500' },
    { key: 'cli', label: t('hero.tabs.cli'), accent: 'from-blue-400 to-cyan-500' },
  ];

  const codeLines: Record<TabKey, string[]> = {
    plugin: [
      t('hero.pluginCode.line1'),
      t('hero.pluginCode.line2'),
      t('hero.pluginCode.line3'),
    ],
    mcp: [
      t('hero.mcpCode.line1'),
      t('hero.mcpCode.line2'),
      t('hero.mcpCode.line3'),
    ],
    cli: [
      t('hero.cliCode.line1'),
      t('hero.cliCode.line2'),
      t('hero.cliCode.line3'),
    ],
  };

  const prefixSymbol: Record<TabKey, string> = {
    plugin: '/',
    mcp: '$',
    cli: '$',
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Primary background with denim-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:50px_50px] opacity-30"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 text-white leading-tight font-bold">
          {t('hero.titlePrefix')}<span className="text-blue-300">{t('hero.titleHighlight')}</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="space-y-2 text-lg md:text-xl lg:text-2xl xl:text-3xl text-blue-100 leading-relaxed font-light">
            <p>{t('hero.subtitle1')}</p>
            <p>{t('hero.subtitle2')}</p>
            <p>{t('hero.subtitle3')}</p>
            <p>{t('hero.subtitle4')}</p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-0">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  px-6 py-3 text-base md:text-lg font-medium rounded-t-xl transition-all duration-300
                  ${activeTab === tab.key
                    ? 'bg-slate-800/80 text-white border-t-2 border-x border-blue-400/50 border-slate-700/50'
                    : 'text-blue-200/60 hover:text-blue-100 hover:bg-slate-800/30'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-blue-300/20 rounded-b-xl rounded-tr-xl p-6 md:p-8 shadow-2xl transition-all duration-300">
            <div className="text-left space-y-3 font-mono text-base md:text-lg">
              {codeLines[activeTab].map((line, i) => (
                <div key={`${activeTab}-${i}`} className="text-blue-300 flex items-start animate-fadeIn">
                  <span className="text-blue-500 text-xl mr-3 flex-shrink-0">
                    {i === 0 ? prefixSymbol[activeTab] : (line.startsWith('#') || line.startsWith('"') || line.startsWith('>')) ? '' : prefixSymbol[activeTab]}
                  </span>
                  <span className={line.startsWith('#') || line.startsWith('>') ? 'text-slate-400' : line.includes('←') || line.includes('That\'s it') || line.includes('끝') ? 'text-emerald-400' : ''}>
                    {line}
                  </span>
                </div>
              ))}
            </div>

            {/* API key note for plugin tab */}
            {activeTab === 'plugin' && (
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-emerald-400/80 text-sm md:text-base flex items-center gap-2">
                  <span>💡</span>
                  <span>{t('quickStart.plugin.noApiKeyNote')}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}