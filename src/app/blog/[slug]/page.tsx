import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getPosts } from "@/lib/notion";
import { notFound } from "next/navigation";
import { Calendar, Tag, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p: any) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      <div className="pt-40 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-brand-purple font-bold mb-12 hover:-translate-x-2 transition-transform"
          >
            <ChevronLeft size={20} /> 返回博客列表
          </Link>

          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-black text-xs mb-8 uppercase tracking-widest">
              {post.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-slate-400 font-bold">
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={18} /> {post.date}
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              <div className="flex items-center gap-2 text-sm uppercase tracking-tighter">
                <Tag size={18} /> {post.category}
              </div>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            {/* Post Content would go here. In a real Notion setup, we'd use a Notion-to-Markdown or Notion-to-React library. */}
            <div className="bg-slate-50 p-10 rounded-4xl border border-slate-100 italic text-slate-600 mb-12 leading-relaxed text-xl">
              "{post.excerpt}"
            </div>
            
            <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
              这是一篇来自 Mewt 社区的最新动态。我们致力于为您提供最及时、最有价值的信息。
            </p>
            
            <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8">为什么选择 Mewt？</h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
              在快节奏的现代生活中，旅行已经成为我们探索自我、连接世界的重要方式。然而，碎片化的攻略和散乱的足迹记录往往让旅行的意义大打折扣。
            </p>
            
            <div className="my-12 p-8 bg-brand-purple/5 rounded-4xl border-2 border-brand-purple/10">
              <h3 className="text-2xl font-black text-brand-purple mb-4">核心优势：</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs mt-1">✓</div>
                  <span className="text-lg text-slate-700 font-bold">基于地理位置的精准足迹记录</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs mt-1">✓</div>
                  <span className="text-lg text-slate-700 font-bold">实时的全球驴友动态互动系统</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs mt-1">✓</div>
                  <span className="text-lg text-slate-700 font-bold">详尽的旅行攻略与足迹点位分享</span>
                </li>
              </ul>
            </div>

            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              我们将持续更新更多关于全球旅行和足迹打卡的专业知识，敬请关注。
            </p>
          </div>

          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-slate-100 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Author" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg">Mewt 编辑部</div>
                <div className="text-slate-500 text-sm font-bold">发布于 {post.date}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-2xl bg-slate-100 text-slate-900 font-black hover:bg-slate-200 transition-all">分享文章</button>
              <button className="px-6 py-3 rounded-2xl bg-brand-purple text-white font-black shadow-lg shadow-brand-purple/20 hover:scale-105 transition-all">立即下载 App</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
