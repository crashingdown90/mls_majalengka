"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Layout,
  Shield,
  Smartphone,
  Briefcase,
  CheckCircle2,
  Globe,
  Info,
  CreditCard,
  MessageSquare,
  FileText,
  Layers,
  MapPin,
  Users,
  Cpu,
  Sparkles,
  Award,
  Wifi,
  Database,
  Server,
  BookOpen,
  Network,
  RefreshCw,
  Workflow,
  ArrowRightCircle,
  Stethoscope,
  Building2,
  Landmark,
  PiggyBank,
  GraduationCap,
  Map,
  HeartHandshake,
  Car,
  PieChart,
  Megaphone,
  TrendingUp,
  Activity,
  Coins,
  Video,
  AlertTriangle,
  TrendingDown,
  Bot,
  Zap,
  ShoppingBag,
  ShieldCheck,
  Lock,
  Sprout,
  Wheat,
  LayoutDashboard,
  Eye,
  Target,
  Heart,
  Leaf,
} from "lucide-react";

// Slide Components
const SlideCover = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full max-w-7xl mx-auto px-6 relative z-10 gap-12">
    {/* Left Side: Text & Logo */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 w-full lg:w-1/2">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <img src="/mls_logo_01.png" alt="MLS Logo" className="relative w-auto h-24 md:h-28 object-contain drop-shadow-xl" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 px-4 py-2 rounded-full text-xs font-semibold text-teal-800 mb-6 shadow-sm">
          <Sparkles size={14} className="text-teal-500" />
          <span>Rencana Induk Akselerasi Ekosistem Digital (2025-2029)</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 tracking-tight leading-tight mb-2 drop-shadow-sm">
          Majalengka Langkung <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">Sae</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white shadow-xl shadow-slate-200/50"
      >
        Super App <strong className="text-slate-800 font-bold">Majalengka Langkung Sae (MLS)</strong> hadir sebagai platform tunggal wujud transformasi pelayanan publik terpadu Pemerintah Kabupaten Majalengka.
      </motion.p>
    </div>

    {/* Right Side: Leadership Photos */}
    <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative">
      <div className="relative w-full max-w-md aspect-square">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-[80px] animate-pulse-slow"></div>

        {/* Photos Container */}
        <div className="relative flex items-center justify-center gap-6 md:gap-8">
          {/* Bupati */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="relative z-20 group"
          >
            <div className="bg-white/80 backdrop-blur-md p-2 rounded-[32px] shadow-2xl border border-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img src="/Bupati.png" alt="Bupati Majalengka" className="w-40 md:w-48 h-auto object-cover rounded-[24px]" />
              <div className="absolute bottom-4 left-0 right-0 text-center z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-[10px] uppercase tracking-widest">Bupati Majalengka</p>
              </div>
            </div>
          </motion.div>

          {/* Wakil Bupati */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="relative z-10 group"
          >
            <div className="bg-white/80 backdrop-blur-md p-2 rounded-[32px] shadow-2xl border border-white relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img src="/Wakilbupati.png" alt="Wakil Bupati Majalengka" className="w-38 md:w-46 h-auto object-cover rounded-[24px]" />
              <div className="absolute bottom-4 left-0 right-0 text-center z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-bold text-[10px] uppercase tracking-widest">Wakil Bupati</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Accents */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg border border-teal-50 z-30 flex items-center space-x-2"
        >
          <Award className="text-teal-500" size={16} />
          <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Leadership 2025</span>
        </motion.div>
      </div>
    </div>
  </div>
);

const SlideMajalengkaProfile = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    {/* Branding Logo Page 2 */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-4 mb-4"
    >
      <img src="/Logo_Majalengka.png" alt="Logo Majalengka" className="h-16 w-auto drop-shadow-md" />
      <div className="h-12 w-1 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
      <div>
        <h4 className="text-slate-800 font-extrabold text-xl">Pemerintah Kabupaten</h4>
        <p className="text-teal-600 font-bold uppercase tracking-widest text-sm">Majalengka</p>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Geografi",
          desc: "Luas wilayah 1.204 km², dikelilingi Gunung Ciremai & berpusat di Dataran Tinggi & Rendah yang subur.",
          icon: <Map size={28} className="text-emerald-600" />,
          bg: "bg-emerald-50",
          border: "border-emerald-100"
        },
        {
          title: "Demografi",
          desc: "1,3 Juta Jiwa masyarakat yang agamis, produktif, dan siap menyambut era digitalisasi.",
          icon: <Users size={28} className="text-blue-600" />,
          bg: "bg-blue-50",
          border: "border-blue-100"
        },
        {
          title: "Pusat Ekonomi Baru",
          desc: "Kehadiran BIJB Kertajati memosisikan Majalengka sebagai simpul logistik & investasi nasional.",
          icon: <Landmark size={28} className="text-amber-600" />,
          bg: "bg-amber-50",
          border: "border-amber-100"
        },
        {
          title: "Warisan Budaya",
          desc: "Kekayaan kuliner, wisata alam Panyaweuyan, & kearifan lokal yang tetap terjaga di tengah modernitas.",
          icon: <Sparkles size={28} className="text-rose-600" />,
          bg: "bg-rose-50",
          border: "border-rose-100"
        }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
          className={`bg-white p-6 rounded-3xl border ${item.border} shadow-sm flex flex-col items-start transition-all`}
        >
          <div className={`${item.bg} p-4 rounded-2xl mb-4`}>
            {item.icon}
          </div>
          <h3 className="text-lg font-extrabold text-slate-800 mb-2">{item.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="mt-8 p-8 bg-gradient-to-r from-teal-600 to-emerald-700 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Globe size={120} />
      </div>
      <div className="relative z-10 md:w-2/3">
        <h3 className="text-3xl font-extrabold mb-3">Visi Majalengka Baru</h3>
        <p className="text-teal-50 text-lg font-medium leading-relaxed">
          "Mewujudkan Majalengka sebagai Kabupaten Digital Terdepan di Jawa Barat yang Unggul, Inklusif, dan Mandiri secara Ekonomi melalui Ekosistem Digital Langkung Sae."
        </p>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 mt-6 md:mt-0 text-center">
        <div className="text-3xl font-bold text-white">REBANA</div>
        <div className="text-teal-200 text-xs font-bold uppercase tracking-widest mt-1">Metropolitan Core</div>
      </motion.div>
    </motion.div>
  </div>
);

const SlideExecutiveMacroDashboard = () => (
  <div className="flex flex-col h-full items-start pt-2 relative z-10 w-full pb-8">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[70vh] overflow-y-auto pr-2 pb-6 custom-scrollbar">
      {/* Macro 1: Indeks Kemiskinan */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-rose-50 p-3 rounded-2xl group-hover:bg-rose-100 transition-colors">
            <TrendingDown className="text-rose-600" size={24} />
          </div>
          <div className="text-[10px] font-black bg-rose-100 text-rose-700 px-3 py-1 rounded-full uppercase">Target: -1.2%</div>
        </div>
        <div>
          <h4 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">Index Kemiskinan (P0)</h4>
          <div className="text-3xl font-black text-slate-800 flex items-baseline">
            11.21<span className="text-sm font-bold text-slate-400 ml-1">%</span>
          </div>
          <p className="text-[10px] text-emerald-600 font-bold mt-1 flex items-center">
            <ChevronLeft size={12} className="rotate-90" /> Turun 0.45% dari 2024
          </p>
        </div>
        <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-rose-500 h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
        </div>
      </motion.div>

      {/* Macro 2: Pertumbuhan Ekonomi */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-emerald-50 p-3 rounded-2xl group-hover:bg-emerald-100 transition-colors">
            <TrendingUp className="text-emerald-600" size={24} />
          </div>
          <div className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase">Sektor: Aviasi</div>
        </div>
        <div>
          <h4 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">Index Ekonomi (LPE)</h4>
          <div className="text-3xl font-black text-slate-800 flex items-baseline">
            6.52<span className="text-sm font-bold text-slate-400 ml-1">%</span>
          </div>
          <p className="text-[10px] text-emerald-600 font-bold mt-1 flex items-center">
            <ChevronLeft size={12} className="-rotate-90" /> Naik 1.2% (Diatas Prov)
          </p>
        </div>
        <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-[85%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
        </div>
      </motion.div>

      {/* Macro 3: Indeks Kesehatan (IPM/Health) */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-100 transition-colors">
            <Activity className="text-blue-600" size={24} />
          </div>
          <div className="text-[10px] font-black bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase">Kategori: Tinggi</div>
        </div>
        <div>
          <h4 className="text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">Index Kesehatan (IPM)</h4>
          <div className="text-3xl font-black text-slate-800 flex items-baseline">
            72.48<span className="text-sm font-bold text-slate-400 ml-1">Poin</span>
          </div>
          <p className="text-[10px] text-blue-600 font-bold mt-1 flex items-center">
            Trend Positif Berkelanjutan
          </p>
        </div>
        <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full w-[72%] rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
        </div>
      </motion.div>

      {/* Sektoral 1: Investasi */}
      <motion.div whileHover={{ y: -5 }} className="bg-slate-900 p-5 rounded-[32px] shadow-2xl text-white flex flex-col justify-between group overflow-hidden relative">
        <div className="absolute -right-6 -bottom-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Briefcase size={120} />
        </div>
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
            <Briefcase className="text-teal-400" size={24} />
          </div>
          <div className="text-[10px] font-bold text-teal-400 uppercase">Realisasi 2025</div>
        </div>
        <div className="relative z-10">
          <h4 className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-1">Total Investasi Masuk</h4>
          <div className="text-2xl font-black flex items-baseline">
            Rp 4.8<span className="text-sm font-bold text-slate-400 ml-1">Triliun</span>
          </div>
        </div>
      </motion.div>

      {/* Sektoral 2: Pariwisata */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-amber-50 p-3 rounded-2xl">
            <MapPin className="text-amber-600" size={20} />
          </div>
          <h4 className="text-slate-800 font-black text-xs uppercase tracking-tight">Kunjungan Wisata</h4>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-xs text-slate-500 font-bold">Domestik</span>
            <span className="text-lg font-black text-slate-800">1.2M <span className="text-[10px] text-slate-400">Jiwa</span></span>
          </div>
          <div className="flex justify-between items-end border-t border-slate-100 pt-2">
            <span className="text-xs text-slate-500 font-bold">Mancanegara</span>
            <span className="text-lg font-black text-slate-800">15K <span className="text-[10px] text-slate-400">Jiwa</span></span>
          </div>
        </div>
      </motion.div>

      {/* Sektoral 3: Penurunan Stunting */}
      <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-indigo-600 to-blue-700 p-5 rounded-[32px] shadow-xl text-white flex flex-col justify-between group relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Stethoscope size={80} />
        </div>
        <div className="flex items-center space-x-3 mb-2 relative z-10">
          <Stethoscope className="text-white" size={20} />
          <h4 className="text-white font-black text-xs uppercase tracking-widest">Penurunan Stunting</h4>
        </div>
        <div className="relative z-10">
          <div className="text-3xl font-black tracking-tighter">12.4%</div>
          <p className="text-[10px] font-bold text-indigo-50/80 uppercase mt-1">Capaian Terendah Se-Provinsi</p>
        </div>
        <div className="mt-4 flex -space-x-2 relative z-10">
          {[1, 2, 3, 4].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-indigo-600 bg-indigo-100 overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" /></div>)}
        </div>
      </motion.div>

      {/* Sektoral 4: Pertanian (Pangan) */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-teal-50 p-3 rounded-2xl">
            <Sprout className="text-teal-600" size={20} />
          </div>
          <h4 className="text-slate-800 font-black text-xs uppercase tracking-tight">Kedaulatan Pangan</h4>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">Produksi Beras</div>
          <div className="text-xl font-black text-slate-800">480,000 <span className="text-xs text-slate-500">Ton/Thn</span></div>
          <div className="flex items-center text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md self-start">
            Surplus Nasional
          </div>
        </div>
      </motion.div>

      {/* Sectoral 5: Serapan Tenaga Kerja */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-orange-50 p-3 rounded-2xl">
            <Users className="text-orange-600" size={20} />
          </div>
          <h4 className="text-slate-800 font-black text-xs uppercase tracking-tight">Tenaga Kerja</h4>
        </div>
        <div className="relative">
          <div className="text-2xl font-black text-slate-800 leading-none">82,400</div>
          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Lowongan Terserap (2025)</p>
          <div className="mt-4 flex items-center justify-between text-[10px] font-black uppercase text-slate-500">
            <span>Target: 100K</span>
            <span>82%</span>
          </div>
          <div className="mt-1 w-full bg-slate-100 h-1.5 rounded-full">
            <div className="bg-orange-500 h-full w-[82%] rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const SlideVisiPimpinan = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {/* Kolom Visi */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-white/80 backdrop-blur-md p-8 rounded-[40px] border border-teal-100 shadow-xl flex flex-col justify-center"
      >
        <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
          <Eye className="text-teal-600" size={32} />
        </div>
        <h3 className="text-2xl font-black text-slate-800 mb-4 uppercase tracking-tight">Visi Daerah</h3>
        <p className="text-xl font-bold text-slate-700 leading-relaxed italic">
          "Terwujudnya Majalengka yang Religius, Adil, Harmonis, Sejahtera, dan Inovatif (RAHAYU)"
        </p>
      </motion.div>

      {/* Kolom Janji Politik (Misi) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-[40px] shadow-2xl text-white overflow-y-auto custom-scrollbar"
      >
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-teal-500/20 p-3 rounded-xl border border-teal-500/30">
            <Target className="text-teal-400" size={24} />
          </div>
          <h3 className="text-xl font-black uppercase tracking-widest text-teal-400">Janji Politik Pimpinan</h3>
        </div>
        <ul className="space-y-4">
          {[
            "Peningkatan Kesejahteraan Guru Ngaji & Tenaga Pendidik Keagamaan.",
            "Akselerasi Pembangunan Infrastruktur Desa melalui Dana Desa Plus.",
            "Penyediaan Lapangan Kerja melalui Digital Talent Hub Majalengka.",
            "Jaminan Kesehatan masyarakat (Universal Health Coverage) 100%.",
            "Pemberian Modal Usaha Tanpa Bunga bagi Pelaku UMKM.",
            "Transformasi Layanan Publik Berbasis Digital (Satu Genggaman)."
          ].map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start space-x-3 group"
            >
              <div className="bg-teal-500 h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-1 group-hover:scale-110 transition-transform">{idx + 1}</div>
              <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);

const SlideRPJMDMissions = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-2">
    <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-full text-[10px] font-black text-emerald-800 mb-6 uppercase tracking-widest self-start">
      <Landmark size={14} className="text-emerald-500" />
      <span>Perda Kab. Majalengka No. 1 Tahun 2025</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2 pb-6 custom-scrollbar">
      {[
        {
          num: "1",
          title: "Meningkatnya Kehidupan Beragama",
          desc: "Mewujudkan masyarakat yang agamis, bermoral, dan menjunjung tinggi nilai-nilai toleransi beragama.",
          icon: <Heart size={24} />,
          color: "rose"
        },
        {
          num: "2",
          title: "Lingkungan Hidup Langkung SAE",
          desc: "Pembangunan berkelanjutan yang selaras dengan pelestarian alam dan ketahanan ekologi.",
          icon: <Leaf size={24} />,
          color: "emerald"
        },
        {
          num: "3",
          title: "Reformasi Birokrasi Digital",
          desc: "Penyelenggaraan pemerintahan yang bersih, melayani, dan berbasis teknologi informasi (E-Gov).",
          icon: <Cpu size={24} />,
          color: "cyan"
        },
        {
          num: "4",
          title: "Masyarakat yang Humanis",
          desc: "Peningkatan kualitas sumber daya manusia yang berbudaya, sehat, cerdas, dan produktif.",
          icon: <Users size={24} />,
          color: "blue"
        },
        {
          num: "5",
          title: "Pemerintahan yang Bersih",
          desc: "Mewujudkan tata kelola pemerintahan yang transparan, akuntabel, dan bebas dari KKN.",
          icon: <ShieldCheck size={24} />,
          color: "indigo"
        },
        {
          num: "6",
          title: "Ekonomi yang Mandiri",
          desc: "Penguatan kemandirian ekonomi daerah melalui sektor pertanian, pariwisata, dan industri.",
          icon: <TrendingUp size={24} />,
          color: "amber"
        }
      ].map((misi, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group"
        >
          <div className={`absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`}>
            {misi.icon}
          </div>
          <div className={`w-12 h-12 bg-${misi.color}-50 text-${misi.color}-600 rounded-2xl flex items-center justify-center mb-4 font-black text-xl`}>
            {misi.num}
          </div>
          <h3 className="text-lg font-black text-slate-800 mb-2 leading-tight">{misi.title}</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">{misi.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideArsitektur = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10 w-full h-full pb-8">
    {[
      { icon: <Users size={32} className="text-cyan-600" />, title: "Single Sign-On (SSO)", desc: "Satu akun warga berbasis NIK/Identitas Digital untuk akses seluruh ekosistem layanan tanpa batas.", bg: "bg-white", border: "border-cyan-100", ring: "ring-cyan-50", iconBg: "bg-cyan-50" },
      { icon: <Layers size={32} className="text-teal-600" />, title: "Middleware Interoperability", desc: "Jembatan API yang menghubungkan data antar-OPD secara otomatis, menghapus sekat birokrasi tradisional.", bg: "bg-white", border: "border-teal-100", ring: "ring-teal-50", iconBg: "bg-teal-50" },
      { icon: <Cpu size={32} className="text-emerald-600" />, title: "Big Data & AI Engine", desc: "Mesin analisis anda pendukung Executive Dashboard Kepala Daerah guna pengambilan keputusan cepat.", bg: "bg-white", border: "border-emerald-100", ring: "ring-emerald-50", iconBg: "bg-emerald-50" }
    ].map((item, idx) => (
      <motion.div
        key={idx}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`${item.bg} backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-slate-200/50 border ${item.border} flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/60`}
      >
        <div className={`${item.iconBg} p-5 rounded-2xl mb-6 shadow-sm ring-4 ${item.ring} group-hover:scale-110 transition-transform duration-300`}>
          {item.icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
        <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
      </motion.div>
    ))}
  </div>
);

const SlideIntegrasiOPD = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    <p className="text-slate-600 font-medium text-lg max-w-4xl leading-relaxed mb-6">
      Inti dari Majalengka Langkung Sae adalah <strong className="text-teal-600">Interoperabilitas API</strong>. Aplikasi ini menarik benang merah dari berbagai pangkalan data terpisah milik tiap Organisasi Perangkat Daerah (OPD) menjadi satu aliran informasi yang real-time dan akurat.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full pb-4">
      <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-cyan-50/30 p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
        <div className="flex items-center space-x-4 mb-6 relative z-10">
          <div className="bg-cyan-100/50 p-4 rounded-2xl ring-2 ring-cyan-200 group-hover:bg-cyan-200 transition-colors">
            <Network className="text-cyan-700" size={32} />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800">SILONDA Middleware</h3>
        </div>

        <ul className="space-y-4 text-slate-600 relative z-10">
          <li className="flex items-start">
            <CheckCircle2 className="text-cyan-500 mr-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed">Sistem Informasi Layanan Operasional Data Antar-lembaga (SILONDA) bertindak sebagai penerjemah antar aplikasi lama (Legacy System) OPD.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="text-cyan-500 mr-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed"><strong className="text-slate-800">API Gateway Terpusat:</strong> Disdukcapil (NIK), Dinkes (Rekam Medis), Bapenda (Pajak), dan Dinsos (Bansos) saling "berbicara" di belakang layar.</span>
          </li>
        </ul>

        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Network size={200} className="text-cyan-600" />
        </div>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-teal-50/30 p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
        <div className="flex items-center space-x-4 mb-6 relative z-10">
          <div className="bg-teal-100/50 p-4 rounded-2xl ring-2 ring-teal-200 group-hover:bg-teal-200 transition-colors">
            <RefreshCw className="text-teal-700" size={32} />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-800">Dampak Integrasi (Warga)</h3>
        </div>

        <ul className="space-y-4 text-slate-600 relative z-10">
          <li className="flex items-start">
            <CheckCircle2 className="text-teal-500 mr-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed"><strong className="text-slate-800">Zero Fotokopi KTP/KK:</strong> Warga cukup *login* ke Super App, otomatis data kependudukan langsung diverifikasi dari sistem Dukcapil.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle2 className="text-teal-500 mr-4 shrink-0 mt-0.5" />
            <span className="leading-relaxed"><strong className="text-slate-800">Layanan Otomatis:</strong> Bayi baru lahir di Puskesmas otomatis tercatat di KK, otomatis terdaftar di BPJS, dan langsung menerima KIA tanpa orang tua harus keliling dinas.</span>
          </li>
        </ul>

        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <RefreshCw size={200} className="text-teal-600" />
        </div>
      </motion.div>
    </div>
  </div>
);

const SlidePetaKerangka = () => (
  <div className="flex flex-col h-full items-center justify-start relative w-full pt-2 pb-8 w-full max-w-7xl mx-auto overflow-y-auto custom-scrollbar">
    <div className="w-full relative flex flex-col items-center">

      {/* Top Layer: Sumber Data OPD & BUMD (Exhaustive) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-3 mb-6">
        {[
          {
            category: "Pusat Kendali & Perencanaan",
            items: [
              { name: "Setda", data: "Tata Kelola & Kebijakan", icon: <Building2 size={14} className="text-slate-600" /> },
              { name: "Bappedalitbang", data: "Perencanaan & Riset", icon: <PieChart size={14} className="text-indigo-600" /> },
              { name: "BKPSDM", data: "Manajemen ASN", icon: <Users size={14} className="text-blue-600" /> },
              { name: "BKAD", data: "Aset & Keuangan Daerah", icon: <Database size={14} className="text-slate-700" /> },
              { name: "Diskominfo", data: "Pusat Data & Sandi", icon: <Wifi size={14} className="text-teal-600" /> }
            ],
            border: "border-slate-300", bg: "bg-slate-50/50"
          },
          {
            category: "Ekonomi, BUMD & Pangan",
            items: [
              { name: "Bapenda", data: "Pendapatan & Pajak", icon: <PiggyBank size={14} className="text-amber-500" /> },
              { name: "DPMPTSP", data: "Perizinan Terpadu", icon: <Briefcase size={14} className="text-emerald-600" /> },
              { name: "DKPP", data: "Pertanian & Perikanan", icon: <Sprout size={14} className="text-green-600" /> },
              { name: "DPKUKMP", data: "Koperasi & Industri", icon: <ShoppingBag size={14} className="text-rose-600" /> },
              { name: "BUMD (PDAM/BPR)", data: "Layanan Publik Daerah", icon: <CheckCircle2 size={14} className="text-blue-500" /> }
            ],
            border: "border-amber-200", bg: "bg-amber-50/30"
          },
          {
            category: "Pelayanan Dasar & Sosial",
            items: [
              { name: "Dinas Kesehatan", data: "Layanan Kesehatan", icon: <Stethoscope size={14} className="text-rose-600" /> },
              { name: "Dinas Pendidikan", data: "Pendidikan & SDM", icon: <GraduationCap size={14} className="text-indigo-500" /> },
              { name: "Disdukcapil", data: "Kependudukan", icon: <Users size={14} className="text-cyan-600" /> },
              { name: "Dinsos / DP3AKB", data: "Pemberdayaan & Sosial", icon: <HeartHandshake size={14} className="text-purple-500" /> },
              { name: "Disparbud", data: "Wisata & Budaya", icon: <MapPin size={14} className="text-amber-600" /> }
            ],
            border: "border-rose-200", bg: "bg-rose-50/30"
          },
          {
            category: "Infrastruktur & Keamanan",
            items: [
              { name: "PUTR / Disrumkimtan", data: "Infrastruktur Fisik", icon: <Layers size={14} className="text-slate-600" /> },
              { name: "Dishub / DLH", data: "Transportasi & LH", icon: <Car size={14} className="text-emerald-700" /> },
              { name: "BPBD / Satpol PP", data: "Kedaruratan & Trantib", icon: <Shield size={14} className="text-red-600" /> },
              { name: "Disnaker", data: "Ketenagakerjaan", icon: <Briefcase size={14} className="text-indigo-700" /> },
              { name: "26 Kecamatan", data: "Layanan Adwil", icon: <Map size={14} className="text-teal-600" /> }
            ],
            border: "border-teal-200", bg: "bg-teal-50/30"
          }
        ].map((sector, i) => (
          <motion.div key={i} whileHover={{ y: -2 }} className={`p-4 rounded-3xl border ${sector.border} ${sector.bg} shadow-sm z-20 flex flex-col transition-all`}>
            <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200/60 pb-1.5">{sector.category}</h5>
            <div className="grid grid-cols-1 gap-1.5 flex-grow">
              {sector.items.map((opd, j) => (
                <div key={j} className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-1.5 rounded-xl border border-white shadow-sm hover:border-teal-200 transition-colors cursor-default">
                  <div className="bg-white p-1.5 rounded-lg shadow-inner ring-1 ring-slate-100 shrink-0">{opd.icon}</div>
                  <div className="text-left overflow-hidden">
                    <h6 className="font-extrabold text-slate-800 text-[10px] leading-tight truncate">{opd.name}</h6>
                    <p className="text-[8px] text-slate-500 font-bold truncate opacity-80 uppercase tracking-tighter">{opd.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Middle Layer: Middleware API (Command Center) */}
      <motion.div whileHover={{ y: -5 }} className="w-full md:w-5/6 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 p-5 rounded-[40px] shadow-2xl shadow-teal-500/20 text-white text-center relative z-20 flex flex-col items-center border border-white/20 mb-6">
        <div className="bg-white/10 p-2.5 rounded-2xl ring-1 ring-white/30 mb-2 backdrop-blur-md">
          <Workflow size={24} className="text-white" />
        </div>
        <h3 className="text-xl font-black tracking-tight">Enterprise Service Bus (ESB) & Majalengka Data Lake</h3>
        <p className="text-teal-50 font-medium max-w-2xl text-[11px] opacity-90 leading-relaxed uppercase tracking-wider">
          Interoperabilitas API Tingkat Tinggi: Sinkronisasi Seluruh OPD & BUMD dalam Satu Ekosistem
        </p>
      </motion.div>

      {/* Bottom Layer: Front-End Super App MLS */}
      <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-2/3 bg-slate-900 px-8 py-5 rounded-[40px] shadow-2xl flex items-center justify-between z-20 border border-slate-700 relative overflow-hidden ring-4 ring-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none"></div>

        <div className="flex items-center space-x-6 relative z-10">
          <img src="/mls_logo_01.png" alt="Logo MLS" className="h-12 w-auto drop-shadow-lg" />
          <div className="text-left border-l border-slate-700 pl-6">
            <h3 className="text-2xl font-black text-white leading-none mb-1">Super App MLS</h3>
            <p className="text-teal-400 text-xs font-bold tracking-[0.2em] uppercase">Masyarakat Majalengka Sae</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-teal-400">OPD</div>)}
          </div>
          <div className="bg-teal-500/20 p-3 rounded-2xl ring-1 ring-teal-500/40 relative z-10">
            <Smartphone size={28} className="text-emerald-400" />
          </div>
        </div>
      </motion.div>

    </div>
  </div>
);

const SlideExecutiveOperationalDashboard = () => (
  <div className="flex flex-col h-full items-start pt-2 relative z-10 w-full pb-8">
    <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed mb-4 max-w-4xl">
      Fasilitas *Command Center* ringkas langsung di genggaman pimpinan daerah. Menampilkan indikator makro ekonomi, demografi sosial, realisasi investasi, hingga mitigasi bencana secara <i className="text-teal-600">Real-Time</i>.
    </p>

    {/* Dashboard Grid Container */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[65vh] overflow-y-auto pr-2 pb-6 custom-scrollbar">

      {/* Widget 1: Pendapatan PAD (Span 2) */}
      <motion.div whileHover={{ scale: 1.02 }} className="col-span-2 bg-gradient-to-br from-indigo-900 to-slate-900 p-5 rounded-3xl shadow-xl border border-slate-700 flex flex-col justify-between text-white relative overflow-hidden group">
        <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
          <Coins size={150} />
        </div>
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
              <Coins className="text-amber-400" size={20} />
            </div>
            <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wide">Pendapatan Asli Daerah (PAD)</h4>
          </div>
          <div className="text-3xl font-extrabold text-white">Rp 482,5 <span className="text-lg text-slate-400 font-medium">Miliar</span></div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
            <span>Realisasi Target 2026</span>
            <span className="text-emerald-400 font-bold">82.4%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-2 rounded-full w-[82.4%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
          </div>
        </div>
      </motion.div>

      {/* Macro 1: Pertumbuhan Investasi */}
      <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-3xl shadow-md border border-emerald-100 flex flex-col group">
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-emerald-100 p-2 rounded-xl group-hover:bg-emerald-200 transition-colors">
            <Building2 className="text-emerald-600" size={20} />
          </div>
          <h4 className="text-emerald-800 font-bold text-[10px] uppercase tracking-wide">Realisasi Investasi</h4>
        </div>
        <div className="text-2xl font-extrabold text-emerald-900 mb-1">Rp 1,2 T</div>
        <div className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-md w-fit mt-1">
          <TrendingUp size={12} className="mr-1" /> +15% (PMA & PMDN)
        </div>
        <p className="text-[10px] text-emerald-700/80 mt-auto leading-tight">Didominasi sektor Manufaktur & Padat Karya</p>
      </motion.div>

      {/* Macro 2: Inflasi Daerah */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col group">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-amber-50 p-2 rounded-xl group-hover:bg-amber-100 transition-colors">
            <Activity className="text-amber-500" size={20} />
          </div>
          <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wide">Inflasi (YoY)</h4>
        </div>
        <div className="text-2xl font-extrabold text-slate-800 mb-1">2,41%</div>
        <div className="flex items-center text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md w-fit">
          <TrendingDown size={12} className="mr-1" /> Terkendali
        </div>
        <p className="text-[10px] text-slate-400 mt-auto pt-2 border-t border-slate-50 leading-tight">Harga Bapokting (Survei Pasar Sindangkasih)</p>
      </motion.div>

      {/* Demografi 1: Penduduk */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-50 p-2 rounded-xl group-hover:bg-blue-100 transition-colors">
            <Users className="text-blue-500" size={20} />
          </div>
          <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wide">Total Penduduk</h4>
        </div>
        <div className="text-2xl font-extrabold text-slate-800 mb-1">1.33juta</div>
        <div className="w-full mt-2 flex space-x-1">
          <div className="h-1.5 bg-blue-500 w-[50.2%] rounded-l-full" title="Laki-laki 50.2%"></div>
          <div className="h-1.5 bg-rose-400 w-[49.8%] rounded-r-full" title="Perempuan 49.8%"></div>
        </div>
        <div className="flex justify-between text-[10px] font-medium text-slate-400 mt-1">
          <span>L: 50.2%</span>
          <span>P: 49.8%</span>
        </div>
      </motion.div>

      {/* Demografi 2: Pengangguran */}
      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col group">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-purple-50 p-2 rounded-xl group-hover:bg-purple-100 transition-colors">
            <Briefcase className="text-purple-500" size={20} />
          </div>
          <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wide">Pengangguran Terbuka</h4>
        </div>
        <div className="text-2xl font-extrabold text-slate-800 mb-1">4,12%</div>
        <div className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md w-fit">
          <TrendingDown size={12} className="mr-1" /> Turun 0.8%
        </div>
        <p className="text-[10px] text-slate-400 mt-auto leading-tight">Bursa kerja terintegrasi aplikasi berjalan lancar.</p>
      </motion.div>

      {/* Emergency: Early Warning System */}
      <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 bg-red-50 p-5 rounded-3xl shadow-lg shadow-red-100/50 border border-red-100 flex flex-col justify-between group">
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-red-100 p-2 rounded-xl animate-pulse">
            <AlertTriangle className="text-red-600" size={20} />
          </div>
          <h4 className="text-red-800 font-bold text-xs uppercase tracking-wide">Peringatan Dini (EWS) Cuaca & Bencana</h4>
        </div>
        <div className="bg-white p-3 rounded-xl border border-red-50 relative overflow-hidden flex items-start space-x-3">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
          <MapPin className="text-red-500 mt-1 shrink-0" size={16} />
          <div>
            <div className="text-red-700 font-bold text-sm mb-0.5">Siaga 2 Longsor - Kec. Argapura</div>
            <p className="text-xs text-slate-500 font-medium leading-tight">Curah hujan &gt;100mm/hari. *Broadcast* mitigasi otomatis tersentak ke HP warga radius 5KM via Super App.</p>
          </div>
        </div>
      </motion.div>

      {/* Operational: CCTV Kota */}
      <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 bg-slate-800 p-5 rounded-3xl shadow-lg border border-slate-700 flex flex-col group relative overflow-hidden">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-2">
            <Video className="text-slate-400" size={16} />
            <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wide">Pantauan Kamera AI (Trafik Keamanan)</h4>
          </div>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </div>
        <div className="flex-1 bg-black/50 rounded-xl rounded-tr-none border border-slate-700 relative flex items-center justify-center min-h-[90px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>

          {/* Simulated CCTV grids */}
          <div className="grid grid-cols-2 gap-1 w-full h-full p-1 opacity-60">
            <div className="bg-slate-900 border border-slate-800 rounded flex items-end p-1"><span className="text-[8px] text-emerald-400 font-mono">Bunderan Munjul</span></div>
            <div className="bg-slate-900 border border-slate-800 rounded flex items-end p-1"><span className="text-[8px] text-emerald-400 font-mono">Alun-Alun</span></div>
          </div>

          <div className="text-emerald-500 font-mono text-[10px] absolute top-2 right-2 border border-emerald-500/30 px-1 rounded bg-black/50 backdrop-blur-sm">LIVE RECOGNITION</div>
        </div>
      </motion.div>

      {/* Kinerja OPD (Span full on mobile, span half on big) */}
      <motion.div whileHover={{ scale: 1.01 }} className="col-span-2 lg:col-span-4 bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-between group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-indigo-50 p-2 rounded-xl group-hover:scale-110 transition-transform">
            <Activity className="text-indigo-500" size={20} />
          </div>
          <div className="flex flex-col">
            <h4 className="text-slate-700 font-bold text-xs tracking-wide">Leaderboard Kinerja & Serapan Instansi (IKU)</h4>
            <span className="text-[10px] text-slate-400">Pembaruan sistem SAKIP dan SIMDA secara terkonsolidasi</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-1"><span>1. Dinas Kesehatan</span> <span className="text-emerald-500">A (92/100)</span></div>
            <div className="w-full bg-slate-200 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[92%]"></div></div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-1"><span>2. Dinas Pendidikan</span> <span className="text-emerald-500">A (89/100)</span></div>
            <div className="w-full bg-slate-200 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[89%]"></div></div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-[10px] font-bold text-slate-700 mb-0.5">Total Keluhan Publik</div>
              <span className="text-xs text-rose-500 font-extrabold truncate">128 Kasus</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-slate-500">Tertangani</span>
              <span className="text-xs text-emerald-500 font-extrabold">65%</span>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
);

const SlideFiturInovasi = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    <p className="text-slate-600 font-medium text-lg max-w-4xl leading-relaxed mb-8">
      Majalengka Langkung Sae dirancang tidak hanya untuk hari ini, tapi sebagai platform masa depan yang mengintegrasikan berbagai teknologi mutakhir guna mempermudah kehidupan warga.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "AI Asisten Warga",
          desc: "Chatbot berbasis AI yang siap melayani tanya-jawab layanan publik, panduan administrasi, dan pengaduan 24/7.",
          icon: <Bot size={28} className="text-cyan-600" />,
          bg: "bg-cyan-50",
          border: "border-cyan-100"
        },
        {
          title: "IoT City Monitoring",
          desc: "Integrasi sensor pintar untuk pemantauan kualitas udara, banjir, lampu jalan, hingga pengelolaan sampah otomatis.",
          icon: <Zap size={28} className="text-amber-600" />,
          bg: "bg-amber-50",
          border: "border-amber-100"
        },
        {
          title: "Majalengka Pay",
          desc: "Sistem pembayaran digital terintegrasi untuk retribusi daerah, PBB, parkir, hingga belanja di merchant UMKM.",
          icon: <CreditCard size={28} className="text-emerald-600" />,
          bg: "bg-emerald-50",
          border: "border-emerald-100"
        },
        {
          title: "Digital E-Market",
          desc: "Pasar digital khusus produk lokal Majalengka, menghubungkan petani dan pengrajin langsung ke konsumen luas.",
          icon: <ShoppingBag size={28} className="text-rose-600" />,
          bg: "bg-rose-50",
          border: "border-rose-100"
        }
      ].map((fitur, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
          className={`bg-white p-6 rounded-3xl border ${fitur.border} shadow-sm flex flex-col items-start transition-all`}
        >
          <div className={`${fitur.bg} p-4 rounded-2xl mb-4`}>
            {fitur.icon}
          </div>
          <h3 className="text-lg font-extrabold text-slate-800 mb-2">{fitur.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">{fitur.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mt-10 p-6 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="bg-teal-500/20 p-3 rounded-2xl">
          <ShieldCheck className="text-teal-400" size={32} />
        </div>
        <div>
          <h4 className="text-white font-extrabold text-lg">Keamanan Data Terjamin</h4>
          <p className="text-slate-400 text-sm font-medium">Enkripsi End-to-End & Sertifikasi BSSN (Badan Siber dan Sandi Negara)</p>
        </div>
      </div>
      <div className="flex -space-x-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">
            {i === 4 ? "+50k" : ""}
          </div>
        ))}
        <span className="ml-5 text-teal-400 text-sm font-bold flex items-center">
          Warga Terintegrasi
        </span>
      </div>
    </motion.div>
  </div>
);

const SlideKetahananPangan = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
        <p className="text-slate-600 font-medium text-lg leading-relaxed">
          Majalengka sebagai lumbung pangan Jawa Barat mengintegrasikan teknologi untuk melindungi kesejahteraan petani dan stabilitas harga.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {[
            { title: "Monitoring Bapokting", desc: "Pantauan harga kebutuhan pokok real-time di 7 pasar induk Majalengka.", icon: <TrendingUp className="text-emerald-600" /> },
            { title: "Smart Farming IoT", desc: "Sensor cuaca dan kelembaban tanah untuk optimasi panen Mangga Gedong Gincu.", icon: <Zap className="text-amber-600" /> },
            { title: "Lahan Abadi GIS", desc: "Pemetaan Digital untuk proteksi Kawasan Pertanian Pangan Berkelanjutan (KP2B).", icon: <Map className="text-teal-600" /> }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
              <div className="bg-slate-50 p-3 rounded-xl">{item.icon}</div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm">{item.title}</h4>
                <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-emerald-900 rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-between text-white shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sprout size={160} />
        </div>

        <div className="relative z-10">
          <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20">
            <Wheat size={32} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Majalengka Agro Market</h3>
          <p className="text-emerald-50/80 text-sm leading-relaxed mb-6">
            Rantai pasok digital yang memutus mata rantai tengkulak. Petani Majalengka kini bisa menjual hasil bumi langsung ke konsumen atau pasar ritel nasional melalui ekosistem Super App.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">12.5%</div>
            <div className="text-[10px] text-emerald-200 uppercase font-bold">Kenaikan Pendapatan Petani</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">Low</div>
            <div className="text-[10px] text-emerald-200 uppercase font-bold">Stabilitas Harga Pangan</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const SlideKeamananData = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
        <p className="text-slate-600 font-medium text-lg leading-relaxed">
          Kami memahami bahwa <strong className="text-teal-600">Keamanan</strong> adalah pondasi kepercayaan publik. Majalengka Langkung Sae mengadopsi standar keamanan internasional untuk menjaga integritas data setiap individu.
        </p>

        <div className="space-y-4">
          {[
            { title: "Enkripsi End-to-End", desc: "Data sensitif warga dienkripsi sejak dari perangkat hingga tersimpan di server.", icon: <Lock className="text-teal-600" /> },
            { title: "Autentikasi Biometrik", desc: "Login aman menggunakan Sidik Jari atau Wajah untuk mencegah akses ilegal.", icon: <ShieldCheck className="text-teal-600" /> },
            { title: "Audit BSSN Berkala", desc: "Penilaian keamanan rutin oleh Badan Siber dan Sandi Negara.", icon: <Award className="text-teal-600" /> }
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className="bg-teal-50 p-2 rounded-xl shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm">{item.title}</h4>
                <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative bg-slate-900 rounded-[40px] p-8 overflow-hidden flex flex-col items-center justify-center text-center group">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
        <div className="relative z-10 w-32 h-32 bg-teal-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-teal-500/30 group-hover:scale-110 transition-transform duration-500">
          <ShieldCheck size={64} className="text-teal-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Cyber Security Center</h3>
        <p className="text-slate-400 text-sm max-w-xs relative z-10">Monitoring trafik dan anomali 24/7 oleh tim khusus Diskominfo Majalengka.</p>

        <div className="mt-8 grid grid-cols-2 gap-4 w-full relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
            <div className="text-teal-400 font-extrabold text-xl">100%</div>
            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Lokal Hosting</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
            <div className="text-teal-400 font-extrabold text-xl">Uptime</div>
            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">99.9% / Year</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const SlideLandasanHukum = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-start pt-6 relative z-10 w-full text-sm">
    {/* National Level */}
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full transition-transform">
      <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-slate-100">
        <div className={`bg-rose-50 p-3 rounded-2xl ring-1 ring-rose-100`}>
          <BookOpen className="text-rose-500" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-800">Tingkat Nasional</h3>
      </div>
      <ul className="space-y-4 text-slate-600">
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-rose-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-slate-800">UU No. 27/2022 (PDP):</strong> <br /> Pelindungan Data Pribadi warga.</span>
        </li>
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-rose-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-slate-800">UU No. 11/2008 & 1/2024 (ITE):</strong> <br /> Informasi dan Transaksi Elektronik.</span>
        </li>
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-rose-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-slate-800">Perpres No. 95/2018 (SPBE):</strong> <br /> Sistem Pemerintahan Berbasis Elektronik.</span>
        </li>
      </ul>
    </motion.div>

    {/* Presidential / Ministerial */}
    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full transition-transform">
      <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-slate-100">
        <div className={`bg-amber-50 p-3 rounded-2xl ring-1 ring-amber-100`}>
          <BookOpen className="text-amber-500" />
        </div>
        <h3 className="text-xl font-extrabold text-slate-800">Regulasi Pendukung</h3>
      </div>
      <ul className="space-y-4 text-slate-600">
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-slate-800">Perpres No. 39/2019:</strong> <br /> Kebijakan Satu Data Indonesia.</span>
        </li>
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-slate-800">Perpres No. 132/2022:</strong> <br /> Arsitektur SPBE Nasional.</span>
        </li>
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-slate-800">Permenkominfo No. 5/2020:</strong> <br /> Penyelenggara Sistem Elektronik (PSE).</span>
        </li>
      </ul>
    </motion.div>

    {/* Regional Strategy Level */}
    <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-3xl shadow-xl shadow-teal-900/10 border border-teal-100 flex flex-col h-full transition-transform">
      <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-teal-200/50">
        <div className={`bg-teal-500 p-3 rounded-2xl ring-1 ring-teal-400 shadow-sm`}>
          <BookOpen className="text-white" />
        </div>
        <h3 className="text-xl font-extrabold text-teal-900">Tingkat Daerah</h3>
      </div>
      <ul className="space-y-4 text-teal-800">
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-teal-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-teal-950 font-bold">Perda Kab. Majalengka No. 1/2025:</strong> <br /> Tata Kelola Ekosistem Digital Pemerintahan dan Super App Majalengka Langkung Sae.</span>
        </li>
        <li className="flex items-start">
          <span className={`w-2 h-2 mt-2 bg-teal-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
          <span className="leading-relaxed"><strong className="text-teal-950 font-bold">Perbup (Turunan):</strong> <br /> Pembentukan Dewan TIK dan Standar Operasional CSIRT Kabupaten Majalengka.</span>
        </li>
      </ul>
    </motion.div>
  </div>
);

const SlideInfrastruktur = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    <p className="text-slate-600 text-lg mb-8 max-w-3xl leading-relaxed bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
      Aplikasi hebat membutuhkan jalan yang mulus. Majalengka tidak hanya membangun perangkat lunak, tetapi juga menggelar karpet merah infrastruktur TIK untuk memastikan Super App selalu *online* tanpa lemot.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { icon: <Server size={32} className="text-cyan-600" />, title: "Data Center Daerah & DRC", desc: "Peningkatan spesifikasi *server* dan *storage* Command Center Diskominfo dengan DRC (Disaster Recovery Center) bersertifikasi ISO 27001.", color: "cyan" },
        { icon: <Wifi size={32} className="text-teal-600" />, title: "Backbone FO & Desa Cerdas", desc: "Perluasan jaringan *Fiber Optic* intra-pemerintah secara bertahap dan penyelesaian blank-spot di wilayah desa pinggiran (Kerjasama ISP Nasional).", color: "teal" },
        { icon: <Database size={32} className="text-emerald-600" />, title: "Cloud Hybrid Architecture", desc: "Menggabungkan *On-Premise Server* untuk data rahasia/vital dan *Public/Government Cloud* elastis untuk layanan statis tinggi *traffic*.", color: "emerald" }
      ].map((infra, idx) => (
        <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 border-t-4 hover:shadow-2xl transition-all" style={{ borderTopColor: `var(--tw-colors-${infra.color}-400, #38bdf8)` }}>
          <div className={`bg-${infra.color}-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 ring-4 ring-${infra.color}-100 shadow-sm`}>
            {infra.icon}
          </div>
          <h3 className="text-xl font-extrabold text-slate-800 mb-3">{infra.title}</h3>
          <p className="text-slate-600 font-medium leading-relaxed">{infra.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideKlaster12 = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start pt-6 relative z-10">
    <motion.div whileHover={{ scale: 1.01 }} className="space-y-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 p-8 rounded-3xl transition-transform">
      <div className="flex items-center space-x-4 border-b border-slate-100 pb-5">
        <div className="bg-emerald-50 p-4 rounded-2xl ring-1 ring-emerald-100"><Users className="text-emerald-500" size={28} /></div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800">Klaster I: Sejahtera</h3>
          <p className="text-sm text-emerald-600 font-bold tracking-wide uppercase mt-1">Sosial & SDM</p>
        </div>
      </div>
      <ul className="space-y-4">
        {[
          { title: "Majalengka Pintar:", desc: "Sistem seleksi beasiswa AI & LMS." },
          { title: "Sehat Bareng:", desc: "Telemedicine & Stunting Tracking real-time." },
          { title: "Ramah Keluarga:", desc: "Digital Crisis Portal perlindungan perempuan & anak." },
          { title: "Digitalisasi Religi:", desc: "Administrasi Guru Ngaji dan Marbot." }
        ].map((item, i) => (
          <li key={i} className="flex items-start group">
            <CheckCircle2 className="text-emerald-500 mr-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="text-slate-600"><span className="font-bold text-slate-800">{item.title}</span> {item.desc}</div>
          </li>
        ))}
      </ul>
    </motion.div>

    <motion.div whileHover={{ scale: 1.01 }} className="space-y-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 p-8 rounded-3xl transition-transform">
      <div className="flex items-center space-x-4 border-b border-slate-100 pb-5">
        <div className="bg-cyan-50 p-4 rounded-2xl ring-1 ring-cyan-100"><MapPin className="text-cyan-600" size={28} /></div>
        <div>
          <h3 className="text-2xl font-extrabold text-slate-800">Klaster II: Mulus & Terang</h3>
          <p className="text-sm text-cyan-600 font-bold tracking-wide uppercase mt-1">Infrastruktur</p>
        </div>
      </div>
      <ul className="space-y-4">
        {[
          { title: "URC Mobile Field App:", desc: "Lapor jalan rusak/drainase mampet via foto GPS." },
          { title: "Majalengka Caang:", desc: "Dashboard IoT kendali lampu jalan." },
          { title: "MaaS Kertajati Hub:", desc: "Integrasi angkutan dengan bandara BIJB." }
        ].map((item, i) => (
          <li key={i} className="flex items-start group">
            <CheckCircle2 className="text-cyan-500 mr-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <div className="text-slate-600"><span className="font-bold text-slate-800">{item.title}</span> {item.desc}</div>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

const SlideKlaster345 = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start pt-4 relative z-10 w-full text-sm">
    {[
      {
        title: "Berdikari", icon: <Briefcase className="text-cyan-500" />, bgIcon: "bg-cyan-50", ring: "ring-cyan-100", color: "bg-cyan-500", items: [
          { strong: "Kertajati Bekerja:", text: "AI Labor Market match." },
          { strong: "UMKM Go Digital:", text: "E-commerce & ERP lokal." },
          { strong: "Wisata Juara:", text: "AR Tourism Map interaktif." }
        ]
      },
      {
        title: "Terbuka", icon: <Layout className="text-teal-500" />, bgIcon: "bg-teal-50", ring: "ring-teal-100", color: "bg-teal-500", items: [
          { strong: "Omnichannel:", text: "Integrasi keluhan WA, IG, Web." },
          { strong: "Gen-AI Chatbot:", text: "Asisten virtual 24 jam." },
          { strong: "Blockchain E-Office:", text: "Persuratan aman & presensi." }
        ]
      },
      {
        title: "Bersih", icon: <Shield className="text-emerald-500" />, bgIcon: "bg-emerald-50", ring: "ring-emerald-100", color: "bg-emerald-500", items: [
          { strong: "Pajak Tepat:", text: "AI Drone/Satelit untuk PBB." },
          { strong: "Cloud Tapping Box:", text: "Cegah kebocoran pajak hotel." },
          { strong: "E-Audit AI:", text: "Deteksi anomali anggaran." }
        ]
      }
    ].map((klaster, idx) => (
      <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full transition-transform">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`${klaster.bgIcon} p-3 rounded-2xl ring-1 ${klaster.ring}`}>{klaster.icon}</div>
          <h3 className="text-xl font-extrabold text-slate-800">Klaster {idx + 3}: {klaster.title}</h3>
        </div>
        <ul className="space-y-5 text-slate-600">
          {klaster.items.map((item, i) => (
            <li key={i} className="flex items-start bg-slate-50/50 p-2 rounded-xl">
              <span className={`w-2 h-2 mt-1.5 ${klaster.color} rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-slate-800">{item.strong}</strong> <br className="hidden lg:block" /> {item.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
);

const SlideLayananInformasi = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 h-full relative z-10 w-full">
    {/* Kolom Kiri: Layanan Publik & e-Payment */}
    <div className="space-y-6">
      <motion.div whileHover={{ x: 5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-cyan-50 p-4 rounded-2xl ring-1 ring-cyan-100 group-hover:bg-cyan-100 transition-colors"><FileText className="text-cyan-600" size={24} /></div>
          <h3 className="text-xl font-extrabold text-slate-800">Administrasi Publik</h3>
        </div>
        <p className="text-slate-600 font-medium ml-[4.5rem] leading-relaxed">Pengurusan dokumen kependudukan, perizinan usaha, dan surat keterangan secara digital tanpa antre.</p>
      </motion.div>

      <motion.div whileHover={{ x: 5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-teal-50 p-4 rounded-2xl ring-1 ring-teal-100 group-hover:bg-teal-100 transition-colors"><CreditCard className="text-teal-600" size={24} /></div>
          <h3 className="text-xl font-extrabold text-slate-800">Majalengka Pay (E-Payment)</h3>
        </div>
        <p className="text-slate-600 font-medium ml-[4.5rem] leading-relaxed">Sistem pembayaran retribusi daerah, tagihan PDAM, PBB, hingga transaksi pasar tradisional via QRIS lokal.</p>
      </motion.div>
    </div>

    {/* Kolom Rangkuman: Pusat Informasi & Interaksi */}
    <div className="space-y-6">
      <motion.div whileHover={{ x: -5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-emerald-50 p-4 rounded-2xl ring-1 ring-emerald-100 group-hover:bg-emerald-100 transition-colors"><Info className="text-emerald-600" size={24} /></div>
          <h3 className="text-xl font-extrabold text-slate-800">Portal Informasi Real-time</h3>
        </div>
        <ul className="space-y-2 font-medium text-slate-600 ml-[4.5rem] list-disc pl-4 leading-relaxed">
          <li>Pembaruan harga komoditas pangan pasar.</li>
          <li>Informasi cuaca khusus pertanian.</li>
          <li>Jadwal event budaya & loker Purna-TKI.</li>
        </ul>
      </motion.div>

      <motion.div whileHover={{ x: -5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-green-50 p-4 rounded-2xl ring-1 ring-green-100 group-hover:bg-green-100 transition-colors"><MessageSquare className="text-green-600" size={24} /></div>
          <h3 className="text-xl font-extrabold text-slate-800">Ruang Partisipasi Warga</h3>
        </div>
        <p className="text-slate-600 font-medium ml-[4.5rem] leading-relaxed">Fitur e-Polling pelibatan warga dalam perencanaan desa & diskusi terbuka bersama dinas terkait.</p>
      </motion.div>
    </div>
  </div>
);

const SlideRoadmap = () => (
  <div className="w-full mt-2 flex justify-center relative z-10 w-full h-[65vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-transparent pb-10">
    <div className="w-full max-w-4xl relative pb-10">
      <div className="absolute left-[47px] top-6 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-teal-400 to-emerald-400 opacity-60"></div>

      {[
        { year: "2025", title: "Fondasi & Integrasi", desc: "Pembangunan Command Center, SSO, & Peluncuran Beta (Modul Kesehatan/Pengaduan).", color: "bg-cyan-500", border: "border-cyan-200" },
        { year: "2026", title: "Ekspansi Infrastruktur", desc: "Digitalisasi Desa (Paperless Village), IoT Penerangan Jalan, dan penyelesaian Backbone FO.", color: "bg-teal-400", border: "border-teal-200" },
        { year: "2027", title: "Transformasi Ekonomi", desc: "Peluncuran tahap pertama AI Labor Market Kertajati Bekerja & Inkubator Startup Pemuda.", color: "bg-teal-500", border: "border-teal-300" },
        { year: "2028", title: "Kematangan AI", desc: "Aktivasi AI Manajemen Trafik, Algoritma Deteksi Hoax massal, dan Decision Support System interaktif.", color: "bg-emerald-400", border: "border-emerald-200" },
        { year: "2029", title: "Smart Regency Total", desc: "Integrasi penuh; Majalengka ditahbiskan sebagai rujukan utama platform Smart City Data Driven level nasional.", color: "bg-emerald-600", border: "border-emerald-300" },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15 }}
          whileHover={{ scale: 1.02, x: 10 }}
          className="relative flex items-center mb-6 last:mb-0 group cursor-default"
        >
          <div className={`w-24 h-16 shrink-0 rounded-2xl bg-white flex items-center justify-center text-slate-800 font-extrabold text-xl shadow-md z-10 border border-slate-100 ring-4 ring-white group-hover:ring-${item.color.split('-')[1]}-100 transition-all`}>
            <span className={`w-3 h-3 rounded-full ${item.color} mr-2 shadow-sm`}></span>
            {item.year}
          </div>
          <div className={`ml-8 bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-100 flex-1 border-l-4 ${item.border}`}>
            <h4 className="text-xl font-extrabold text-slate-800">{item.title}</h4>
            <p className="text-slate-600 font-medium mt-2">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideKeamananKeberlanjutan = () => (
  <div className="flex flex-col md:flex-row items-stretch justify-center h-full gap-8 relative z-10 w-full mt-6 pb-12">
    <motion.div whileHover={{ y: -10 }} className="flex-1 bg-white border border-slate-100 p-10 rounded-3xl shadow-xl shadow-slate-200/70 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110">
        <Shield size={180} className="text-teal-600" />
      </div>

      <div className="bg-teal-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ring-1 ring-teal-100">
        <Shield className="text-teal-500" size={40} />
      </div>
      <h2 className="text-3xl font-extrabold mb-4 text-slate-800">SOC & CSIRT</h2>
      <p className="text-slate-600 font-medium text-lg leading-relaxed">
        Pembentukan operasional Security Operations Center & Computer Security Incident Response Team untuk menjaga kedaulatan dan keamanan privasi data warga dari ancaman siber 24 jam penuh tanpa diinterupsi.
      </p>
    </motion.div>

    <motion.div whileHover={{ y: -10 }} className="flex-1 bg-gradient-to-br from-teal-600 to-emerald-700 border border-transparent p-10 rounded-3xl shadow-2xl shadow-emerald-900/20 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
        <Globe size={180} className="text-white" />
      </div>

      <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm ring-1 ring-white/30">
        <Globe className="text-white" size={40} />
      </div>
      <h2 className="text-3xl font-extrabold mb-4 text-white">Kedaulatan Data</h2>
      <p className="text-teal-50 font-medium text-lg leading-relaxed">
        Seluruh data dienkripsi dengan standar militer (at-rest & in-transit) dan disimpan di infrastruktur daerah yang terhubung langsung dengan Pusat Data Nasional (PDN) mematuhi mandat privasi BSSN.
      </p>
    </motion.div>
  </div>
);

const SlideMockup = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between h-full relative z-10 w-full gap-12 pt-4">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="lg:w-1/2 space-y-8"
    >
      <div className="space-y-4">
        <h3 className="text-4xl font-extrabold text-slate-800 leading-tight">
          Satu Genggaman untuk <span className="text-teal-600">Semua Layanan</span>
        </h3>
        <p className="text-slate-600 font-medium text-lg leading-relaxed">
          Didesain dengan pendekatan <strong className="text-slate-800 font-bold">User-Centric</strong>, memastikan kemudahan akses bagi seluruh lapisan masyarakat Majalengka, dari petani hingga pelaku usaha.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "Clean UI/UX", desc: "Navigasi intuitif dengan palet warna yang menenangkan.", icon: <Smartphone className="text-teal-600" /> },
          { title: "Quick Access", desc: "Akses fitur utama kurang dari 3 kali klik.", icon: <Zap className="text-teal-600" /> },
          { title: "Data Driven", desc: "Personalisasi layanan berdasarkan kebutuhan warga.", icon: <Globe size={20} className="text-teal-600" /> },
          { title: "Inklusif", desc: "Mendukung fitur aksesibilitas bagi semua warga.", icon: <Users size={20} className="text-teal-600" /> }
        ].map((item, i) => (
          <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-3xl shadow-sm border border-slate-50">
            <div className="bg-teal-50 p-2 rounded-xl shrink-0">{item.icon}</div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="lg:w-1/2 flex justify-center"
    >
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 rounded-[60px] blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-70"></div>
        <img
          src="/majalengka_superapp_mockup_1773070339752.png"
          alt="Mobile App Mockup"
          className="relative w-full max-w-sm h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[40px] transform group-hover:rotate-1 transition-transform duration-500"
        />
      </div>
    </motion.div>
  </div>
);


const SlideSistemInternalOPD = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-2">
    <p className="text-slate-600 font-medium text-base leading-relaxed mb-6 max-w-4xl">
      Seluruh OPD terhubung melalui <strong className="text-teal-600">Single Sign-On (SSO) Internal</strong> ke ekosistem digital terpadu, memastikan perencanaan, penganggaran, dan monitoring berjalan sinkron secara real-time.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pb-6 custom-scrollbar">
      {[
        {
          title: "E-Planning (SIPD)",
          desc: "Sistem Informasi Perencanaan Daerah terintegrasi Nasional. Seluruh OPD menyusun RKPD, Renstra, dan Renja dalam satu platform terpadu.",
          icon: <PieChart size={28} className="text-indigo-600" />,
          bg: "bg-indigo-50",
          border: "border-indigo-100"
        },
        {
          title: "E-Budgeting (SIMDA)",
          desc: "Penyusunan RKA-SKPD hingga DPA secara digital. Otomasi penganggaran berbasis kinerja dengan validasi lintas-sistem.",
          icon: <Coins size={28} className="text-amber-600" />,
          bg: "bg-amber-50",
          border: "border-amber-100"
        },
        {
          title: "E-Monitoring & Evaluasi",
          desc: "Dashboard capaian kinerja tiap OPD secara real-time. Integrasi SAKIP, LKJIP, dan E-Monev APBD dalam satu tampilan.",
          icon: <Activity size={28} className="text-emerald-600" />,
          bg: "bg-emerald-50",
          border: "border-emerald-100"
        },
        {
          title: "SSO Internal OPD",
          desc: "Satu akun ASN untuk akses seluruh sistem: e-Office, SIMPEG, SIMDA, absensi, dan aplikasi internal lainnya.",
          icon: <Lock size={28} className="text-teal-600" />,
          bg: "bg-teal-50",
          border: "border-teal-100"
        },
        {
          title: "E-Procurement (SPSE)",
          desc: "Sistem Pengadaan Secara Elektronik terintegrasi LKPP. Transparansi lelang dan pengadaan barang/jasa daerah.",
          icon: <ShoppingBag size={28} className="text-cyan-600" />,
          bg: "bg-cyan-50",
          border: "border-cyan-100"
        },
        {
          title: "SIMPEG & Presensi Digital",
          desc: "Manajemen kepegawaian ASN terpadu: data pegawai, kenaikan pangkat, mutasi, dan presensi biometrik/GPS.",
          icon: <Users size={28} className="text-blue-600" />,
          bg: "bg-blue-50",
          border: "border-blue-100"
        }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
          className={`bg-white p-6 rounded-[32px] border ${item.border} shadow-sm flex flex-col items-start transition-all group`}
        >
          <div className={`${item.bg} p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
            {item.icon}
          </div>
          <h3 className="text-lg font-black text-slate-800 mb-2 leading-tight">{item.title}</h3>
          <p className="text-xs font-medium text-slate-500 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mt-auto p-5 bg-gradient-to-r from-slate-800 to-slate-900 rounded-[32px] border border-slate-700 flex items-center justify-between text-white"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-teal-500/20 p-3 rounded-2xl">
          <Network className="text-teal-400" size={28} />
        </div>
        <div>
          <h4 className="font-extrabold text-lg">Interoperabilitas Total</h4>
          <p className="text-slate-400 text-xs font-medium">Seluruh sistem OPD tersinkronisasi via Enterprise Service Bus (ESB) Majalengka Data Lake</p>
        </div>
      </div>
      <div className="bg-teal-500/20 px-4 py-2 rounded-xl border border-teal-500/30 text-teal-400 text-xs font-black uppercase tracking-wider hidden md:block">
        Real-Time Sync
      </div>
    </motion.div>
  </div>
);

const SlidePaperlessOffice = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
      {/* Left: Paperless Features */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <p className="text-slate-600 font-medium text-lg leading-relaxed">
          Transformasi birokrasi menuju <strong className="text-teal-600">Zero Paper Administration</strong> — seluruh alur persuratan, disposisi, dan persetujuan dilakukan secara digital dengan keabsahan hukum penuh.
        </p>

        <div className="space-y-4">
          {[
            {
              title: "Tanda Tangan Elektronik (TTE)",
              desc: "Sertifikat digital berbasis BSrE (Badan Siber dan Sandi Negara) untuk keabsahan dokumen setara tanda tangan basah.",
              icon: <Award className="text-indigo-600" />
            },
            {
              title: "E-Office & Disposisi Digital",
              desc: "Surat masuk/keluar, nota dinas, dan disposisi pimpinan 100% paperless. Tracking real-time status dokumen.",
              icon: <FileText className="text-teal-600" />
            },
            {
              title: "E-Arsip Terintegrasi",
              desc: "Digitalisasi arsip daerah dengan sistem klasifikasi otomatis AI. Pencarian dokumen instan dari seluruh OPD.",
              icon: <Database className="text-cyan-600" />
            },
            {
              title: "Approval Workflow Engine",
              desc: "Alur persetujuan berlapis (multi-level) yang otomatis sesuai SOP, dari Kabid hingga Kepala Dinas dan Sekda.",
              icon: <Workflow className="text-emerald-600" />
            }
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-4 bg-white p-5 rounded-[28px] border border-slate-100 shadow-sm hover:border-teal-200 transition-colors group">
              <div className="bg-slate-50 p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Impact Visual */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-gradient-to-br from-teal-700 to-emerald-800 rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-between text-white shadow-2xl"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <FileText size={160} />
        </div>

        <div className="relative z-10 mb-8">
          <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20">
            <FileText size={32} className="text-teal-300" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Dampak Paperless Office</h3>
          <p className="text-teal-50/80 text-sm leading-relaxed">
            Efisiensi birokrasi meningkat drastis. Dokumen yang sebelumnya membutuhkan waktu berhari-hari kini selesai dalam hitungan menit melalui ekosistem digital terpadu.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">90%</div>
            <div className="text-[10px] text-emerald-200 uppercase font-bold">Pengurangan Kertas</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">5x</div>
            <div className="text-[10px] text-emerald-200 uppercase font-bold">Lebih Cepat</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-[10px] text-emerald-200 uppercase font-bold">Legal & Sah BSrE</div>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <div className="text-2xl font-bold text-emerald-400">24/7</div>
            <div className="text-[10px] text-emerald-200 uppercase font-bold">Akses Dokumen</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const SlideCommandCenter = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-2 pb-4">
    <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-4 max-w-4xl">
      Pusat kendali strategis langsung di genggaman <strong className="text-teal-600">Bupati &amp; Wakil Bupati</strong>. Seluruh indikator kunci daerah terkonsolidasi dalam satu tampilan real-time untuk pengambilan keputusan cepat dan akurat.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-y-auto pb-6 custom-scrollbar">
      <motion.div whileHover={{ scale: 1.02 }} className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-5 sm:p-6 rounded-[28px] shadow-2xl text-white relative overflow-hidden group">
        <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
          <Coins size={150} />
        </div>
        <div className="flex items-center space-x-3 mb-3 relative z-10">
          <div className="bg-amber-500/20 p-2.5 rounded-xl backdrop-blur-md">
            <Coins className="text-amber-400" size={22} />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">Realisasi APBD 2026</h4>
            <p className="text-slate-400 text-[10px]">Pendapatan &bull; Belanja &bull; Pembiayaan</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 relative z-10 mt-4">
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">PAD</div>
            <div className="text-lg sm:text-xl font-black text-amber-400">Rp 482M</div>
            <div className="text-[10px] text-emerald-400 font-bold mt-1">82.4% Target</div>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Belanja</div>
            <div className="text-lg sm:text-xl font-black text-cyan-400">Rp 3.2T</div>
            <div className="text-[10px] text-amber-400 font-bold mt-1">68.1% Serapan</div>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">SiLPA</div>
            <div className="text-lg sm:text-xl font-black text-emerald-400">Rp 85M</div>
            <div className="text-[10px] text-slate-400 font-bold mt-1">Terkendali</div>
          </div>
        </div>
        <div className="mt-4 relative z-10">
          <div className="flex justify-between text-[10px] text-slate-400 font-bold mb-1">
            <span>Serapan Anggaran Total</span>
            <span className="text-emerald-400">68.1%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-2 rounded-full w-[68%] shadow-[0_0_10px_rgba(52,211,153,0.4)]"></div>
          </div>
        </div>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[28px] shadow-xl border border-slate-100 flex flex-col group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-teal-50 p-2.5 rounded-xl">
            <Globe className="text-teal-600" size={20} />
          </div>
          <h4 className="text-slate-800 font-black text-xs uppercase tracking-tight">Status E-Gov Services</h4>
        </div>
        <div className="space-y-3 flex-1">
          {[
            { name: "SSO & Login", status: "Online", color: "bg-emerald-500" },
            { name: "E-Office", status: "Online", color: "bg-emerald-500" },
            { name: "Pengaduan", status: "Online", color: "bg-emerald-500" },
            { name: "E-Budgeting", status: "Maintenance", color: "bg-amber-500" },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">{s.name}</span>
              <div className="flex items-center space-x-1.5">
                <span className={`w-2 h-2 rounded-full ${s.color}`}></span>
                <span className="font-bold text-slate-700">{s.status}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] text-emerald-600 font-bold">
          Uptime: 99.9% (30 hari terakhir)
        </div>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-cyan-50 to-teal-50 p-5 rounded-[28px] shadow-xl border border-cyan-100 flex flex-col group">
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-cyan-100 p-2.5 rounded-xl">
            <Map className="text-cyan-700" size={20} />
          </div>
          <h4 className="text-slate-800 font-black text-xs uppercase tracking-tight">Sebaran Proyek Aktif</h4>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          {[
            { kec: "Majalengka", jumlah: 24 },
            { kec: "Kadipaten", jumlah: 18 },
            { kec: "Kertajati", jumlah: 31 },
            { kec: "Jatiwangi", jumlah: 15 },
          ].map((k, i) => (
            <div key={i} className="bg-white/70 p-2.5 rounded-xl border border-cyan-100">
              <div className="text-[10px] text-slate-500 font-bold uppercase">{k.kec}</div>
              <div className="text-lg font-black text-slate-800">{k.jumlah}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[10px] text-cyan-700 font-bold">Total: 156 Proyek di 26 Kecamatan</div>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-[28px] shadow-xl border border-slate-100 flex flex-col group">
        <div className="flex items-center space-x-3 mb-3">
          <div className="bg-rose-50 p-2.5 rounded-xl">
            <Megaphone className="text-rose-600" size={20} />
          </div>
          <h4 className="text-slate-800 font-black text-xs uppercase tracking-tight">Aspirasi &amp; Pengaduan</h4>
        </div>
        <div className="space-y-3 flex-1">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-2xl font-black text-slate-800">1,248</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">Total Laporan (2026)</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-black text-emerald-600">89%</div>
              <div className="text-[10px] text-slate-400 font-bold">Tertangani</div>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-[89%]"></div>
          </div>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.01 }} className="sm:col-span-2 lg:col-span-3 bg-white p-5 rounded-[28px] shadow-xl border border-slate-100 flex flex-col group">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-50 p-2.5 rounded-xl">
              <Activity className="text-indigo-500" size={20} />
            </div>
            <div>
              <h4 className="text-slate-700 font-bold text-xs tracking-wide">Leaderboard Kinerja Instansi (IKU)</h4>
              <span className="text-[10px] text-slate-400">SAKIP &amp; SIMDA terkonsolidasi</span>
            </div>
          </div>
          <span className="text-[10px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase hidden sm:inline-block">Live</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { name: "Dinkes", score: 92, grade: "A" },
            { name: "Disdik", score: 89, grade: "A" },
            { name: "Diskominfo", score: 87, grade: "A" },
            { name: "DPMPTSP", score: 85, grade: "B+" },
            { name: "Bapenda", score: 83, grade: "B+" },
          ].map((opd, i) => (
            <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-1">
                <span className="truncate">{i + 1}. {opd.name}</span>
                <span className="text-emerald-500 shrink-0 ml-1">{opd.grade}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${opd.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

const SlideEarlyWarning = () => (
  <div className="flex flex-col h-full relative z-10 w-full mt-2 pb-4">
    <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-4 max-w-4xl">
      Sistem peringatan dini dan respons kedaruratan terintegrasi langsung ke dashboard Kepala Daerah. Notifikasi otomatis dan protokol eskalasi berbasis AI memastikan respons <strong className="text-red-600">kurang dari 15 menit</strong>.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 overflow-y-auto pb-6 custom-scrollbar">
      <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-red-50 to-orange-50 p-5 sm:p-6 rounded-[28px] shadow-xl border border-red-100 flex flex-col group relative overflow-hidden">
        <div className="absolute -right-6 -top-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <AlertTriangle size={120} />
        </div>
        <div className="flex items-center space-x-3 mb-4 relative z-10">
          <div className="bg-red-100 p-3 rounded-xl">
            <AlertTriangle className="text-red-600" size={22} />
          </div>
          <div>
            <h4 className="text-red-900 font-black text-sm">Early Warning System (EWS)</h4>
            <p className="text-red-600 text-[10px] font-bold uppercase tracking-wider">Cuaca &bull; Banjir &bull; Longsor &bull; Gempa</p>
          </div>
        </div>
        <div className="space-y-3 relative z-10">
          {[
            { lokasi: "Kec. Argapura", status: "Siaga 2", detail: "Curah hujan >100mm/hari. Broadcast mitigasi otomatis ke 5KM radius.", level: "bg-red-500" },
            { lokasi: "Kec. Lemahsugih", status: "Waspada", detail: "Level sungai naik 40cm. Monitoring sensor IoT aktif.", level: "bg-amber-500" },
            { lokasi: "Kec. Bantarujeg", status: "Normal", detail: "Semua sensor dalam batas aman. Patroli rutin berjalan.", level: "bg-emerald-500" },
          ].map((alert, i) => (
            <div key={i} className="bg-white p-3 rounded-xl border border-red-50 relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${alert.level}`}></div>
              <div className="ml-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-slate-800">{alert.lokasi}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${alert.level}`}>{alert.status}</span>
                </div>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">{alert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-slate-900 p-5 sm:p-6 rounded-[28px] shadow-2xl text-white flex flex-col group relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">
              <Video className="text-slate-300" size={20} />
            </div>
            <div>
              <h4 className="text-white font-black text-sm">Pantauan CCTV AI</h4>
              <p className="text-slate-400 text-[10px] font-bold uppercase">Trafik &bull; Keamanan &bull; Bencana</p>
            </div>
          </div>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1 mb-4">
          {["Bunderan Munjul", "Alun-Alun", "Bandara BIJB", "Pasar Talaga"].map((loc, i) => (
            <div key={i} className="bg-black/40 border border-slate-700 rounded-xl flex items-end p-2 min-h-[60px] relative">
              <div className="absolute top-1.5 right-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
              </div>
              <span className="text-[9px] text-emerald-400 font-mono">{loc}</span>
            </div>
          ))}
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between">
          <div className="text-[10px] text-slate-400">
            <span className="font-bold text-white">48</span> Kamera Aktif
          </div>
          <div className="text-emerald-400 text-[10px] font-mono bg-black/30 px-2 py-0.5 rounded border border-emerald-500/30">LIVE</div>
        </div>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-white p-5 sm:p-6 rounded-[28px] shadow-xl border border-slate-100 flex flex-col group">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-indigo-50 p-2.5 rounded-xl">
            <ArrowRightCircle className="text-indigo-600" size={20} />
          </div>
          <h4 className="text-slate-800 font-black text-sm">Protokol Eskalasi Otomatis</h4>
        </div>
        <div className="space-y-3">
          {[
            { step: 1, label: "Sensor IoT / Laporan Warga", time: "0 Detik", color: "bg-blue-500" },
            { step: 2, label: "Notifikasi OPD + BPBD", time: "< 5 Menit", color: "bg-cyan-500" },
            { step: 3, label: "Alert Dashboard Bupati/Wabup", time: "< 10 Menit", color: "bg-teal-500" },
            { step: 4, label: "Broadcast Warga via Super App", time: "< 15 Menit", color: "bg-emerald-500" },
          ].map((p, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-full ${p.color} text-white flex items-center justify-center text-xs font-black shrink-0`}>{p.step}</div>
              <div className="flex-1 bg-slate-50 p-2.5 rounded-xl">
                <div className="text-xs font-bold text-slate-700">{p.label}</div>
              </div>
              <span className="text-[10px] font-black text-slate-400 shrink-0">{p.time}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-teal-700 to-emerald-800 p-5 sm:p-6 rounded-[28px] shadow-2xl text-white flex flex-col group relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 opacity-10">
          <Shield size={120} />
        </div>
        <div className="flex items-center space-x-3 mb-4 relative z-10">
          <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">
            <Shield className="text-emerald-300" size={20} />
          </div>
          <h4 className="text-white font-black text-sm">Statistik Kedaruratan 2026</h4>
        </div>
        <div className="grid grid-cols-2 gap-3 flex-1 relative z-10">
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl font-black text-emerald-400">23</div>
            <div className="text-[10px] text-emerald-200 font-bold uppercase">Kejadian Tertangani</div>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl font-black text-emerald-400">&lt;12m</div>
            <div className="text-[10px] text-emerald-200 font-bold uppercase">Avg Response Time</div>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl font-black text-emerald-400">0</div>
            <div className="text-[10px] text-emerald-200 font-bold uppercase">Korban Jiwa</div>
          </div>
          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
            <div className="text-2xl font-black text-emerald-400">100%</div>
            <div className="text-[10px] text-emerald-200 font-bold uppercase">Evakuasi Berhasil</div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
// Data Slides
const slides = [
  {
    id: "cover",
    title: "",
    subtitle: "",
    content: <SlideCover />,
    icon: <Smartphone className="text-teal-500" />,
  },
  {
    id: "majalengka-profile",
    title: "Profil Majalengka (The Hub of West Java)",
    subtitle: "Mengenal Potensi dan Visi Strategis Daerah",
    content: <SlideMajalengkaProfile />,
    icon: <Landmark className="text-emerald-500" />,
  },
  {
    id: "executive-macro-dashboard",
    title: "Executive Macro Dashboard",
    subtitle: "Indikator Utama Pembangunan & Capaian Sektoral (Real-Time)",
    content: <SlideExecutiveMacroDashboard />,
    icon: <PieChart className="text-cyan-500" />,
  },
  {
    id: "command-center",
    title: "Pusat Kendali Makro Bupati & Wakil Bupati",
    subtitle: "APBD, Kinerja OPD, E-Gov Status & Aspirasi Publik Real-Time",
    content: <SlideCommandCenter />,
    icon: <LayoutDashboard className="text-indigo-500" />,
  },
  {
    id: "early-warning",
    title: "Sistem Kedaruratan & Early Warning",
    subtitle: "Pemantauan Bencana, CCTV AI & Protokol Eskalasi Otomatis",
    content: <SlideEarlyWarning />,
    icon: <AlertTriangle className="text-red-500" />,
  },
  {
    id: "janji-politik",
    title: "Visi & Janji Politik Pimpinan",
    subtitle: "H. Eman Suherman, S.H. & Dena Muhamad Ramdhan",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 relative z-10 w-full h-full pb-8">
        <motion.div whileHover={{ scale: 1.01 }} className="space-y-6 bg-gradient-to-br from-indigo-700 to-teal-800 p-8 rounded-[40px] shadow-2xl shadow-indigo-900/20 text-white relative overflow-hidden flex flex-col justify-center border border-white/10">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Award size={180} className="text-white" />
          </div>

          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-white/30 backdrop-blur-md">
            <Sparkles className="text-white" size={32} />
          </div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-2">Visi Utama Pimpinan</h3>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Majalengka <span className="text-teal-300">Langkung Sae</span>
          </h2>
          <p className="text-indigo-50 text-lg leading-relaxed font-medium opacity-90">
            "Menghadirkan pemerintahan yang responsif terhadap kebutuhan masyarakat melalui optimalisasi reformasi birokrasi yang kolaboratif dan inovatif."
          </p>
          <div className="flex items-center space-x-3 mt-4 text-teal-200 text-xs font-bold">
            <div className="px-4 py-1.5 bg-white/10 rounded-full border border-white/10">Janji Politik Prioritas</div>
            <div className="px-4 py-1.5 bg-white/10 rounded-full border border-white/10">Amanat Rakyat</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 flex flex-col justify-center">
          {[
            {
              title: "Reformasi Birokrasi Total",
              desc: "Penyederhanaan perizinan dan layanan publik 100% digital & transparan.",
              icon: <Zap size={24} className="text-amber-500" />,
              bg: "bg-amber-50"
            },
            {
              title: "Kedaulatan Ekonomi",
              desc: "Proteksi UMKM lokal dan penciptaan lapangan kerja berbasis industri kreatif.",
              icon: <TrendingUp size={24} className="text-emerald-600" />,
              bg: "bg-emerald-50"
            },
            {
              title: "Pemerataan Keadilan",
              desc: "Infrastruktur menyentuh pelosok desa dan bantuan sosial yang tepat sasaran.",
              icon: <Shield size={24} className="text-blue-600" />,
              bg: "bg-blue-50"
            }
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ x: 10, scale: 1.02 }} className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex items-center group transition-all duration-300 ring-1 ring-slate-100/50">
              <div className={`${item.bg} p-4 rounded-2xl mr-6 shrink-0 group-hover:rotate-12 transition-transform shadow-inner`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-800 leading-tight mb-1">{item.title}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    icon: <Award className="text-indigo-500" />,
  },
  {
    id: "rpjmd-strategis",
    title: "6 Misi Strategis Daerah",
    subtitle: "Berdasarkan Perda Kab. Majalengka No. 1 Tahun 2025 tentang RPJMD",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 relative z-10 w-full h-full pb-8">
        {[
          {
            title: "Membangun Kehidupan Beragama",
            desc: "Mewujudkan tatanan sosial yang inklusif, harmonis, dan berkeadaban.",
            icon: <Users size={28} className="text-blue-600" />,
            bg: "bg-blue-50"
          },
          {
            title: "Lingkungan Hidup 'Langkung SAE'",
            desc: "Melestarikan alam dan mengelola sumber daya secara berkelanjutan.",
            icon: <Sprout size={28} className="text-green-600" />,
            bg: "bg-green-50"
          },
          {
            title: "Reformasi Birokrasi Digital",
            desc: "Tata kelola transparan, akuntabel, dan berbasis teknologi (Fokus Utama MLS).",
            icon: <Cpu size={28} className="text-teal-600" />,
            bg: "bg-teal-50"
          },
          {
            title: "Masyarakat Humanis & Berdaya Saing",
            desc: "Meningkatkan kualitas SDM yang unggul, agamis, dan kompetitif.",
            icon: <GraduationCap size={28} className="text-indigo-600" />,
            bg: "bg-indigo-50"
          },
          {
            title: "Pemerintahan Bersih & Melayani",
            desc: "Mewujudkan birokrasi yang melayani, efektif, efisien, dan berintegritas.",
            icon: <ShieldCheck size={28} className="text-emerald-600" />,
            bg: "bg-emerald-50"
          },
          {
            title: "Ekonomi Mandiri & Berkeadilan",
            desc: "Membangun perekonomian daerah yang kokoh dan inklusif bagi semua.",
            icon: <TrendingUp size={28} className="text-amber-600" />,
            bg: "bg-amber-50"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-[35px] shadow-sm border border-slate-100 flex flex-col items-start group transition-all duration-300"
          >
            <div className={`${item.bg} p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-white/50`}>
              {item.icon}
            </div>
            <h4 className="text-lg font-black text-slate-800 leading-tight mb-2 tracking-tight">{item.title}</h4>
            <p className="text-slate-500 font-bold text-xs leading-relaxed opacity-80 uppercase tracking-tighter">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    ),
    icon: <LayoutDashboard className="text-teal-500" />,
  },
  {
    id: "ux-mockup",
    title: "Pengalaman Pengguna Langkung Sae",
    subtitle: "Antarmuka Modern, Inklusif, dan Responsif",
    content: (
      <div className="flex flex-col lg:flex-row items-center justify-between h-full relative z-10 w-full gap-12 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold text-slate-800 leading-tight">
              Satu Genggaman untuk <span className="text-teal-600">Semua Layanan</span>
            </h3>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Didesain dengan pendekatan <strong className="text-slate-800 font-bold">User-Centric</strong>, memastikan kemudahan akses bagi seluruh lapisan masyarakat Majalengka, dari petani hingga pelaku usaha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Clean UI/UX", desc: "Navigasi intuitif dengan palet warna yang menenangkan.", icon: <Smartphone className="text-teal-600" /> },
              { title: "Quick Access", desc: "Akses fitur utama kurang dari 3 kali klik.", icon: <Zap className="text-teal-600" /> },
              { title: "Data Driven", desc: "Personalisasi layanan berdasarkan kebutuhan warga.", icon: <Globe size={20} className="text-teal-600" /> },
              { title: "Inklusif", desc: "Mendukung fitur aksesibilitas bagi semua warga.", icon: <Users size={20} className="text-teal-600" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-3xl shadow-sm border border-slate-50">
                <div className="bg-teal-50 p-2 rounded-xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 rounded-[60px] blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-70"></div>
            <img
              src="/majalengka_superapp_mockup_1773070339752.png"
              alt="Mobile App Mockup"
              className="relative w-full max-w-sm h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] rounded-[40px] transform group-hover:rotate-1 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    ),
    icon: <Smartphone className="text-teal-500" />,
  },
  {
    id: "arsitektur",
    title: "Arsitektur Inti (The Engine)",
    subtitle: "Pondasi Teknologi Super App",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 relative z-10 w-full h-full pb-8">
        {[
          { icon: <Users size={32} className="text-cyan-600" />, title: "Single Sign-On (SSO)", desc: "Satu akun warga berbasis NIK/Identitas Digital untuk akses seluruh ekosistem layanan tanpa batas.", bg: "bg-white", border: "border-cyan-100", ring: "ring-cyan-50", iconBg: "bg-cyan-50" },
          { icon: <Layers size={32} className="text-teal-600" />, title: "Middleware Interoperability", desc: "Jembatan API yang menghubungkan data antar-OPD secara otomatis, menghapus sekat birokrasi tradisional.", bg: "bg-white", border: "border-teal-100", ring: "ring-teal-50", iconBg: "bg-teal-50" },
          { icon: <Cpu size={32} className="text-emerald-600" />, title: "Big Data & AI Engine", desc: "Mesin analisis anda pendukung Executive Dashboard Kepala Daerah guna pengambilan keputusan cepat.", bg: "bg-white", border: "border-emerald-100", ring: "ring-emerald-50", iconBg: "bg-emerald-50" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`${item.bg} backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-slate-200/50 border ${item.border} flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/60`}
          >
            <div className={`${item.iconBg} p-5 rounded-2xl mb-6 shadow-sm ring-4 ${item.ring} group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    ),
    icon: <Cpu className="text-teal-500" />,
  },
  {
    id: "sistem-internal-opd",
    title: "Sistem Internal OPD Terintegrasi",
    subtitle: "E-Planning, E-Budgeting, E-Monitoring & SSO Terpusat",
    content: <SlideSistemInternalOPD />,
    icon: <Network className="text-indigo-500" />,
  },
  {
    id: "paperless-office",
    title: "Paperless Office & Tanda Tangan Digital",
    subtitle: "Transformasi Birokrasi Zero Paper dengan TTE BSrE",
    content: <SlidePaperlessOffice />,
    icon: <FileText className="text-teal-500" />,
  },
  {
    id: "integrasi-opd",
    title: "Sinergi & Integrasi Data Lintas OPD",
    subtitle: "Meruntuhkan Ego Sektoral, Mewujudkan Satu Data",
    content: (
      <div className="flex flex-col h-full relative z-10 w-full mt-4">
        <p className="text-slate-600 font-medium text-lg max-w-4xl leading-relaxed mb-6">
          Inti dari Majalengka Langkung Sae adalah <strong className="text-teal-600">Interoperabilitas API</strong>. Aplikasi ini menarik benang merah dari berbagai pangkalan data terpisah milik tiap Organisasi Perangkat Daerah (OPD) menjadi satu aliran informasi yang real-time dan akurat.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full pb-4">

          <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-cyan-50/30 p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="bg-cyan-100/50 p-4 rounded-2xl ring-2 ring-cyan-200 group-hover:bg-cyan-200 transition-colors">
                <Network className="text-cyan-700" size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800">SILONDA Middleware</h3>
            </div>

            <ul className="space-y-4 text-slate-600 relative z-10">
              <li className="flex items-start">
                <CheckCircle2 className="text-cyan-500 mr-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Sistem Informasi Layanan Operasional Data Antar-lembaga (SILONDA) bertindak sebagai penerjemah antar aplikasi lama (Legacy System) OPD.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-cyan-500 mr-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed"><strong className="text-slate-800">API Gateway Terpusat:</strong> Disdukcapil (NIK), Dinkes (Rekam Medis), Bapenda (Pajak), dan Dinsos (Bansos) saling "berbicara" di belakang layar.</span>
              </li>
            </ul>

            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Network size={200} className="text-cyan-600" />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white to-teal-50/30 p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="bg-teal-100/50 p-4 rounded-2xl ring-2 ring-teal-200 group-hover:bg-teal-200 transition-colors">
                <RefreshCw className="text-teal-700" size={32} />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800">Dampak Integrasi (Warga)</h3>
            </div>

            <ul className="space-y-4 text-slate-600 relative z-10">
              <li className="flex items-start">
                <CheckCircle2 className="text-teal-500 mr-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed"><strong className="text-slate-800">Zero Fotokopi KTP/KK:</strong> Warga cukup *login* ke Super App, otomatis data kependudukan langsung diverifikasi dari sistem Dukcapil.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-teal-500 mr-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed"><strong className="text-slate-800">Layanan Otomatis:</strong> Bayi baru lahir di Puskesmas otomatis tercatat di KK, otomatis terdaftar di BPJS, dan langsung menerima KIA tanpa orang tua harus keliling dinas.</span>
              </li>
            </ul>

            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <RefreshCw size={200} className="text-teal-600" />
            </div>
          </motion.div>

        </div>
      </div>
    ),
    icon: <Network className="text-teal-500" />,
  },
  {
    id: "peta-kerangka",
    title: "Peta Kerangka Integrasi Sistem",
    subtitle: "Rute Aliran Data Super App MLS",
    content: (
      <div className="flex flex-col h-full items-center justify-start relative w-full pt-2 pb-8 w-full max-w-7xl mx-auto overflow-y-auto custom-scrollbar">
        <div className="w-full relative flex flex-col items-center">

          {/* Top Layer: Sumber Data OPD & BUMD (Exhaustive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-3 mb-6">
            {[
              {
                category: "Pusat Kendali & Perencanaan",
                items: [
                  { name: "Setda", data: "Tata Kelola & Kebijakan", icon: <Building2 size={14} className="text-slate-600" /> },
                  { name: "Bappedalitbang", data: "Perencanaan & Riset", icon: <PieChart size={14} className="text-indigo-600" /> },
                  { name: "BKPSDM", data: "Manajemen ASN", icon: <Users size={14} className="text-blue-600" /> },
                  { name: "BKAD", data: "Aset & Keuangan Daerah", icon: <Database size={14} className="text-slate-700" /> },
                  { name: "Diskominfo", data: "Pusat Data & Sandi", icon: <Wifi size={14} className="text-teal-600" /> }
                ],
                border: "border-slate-300", bg: "bg-slate-50/50"
              },
              {
                category: "Ekonomi, BUMD & Pangan",
                items: [
                  { name: "Bapenda", data: "Pendapatan & Pajak", icon: <PiggyBank size={14} className="text-amber-500" /> },
                  { name: "DPMPTSP", data: "Perizinan Terpadu", icon: <Briefcase size={14} className="text-emerald-600" /> },
                  { name: "DKPP", data: "Pertanian & Perikanan", icon: <Sprout size={14} className="text-green-600" /> },
                  { name: "DPKUKMP", data: "Koperasi & Industri", icon: <ShoppingBag size={14} className="text-rose-600" /> },
                  { name: "BUMD (PDAM/BPR)", data: "Layanan Publik Daerah", icon: <CheckCircle2 size={14} className="text-blue-500" /> }
                ],
                border: "border-amber-200", bg: "bg-amber-50/30"
              },
              {
                category: "Pelayanan Dasar & Sosial",
                items: [
                  { name: "Dinas Kesehatan", data: "Layanan Kesehatan", icon: <Stethoscope size={14} className="text-rose-600" /> },
                  { name: "Dinas Pendidikan", data: "Pendidikan & SDM", icon: <GraduationCap size={14} className="text-indigo-500" /> },
                  { name: "Disdukcapil", data: "Kependudukan", icon: <Users size={14} className="text-cyan-600" /> },
                  { name: "Dinsos / DP3AKB", data: "Pemberdayaan & Sosial", icon: <HeartHandshake size={14} className="text-purple-500" /> },
                  { name: "Disparbud", data: "Wisata & Budaya", icon: <MapPin size={14} className="text-amber-600" /> }
                ],
                border: "border-rose-200", bg: "bg-rose-50/30"
              },
              {
                category: "Infrastruktur & Keamanan",
                items: [
                  { name: "PUTR / Disrumkimtan", data: "Infrastruktur Fisik", icon: <Layers size={14} className="text-slate-600" /> },
                  { name: "Dishub / DLH", data: "Transportasi & LH", icon: <Car size={14} className="text-emerald-700" /> },
                  { name: "BPBD / Satpol PP", data: "Kedaruratan & Trantib", icon: <Shield size={14} className="text-red-600" /> },
                  { name: "Disnaker", data: "Ketenagakerjaan", icon: <Briefcase size={14} className="text-indigo-700" /> },
                  { name: "26 Kecamatan", data: "Layanan Adwil", icon: <Map size={14} className="text-teal-600" /> }
                ],
                border: "border-teal-200", bg: "bg-teal-50/30"
              }
            ].map((sector, i) => (
              <motion.div key={i} whileHover={{ y: -2 }} className={`p-4 rounded-3xl border ${sector.border} ${sector.bg} shadow-sm z-20 flex flex-col transition-all`}>
                <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 border-b border-slate-200/60 pb-1.5">{sector.category}</h5>
                <div className="grid grid-cols-1 gap-1.5 flex-grow">
                  {sector.items.map((opd, j) => (
                    <div key={j} className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-1.5 rounded-xl border border-white shadow-sm hover:border-teal-200 transition-colors cursor-default">
                      <div className="bg-white p-1.5 rounded-lg shadow-inner ring-1 ring-slate-100 shrink-0">{opd.icon}</div>
                      <div className="text-left overflow-hidden">
                        <h6 className="font-extrabold text-slate-800 text-[10px] leading-tight truncate">{opd.name}</h6>
                        <p className="text-[8px] text-slate-500 font-bold truncate opacity-80 uppercase tracking-tighter">{opd.data}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Middle Layer: Middleware API (Command Center) */}
          <motion.div whileHover={{ y: -5 }} className="w-full md:w-5/6 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 p-5 rounded-[40px] shadow-2xl shadow-teal-500/20 text-white text-center relative z-20 flex flex-col items-center border border-white/20 mb-6">
            <div className="bg-white/10 p-2.5 rounded-2xl ring-1 ring-white/30 mb-2 backdrop-blur-md">
              <Workflow size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-black tracking-tight">Enterprise Service Bus (ESB) & Majalengka Data Lake</h3>
            <p className="text-teal-50 font-medium max-w-2xl text-[11px] opacity-90 leading-relaxed uppercase tracking-wider">
              Interoperabilitas API Tingkat Tinggi: Sinkronisasi Seluruh OPD & BUMD dalam Satu Ekosistem
            </p>
          </motion.div>

          {/* Bottom Layer: Front-End Super App MLS */}
          <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-2/3 bg-slate-900 px-8 py-5 rounded-[40px] shadow-2xl flex items-center justify-between z-20 border border-slate-700 relative overflow-hidden ring-4 ring-slate-800">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none"></div>

            <div className="flex items-center space-x-6 relative z-10">
              <img src="/mls_logo_01.png" alt="Logo MLS" className="h-12 w-auto drop-shadow-lg" />
              <div className="text-left border-l border-slate-700 pl-6">
                <h3 className="text-2xl font-black text-white leading-none mb-1">Super App MLS</h3>
                <p className="text-teal-400 text-xs font-bold tracking-[0.2em] uppercase">Masyarakat Majalengka Sae</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-teal-400">OPD</div>)}
              </div>
              <div className="bg-teal-500/20 p-3 rounded-2xl ring-1 ring-teal-500/40 relative z-10">
                <Smartphone size={28} className="text-emerald-400" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    ),
    icon: <Workflow className="text-cyan-500" />,
  },
  {
    id: "executive-dashboard",
    title: "Executive Dashboard",
    subtitle: "Pusat Kendali Makro & Kedaruratan (Bupati & Wakil Bupati)",
    content: (
      <div className="flex flex-col h-full items-start pt-2 relative z-10 w-full pb-8">
        <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed mb-4 max-w-4xl">
          Fasilitas *Command Center* ringkas langsung di genggaman pimpinan daerah. Menampilkan indikator makro ekonomi, demografi sosial, realisasi investasi, hingga mitigasi bencana secara <i className="text-teal-600">Real-Time</i>.
        </p>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[65vh] overflow-y-auto pr-2 pb-6 custom-scrollbar">

          {/* Widget 1: Pendapatan PAD (Span 2) */}
          <motion.div whileHover={{ scale: 1.02 }} className="col-span-2 bg-gradient-to-br from-indigo-900 to-slate-900 p-5 rounded-3xl shadow-xl border border-slate-700 flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Coins size={150} />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md">
                  <Coins className="text-amber-400" size={20} />
                </div>
                <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wide">Pendapatan Asli Daerah (PAD)</h4>
              </div>
              <div className="text-3xl font-extrabold text-white">Rp 482,5 <span className="text-lg text-slate-400 font-medium">Miliar</span></div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>Realisasi Target 2026</span>
                <span className="text-emerald-400 font-bold">82.4%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-2 rounded-full w-[82.4%] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
              </div>
            </div>
          </motion.div>

          {/* Macro 1: Pertumbuhan Investasi */}
          <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-3xl shadow-md border border-emerald-100 flex flex-col group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-emerald-100 p-2 rounded-xl group-hover:bg-emerald-200 transition-colors">
                <Building2 className="text-emerald-600" size={20} />
              </div>
              <h4 className="text-emerald-800 font-bold text-[10px] uppercase tracking-wide">Realisasi Investasi</h4>
            </div>
            <div className="text-2xl font-extrabold text-emerald-900 mb-1">Rp 1,2 T</div>
            <div className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded-md w-fit mt-1">
              <TrendingUp size={12} className="mr-1" /> +15% (PMA & PMDN)
            </div>
            <p className="text-[10px] text-emerald-700/80 mt-auto leading-tight">Didominasi sektor Manufaktur & Padat Karya</p>
          </motion.div>

          {/* Macro 2: Inflasi Daerah */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col group">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-amber-50 p-2 rounded-xl group-hover:bg-amber-100 transition-colors">
                <Activity className="text-amber-500" size={20} />
              </div>
              <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wide">Inflasi (YoY)</h4>
            </div>
            <div className="text-2xl font-extrabold text-slate-800 mb-1">2,41%</div>
            <div className="flex items-center text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md w-fit">
              <TrendingDown size={12} className="mr-1" /> Terkendali
            </div>
            <p className="text-[10px] text-slate-400 mt-auto pt-2 border-t border-slate-50 leading-tight">Harga Bapokting (Survei Pasar Sindangkasih)</p>
          </motion.div>

          {/* Demografi 1: Penduduk */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-xl group-hover:bg-blue-100 transition-colors">
                <Users className="text-blue-500" size={20} />
              </div>
              <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wide">Total Penduduk</h4>
            </div>
            <div className="text-2xl font-extrabold text-slate-800 mb-1">1.33juta</div>
            <div className="w-full mt-2 flex space-x-1">
              <div className="h-1.5 bg-blue-500 w-[50.2%] rounded-l-full" title="Laki-laki 50.2%"></div>
              <div className="h-1.5 bg-rose-400 w-[49.8%] rounded-r-full" title="Perempuan 49.8%"></div>
            </div>
            <div className="flex justify-between text-[10px] font-medium text-slate-400 mt-1">
              <span>L: 50.2%</span>
              <span>P: 49.8%</span>
            </div>
          </motion.div>

          {/* Demografi 2: Pengangguran */}
          <motion.div whileHover={{ y: -5 }} className="bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col group">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-purple-50 p-2 rounded-xl group-hover:bg-purple-100 transition-colors">
                <Briefcase className="text-purple-500" size={20} />
              </div>
              <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-wide">Pengangguran Terbuka</h4>
            </div>
            <div className="text-2xl font-extrabold text-slate-800 mb-1">4,12%</div>
            <div className="flex items-center text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md w-fit">
              <TrendingDown size={12} className="mr-1" /> Turun 0.8%
            </div>
            <p className="text-[10px] text-slate-400 mt-auto leading-tight">Bursa kerja terintegrasi aplikasi berjalan lancar.</p>
          </motion.div>

          {/* Emergency: Early Warning System */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 bg-red-50 p-5 rounded-3xl shadow-lg shadow-red-100/50 border border-red-100 flex flex-col justify-between group">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-red-100 p-2 rounded-xl animate-pulse">
                <AlertTriangle className="text-red-600" size={20} />
              </div>
              <h4 className="text-red-800 font-bold text-xs uppercase tracking-wide">Peringatan Dini (EWS) Cuaca & Bencana</h4>
            </div>
            <div className="bg-white p-3 rounded-xl border border-red-50 relative overflow-hidden flex items-start space-x-3">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
              <MapPin className="text-red-500 mt-1 shrink-0" size={16} />
              <div>
                <div className="text-red-700 font-bold text-sm mb-0.5">Siaga 2 Longsor - Kec. Argapura</div>
                <p className="text-xs text-slate-500 font-medium leading-tight">Curah hujan &gt;100mm/hari. *Broadcast* mitigasi otomatis tersentak ke HP warga radius 5KM via Super App.</p>
              </div>
            </div>
          </motion.div>

          {/* Operational: CCTV Kota */}
          <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 bg-slate-800 p-5 rounded-3xl shadow-lg border border-slate-700 flex flex-col group relative overflow-hidden">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-2">
                <Video className="text-slate-400" size={16} />
                <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wide">Pantauan Kamera AI (Trafik Keamanan)</h4>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <div className="flex-1 bg-black/50 rounded-xl rounded-tr-none border border-slate-700 relative flex items-center justify-center min-h-[90px] overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>

              {/* Simulated CCTV grids */}
              <div className="grid grid-cols-2 gap-1 w-full h-full p-1 opacity-60">
                <div className="bg-slate-900 border border-slate-800 rounded flex items-end p-1"><span className="text-[8px] text-emerald-400 font-mono">Bunderan Munjul</span></div>
                <div className="bg-slate-900 border border-slate-800 rounded flex items-end p-1"><span className="text-[8px] text-emerald-400 font-mono">Alun-Alun</span></div>
              </div>

              <div className="text-emerald-500 font-mono text-[10px] absolute top-2 right-2 border border-emerald-500/30 px-1 rounded bg-black/50 backdrop-blur-sm">LIVE RECOGNITION</div>
            </div>
          </motion.div>

          {/* Kinerja OPD (Span full on mobile, span half on big) */}
          <motion.div whileHover={{ scale: 1.01 }} className="col-span-2 lg:col-span-4 bg-white p-5 rounded-3xl shadow-md border border-slate-100 flex flex-col justify-between group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-50 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <Activity className="text-indigo-500" size={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-700 font-bold text-xs tracking-wide">Leaderboard Kinerja & Serapan Instansi (IKU)</h4>
                <span className="text-[10px] text-slate-400">Pembaruan sistem SAKIP dan SIMDA secara terkonsolidasi</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-1"><span>1. Dinas Kesehatan</span> <span className="text-emerald-500">A (92/100)</span></div>
                <div className="w-full bg-slate-200 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[92%]"></div></div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex justify-between text-[10px] font-bold text-slate-700 mb-1"><span>2. Dinas Pendidikan</span> <span className="text-emerald-500">A (89/100)</span></div>
                <div className="w-full bg-slate-200 rounded-full h-1.5"><div className="bg-emerald-500 h-1.5 rounded-full w-[89%]"></div></div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-slate-700 mb-0.5">Total Keluhan Publik</div>
                  <span className="text-xs text-rose-500 font-extrabold truncate">128 Kasus</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold text-slate-500">Tertangani</span>
                  <span className="text-xs text-emerald-500 font-extrabold">65%</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    ),
    icon: <Activity className="text-emerald-500" />,
  },
  {
    id: "fitur-inovasi",
    title: "Ekosistem Fitur & Inovasi Futuristik",
    subtitle: "Teknologi Terdepan untuk Pelayanan Maksimal",
    content: (
      <div className="flex flex-col h-full relative z-10 w-full mt-4">
        <p className="text-slate-600 font-medium text-lg max-w-4xl leading-relaxed mb-8">
          Majalengka Langkung Sae dirancang tidak hanya untuk hari ini, tapi sebagai platform masa depan yang mengintegrasikan berbagai teknologi mutakhir guna mempermudah kehidupan warga.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "AI Asisten Warga",
              desc: "Chatbot berbasis AI yang siap melayani tanya-jawab layanan publik, panduan administrasi, dan pengaduan 24/7.",
              icon: <Bot size={28} className="text-cyan-600" />,
              bg: "bg-cyan-50",
              border: "border-cyan-100"
            },
            {
              title: "IoT City Monitoring",
              desc: "Integrasi sensor pintar untuk pemantauan kualitas udara, banjir, lampu jalan, hingga pengelolaan sampah otomatis.",
              icon: <Zap size={28} className="text-amber-600" />,
              bg: "bg-amber-50",
              border: "border-amber-100"
            },
            {
              title: "Majalengka Pay",
              desc: "Sistem pembayaran digital terintegrasi untuk retribusi daerah, PBB, parkir, hingga belanja di merchant UMKM.",
              icon: <CreditCard size={28} className="text-emerald-600" />,
              bg: "bg-emerald-50",
              border: "border-emerald-100"
            },
            {
              title: "Digital E-Market",
              desc: "Pasar digital khusus produk lokal Majalengka, menghubungkan petani dan pengrajin langsung ke konsumen luas.",
              icon: <ShoppingBag size={28} className="text-rose-600" />,
              bg: "bg-rose-50",
              border: "border-rose-100"
            }
          ].map((fitur, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              className={`bg-white p-6 rounded-3xl border ${fitur.border} shadow-sm flex flex-col items-start transition-all`}
            >
              <div className={`${fitur.bg} p-4 rounded-2xl mb-4`}>
                {fitur.icon}
              </div>
              <h3 className="text-lg font-extrabold text-slate-800 mb-2">{fitur.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{fitur.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 p-6 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-teal-500/20 p-3 rounded-2xl">
              <ShieldCheck className="text-teal-400" size={32} />
            </div>
            <div>
              <h4 className="text-white font-extrabold text-lg">Keamanan Data Terjamin</h4>
              <p className="text-slate-400 text-sm font-medium">Enkripsi End-to-End & Sertifikasi BSSN (Badan Siber dan Sandi Negara)</p>
            </div>
          </div>
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white font-bold">
                {i === 4 ? "+50k" : ""}
              </div>
            ))}
            <span className="ml-5 text-teal-400 text-sm font-bold flex items-center">
              Warga Terintegrasi
            </span>
          </div>
        </motion.div>
      </div>
    ),
    icon: <Bot className="text-cyan-500" />,
  },
  {
    id: "ketahanan-pangan",
    title: "Ketahanan Pangan & Pertanian Digital",
    subtitle: "Modernisasi Agrikultur Majalengka",
    content: (
      <div className="flex flex-col h-full relative z-10 w-full mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Majalengka sebagai lumbung pangan Jawa Barat mengintegrasikan teknologi untuk melindungi kesejahteraan petani dan stabilitas harga.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Monitoring Bapokting", desc: "Pantauan harga kebutuhan pokok real-time di 7 pasar induk Majalengka.", icon: <TrendingUp className="text-emerald-600" /> },
                { title: "Smart Farming IoT", desc: "Sensor cuaca dan kelembaban tanah untuk optimasi panen Mangga Gedong Gincu.", icon: <Zap className="text-amber-600" /> },
                { title: "Lahan Abadi GIS", desc: "Pemetaan Digital untuk proteksi Kawasan Pertanian Pangan Berkelanjutan (KP2B).", icon: <Map className="text-teal-600" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                  <div className="bg-slate-50 p-3 rounded-xl">{item.icon}</div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-emerald-900 rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-between text-white shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sprout size={160} />
            </div>

            <div className="relative z-10">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20">
                <Wheat size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Majalengka Agro Market</h3>
              <p className="text-emerald-50/80 text-sm leading-relaxed mb-6">
                Rantai pasok digital yang memutus mata rantai tengkulak. Petani Majalengka kini bisa menjual hasil bumi langsung ke konsumen atau pasar ritel nasional melalui ekosistem Super App.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-emerald-400">12.5%</div>
                <div className="text-[10px] text-emerald-200 uppercase font-bold">Kenaikan Pendapatan Petani</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-bold text-emerald-400">Low</div>
                <div className="text-[10px] text-emerald-200 uppercase font-bold">Stabilitas Harga Pangan</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
    icon: <Sprout className="text-emerald-500" />,
  },
  {
    id: "keamanan-data",
    title: "Keamanan & Privasi Data Terpadu",
    subtitle: "Perlindungan Mutlak bagi Seluruh Warga",
    content: (
      <div className="flex flex-col h-full relative z-10 w-full mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              Kami memahami bahwa <strong className="text-teal-600">Keamanan</strong> adalah pondasi kepercayaan publik. Majalengka Langkung Sae mengadopsi standar keamanan internasional untuk menjaga integritas data setiap individu.
            </p>

            <div className="space-y-4">
              {[
                { title: "Enkripsi End-to-End", desc: "Data sensitif warga dienkripsi sejak dari perangkat hingga tersimpan di server.", icon: <Lock className="text-teal-600" /> },
                { title: "Autentikasi Biometrik", desc: "Login aman menggunakan Sidik Jari atau Wajah untuk mencegah akses ilegal.", icon: <ShieldCheck className="text-teal-600" /> },
                { title: "Audit BSSN Berkala", desc: "Penilaian keamanan rutin oleh Badan Siber dan Sandi Negara.", icon: <Award className="text-teal-600" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="bg-teal-50 p-2 rounded-xl shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative bg-slate-900 rounded-[40px] p-8 overflow-hidden flex flex-col items-center justify-center text-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
            <div className="relative z-10 w-32 h-32 bg-teal-500/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-teal-500/30 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck size={64} className="text-teal-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Cyber Security Center</h3>
            <p className="text-slate-400 text-sm max-w-xs relative z-10">Monitoring trafik dan anomali 24/7 oleh tim khusus Diskominfo Majalengka.</p>

            <div className="mt-8 grid grid-cols-2 gap-4 w-full relative z-10">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                <div className="text-teal-400 font-extrabold text-xl">100%</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Lokal Hosting</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-center">
                <div className="text-teal-400 font-extrabold text-xl">Uptime</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">99.9% / Year</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    ),
    icon: <ShieldCheck className="text-teal-500" />,
  },
  {
    id: "landasan-hukum",
    title: "Landasan Hukum & Regulasi",
    subtitle: "Payung Institusional Transformasi Digital",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full items-start pt-6 relative z-10 w-full text-sm">

        {/* National Level */}
        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full transition-transform">
          <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-slate-100">
            <div className={`bg-rose-50 p-3 rounded-2xl ring-1 ring-rose-100`}>
              <BookOpen className="text-rose-500" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-800">Tingkat Nasional</h3>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-rose-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-slate-800">UU No. 27/2022 (PDP):</strong> <br /> Pelindungan Data Pribadi warga.</span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-rose-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-slate-800">UU No. 11/2008 & 1/2024 (ITE):</strong> <br /> Informasi dan Transaksi Elektronik.</span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-rose-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-slate-800">Perpres No. 95/2018 (SPBE):</strong> <br /> Sistem Pemerintahan Berbasis Elektronik.</span>
            </li>
          </ul>
        </motion.div>

        {/* Presidential / Ministerial */}
        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full transition-transform">
          <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-slate-100">
            <div className={`bg-amber-50 p-3 rounded-2xl ring-1 ring-amber-100`}>
              <BookOpen className="text-amber-500" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-800">Regulasi Pendukung</h3>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-slate-800">Perpres No. 39/2019:</strong> <br /> Kebijakan Satu Data Indonesia.</span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-slate-800">Perpres No. 132/2022:</strong> <br /> Arsitektur SPBE Nasional.</span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-amber-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-slate-800">Permenkominfo No. 5/2020:</strong> <br /> Penyelenggara Sistem Elektronik (PSE).</span>
            </li>
          </ul>
        </motion.div>

        {/* Regional Strategy Level */}
        <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-3xl shadow-xl shadow-teal-900/10 border border-teal-100 flex flex-col h-full transition-transform">
          <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-teal-200/50">
            <div className={`bg-teal-500 p-3 rounded-2xl ring-1 ring-teal-400 shadow-sm`}>
              <BookOpen className="text-white" />
            </div>
            <h3 className="text-xl font-extrabold text-teal-900">Tingkat Daerah</h3>
          </div>
          <ul className="space-y-4 text-teal-800">
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-teal-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-teal-950 font-bold">Perda Kab. Majalengka No. 1/2025:</strong> <br /> (Sesuai dokumen) Tata Kelola Ekosistem Digital Pemerintahan dan Super App Majalengka Langkung Sae.</span>
            </li>
            <li className="flex items-start">
              <span className={`w-2 h-2 mt-2 bg-teal-500 rounded-full mr-3 shrink-0 shadow-sm`}></span>
              <span className="leading-relaxed"><strong className="text-teal-950 font-bold">Perbup (Turunan):</strong> <br /> Pembentukan Dewan TIK dan Standar Operasional CSIRT Kabupaten Majalengka.</span>
            </li>
          </ul>
        </motion.div>

      </div>
    ),
    icon: <BookOpen className="text-rose-500" />,
  },

  {
    id: "infrastruktur",
    title: "Pondasi Infrastruktur & Jaringan",
    subtitle: "Tulang Punggung Kelancaran Super App",
    content: (
      <div className="flex flex-col h-full relative z-10 w-full mt-4">
        <p className="text-slate-600 text-lg mb-8 max-w-3xl leading-relaxed bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          Aplikasi hebat membutuhkan jalan yang mulus. Majalengka tidak hanya membangun perangkat lunak, tetapi juga menggelar karpet merah infrastruktur TIK untuk memastikan Super App selalu *online* tanpa lemot.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Server size={32} className="text-cyan-600" />, title: "Data Center Daerah & DRC", desc: "Peningkatan spesifikasi *server* dan *storage* Command Center Diskominfo dengan DRC (Disaster Recovery Center) bersertifikasi ISO 27001.", color: "cyan" },
            { icon: <Wifi size={32} className="text-teal-600" />, title: "Backbone FO & Desa Cerdas", desc: "Perluasan jaringan *Fiber Optic* intra-pemerintah secara bertahap dan penyelesaian blank-spot di wilayah desa pinggiran (Kerjasama ISP Nasional).", color: "teal" },
            { icon: <Database size={32} className="text-emerald-600" />, title: "Cloud Hybrid Architecture", desc: "Menggabungkan *On-Premise Server* untuk data rahasia/vital dan *Public/Government Cloud* elastis untuk layanan statis tinggi *traffic*.", color: "emerald" }
          ].map((infra, idx) => (
            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 border-t-4 hover:shadow-2xl transition-all" style={{ borderTopColor: `var(--tw-colors-${infra.color}-400, #38bdf8)` }}>
              <div className={`bg-${infra.color}-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 ring-4 ring-${infra.color}-100 shadow-sm`}>
                {infra.icon}
              </div>
              <h3 className="text-xl font-extrabold text-slate-800 mb-3">{infra.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{infra.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    icon: <Server className="text-cyan-500" />,
  },
  {
    id: "klaster-1-2",
    title: "Modul Layanan (1 & 2)",
    subtitle: "Sosial, SDM, & Infrastruktur",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start pt-6 relative z-10">
        <motion.div whileHover={{ scale: 1.01 }} className="space-y-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 p-8 rounded-3xl transition-transform">
          <div className="flex items-center space-x-4 border-b border-slate-100 pb-5">
            <div className="bg-emerald-50 p-4 rounded-2xl ring-1 ring-emerald-100"><Users className="text-emerald-500" size={28} /></div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-800">Klaster I: Sejahtera</h3>
              <p className="text-sm text-emerald-600 font-bold tracking-wide uppercase mt-1">Sosial & SDM</p>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              { title: "Majalengka Pintar:", desc: "Sistem seleksi beasiswa AI & LMS." },
              { title: "Sehat Bareng:", desc: "Telemedicine & Stunting Tracking real-time." },
              { title: "Ramah Keluarga:", desc: "Digital Crisis Portal perlindungan perempuan & anak." },
              { title: "Digitalisasi Religi:", desc: "Administrasi Guru Ngaji dan Marbot." }
            ].map((item, i) => (
              <li key={i} className="flex items-start group">
                <CheckCircle2 className="text-emerald-500 mr-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-slate-600"><span className="font-bold text-slate-800">{item.title}</span> {item.desc}</div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div whileHover={{ scale: 1.01 }} className="space-y-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/40 p-8 rounded-3xl transition-transform">
          <div className="flex items-center space-x-4 border-b border-slate-100 pb-5">
            <div className="bg-cyan-50 p-4 rounded-2xl ring-1 ring-cyan-100"><MapPin className="text-cyan-600" size={28} /></div>
            <div>
              <h3 className="text-2xl font-extrabold text-slate-800">Klaster II: Mulus & Terang</h3>
              <p className="text-sm text-cyan-600 font-bold tracking-wide uppercase mt-1">Infrastruktur</p>
            </div>
          </div>
          <ul className="space-y-4">
            {[
              { title: "URC Mobile Field App:", desc: "Lapor jalan rusak/drainase mampet via foto GPS." },
              { title: "Majalengka Caang:", desc: "Dashboard IoT kendali lampu jalan." },
              { title: "MaaS Kertajati Hub:", desc: "Integrasi angkutan dengan bandara BIJB." }
            ].map((item, i) => (
              <li key={i} className="flex items-start group">
                <CheckCircle2 className="text-cyan-500 mr-4 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-slate-600"><span className="font-bold text-slate-800">{item.title}</span> {item.desc}</div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    ),
    icon: <Layout className="text-cyan-500" />,
  },
  {
    id: "klaster-3-4-5",
    title: "Modul Layanan (3, 4 & 5)",
    subtitle: "Ekonomi, Birokrasi & Fiskal",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start pt-4 relative z-10 w-full text-sm">

        {[
          {
            title: "Berdikari", icon: <Briefcase className="text-cyan-500" />, bgIcon: "bg-cyan-50", ring: "ring-cyan-100", color: "bg-cyan-500", items: [
              { strong: "Kertajati Bekerja:", text: "AI Labor Market match." },
              { strong: "UMKM Go Digital:", text: "E-commerce & ERP lokal." },
              { strong: "Wisata Juara:", text: "AR Tourism Map interaktif." }
            ]
          },
          {
            title: "Terbuka", icon: <Layout className="text-teal-500" />, bgIcon: "bg-teal-50", ring: "ring-teal-100", color: "bg-teal-500", items: [
              { strong: "Omnichannel:", text: "Integrasi keluhan WA, IG, Web." },
              { strong: "Gen-AI Chatbot:", text: "Asisten virtual 24 jam." },
              { strong: "Blockchain E-Office:", text: "Persuratan aman & presensi." }
            ]
          },
          {
            title: "Bersih", icon: <Shield className="text-emerald-500" />, bgIcon: "bg-emerald-50", ring: "ring-emerald-100", color: "bg-emerald-500", items: [
              { strong: "Pajak Tepat:", text: "AI Drone/Satelit untuk PBB." },
              { strong: "Cloud Tapping Box:", text: "Cegah kebocoran pajak hotel." },
              { strong: "E-Audit AI:", text: "Deteksi anomali anggaran." }
            ]
          }
        ].map((klaster, idx) => (
          <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col h-full transition-transform">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`${klaster.bgIcon} p-3 rounded-2xl ring-1 ${klaster.ring}`}>{klaster.icon}</div>
              <h3 className="text-xl font-extrabold text-slate-800">Klaster {idx + 3}: {klaster.title}</h3>
            </div>
            <ul className="space-y-5 text-slate-600">
              {klaster.items.map((item, i) => (
                <li key={i} className="flex items-start bg-slate-50/50 p-2 rounded-xl">
                  <span className={`w-2 h-2 mt-1.5 ${klaster.color} rounded-full mr-3 shrink-0 shadow-sm`}></span>
                  <span className="leading-relaxed"><strong className="text-slate-800">{item.strong}</strong> <br className="hidden lg:block" /> {item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    ),
    icon: <Briefcase className="text-teal-500" />,
  },
  {
    id: "layanan-informasi",
    title: "Pusat Layanan & Informasi Terpadu",
    subtitle: "Akses Mudah untuk Kebutuhan Sehari-hari",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 h-full relative z-10 w-full">
        {/* Kolom Kiri: Layanan Publik & e-Payment */}
        <div className="space-y-6">
          <motion.div whileHover={{ x: 5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-cyan-50 p-4 rounded-2xl ring-1 ring-cyan-100 group-hover:bg-cyan-100 transition-colors"><FileText className="text-cyan-600" size={24} /></div>
              <h3 className="text-xl font-extrabold text-slate-800">Administrasi Publik</h3>
            </div>
            <p className="text-slate-600 font-medium ml-[4.5rem] leading-relaxed">Pengurusan dokumen kependudukan, perizinan usaha, dan surat keterangan secara digital tanpa antre.</p>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-teal-50 p-4 rounded-2xl ring-1 ring-teal-100 group-hover:bg-teal-100 transition-colors"><CreditCard className="text-teal-600" size={24} /></div>
              <h3 className="text-xl font-extrabold text-slate-800">Majalengka Pay (E-Payment)</h3>
            </div>
            <p className="text-slate-600 font-medium ml-[4.5rem] leading-relaxed">Sistem pembayaran retribusi daerah, tagihan PDAM, PBB, hingga transaksi pasar tradisional via QRIS lokal.</p>
          </motion.div>
        </div>

        {/* Kolom Kanan: Pusat Informasi & Interaksi */}
        <div className="space-y-6">
          <motion.div whileHover={{ x: -5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-emerald-50 p-4 rounded-2xl ring-1 ring-emerald-100 group-hover:bg-emerald-100 transition-colors"><Info className="text-emerald-600" size={24} /></div>
              <h3 className="text-xl font-extrabold text-slate-800">Portal Informasi Real-time</h3>
            </div>
            <ul className="space-y-2 font-medium text-slate-600 ml-[4.5rem] list-disc pl-4 leading-relaxed">
              <li>Pembaruan harga komoditas pangan pasar.</li>
              <li>Informasi cuaca khusus pertanian.</li>
              <li>Jadwal event budaya & loker Purna-TKI.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ x: -5 }} className="bg-white p-6 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 group transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-50 p-4 rounded-2xl ring-1 ring-green-100 group-hover:bg-green-100 transition-colors"><MessageSquare className="text-green-600" size={24} /></div>
              <h3 className="text-xl font-extrabold text-slate-800">Ruang Partisipasi Warga</h3>
            </div>
            <p className="text-slate-600 font-medium ml-[4.5rem] leading-relaxed">Fitur e-Polling pelibatan warga dalam perencanaan desa & diskusi terbuka bersama dinas terkait.</p>
          </motion.div>
        </div>
      </div>
    ),
    icon: <Info className="text-teal-500" />,
  },
  {
    id: "roadmap",
    title: "Roadmap Implementasi",
    subtitle: "Peta Jalan Digitalisasi 2025-2029",
    content: (
      <div className="w-full mt-2 flex justify-center relative z-10 w-full h-[65vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-transparent pb-10">
        <div className="w-full max-w-4xl relative pb-10">
          <div className="absolute left-[47px] top-6 bottom-0 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-teal-400 to-emerald-400 opacity-60"></div>

          {[
            { year: "2025", title: "Fondasi & Integrasi", desc: "Pembangunan Command Center, SSO, & Peluncuran Beta (Modul Kesehatan/Pengaduan).", color: "bg-cyan-500", border: "border-cyan-200" },
            { year: "2026", title: "Ekspansi Infrastruktur", desc: "Digitalisasi Desa (Paperless Village), IoT Penerangan Jalan, dan penyelesaian Backbone FO.", color: "bg-teal-400", border: "border-teal-200" },
            { year: "2027", title: "Transformasi Ekonomi", desc: "Peluncuran tahap pertama AI Labor Market Kertajati Bekerja & Inkubator Startup Pemuda.", color: "bg-teal-500", border: "border-teal-300" },
            { year: "2028", title: "Kematangan AI", desc: "Aktivasi AI Manajemen Trafik, Algoritma Deteksi Hoax massal, dan Decision Support System interaktif.", color: "bg-emerald-400", border: "border-emerald-200" },
            { year: "2029", title: "Smart Regency Total", desc: "Integrasi penuh; Majalengka ditahbiskan sebagai rujukan utama platform Smart City Data Driven level nasional.", color: "bg-emerald-600", border: "border-emerald-300" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="relative flex items-center mb-6 last:mb-0 group cursor-default"
            >
              <div className={`w-24 h-16 shrink-0 rounded-2xl bg-white flex items-center justify-center text-slate-800 font-extrabold text-xl shadow-md z-10 border border-slate-100 ring-4 ring-white group-hover:ring-${item.color.split('-')[1]}-100 transition-all`}>
                <span className={`w-3 h-3 rounded-full ${item.color} mr-2 shadow-sm`}></span>
                {item.year}
              </div>
              <div className={`ml-8 bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/60 border border-slate-100 flex-1 border-l-4 ${item.border}`}>
                <h4 className="text-xl font-extrabold text-slate-800">{item.title}</h4>
                <p className="text-slate-600 font-medium mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    icon: <Layout className="text-teal-500" />,
  },
  {
    id: "keamanan",
    title: "Keamanan & Keberlanjutan",
    subtitle: "Infrastruktur Bebas Kompromi",
    content: (
      <div className="flex flex-col md:flex-row items-stretch justify-center h-full gap-8 relative z-10 w-full mt-6 pb-12">
        <motion.div whileHover={{ y: -10 }} className="flex-1 bg-white border border-slate-100 p-10 rounded-3xl shadow-xl shadow-slate-200/70 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110">
            <Shield size={180} className="text-teal-600" />
          </div>

          <div className="bg-teal-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ring-1 ring-teal-100">
            <Shield className="text-teal-500" size={40} />
          </div>
          <h2 className="text-3xl font-extrabold mb-4 text-slate-800">SOC & CSIRT</h2>
          <p className="text-slate-600 font-medium text-lg leading-relaxed">
            Pembentukan operasional Security Operations Center & Computer Security Incident Response Team untuk menjaga kedaulatan dan keamanan privasi data warga dari ancaman siber 24 jam penuh tanpa diinterupsi.
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="flex-1 bg-gradient-to-br from-teal-600 to-emerald-700 border border-transparent p-10 rounded-3xl shadow-2xl shadow-emerald-900/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110">
            <Globe size={180} className="text-white" />
          </div>

          <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm ring-1 ring-white/30">
            <Globe className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-extrabold mb-4 text-white">Kedaulatan Data</h2>
          <p className="text-teal-50 font-medium text-lg leading-relaxed">
            Seluruh data dienkripsi dengan standar militer (at-rest & in-transit) dan disimpan di infrastruktur daerah yang terhubung langsung dengan Pusat Data Nasional (PDN) mematuhi mandat privasi BSSN.
          </p>
        </motion.div>
      </div>
    ),
    icon: <Shield className="text-emerald-500" />,
  }
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <div
      className="h-screen w-full bg-[#f8fafc] overflow-hidden flex flex-col font-sans selection:bg-teal-200 relative text-slate-800"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >

      {/* Light Theme Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-cyan-100/50 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[50%] -right-[15%] w-[60%] h-[60%] rounded-full bg-emerald-100/50 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[0%] left-[20%] w-[40%] h-[40%] rounded-full bg-teal-50/60 blur-[100px]" />
      </div>

      {/* Top Progress Bar */}
      <div className="h-1 sm:h-1.5 w-full bg-slate-200 z-50 shrink-0">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 shadow-sm"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Fixed Logo Majalengka Globally on Top Right */}
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 md:top-8 md:right-10 z-[100] pointer-events-none">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/Logo_Majalengka.png"
          alt="Logo Pemkab Majalengka"
          className="h-8 sm:h-10 md:h-14 w-auto drop-shadow-md"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 max-w-7xl w-full mx-auto p-3 sm:p-6 md:p-10 lg:p-12 relative flex flex-col overflow-hidden">

        {/* Header (hidden on cover slide) */}
        <div className="shrink-0" style={{ minHeight: currentSlide === 0 ? '0' : undefined }}>
          <AnimatePresence mode="popLayout">
            {currentSlide !== 0 && (
              <motion.header
                key={`header-${currentSlide}`}
                initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="relative z-20 mb-2 sm:mb-4"
              >
                <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 text-teal-700 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold mb-1 sm:mb-3 shadow-sm">
                  {slides[currentSlide].icon}
                  <span className="ml-1 sm:ml-2 tracking-widest uppercase">Majalengka Sae App</span>
                </div>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight drop-shadow-sm pb-0.5 sm:pb-1 leading-tight">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xs sm:text-sm md:text-lg text-slate-500 mt-0.5 sm:mt-2 font-medium leading-snug">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.header>
            )}
          </AnimatePresence>
        </div>

        {/* Slide Content */}
        <div className="flex-1 min-h-0 relative w-full h-full mt-1 sm:mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar"
            >
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Footer Navigation */}
      <div className="relative z-50 border-t border-slate-200 bg-white/80 backdrop-blur-xl py-2 px-4 sm:py-4 sm:px-8 flex justify-between items-center shadow-[0_-10px_30px_rgba(0,0,0,0.03)] shrink-0">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img src="/mls_logo_01.png" alt="Logo mini" className="h-6 sm:h-8 w-auto drop-shadow-sm" />
          <div className="h-4 sm:h-6 w-px bg-slate-300"></div>
          <div className="text-xs sm:text-sm font-bold text-slate-500 tracking-wide">
            {currentSlide + 1} <span className="mx-0.5 sm:mx-1 font-normal opacity-50">/</span> {slides.length}
          </div>
        </div>

        <div className="flex space-x-2 sm:space-x-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white border border-slate-300 text-slate-600 hover:bg-slate-50 hover:text-teal-600 hover:border-teal-300 disabled:opacity-40 disabled:hover:bg-white disabled:hover:border-slate-300 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <ChevronLeft size={16} className="sm:hidden" />
            <ChevronLeft size={20} className="hidden sm:block" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 border border-transparent text-white hover:from-teal-400 hover:to-emerald-400 shadow-md shadow-teal-500/30 disabled:opacity-40 disabled:shadow-none disabled:hover:from-teal-500 disabled:hover:to-emerald-500 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={20} className="hidden sm:block" />
          </button>
        </div>
      </div>

    </div>
  );
}
