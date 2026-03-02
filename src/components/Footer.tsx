import { Compass, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center text-white shadow-lg">
                <Compass size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Mewt
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed max-w-xs">
              探索世界，记录足迹。让旅行变得更简单、更有趣。
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-purple hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-purple hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-purple hover:text-white transition-all duration-300">
                <Github size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">产品</h4>
            <ul className="space-y-4">
              <li><Link href="#map" className="text-slate-600 hover:text-brand-purple transition-colors">旅游足迹</Link></li>
              <li><Link href="#features" className="text-slate-600 hover:text-brand-purple transition-colors">App 特色</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-brand-purple transition-colors">下载应用</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-brand-purple transition-colors">价格计划</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">资源</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-slate-600 hover:text-brand-purple transition-colors">更新博客</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-brand-purple transition-colors">使用指南</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-brand-purple transition-colors">隐私政策</Link></li>
              <li><Link href="#" className="text-slate-600 hover:text-brand-purple transition-colors">服务条款</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">联系我们</h4>
            <p className="text-slate-600 mb-4">有任何问题或建议？随时联系我们。</p>
            <a href="mailto:support@mewt.app" className="font-bold text-brand-purple hover:underline">
              support@mewt.app
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mewt. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-500 hover:text-brand-purple text-sm transition-colors">Privacy</Link>
            <Link href="#" className="text-slate-500 hover:text-brand-purple text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
