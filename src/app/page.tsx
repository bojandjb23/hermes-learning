"use client";

import { useState, useMemo } from "react";
import {
  agentMemory,
  userProfile,
  skills,
  sessions,
  multiAgent,
  tools,
  quizzes,
} from "@/lib/data";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "architecture", label: "Architecture" },
  { id: "skills", label: "Skills" },
  { id: "sessions", label: "Sessions" },
  { id: "tools", label: "Tools" },
  { id: "quiz", label: "Quiz" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});

  const filteredSkills = useMemo(() => {
    if (!search) return skills;
    const q = search.toLowerCase();
    return skills.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
    );
  }, [search]);

  const filteredSessions = useMemo(() => {
    if (!search) return sessions;
    const q = search.toLowerCase();
    return sessions.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q)
    );
  }, [search]);

  const filteredTools = useMemo(() => {
    if (!search) return tools;
    const q = search.toLowerCase();
    return tools.filter((t) => t.toLowerCase().includes(q));
  }, [search]);

  const handleQuizSelect = (qi: number, optionIndex: number) => {
    if (quizSubmitted[qi]) return;
    setQuizAnswers((prev) => ({ ...prev, [qi]: optionIndex }));
  };

  const handleQuizSubmit = (qi: number) => {
    setQuizSubmitted((prev) => ({ ...prev, [qi]: true }));
  };

  const score = useMemo(() => {
    let correct = 0;
    quizzes.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) correct++;
    });
    return correct;
  }, [quizAnswers]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
              H
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Hermes Learning Hub</h1>
              <p className="text-xs text-muted-foreground">Interactive Agent Guide</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
            <span className="px-2 py-1 rounded bg-card border border-border">Kimi K2.6</span>
            <span className="px-2 py-1 rounded bg-card border border-border">Next.js 16</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <nav className="space-y-1 sticky top-24">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Tabs */}
        <div className="lg:hidden w-full mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-card border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search skills, sessions, tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {activeTab === "overview" && (
            <div className="space-y-6">
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold mb-4 text-primary">{agentMemory.title}</h2>
                <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-mono leading-relaxed">
                  {agentMemory.content}
                </pre>
              </section>
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold mb-4 text-primary">{userProfile.title}</h2>
                <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-mono leading-relaxed">
                  {userProfile.content}
                </pre>
              </section>
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-6">
              <section className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold mb-4 text-primary">{multiAgent.title}</h2>
                <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-mono leading-relaxed">
                  {multiAgent.content}
                </pre>
              </section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border text-center">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-bold">Hermes</div>
                  <div className="text-xs text-muted-foreground">Coordinator</div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border text-center">
                  <div className="text-2xl mb-2">🐧</div>
                  <div className="font-bold">Claude Code</div>
                  <div className="text-xs text-muted-foreground">Deep Coding</div>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border text-center">
                  <div className="text-2xl mb-2">🐍</div>
                  <div className="font-bold">Codex</div>
                  <div className="text-xs text-muted-foreground">QA Reviewer</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div>
              <div className="mb-4 text-sm text-muted-foreground">
                Showing {filteredSkills.length} of {skills.length} skills
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-foreground">{skill.name}</h3>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-muted text-muted-foreground">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "sessions" && (
            <div className="space-y-4">
              <div className="mb-4 text-sm text-muted-foreground">
                Showing {filteredSessions.length} of {sessions.length} sessions
              </div>
              {filteredSessions.map((session) => (
                <div
                  key={session.id}
                  className="p-5 rounded-lg bg-card border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                      {session.id}
                    </span>
                    <h3 className="font-bold">{session.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{session.summary}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "tools" && (
            <div>
              <div className="mb-4 text-sm text-muted-foreground">
                Showing {filteredTools.length} of {tools.length} tools
              </div>
              <div className="flex flex-wrap gap-2">
                {filteredTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-mono text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === "quiz" && (
            <div className="space-y-8">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="font-bold text-primary">
                  Score: {score} / {quizzes.length}
                </div>
              </div>
              {quizzes.map((q, qi) => (
                <div key={qi} className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-bold">
                      {qi + 1}
                    </span>
                    <h3 className="font-bold">{q.q}</h3>
                  </div>
                  <div className="space-y-2 mb-4">
                    {q.options.map((opt, oi) => {
                      const isSelected = quizAnswers[qi] === oi;
                      const isCorrect = q.correct === oi;
                      const submitted = quizSubmitted[qi];
                      let btnClass =
                        "w-full text-left px-4 py-3 rounded-lg border text-sm transition-colors ";
                      if (submitted) {
                        if (isCorrect) {
                          btnClass +=
                            "bg-green-500/20 border-green-500/50 text-green-400";
                        } else if (isSelected && !isCorrect) {
                          btnClass +=
                            "bg-red-500/20 border-red-500/50 text-red-400";
                        } else {
                          btnClass +=
                            "bg-card border-border text-muted-foreground";
                        }
                      } else {
                        btnClass += isSelected
                          ? "bg-primary/20 border-primary/50 text-primary"
                          : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30";
                      }
                      return (
                        <button
                          key={oi}
                          onClick={() => handleQuizSelect(qi, oi)}
                          className={btnClass}
                          disabled={submitted}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {!quizSubmitted[qi] && quizAnswers[qi] !== undefined && (
                    <button
                      onClick={() => handleQuizSubmit(qi)}
                      className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Submit Answer
                    </button>
                  )}
                  {quizSubmitted[qi] && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {quizAnswers[qi] === q.correct ? "✅ Correct!" : "❌ Incorrect."}{" "}
                      {q.explain}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
