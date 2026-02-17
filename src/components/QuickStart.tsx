import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useTranslation } from 'react-i18next';
import {
  Copy,
  Info
} from "lucide-react";

type TrackKey = 'plugin' | 'mcp' | 'cli';
type McpSubTab = 'cursor' | 'claudeCode';

// Tokyo Night theme colors
const tc = {
  border: '#888',
  glow: '0 8px 40px rgba(59,130,246,0.15), 0 4px 12px rgba(0,0,0,0.3)',
  titleBar: '#e0ddd9',
  titleBarBorder: '#bbb',
  titleText: '#666',
  dotRed: '#ff5f57',
  dotRedBorder: '#e0443e',
  dotYellow: '#febc2e',
  dotYellowBorder: '#dea123',
  dotGreen: '#28c840',
  dotGreenBorder: '#1aab29',
  body: '#1a1b26',
  cell: '#24283b',
  divider: '#414868',
  prompt: '#7aa2f7',
  command: '#c0caf5',
  highlight: '#9ece6a',
  comment: '#565f89',
} as const;

const monoFont = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

// --- Reusable Terminal Components ---

function TerminalWindow({ title, children, mini }: {
  title?: string;
  children: React.ReactNode;
  mini?: boolean;
}) {
  const dotSize = mini ? '8px' : '14px';
  return (
    <div style={{
      border: `1px solid ${tc.border}`,
      borderRadius: mini ? '12px' : '16px',
      overflow: 'hidden',
      boxShadow: mini ? undefined : tc.glow,
    }}>
      <div style={{
        background: tc.titleBar,
        borderBottom: `1px solid ${tc.titleBarBorder}`,
        padding: mini ? '6px 10px' : '12px 16px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', gap: mini ? '5px' : '8px' }}>
          {[
            [tc.dotRed, tc.dotRedBorder],
            [tc.dotYellow, tc.dotYellowBorder],
            [tc.dotGreen, tc.dotGreenBorder],
          ].map(([bg, border], i) => (
            <span key={i} style={{
              width: dotSize, height: dotSize, borderRadius: '50%',
              background: bg, border: `1px solid ${border}`,
              display: 'inline-block',
            }} />
          ))}
        </div>
        {title && (
          <span style={{
            fontFamily: monoFont,
            color: tc.titleText,
            fontSize: mini ? '10px' : '13px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            userSelect: 'none' as const,
          }}>{title}</span>
        )}
      </div>
      <div style={{
        background: tc.body,
        padding: mini ? '12px' : '24px',
        fontFamily: monoFont,
        fontSize: mini ? '12px' : '14px',
        overflow: mini ? 'hidden' : undefined,
      }}>
        {children}
      </div>
    </div>
  );
}

function TerminalDivider() {
  return <div style={{ borderTop: `1px solid ${tc.divider}`, margin: '16px 0' }} />;
}

function StepLabel({ step, description }: { step: string; description: string }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <span style={{ color: tc.highlight, fontWeight: 700, fontSize: '13px' }}>{step}</span>
      <span style={{ color: tc.comment, fontSize: '13px', marginLeft: '8px' }}>-- {description}</span>
    </div>
  );
}

function CmdLine({ prefix, text, onCopy }: {
  prefix: string;
  text: string;
  onCopy?: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <code className="block overflow-x-auto whitespace-nowrap" style={{ fontSize: 'inherit' }}>
        <span style={{ color: tc.prompt }}>{prefix} </span>
        <span style={{ color: tc.command }}>{text}</span>
      </code>
      {onCopy && (
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity"
          style={{ color: tc.command }}
          onClick={onCopy}
        >
          <Copy className="w-3.5 h-3.5" />
        </Button>
      )}
    </div>
  );
}

