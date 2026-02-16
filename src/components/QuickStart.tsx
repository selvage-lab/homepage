import React, { useState } from "react";
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
  Code,
  Plug,
  Server,
  Sparkles,
  Zap,
  Info
} from "lucide-react";

type TrackKey = 'plugin' | 'mcp' | 'cli';
type McpSubTab = 'cursor' | 'claudeCode';

export function QuickStart() {
  const { t } = useTranslation();
  const [activeTrack, setActiveTrack] = useState<TrackKey>('plugin');
  const [mcpSubTab, setMcpSubTab] = useState<McpSubTab>('claudeCode');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Copy failed:', err);
    });
  };

  const tracks: { key: TrackKey; label: string; icon: React.ElementType }[] = [
    { key: 'plugin', label: t('quickStart.tabs.plugin'), icon: Plug },
    { key: 'mcp', label: t('quickStart.tabs.mcp'), icon: Server },
    { key: 'cli', label: t('quickStart.tabs.cli'), icon: Terminal },
  ];

  return (
    <section id="quick-start" className="py-20 bg-slate-50 relative">
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

        {/* Track switcher */}
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-2 mb-8">
            {tracks.map((track) => {
              const IconComp = track.icon;
              return (
                <button
                  key={track.key}
                  onClick={() => setActiveTrack(track.key)}
                  className={`
                    flex items-center gap-2 px-5 py-3 rounded-xl text-base md:text-lg font-medium transition-all duration-300
                    ${activeTrack === track.key
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                    }
                  `}
                >
                  <IconComp className="w-5 h-5" />
                  {track.label}
                </button>
              );
            })}
          </div>

          {/* Plugin Track */}
          {activeTrack === 'plugin' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">{t('quickStart.plugin.title')}</h3>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">{t('quickStart.plugin.badge')}</Badge>
                </div>
                <p className="text-lg text-slate-600">{t('quickStart.plugin.subtitle')}</p>
              </div>

              {/* Step 1: Install */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">{t('quickStart.plugin.steps.install.title')}</CardTitle>
                      <p className="text-slate-600 text-sm">{t('quickStart.plugin.steps.install.description')}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded-lg p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-slate-400 text-sm">{t('quickStart.command')}</span>
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy(`${t('quickStart.plugin.steps.install.code1')}\n${t('quickStart.plugin.steps.install.code2')}`)}>
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <code className="text-blue-400 font-mono text-sm block">{t('quickStart.plugin.steps.install.code1')}</code>
                      <code className="text-blue-400 font-mono text-sm block">{t('quickStart.plugin.steps.install.code2')}</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Review */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <CardTitle className="text-xl text-slate-900">{t('quickStart.plugin.steps.review.title')}</CardTitle>
                      <p className="text-slate-600 text-sm">{t('quickStart.plugin.steps.review.description')}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(['unstaged', 'staged', 'branch', 'commit'] as const).map((key) => (
                      <div key={key} className="bg-slate-900 rounded-lg p-4 flex items-start justify-between">
                        <div>
                          <p className="text-slate-400 text-xs mb-2">{t(`quickStart.plugin.reviewExamples.${key}`)}</p>
                          <code className="text-emerald-400 font-mono text-sm">{t(`quickStart.plugin.reviewCommands.${key}`)}</code>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0 flex-shrink-0" onClick={() => handleCopy(t(`quickStart.plugin.reviewCommands.${key}`))}>
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* No API key note */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                <p className="text-emerald-800 text-base leading-relaxed">
                  {t('quickStart.plugin.noApiKeyNote')}
                </p>
              </div>
            </div>
          )}

          {/* MCP Track */}
          {activeTrack === 'mcp' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">{t('quickStart.mcp.title')}</h3>
                <p className="text-lg text-slate-600">{t('quickStart.mcp.subtitle')}</p>
              </div>

              {/* Sub tabs for Cursor / Claude Code */}
              <div className="flex justify-center gap-2 mb-6">
                {(['claudeCode', 'cursor'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setMcpSubTab(tab)}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${mcpSubTab === tab
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }
                    `}
                  >
                    {t(`quickStart.mcp.tabs.${tab}`)}
                  </button>
                ))}
              </div>

              {/* Claude Code MCP */}
              {mcpSubTab === 'claudeCode' && (
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      <Server className="w-5 h-5 text-blue-600" />
                      {t('quickStart.mcp.claudeCode.title')}
                    </CardTitle>
                    <p className="text-slate-600 text-sm">{t('quickStart.mcp.claudeCode.description')}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-slate-500 text-xs mb-2">{t('quickStart.mcp.claudeCode.withEnv')}</p>
                      <div className="bg-slate-900 rounded-lg p-4 flex items-center justify-between">
                        <code className="text-blue-400 font-mono text-sm">claude mcp add selvage -- uvx selvage mcp</code>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy('claude mcp add selvage -- uvx selvage mcp')}>
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs mb-2">{t('quickStart.mcp.claudeCode.withDirectKey')}</p>
                      <div className="bg-slate-900 rounded-lg p-4 flex items-center justify-between">
                        <code className="text-blue-400 font-mono text-sm break-all">claude mcp add selvage -e OPENROUTER_API_KEY=your_key -- uvx selvage mcp</code>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0 flex-shrink-0" onClick={() => handleCopy('claude mcp add selvage -e OPENROUTER_API_KEY=your_key -- uvx selvage mcp')}>
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Cursor MCP */}
              {mcpSubTab === 'cursor' && (
                <Card className="border-0 shadow-lg bg-white">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                      <Server className="w-5 h-5 text-blue-600" />
                      {t('quickStart.mcp.cursor.title')}
                    </CardTitle>
                    <p className="text-slate-600 text-sm">{t('quickStart.mcp.cursor.description')}</p>
                    <p className="text-slate-400 text-xs font-mono mt-1">{t('quickStart.mcp.cursor.configPath')}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-slate-400 text-sm">mcp.json</span>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy('{\n  "mcpServers": {\n    "selvage": {\n      "command": "uvx",\n      "args": ["selvage", "mcp"]\n    }\n  }\n}')}>
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <pre className="text-blue-400 font-mono text-sm whitespace-pre">{`{
  "mcpServers": {
    "selvage": {
      "command": "uvx",
      "args": ["selvage", "mcp"]
    }
  }
}`}</pre>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Usage examples */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    {t('quickStart.mcp.usage.title')}
                  </CardTitle>
                  <p className="text-slate-600 text-sm">{t('quickStart.mcp.usage.description')}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-slate-900 rounded-lg p-4">
                        <code className="text-emerald-400 font-mono text-sm">
                          {t(`quickStart.mcp.usage.example${i}`)}
                        </code>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Agent-delegated note */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-900 font-semibold mb-1">{t('quickStart.mcp.agentDelegated.title')}</p>
                  <p className="text-blue-800 text-sm leading-relaxed">{t('quickStart.mcp.agentDelegated.description')}</p>
                </div>
              </div>
            </div>
          )}

          {/* CLI Track */}
          {activeTrack === 'cli' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">{t('quickStart.cli.title')}</h3>
                <p className="text-lg text-slate-600">{t('quickStart.cli.subtitle')}</p>
              </div>

              {/* Installation steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Download,
                    title: t('quickStart.cli.steps.install.title'),
                    description: t('quickStart.cli.steps.install.description'),
                    code: "uv tool install selvage",
                    note: t('quickStart.cli.steps.install.note')
                  },
                  {
                    icon: Key,
                    title: t('quickStart.cli.steps.apiKey.title'),
                    description: t('quickStart.cli.steps.apiKey.description'),
                    code: 'export OPENROUTER_API_KEY="your_key"',
                    note: t('quickStart.cli.steps.apiKey.note')
                  },
                  {
                    icon: Play,
                    title: t('quickStart.cli.steps.start.title'),
                    description: t('quickStart.cli.steps.start.description'),
                    code: "selvage review --model claude-sonnet-4-thinking",
                    note: t('quickStart.cli.steps.start.note')
                  }
                ].map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <Card key={index} className="relative border-0 shadow-lg h-full flex flex-col bg-white">
                      {index < 2 && (
                        <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                          <ArrowRight className="w-6 h-6 text-blue-400" />
                        </div>
                      )}
                      <CardHeader className="text-center pb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-lg text-slate-900 mb-1">{step.title}</CardTitle>
                        <p className="text-sm text-slate-600">{step.description}</p>
                        <p className="text-xs text-slate-400 mt-1">{step.note}</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="bg-slate-900 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-400 text-xs">{t('quickStart.command')}</span>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-5 w-5 p-0" onClick={() => handleCopy(step.code)}>
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                          <code className="text-green-400 font-mono text-xs block break-all">{step.code}</code>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Usage examples */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    {t('quickStart.cli.codeReview.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(['currentDir', 'preCommit', 'prReview', 'fastModel'] as const).map((key) => {
                      const commands: Record<string, string> = {
                        currentDir: 'selvage review',
                        preCommit: 'selvage review --staged',
                        prReview: 'selvage review --target-branch develop',
                        fastModel: 'selvage review --model gemini-3-flash'
                      };
                      return (
                        <div key={key} className="bg-slate-900 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-slate-400 text-xs">{t(`quickStart.cli.codeReview.examples.${key}`)}</p>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-5 w-5 p-0" onClick={() => handleCopy(commands[key])}>
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                          <code className="text-blue-400 font-mono text-sm">{commands[key]}</code>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-slate-900">{t('quickStart.cli.results.title')}</CardTitle>
                  <p className="text-slate-600 text-sm">{t('quickStart.cli.results.description')}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs mb-2">{t('quickStart.cli.results.webUi')}</p>
                      <code className="text-blue-400 font-mono text-sm">{t('quickStart.cli.results.webUiCode')}</code>
                    </div>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white h-6 w-6 p-0" onClick={() => handleCopy('selvage view')}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}