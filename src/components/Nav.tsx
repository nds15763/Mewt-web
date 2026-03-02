"use client";

import { cn } from "@/lib/utils";
import { Cat, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4 glass shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Cat size={24} />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight transition-colors duration-300",
            scrolled ? "text-slate-900" : "text-slate-900 drop-shadow-md"
          )}>
            Mewt
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#map" className="text-slate-700 hover:text-brand-purple font-medium transition-colors">
            迷猫地图
          </Link>
          <Link href="#features" className="text-slate-700 hover:text-brand-purple font-medium transition-colors">
            App 特色
          </Link>
          <Link href="/blog" className="text-slate-700 hover:text-brand-purple font-medium transition-colors">
            更新公告
          </Link>
          <button className="bg-brand-purple text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-brand-purple/20 hover:bg-brand-purple-dark hover:scale-105 transition-all duration-300">
            立即下载
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link href="#map" className="text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>迷猫地图</Link>
          <Link href="#features" className="text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>App 特色</Link>
          <Link href="/blog" className="text-slate-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>更新公告</Link>
          <button className="bg-brand-purple text-white px-6 py-3 rounded-full font-bold mt-2">
            立即下载
          </button>
        </div>
      )}
    </nav>
  );
};
