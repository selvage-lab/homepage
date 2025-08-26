import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Logo } from "./Logo";
import { 
  Github, 
  Mail, 
  Star, 
  Heart,
  ExternalLink,
  FileText,
  Bug,
  Download
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        
        {/* Main navigation links - organized in grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          <a href="https://github.com/anomie7/selvage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
          <a href="mailto:anomie7777@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Contact</span>
          </a>
          <a href="https://github.com/anomie7/selvage/issues" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            <Bug className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Issues</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
          <a href="https://github.com/anomie7/selvage/releases" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Releases</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
          <a href="https://pypi.org/project/selvage/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">PyPI</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
        </div>

        <Separator className="bg-slate-700/50 my-8" />

        {/* Bottom section - improved layout and hierarchy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-400 text-sm">
            <div className="flex items-center gap-3">
              <span>© 2025 Selvage</span>
              <span className="text-slate-600">•</span>
              <span>Apache-2.0 License</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 fill-current animate-pulse" />
              <span>for developers</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-slate-400 text-sm whitespace-nowrap text-center sm:text-left">If you like this project, please give us a star!</span>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-400 text-slate-100 bg-slate-800/50 hover:bg-slate-600 hover:border-slate-300 hover:text-white transition-all duration-200 group flex-shrink-0"
              asChild
            >
              <a href="https://github.com/anomie7/selvage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Star className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Star on GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}