import React from "react";
import { FloatingNav } from "./FloatingNav";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function TopNavigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700">
      <div className="flex items-center justify-between px-6 py-3">
        <Logo />
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <FloatingNav />
        </div>
      </div>
    </div>
  );
}
