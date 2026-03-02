import { Nav } from "@/components/Nav";
import { MapHero } from "@/components/MapHero";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

const mockPosts = [
  {
    title: "Mewt 2.0 版本更新说明：全新爱心值系统上线",
    excerpt: "我们引入了全新的爱心值激励机制，旨在奖励积极提供寻猫线索的社区成员...",
    date: "2026-03-01",
    category: "产品更新",
    slug: "mewt-2-0-update"
  },
  {
    title: "寻猫指南：发现迷路猫后的黄金 48 小时该做什么？",
    excerpt: "专业的寻宠专家建议，发现猫咪走失后的前 48 小时是寻回成功率最高的黄金期...",
    date: "2026-02-25",
    category: "科普知识",
    slug: "finding-guide-48h"
  },
  {
    title: "社区故事：跨越 10 公里的重逢，小橘猫回家记",
    excerpt: "来自上海长宁区的李女士通过 Mewt 社区的实时目击点位，成功找回了失踪三天的爱猫...",
    date: "2026-02-20",
    category: "社区故事",
    slug: "community-story-orange-cat"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg">
      <Nav />
      
      {/* Hero Map Section */}
      <MapHero />

      {/* Feature Section */}
      <FeatureSection />

      {/* Blog/Updates Section - This will eventually pull from Notion */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-sm mb-6">
                <Sparkles size={16} /> 动态更新
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                社区动态与<span className="text-brand-purple italic">寻猫指南</span>
              </h2>
            </div>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 font-bold text-brand-purple hover:gap-4 transition-all duration-300 group"
            >
              浏览所有文章 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockPosts.map((post, index) => (
              <Link 
                key={index} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-4xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="px-4 py-1 bg-brand-purple/5 text-brand-purple text-xs font-black rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-sm font-medium">{post.date}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-purple transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-brand-purple font-bold">
                  阅读全文 <ChevronRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-brand-purple-dark to-brand-purple p-12 md:p-20 rounded-5xl text-center text-white relative overflow-hidden shadow-2xl shadow-brand-purple/30">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">
              准备好加入我们的社区了吗？
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
              立即下载 Mewt，开始探索您周边的猫咪社区。
              <br className="hidden md:block" />每一分关注，都是一份回家的希望。
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-white text-brand-purple px-10 py-5 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                免费开始使用
              </button>
              <button className="bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-2xl hover:bg-white/10 transition-all duration-300">
                查看功能详情
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
