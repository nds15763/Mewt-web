import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { getPosts } from "@/lib/notion";
import Link from "next/link";
import { ChevronRight, Calendar, Tag } from "lucide-react";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-brand-bg pt-32 pb-20">
      <Nav />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="text-6xl font-black text-slate-900 mb-8 tracking-tight">
            社区<span className="text-brand-purple">动态与指南</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            获取最新的产品更新、寻猫技巧以及感人的社区重逢故事。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {posts.map((post: any, index: number) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-5xl p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <div className="px-4 py-1.5 bg-brand-purple text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-brand-purple/20">
                  {post.category}
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                  <Calendar size={14} /> {post.date}
                </div>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-brand-purple transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-brand-purple font-black">
                  继续阅读 <ChevronRight size={20} />
                </div>
                <div className="text-slate-300 group-hover:text-brand-purple/20 transition-colors">
                  <Tag size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
