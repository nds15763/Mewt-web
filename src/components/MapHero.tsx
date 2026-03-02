"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Info, X, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import markersData from "@/data/markers.json";

export const MapHero = () => {
  const [selectedMarker, setSelectedMarker] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="map" className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Mock Map Background - In a real app, this would be Mapbox or Leaflet */}
      <div className="absolute inset-0 bg-[#E5E7EB] bg-[radial-gradient(#D1D5DB_1px,transparent_1px)] [background-size:40px_40px]">
        {/* Decorative Grid/Paths */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 Q 200 150 400 100 T 800 100" stroke="#8B5CF6" fill="transparent" strokeWidth="2" />
          <path d="M100 0 Q 150 200 100 400 T 100 800" stroke="#8B5CF6" fill="transparent" strokeWidth="2" />
          <path d="M400 0 Q 450 400 400 800" stroke="#10B981" fill="transparent" strokeWidth="1" />
        </svg>

        {/* Markers */}
        {isLoaded && markersData.map((marker, index) => (
          <motion.button
            key={marker.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
            className="absolute z-10 group"
            style={{ 
              top: `${20 + (marker.lat - 35.6) * 500}%`, 
              left: `${30 + (marker.lng - 139.6) * 400}%` 
            }}
            onClick={() => setSelectedMarker(marker)}
          >
            <div className="relative">
              {/* Avatar Circle */}
              <div className="w-12 h-12 rounded-full border-4 border-white shadow-xl overflow-hidden group-hover:scale-110 group-hover:border-brand-purple transition-all duration-300">
                <img src={marker.avatar} alt={marker.name} className="w-full h-full object-cover" />
              </div>
              {/* Status Badge */}
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-md
                ${marker.status === 'Found' ? 'bg-brand-green' : marker.status === 'Searching' ? 'bg-red-500' : 'bg-brand-yellow'}
              `}>
                <MapPin size={10} fill="currentColor" />
              </div>
              {/* Pulse effect for Searching */}
              {marker.status === 'Searching' && (
                <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping -z-10" />
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Overlay UI */}
      <div className="absolute top-32 left-8 z-20 max-w-sm">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-4xl shadow-2xl border border-white/50"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-sm font-bold text-brand-purple tracking-widest uppercase">实时迷猫动态</span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 leading-tight mb-4">
            让每一只迷路的猫咪<br /><span className="text-brand-purple">都能平安回家</span>
          </h1>
          <p className="text-slate-600 mb-8 text-lg">
            基于社区地理信息的迷猫互助平台。您可以实时发布目击点位，协作寻找走失爱宠。
          </p>
          <div className="flex gap-4">
            <button className="flex-1 bg-brand-purple text-white px-6 py-4 rounded-2xl font-bold shadow-xl shadow-brand-purple/30 hover:bg-brand-purple-dark hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <Navigation size={20} /> 进入地图
            </button>
            <button className="p-4 bg-white text-slate-700 rounded-2xl font-bold border border-slate-200 hover:bg-slate-50 transition-all duration-300">
              <Info size={24} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Floating Stats */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-6 px-4 w-full justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass px-8 py-4 rounded-3xl shadow-xl flex items-center gap-4"
        >
          <div className="text-center">
            <div className="text-2xl font-black text-brand-purple">2,450</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">活跃用户</div>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="text-center">
            <div className="text-2xl font-black text-brand-green">184</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">成功找回</div>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="text-center">
            <div className="text-2xl font-black text-brand-yellow">12</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">今日目击</div>
          </div>
        </motion.div>
      </div>

      {/* Marker Detail Popup */}
      <AnimatePresence>
        {selectedMarker && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-xs"
          >
            <div className="bg-white rounded-4xl p-6 shadow-2xl relative overflow-hidden border-4 border-brand-purple/10">
              <button 
                onClick={() => setSelectedMarker(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X size={16} />
              </button>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl overflow-hidden mb-4 border-4 border-brand-purple/5 shadow-lg">
                  <img src={selectedMarker.avatar} alt={selectedMarker.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">{selectedMarker.name}</h3>
                <div className={cn(
                  "px-4 py-1 rounded-full text-xs font-bold text-white mb-4",
                  selectedMarker.status === 'Found' ? 'bg-brand-green' : selectedMarker.status === 'Searching' ? 'bg-red-500' : 'bg-brand-yellow'
                )}>
                  {selectedMarker.status === 'Found' ? '已找回' : selectedMarker.status === 'Searching' ? '紧急寻找中' : '目击报告'}
                </div>
                <p className="text-slate-600 mb-6 italic">"{selectedMarker.description}"</p>
                <button className="w-full bg-brand-purple/10 text-brand-purple py-3 rounded-2xl font-bold hover:bg-brand-purple hover:text-white transition-all duration-300">
                  查看详情
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
