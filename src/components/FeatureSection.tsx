"use client";

import { motion } from "framer-motion";
import { Smile, MessageSquare, Heart, Shield, Sparkles, Map } from "lucide-react";

const features = [
  {
    title: "表情互动机会",
    description: "在地图上遇到喜欢的猫咪，可以发送可爱的喵语表情进行互动，建立美妙连接。",
    icon: <Smile className="text-brand-purple" size={32} />,
    color: "bg-brand-purple/10",
  },
  {
    title: "社区实时同步",
    description: "每一个目击点位都会实时同步给周边用户，极大提高寻回效率。",
    icon: <Map className="text-brand-green" size={32} />,
    color: "bg-brand-green/10",
  },
  {
    title: "爱心值系统",
    description: "通过提供有效信息积累爱心值，可以兑换特殊装饰和应用高级功能。",
    icon: <Heart className="text-red-500" size={32} />,
    color: "bg-red-50",
  },
  {
    title: "安全隐私保障",
    description: "严格的隐私控制，您可以自主选择位置信息的展示范围和详细程度。",
    icon: <Shield className="text-blue-500" size={32} />,
    color: "bg-blue-50",
  },
];

export const FeatureSection = () => {
  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-sm mb-6"
          >
            <Sparkles size={16} /> 核心功能
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-slate-900 mb-8 tracking-tight"
          >
            不只是地图，更是<span className="text-brand-purple italic">温暖的社区</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Mewt 致力于通过技术手段连接每一位爱猫人士，让寻找迷路猫不再是孤军奋战，让每一次相遇都充满温情。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="p-8 rounded-4xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-purple/20 transition-all duration-500 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-purple transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* App Screenshot Mockup */}
        <div className="mt-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-purple rounded-5xl p-12 md:p-20 overflow-hidden shadow-2xl shadow-brand-purple/20 relative"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                  极简交互，<br />极致的高效寻回
                </h3>
                <div className="space-y-6">
                  {[
                    "一键标记发现点位",
                    "多维度特征描述与图片上传",
                    "智能匹配历史走失数据",
                    "区域爱心志愿者即时通知"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/90 font-bold text-lg">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageSquare size={18} className="text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-12 flex flex-wrap gap-4">
                  <button className="bg-white text-brand-purple px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-all duration-300">
                    App Store 下载
                  </button>
                  <button className="bg-brand-purple-dark/50 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-brand-purple-dark/80 transition-all duration-300">
                    Google Play 下载
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Mock Phone Frame */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-full max-w-[320px] mx-auto aspect-[9/19] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white">
                     {/* Simplified Profile UI Mock */}
                     <div className="p-6 bg-brand-purple text-white pb-12">
                       <div className="w-20 h-20 rounded-3xl bg-white/20 mx-auto mb-4 overflow-hidden border-2 border-white/50">
                         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                       </div>
                       <div className="text-center">
                         <div className="font-bold text-xl">爱猫者 #1024</div>
                         <div className="text-sm opacity-80 mt-1">青铜等级寻猫官</div>
                       </div>
                     </div>
                     <div className="p-6 -mt-8 bg-white rounded-t-3xl shadow-lg">
                        <div className="flex justify-between mb-8">
                          <div className="bg-slate-50 p-4 rounded-2xl text-center flex-1 mr-2">
                            <div className="text-brand-purple font-black text-xl">124</div>
                            <div className="text-[10px] uppercase text-slate-400 font-bold">爱心值</div>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-2xl text-center flex-1 ml-2">
                            <div className="text-brand-green font-black text-xl">8</div>
                            <div className="text-[10px] uppercase text-slate-400 font-bold">勋章数</div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {[1,2,3].map(i => (
                            <div key={i} className="flex gap-4 items-center">
                              <div className="w-12 h-12 rounded-xl bg-slate-100" />
                              <div className="flex-1">
                                <div className="h-4 bg-slate-100 rounded w-2/3 mb-2" />
                                <div className="h-2 bg-slate-50 rounded w-1/2" />
                              </div>
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-24 h-24 bg-brand-yellow rounded-3xl shadow-xl flex items-center justify-center text-white"
                >
                  <Sparkles size={40} />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 w-32 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center gap-2 px-4"
                >
                  <Heart size={20} className="text-red-500 fill-red-500" />
                  <span className="text-sm font-black text-slate-800">爱心传递中</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
