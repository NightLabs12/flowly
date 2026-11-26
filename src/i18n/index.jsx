import { createContext, useContext, useEffect, useState } from 'react'

export const translations = {
  id: {
    meta: {
      title: 'Flowly: Lebih Banyak Selesai, Tanpa Kekacauan.',
      ogTitle: 'Flowly: Lebih Banyak Selesai, Tanpa Kekacauan.',
      ogDescription: 'Ruang kerja demo untuk tugas, prioritas, dan progres tim.',
      description:
        'Flowly adalah ruang kerja demo untuk tugas, prioritas, dan progres tim. Landing page produk fiktif untuk portofolio.',
    },
    common: { close: 'Tutup' },
    nav: {
      features: 'Fitur',
      howItWorks: 'Cara Kerja',
      pricing: 'Harga',
      faq: 'Tanya Jawab',
      login: 'Masuk',
      cta: 'Buat ruang kerja gratis',
      menuOpen: 'Buka menu',
      menuClose: 'Tutup menu',
      mainNav: 'Navigasi utama',
      footerNav: 'Navigasi bawah',
      switchLabel: 'Pilih bahasa',
      switchToId: 'Ganti bahasa ke Indonesia',
      switchToEn: 'Ganti bahasa ke Inggris',
    },
    loginDialog: {
      title: 'Masuk',
      body: 'Masuk bukan bagian dari demo portofolio ini. Tidak ada sistem akun di halaman ini.',
    },
    hero: {
      titleWords: [
        { text: 'Lebih', accent: false },
        { text: 'banyak', accent: false },
        { text: 'selesai.', accent: false },
        { text: 'Tanpa', accent: true },
        { text: 'kekacauan.', accent: true },
      ],
      ariaLabel: 'Lebih banyak selesai. Tanpa kekacauan.',
      lead: 'Flowly membantu kamu mengatur tugas, menentukan prioritas, dan menjaga tim tetap bergerak. Semua dalam satu ruang kerja yang sederhana.',
      ctaPrimary: 'Buat ruang kerja gratis',
      ctaSecondary: 'Lihat cara kerja Flowly',
      note: 'Produk demo. Tidak ada pendaftaran atau pembayaran di halaman ini.',
    },
    proof: {
      heading: 'Dibuat untuk tim yang menyelesaikan kerja.',
      ariaLabel: 'Contoh bukti sosial',
      note: 'Contoh logo dan data. [Jumlah pengguna demo] tim pada contoh, bukan pelanggan nyata.',
    },
    features: {
      label: '01 / Fitur',
      title: 'Semua yang kamu butuhkan untuk tetap mengalir.',
      flagship: {
        name: 'Manajemen Tugas',
        description: 'Atur tugas, tenggat, dan prioritas di satu tempat.',
      },
      miniRows: [
        { label: 'Tulis brief proyek', tag: 'Tinggi' },
        { label: 'Tinjau bersama tim', tag: 'Sedang' },
        { label: 'Terbitkan versi akhir', tag: 'Rendah' },
      ],
      items: [
        { name: 'Perencanaan Cerdas', description: 'Rencanakan hari kamu dan fokus pada kerja yang paling penting.' },
        { name: 'Kolaborasi Tim', description: 'Bagikan tugas dan jaga semua orang tetap sejalan.' },
        { name: 'Lacak Progres', description: 'Lihat seberapa banyak pekerjaan yang sudah selesai.' },
        { name: 'Ruang Kerja Rapi', description: 'Simpan proyek dan dokumen tetap teratur.' },
        { name: 'Alur Sederhana', description: 'Habiskan lebih sedikit waktu mengatur kerja dan lebih banyak mengerjakannya.' },
      ],
    },
    steps: {
      label: '02 / Cara kerja',
      title: 'Mulai alur kerjamu dalam tiga langkah sederhana.',
      items: [
        { title: 'Buat Ruang Kerja', text: 'Siapkan ruang kerja pribadi atau tim.' },
        { title: 'Atur Tugasmu', text: 'Tambahkan tugas, tenggat, dan prioritas.' },
        { title: 'Selesaikan Kerja', text: 'Pantau progres dan selesaikan pekerjaanmu.' },
      ],
    },
    preview: {
      label: '03 / Pratinjau produk',
      title: 'Lihat Flowly bekerja.',
      intro: 'Ganti empat tampilan ruang kerja yang sama. Semuanya dibangun dengan React dan CSS.',
      tabs: ['Ringkasan', 'Tugas', 'Progres', 'Kalender'],
      viewsLabel: 'Tampilan produk',
      note: 'Antarmuka demo. Data yang ditampilkan bersifat ilustrasi.',
    },
    mockup: {
      brand: 'Flowly',
      windowLabel: 'Pratinjau antarmuka',
      greeting: 'Selamat pagi',
      workspace: 'Ruang kerjamu',
      demoData: 'Data demo',
      openTasks: 'Tugas terbuka',
      dueThisWeek: 'Jatuh tempo minggu ini',
      completed: 'Selesai',
      today: 'Hari ini',
      allTasks: 'Semua tugas',
      sidebar: ['Ringkasan', 'Tugas saya', 'Proyek', 'Kalender'],
      markComplete: 'Tandai selesai',
      markIncomplete: 'Tandai belum selesai',
      projectProgress: 'Progres proyek',
      thisWeek: 'Minggu ini',
      days: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],
      projects: ['Desain ulang situs', 'Kampanye Q3', 'Alur onboarding'],
      tasks: ['Tulis brief proyek', 'Tinjau opsi tata letak', 'Siapkan catatan peluncuran'],
      taskProjects: ['Desain ulang situs', 'Desain ulang situs', 'Kampanye Q3'],
      priorities: ['Tinggi', 'Sedang', 'Rendah'],
    },
    pricing: {
      label: '04 / Harga',
      title: 'Harga sederhana. Tanpa kejutan.',
      plans: [
        {
          name: 'Gratis',
          price: '$0',
          period: '/bulan',
          description: 'Untuk satu orang yang mulai teratur.',
          features: ['Ruang kerja pribadi', 'Manajemen tugas dasar', 'Hingga 3 proyek', 'Lacak progres dasar'],
          cta: 'Buat ruang kerja gratis',
        },
        {
          name: 'Pro',
          price: '$9',
          period: '/bulan',
          description: 'Untuk orang yang bekerja dengan tim.',
          features: ['Proyek tanpa batas', 'Manajemen tugas lanjutan', 'Dukungan prioritas', 'Analitik lanjutan'],
          cta: 'Pilih Flowly Pro',
        },
      ],
      note: 'Harga fiktif untuk demonstrasi. Tidak ada pembayaran yang dipungut.',
    },
    testimonials: {
      label: '05 / Testimoni',
      title: 'Kerja terasa lebih baik dengan Flowly.',
      demoLabel: 'Contoh',
      cards: [
        { name: 'Pengguna Demo 01', role: 'Freelancer (contoh)', quote: 'Kutipan contoh mengatakan minggu itu terasa lebih jelas, tidak lagi tersebar.' },
        { name: 'Pengguna Demo 02', role: 'Mahasiswa (contoh)', quote: 'Kutipan contoh mengatakan prioritas lebih mudah terlihat sekilas.' },
        { name: 'Pengguna Demo 03', role: 'Pimpinan tim kecil (contoh)', quote: 'Kutipan contoh mengatakan semua orang tahu apa yang bergerak maju.' },
      ],
      note: 'Ini kutipan contoh untuk demo portofolio. Tidak ada pelanggan nyata yang dikutip.',
    },
    faq: {
      label: '06 / Tanya jawab',
      title: 'Beberapa hal yang perlu diketahui.',
      intro: 'Jawaban menjelaskan demo, bukan layanan nyata.',
      items: [
        { question: 'Apa itu Flowly?', answer: 'Flowly adalah konsep ruang kerja untuk tugas, prioritas, dan progres proyek. Halaman ini adalah demo portofolio dari produk fiktif.' },
        { question: 'Apakah Flowly gratis?', answer: 'Demo menampilkan dua paket: Gratis seharga $0 dan Pro seharga $9 per bulan. Tidak ada pembayaran yang dipungut di halaman ini.' },
        { question: 'Bisakah Flowly dipakai dengan tim?', answer: 'Konsepnya mencakup tugas bersama dan ruang kerja tim. Demo ini tidak memiliki backend, jadi tidak ada yang benar-benar tersimpan.' },
        { question: 'Bisakah saya membatalkan langganan?', answer: 'Ini demo desain, jadi tidak ada langganan untuk dibatalkan dan tidak ada akun untuk ditutup.' },
        { question: 'Apakah saya perlu kartu kredit untuk mulai?', answer: 'Tidak. Tombol pendaftaran di halaman ini hanya demonstrasi dan tidak mengumpulkan data pembayaran.' },
      ],
    },
    final: {
      label: '07 / Mulai',
      title: 'Siap menemukan alur kerjamu?',
      text: 'Mulai atur pekerjaanmu hari ini dan buat setiap hari lebih produktif.',
      cta: 'Buat ruang kerja gratis',
      note: 'Hanya demo. Tidak ada akun yang dibuat.',
      dialogTitle: 'Demo pendaftaran',
      dialogBody: 'Ini adalah landing page portofolio untuk produk fiktif. Tidak ada akun yang dibuat dan tidak ada data yang disimpan.',
    },
    footer: {
      description: 'Ruang kerja demo untuk tugas, prioritas, dan progres tim.',
      copyright: '© 2026 Flowly. Produk fiktif untuk demonstrasi portofolio.',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat Layanan',
      dialogBody: 'Ini adalah demo portofolio. Halaman ini tidak menyimpan data pribadi dan tidak memasang cookie analitik. Versi produksi memerlukan kebijakan nyata sebelum diluncurkan.',
      socialNote: 'Tautan sosial mengarah ke beranda platform sebagai placeholder.',
    },
    skip: 'Lewati ke konten',
  },

  en: {
    meta: {
      title: 'Flowly: Get More Done. Without the Chaos.',
      ogTitle: 'Flowly: Get More Done. Without the Chaos.',
      ogDescription: 'A demo productivity workspace for tasks, priorities, and team progress.',
      description:
        'Flowly is a demo productivity workspace for tasks, priorities, and team progress. A fictional SaaS landing page built as a portfolio project.',
    },
    common: { close: 'Close' },
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Log in',
      cta: 'Create your free workspace',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      mainNav: 'Main navigation',
      footerNav: 'Footer navigation',
      switchLabel: 'Choose language',
      switchToId: 'Switch language to Indonesian',
      switchToEn: 'Switch language to English',
    },
    loginDialog: {
      title: 'Log in',
      body: 'Log in is not part of this portfolio demo. There is no account system behind this page.',
    },
    hero: {
      titleWords: [
        { text: 'Get', accent: false },
        { text: 'More', accent: false },
        { text: 'Done.', accent: false },
        { text: 'Without', accent: true },
        { text: 'the', accent: true },
        { text: 'Chaos.', accent: true },
      ],
      ariaLabel: 'Get More Done. Without the Chaos.',
      lead: 'Flowly helps you organize tasks, manage priorities, and keep your team moving forward. All in one simple workspace.',
      ctaPrimary: 'Create your free workspace',
      ctaSecondary: 'See how Flowly works',
      note: 'Demo product. No signup or payment on this page.',
    },
    proof: {
      heading: 'Made for teams who get things done.',
      ariaLabel: 'Example social proof',
      note: 'Example logos and data. [Demo user count] teams in the example, not real customers.',
    },
    features: {
      label: '01 / Features',
      title: 'Everything you need to stay in flow.',
      flagship: {
        name: 'Task Management',
        description: 'Organize tasks, deadlines, and priorities in one place.',
      },
      miniRows: [
        { label: 'Write project brief', tag: 'High' },
        { label: 'Review with team', tag: 'Medium' },
        { label: 'Publish final version', tag: 'Low' },
      ],
      items: [
        { name: 'Smart Planning', description: 'Plan your day and focus on the most important work.' },
        { name: 'Team Collaboration', description: 'Share tasks and keep everyone aligned.' },
        { name: 'Progress Tracking', description: 'See how much work has been completed.' },
        { name: 'Workspace Organization', description: 'Keep projects and documents organized.' },
        { name: 'Simple Workflow', description: 'Spend less time managing work and more time doing it.' },
      ],
    },
    steps: {
      label: '02 / How it works',
      title: 'Start your workflow in three simple steps.',
      items: [
        { title: 'Create Your Workspace', text: 'Set up your personal or team workspace.' },
        { title: 'Organize Your Tasks', text: 'Add tasks, deadlines, and priorities.' },
        { title: 'Get Things Done', text: 'Track progress and complete your work.' },
      ],
    },
    preview: {
      label: '03 / Product preview',
      title: 'See Flowly at work.',
      intro: 'Switch between four views of the same workspace. Everything here is built with React and CSS.',
      tabs: ['Overview', 'Tasks', 'Progress', 'Calendar'],
      viewsLabel: 'Product views',
      note: 'Demo interface. Shown data is illustrative.',
    },
    mockup: {
      brand: 'Flowly',
      windowLabel: 'Interface preview',
      greeting: 'Good morning',
      workspace: 'Your workspace',
      demoData: 'Demo data',
      openTasks: 'Open tasks',
      dueThisWeek: 'Due this week',
      completed: 'Completed',
      today: 'Today',
      allTasks: 'All tasks',
      sidebar: ['Overview', 'My tasks', 'Projects', 'Calendar'],
      markComplete: 'Mark complete',
      markIncomplete: 'Mark incomplete',
      projectProgress: 'Project progress',
      thisWeek: 'This week',
      days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      projects: ['Website redesign', 'Q3 campaign', 'Onboarding flow'],
      tasks: ['Draft project brief', 'Review layout options', 'Prepare launch notes'],
      taskProjects: ['Website redesign', 'Website redesign', 'Q3 campaign'],
      priorities: ['High', 'Medium', 'Low'],
    },
    pricing: {
      label: '04 / Pricing',
      title: 'Simple pricing. No surprises.',
      plans: [
        {
          name: 'Free',
          price: '$0',
          period: '/month',
          description: 'For one person getting organized.',
          features: ['Personal workspace', 'Basic task management', 'Up to 3 projects', 'Basic progress tracking'],
          cta: 'Create free workspace',
        },
        {
          name: 'Pro',
          price: '$9',
          period: '/month',
          description: 'For people working with others.',
          features: ['Unlimited projects', 'Advanced task management', 'Priority support', 'Advanced analytics'],
          cta: 'Choose Flowly Pro',
        },
      ],
      note: 'Fictional pricing for demonstration. No payment is collected.',
    },
    testimonials: {
      label: '05 / Testimonials',
      title: 'Work feels better with Flowly.',
      demoLabel: 'Example',
      cards: [
        { name: 'Demo User 01', role: 'Freelancer (example)', quote: 'The example quote says the week finally felt visible instead of scattered.' },
        { name: 'Demo User 02', role: 'Student (example)', quote: 'The example quote says priorities were easier to see at a glance.' },
        { name: 'Demo User 03', role: 'Small team lead (example)', quote: 'The example quote says everyone knew what was moving forward.' },
      ],
      note: 'These are example quotes for a portfolio demo. No real customer is quoted.',
    },
    faq: {
      label: '06 / FAQ',
      title: 'A few things worth knowing.',
      intro: 'Answers describe the demo, not a live service.',
      items: [
        { question: 'What is Flowly?', answer: 'Flowly is a workspace concept for tasks, priorities, and project progress. This page is a portfolio demo of a fictional product.' },
        { question: 'Is Flowly free?', answer: 'The demo shows two plans: Free at $0 and Pro at $9 per month. No payment is collected anywhere on this page.' },
        { question: 'Can I use Flowly with my team?', answer: 'The concept includes shared tasks and a team workspace. This demo has no backend, so nothing is actually saved.' },
        { question: 'Can I cancel my subscription?', answer: 'This is a design demo, so there is no subscription to cancel and no account to close.' },
        { question: 'Do I need a credit card to get started?', answer: 'No. The signup button on this page is a demonstration and does not collect payment details.' },
      ],
    },
    final: {
      label: '07 / Get started',
      title: 'Ready to find your flow?',
      text: 'Start organizing your work today and make every day more productive.',
      cta: 'Create your free workspace',
      note: 'Demo only. No account will be created.',
      dialogTitle: 'Signup demo',
      dialogBody: 'This is a portfolio landing page for a fictional product. No account is created and no data is stored.',
    },
    footer: {
      description: 'A demo workspace for tasks, priorities, and team progress.',
      copyright: '© 2026 Flowly. Fictional product for portfolio demonstration.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      dialogBody: 'This is a portfolio demo. The page stores no personal data and sets no analytics cookies. A production version would need a real policy before launch.',
      socialNote: 'Social links point to platform homepages as placeholders.',
    },
    skip: 'Skip to content',
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = window.localStorage.getItem('flowly-language')
    return saved === 'id' || saved === 'en' ? saved : 'id'
  })

  useEffect(() => {
    const content = translations[language]
    document.documentElement.lang = language === 'id' ? 'id' : 'en'
    document.title = content.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', content.meta.ogTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', content.meta.ogDescription)
    window.localStorage.setItem('flowly-language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