export function QuickStart() {
  const { t } = useTranslation();
  const [activeTrack, setActiveTrack] = useState<TrackKey>('plugin');
  const [mcpSubTab, setMcpSubTab] = useState<McpSubTab>('claudeCode');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch(err => {
      console.error('Copy failed:', err);
    });
  };

  const tracks: { key: TrackKey; label: string }[] = [
    { key: 'plugin', label: t('quickStart.tabs.plugin') },
    { key: 'mcp', label: t('quickStart.tabs.mcp') },
    { key: 'cli', label: t('quickStart.tabs.cli') },
  ];

  return (
    <section id="quick-start" className="relative min-h-screen overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:50px_50px] opacity-30"></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center" style={{ paddingTop: '96px', paddingBottom: '48px' }}>
        {/* Hero header area */}
        <div style={{ paddingBottom: '40px' }}>
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 text-white leading-tight font-bold">
              {t('hero.titlePrefix')}<span className="text-blue-300">{t('hero.titleHighlight')}</span>
            </h1>
            <div className="max-w-3xl mx-auto space-y-2">
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed font-light">
                {t('hero.subtitle1')}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed font-light">
                {t('hero.subtitle2')}
              </p>
            </div>
          </div>
        </div>

        {/* QuickStart content area */}
        <div>
          <div className="container mx-auto px-6">
            {/* Track switcher */}
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-center gap-3 mb-8">
                {tracks.map((track) => (
                  <button
                    key={track.key}
                    onClick={() => setActiveTrack(track.key)}
                    className={`
                      px-6 py-3 rounded-xl text-base md:text-lg font-medium transition-all duration-300
                      ${activeTrack === track.key
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-white/10 text-blue-100 hover:bg-white/15 hover:text-white border border-white/20 backdrop-blur-sm'
                      }
                    `}
                  >
                    {track.label}
                  </button>
                ))}
              </div>

              {/* ========= Plugin Track ========= */}
              {activeTrack === 'plugin' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">{t('quickStart.plugin.title')}</h3>
                      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">{t('quickStart.plugin.badge')}</Badge>
                    </div>
                    <p className="text-lg text-blue-100">{t('quickStart.plugin.subtitle')}</p>
                  </div>

                  <TerminalWindow>
                    {/* STEP 1 */}
                    <StepLabel step="STEP 1" description={t('quickStart.plugin.steps.install.title')} />
                    <div className="space-y-2">
                      <CmdLine
                        prefix="/"
                        text={t('quickStart.plugin.steps.install.code1').replace(/^\//, '')}
                        onCopy={() => handleCopy(t('quickStart.plugin.steps.install.code1'))}
                      />
                      <CmdLine
                        prefix="/"
                        text={t('quickStart.plugin.steps.install.code2').replace(/^\//, '')}
                        onCopy={() => handleCopy(t('quickStart.plugin.steps.install.code2'))}
                      />
                    </div>

                    <TerminalDivider />

                    {/* STEP 2 */}
                    <StepLabel step="STEP 2" description={t('quickStart.plugin.steps.review.title')} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(['unstaged', 'staged', 'branch', 'commit'] as const).map((key) => (
                        <div key={key} style={{ background: tc.cell, borderRadius: '8px', padding: '12px 16px' }}>
                          <div style={{ color: tc.comment, fontSize: '12px', marginBottom: '6px' }}>
                            # {t(`quickStart.plugin.reviewExamples.${key}`)}
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <code style={{ fontSize: '13px' }}>
                              <span style={{ color: tc.prompt }}>/ </span>
                              <span style={{ color: tc.command }}>{t(`quickStart.plugin.reviewCommands.${key}`).replace(/^\//, '')}</span>
                            </code>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 w-6 p-0 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity"
                              style={{ color: tc.command }}
                              onClick={() => handleCopy(t(`quickStart.plugin.reviewCommands.${key}`))}
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <TerminalDivider />

                    {/* API key note */}
                    <p style={{ color: tc.highlight, fontSize: '13px' }}>
                      {t('quickStart.plugin.noApiKeyNote')}
                    </p>
                  </TerminalWindow>
                </div>
              )}

              {/* ========= MCP Track ========= */}
              {activeTrack === 'mcp' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{t('quickStart.mcp.title')}</h3>
                    <p className="text-lg text-blue-100">{t('quickStart.mcp.subtitle')}</p>
                  </div>

                  {/* Sub tabs */}
                  <div className="flex justify-center gap-2 mb-6">
                    {(['claudeCode', 'cursor'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setMcpSubTab(tab)}
                        className={`
                          px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                          ${mcpSubTab === tab
                            ? 'bg-white text-slate-900'
                            : 'bg-white/10 text-blue-100 hover:bg-white/15 border border-white/20'
                          }
                        `}
                      >
                        {t(`quickStart.mcp.tabs.${tab}`)}
                      </button>
                    ))}
                  </div>

                  {/* Claude Code MCP */}
                  {mcpSubTab === 'claudeCode' && (
                    <TerminalWindow>
                      <div style={{ color: tc.comment, fontSize: '12px', marginBottom: '8px' }}>
                        # {t('quickStart.mcp.claudeCode.withEnv')}
                      </div>
                      <CmdLine
                        prefix="$"
                        text="claude mcp add selvage -- uvx selvage mcp"
                        onCopy={() => handleCopy('claude mcp add selvage -- uvx selvage mcp')}
                      />

                      <TerminalDivider />

                      <div style={{ color: tc.comment, fontSize: '12px', marginBottom: '8px' }}>
                        # {t('quickStart.mcp.claudeCode.withDirectKey')}
                      </div>
                      <CmdLine
                        prefix="$"
                        text="claude mcp add selvage -e OPENROUTER_API_KEY=your_key -- uvx selvage mcp"
                        onCopy={() => handleCopy('claude mcp add selvage -e OPENROUTER_API_KEY=your_key -- uvx selvage mcp')}
                      />
                    </TerminalWindow>
                  )}

                  {/* Cursor MCP */}
                  {mcpSubTab === 'cursor' && (
                    <TerminalWindow title="mcp.json">
                      <div className="flex items-start justify-between gap-2">
                        <pre style={{ color: tc.command, fontSize: '14px', whiteSpace: 'pre', margin: 0 }}>{`{
  "mcpServers": {
    "selvage": {
      "command": "uvx",
      "args": ["selvage", "mcp"]
    }
  }
}`}</pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity"
                          style={{ color: tc.command }}
                          onClick={() => handleCopy('{\n  "mcpServers": {\n    "selvage": {\n      "command": "uvx",\n      "args": ["selvage", "mcp"]\n    }\n  }\n}')}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="mt-3" style={{ color: tc.comment, fontSize: '12px' }}>
                        {t('quickStart.mcp.cursor.configPath')}
                      </p>
                    </TerminalWindow>
                  )}

                  {/* Usage examples */}
                  <TerminalWindow title="AI Assistant">
                    <div style={{ color: tc.comment, fontSize: '12px', marginBottom: '12px' }}>
                      # {t('quickStart.mcp.usage.description')}
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} style={{ background: tc.cell, borderRadius: '8px', padding: '12px 16px' }}>
                          <code style={{ color: tc.command, fontSize: '14px' }}>
                            {t(`quickStart.mcp.usage.example${i}`)}
                          </code>
                        </div>
                      ))}
                    </div>
                  </TerminalWindow>

                  {/* Agent-delegated note */}
                  <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-5 flex items-start gap-3 backdrop-blur-sm">
                    <Info className="w-6 h-6 text-blue-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold mb-1">{t('quickStart.mcp.agentDelegated.title')}</p>
                      <p className="text-blue-100 text-sm leading-relaxed">{t('quickStart.mcp.agentDelegated.description')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ========= CLI Track ========= */}
              {activeTrack === 'cli' && (
                <div className="space-y-8 animate-fadeIn">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">{t('quickStart.cli.title')}</h3>
                    <p className="text-lg text-blue-100">{t('quickStart.cli.subtitle')}</p>
                  </div>

                  <TerminalWindow>
                    {/* STEP 1 */}
                    <StepLabel step="STEP 1" description={t('quickStart.cli.steps.install.title')} />
                    <CmdLine
                      prefix="$"
                      text="uv tool install selvage"
                      onCopy={() => handleCopy('uv tool install selvage')}
                    />

                    <TerminalDivider />

                    {/* STEP 2 */}
                    <StepLabel step="STEP 2" description={t('quickStart.cli.steps.apiKey.title')} />
                    <CmdLine
                      prefix="$"
                      text='export OPENROUTER_API_KEY="your_key"'
                      onCopy={() => handleCopy('export OPENROUTER_API_KEY="your_key"')}
                    />

                    <TerminalDivider />

                    {/* STEP 3 */}
                    <StepLabel step="STEP 3" description={t('quickStart.cli.steps.start.title')} />
                    <CmdLine
                      prefix="$"
                      text="selvage review --model claude-sonnet-4-thinking"
                      onCopy={() => handleCopy('selvage review --model claude-sonnet-4-thinking')}
                    />
                  </TerminalWindow>

                  {/* Code review examples */}
                  <TerminalWindow>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(['currentDir', 'preCommit', 'prReview', 'fastModel'] as const).map((key) => {
                        const commands: Record<string, string> = {
                          currentDir: 'selvage review',
                          preCommit: 'selvage review --staged',
                          prReview: 'selvage review --target-branch develop',
                          fastModel: 'selvage review --model gemini-3-flash'
                        };
                        return (
                          <div key={key} style={{ background: tc.cell, borderRadius: '8px', padding: '12px 16px' }}>
                            <div style={{ color: tc.comment, fontSize: '12px', marginBottom: '6px' }}>
                              # {t(`quickStart.cli.codeReview.examples.${key}`)}
                            </div>
                            <div className="flex items-center justify-between gap-2">
                              <code style={{ fontSize: '13px' }}>
                                <span style={{ color: tc.prompt }}>$ </span>
                                <span style={{ color: tc.command }}>{commands[key]}</span>
                              </code>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity"
                                style={{ color: tc.command }}
                                onClick={() => handleCopy(commands[key])}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </TerminalWindow>

                  {/* Results */}
                  <TerminalWindow>
                    <div style={{ color: tc.comment, fontSize: '12px', marginBottom: '8px' }}>
                      # {t('quickStart.cli.results.webUi')}
                    </div>
                    <CmdLine
                      prefix="$"
                      text="selvage view"
                      onCopy={() => handleCopy('selvage view')}
                    />
                  </TerminalWindow>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
