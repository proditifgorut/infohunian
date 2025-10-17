import { Price, Testimonial } from '../types';

export const pricingData: Price[] = [
  { category: 'Pelajar', icon: '👨‍🎓', daily: 120000, weekly: 700000, monthly: 1800000, yearly: 17000000 },
  { category: 'Mahasiswa', icon: '🎓', daily: 150000, weekly: 900000, monthly: 2200000, yearly: 20000000 },
  { category: 'Pegawai', icon: '💼', daily: 200000, weekly: 1100000, monthly: 2800000, yearly: 25000000 },
  { category: 'Keluarga Kecil', icon: '👨‍👩‍👧‍👦', daily: 250000, weekly: 1300000, monthly: 3500000, yearly: 30000000 },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: "Lokasinya strategis banget, dekat kampus dan harganya super hemat untuk kantong mahasiswa. Recommended!",
    name: "Andi Pratama",
    role: "Mahasiswa",
    avatar: `https://i.pravatar.cc/150?u=andi`
  },
  {
    quote: "Fasilitasnya lengkap dan suasananya tenang, cocok buat saya yang butuh istirahat setelah kerja. Parkiran juga luas.",
    name: "Siti Lestari",
    role: "Pegawai Swasta",
    avatar: `https://i.pravatar.cc/150?u=siti`
  },
  {
    quote: "Kami sekeluarga merasa nyaman tinggal di sini. Bersih, aman, dan anak-anak suka halamannya. Seperti di rumah sendiri.",
    name: "Budi Santoso",
    role: "Keluarga Kecil",
    avatar: `https://i.pravatar.cc/150?u=budi`
  }
];

export const featuresData = [
    {
        icon: 'MapPin',
        title: 'Lokasi Strategis',
        description: 'Dekat dengan pusat kota, kampus, dan fasilitas umum.'
    },
    {
        icon: 'Sofa',
        title: 'Nyaman & Lengkap',
        description: 'Fasilitas lengkap dan siap huni untuk kenyamanan Anda.'
    },
    {
        icon: 'ShieldCheck',
        title: 'Aman 24 Jam',
        description: 'Keamanan terjamin untuk ketenangan Anda dan keluarga.'
    },
    {
        icon: 'BadgePercent',
        title: 'Harga Terjangkau',
        description: 'Sewa fleksibel dengan harga terbaik di kelasnya.'
    }
];

export const gorontaloLocations = [
    'Kota Gorontalo', 
    'Kabupaten Gorontalo', 
    'Bone Bolango', 
    'Gorontalo Utara', 
    'Boalemo', 
    'Pohuwato'
];
