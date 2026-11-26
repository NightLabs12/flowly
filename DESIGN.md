# DESIGN.md: Flowly (dummy SaaS landing page)

Dokumen ini adalah arah desain yang disetujui (R-37). `antislop.md` dipakai sebagai filter di atasnya. PRD Flowly v1.0 adalah sumber konten; bagian yang bertabrakan dengan aturan antislop dicatat sebagai adaptasi, bukan diabaikan.

## Identity
Flowly adalah ruang kerja fiktif untuk tugas, prioritas, dan progres tim. Landing page ini adalah portofolio dummy, jadi setiap data pelanggan, angka, dan testimoni diberi label demo yang terlihat.

## Personality
Tenang, rapi, dan tepat. Tidak berteriak. Mengutamakan kejelasan daripada janji besar.

## Visual language
SaaS modern yang minimal, dengan satu aksen ungu dan hierarki tipografi yang tegas. Kartu dipakai hanya ketika memang mengelompokkan data. Tidak ada gradient, glow, atau glassmorphism.

## Palette (R-29: 3 core + 1 accent)
- **Navy** `#1E1B4B`: judul dan teks utama. Alasan: identitas indigo dari PRD, lebih hangat dan lebih dalam dari hitam.
- **White** `#FFFFFF`: latar utama.
- **Surface** `#F6F5FB`: latar sekunder dan panel. Alasan: abu-abu muda bernuansa ungu menyatukan sistem tanpa warna baru.
- **Violet** `#6C5CE7` (accent): tombol utama, tab aktif, dan state aktif. Alasan: satu warna sinyal untuk aksi dan status, bukan dekorasi.

Teks sekunder `#6B6885` adalah tint dari Navy, bukan warna baru. Garis `#E4E2EF` adalah tint dari Surface.

### Adaptasi warna dari PRD
PRD meminta "soft purple gradient" sebagai aksen. Gradient biru/ungu sebagai treatment utama dilarang R-01 karena merupakan default AI yang menghapus hierarki. Diganti satu warna violet solid yang dipakai hanya pada aksi dan status. Alasan tertulis: identitas merek tetap indigo, hierarki menjadi lebih jelas.

## Typography (R-06)
- **Inter** (self-hosted, variabel 400-800): heading dan body. Alasan dari PRD dan alasan desain: grotesque netral dengan angka yang mudah dibaca, cocok untuk antarmuka produktivitas dan menjaga teks UI tetap tenang. Dipilih karena kebutuhan produk, bukan sebagai default.

## Motif
Tiga garis pendek berurutan menurun, membentuk gesture ke kanan. Dipakai sebagai logo dan penanda nomor bagian. Alasan: merepresentasikan tugas yang masuk ke alur kerja, dan memberi identitas yang bisa dikenali tanpa ilustrasi generik.

## Ikon (R-04)
Ikon garis digambar manual sebagai SVG inline dengan ketebalan yang sama dengan motif. Tidak memakai pustaka ikon tertentu. Alasan: bentuk dipilih berdasarkan fungsi tiap fitur, bukan karena tampilan khas sebuah library.

## Dials
**ENERGY 2 / RHYTHM 2 / MOTION 2**
- ENERGY 2: tipe besar tapi tidak berteriak, kontras jelas, satu aksen.
- RHYTHM 2: sebagian besar bagian memakai grid dua kolom, dengan dua jeda komposisi (product preview lebar penuh dan pricing dua kolom).
- MOTION 2: stagger judul, progress baca, pergantian tab preview, accordion FAQ, magnetic CTA, draw-in garis waktu, pengisian progress bar, pop centangan, dan hover card. Semua satu kali atau dipicu interaksi, tanpa loop tanpa henti.

## Adaptasi pola PRD yang bertabrakan dengan antislop
- **CTA generik** "Get Started for Free" dan "Explore Features" (R-15) diganti "Create your free workspace" dan "See how Flowly works". Alasan: menyebut tindakan dan objeknya.
- **Em dash** pada subheadline (R-02) diganti titik. Alasan: aturan hard gate.
- **How It Works** tiga langkah berikon bulat bernomor (R-05) tetap tiga langkah karena prosesproduknya memang tiga, tetapi ditampilkan sebagai garis waktu tipografis dengan angka mono, bukan lingkaran ikon. Alasan: menghilangkan bentuk templat tanpa mengubah isi.
- **Footer empat kolom** Product / Company / Resources / Legal (R-05) diganti dua area: identitas produk dan satu baris tautan. Alasan: tidak ada cukup tautan nyata untuk empat kolom.
- **Logo bar dan statistik pelanggan** (R-18, R-36) ditampilkan sebagai placeholder `[Logo demo]` dan `[Jumlah pengguna demo]`, dengan caption yang menyatakan data contoh. Alasan: tidak ada pelanggan nyata.
- **Testimonial** (R-18) memakai inisial, bukan foto AI, dan setiap kartu diberi label "Contoh". Alasan: tidak ada orang nyata yang dikutip.
- **Tiga tier pricing dengan tier tengah disorot** tidak muncul karena PRD hanya menentukan dua tier. Keduanya ditampilkan setara. Alasan: tidak ada alasan hierarki untuk menyorot salah satu.

## Dua bahasa (ID / EN)
- Seluruh konten UI berasal dari satu dictionary di `src/i18n/index.jsx`, dibungkus `LanguageProvider` dan dibaca lewat `useLanguage()`. Alasan: satu sumber teks membuat terjemahan tidak bisa tertinggal di satu komponen.
- Bahasa awal Indonesia, pilihan disimpan di `localStorage.flowly-language`. Alasan: audiens portofolio berbahasa Indonesia, tetapi status harus bertahan setelah refresh.
- Sakelar memakai dua tombol `aria-pressed` dengan bendera SVG inline: merah-putih untuk Indonesia dan Union Jack untuk English. Alasan: emoji bendera tampil berbeda tiap sistem operasi dan sering tidak punya label yang jelas, jadi SVG memberi bentuk dan warna yang konsisten.
- Bendera ditemani kode `ID` / `EN` agar tetap terbaca saat warna tidak tersedia. `aria-label` penuh tetap diberikan untuk pembaca layar.
- Mengganti bahasa juga mengubah `html lang`, judul dokumen, meta description, dan tag OG. Alasan: SEO dan pembaca layar harus mengikuti bahasa yang aktif.
- Kunci data seperti id tab dan struktur grid sengaja tidak diterjemahkan, supaya tidak ada pergeseran layout atau kehilangan fokus saat bahasa berganti.

## Komponen interaktif
- Product preview memakai empat tab sungguhan yang mengganti tampilan dashboard, tugas, progres, dan kalender.
- FAQ accordion hanya membuka satu item, bisa dikunci dengan Enter/Spasi, dan ditutup dengan klik lagi.
- Tombol "Masuk", "Kebijakan Privasi", dan "Syarat Layanan" membuka dialog info yang bisa ditutup dengan Escape. Tidak ada tautan mati (R-26).

## Animasi tambahan
- **Magnetic CTA** pada tombol utama hero dan final CTA: tombol mengikuti kursor saat didekati dan kembali saat ditinggalkan. Alasan: memberi respons fisik pada satu aksi paling penting, bukan hiasan di semua tombol.
- **Draw-in garis waktu** di How It Works: garis ungu menggambar dari kiri saat section masuk viewport. Alasan: menunjukkan urutan membaca tiga langkah.
- **Progress bar terisi** saat tab Progress dibuka. Alasan: data progres terasa diisi, bukan langsung muncul. Memakai `transform: scaleX`, bukan `width`, agar tetap di GPU.
- **Pop centangan** pada checkbox view Tasks. Alasan: konfirmasi visual bahwa aksi berhasil.
- **Entrance mockup hero**: stats dan panel masuk berurutan dengan jeda 180 ms dan 300 ms. Alasan: mengarahkan perhatian ke produk sebelum teks pendukung dibaca.
- **Hover card** pada feature unggulan, pricing, dan testimoni. Alasan: menandakan kartu bisa dilihat lebih dekat, bukan efek dekoratif di semua elemen.

Semua animasi di atas berhenti setelah selesai. Tidak ada pulse, float, atau marquee berulang. `prefers-reduced-motion` mematikan semuanya lewat media query global dan pengecekan `matchMedia` di hook magnetic.

## Performa HP
- Semua font di-host sendiri, tanpa script pihak ketiga yang memblokir render.
- Gerak memakai `transform` dan `opacity`.
- `prefers-reduced-motion` mematikan stagger, transisi tab, dan animasi accordion.
- Tidak ada gambar raster di atas lipatan. Mockup dibangun dengan CSS agar tidak ada layout shift.

## Theme
Tema terang tetap. Alasan: warna latar putih dan surface ungu muda adalah identitas produk sesuai PRD. Tidak ada toggle yang dikirim (R-21, alasan kuat tercatat).

## Keputusan satu baris (R-31)
- Navy: identitas indigo PRD dengan kontras tinggi.
- Violet solid: satu aksi dan status, mengganti gradient generik.
- Inter: angka dan teks UI mudah dibaca.
- Mockup CSS: produk terlihat nyata tanpa gambar berat.
- Dua kolom pada sebagian besar bagian: ritme stabil sesuai dial RHYTHM 2.
- Label demo: tidak ada klaim pelanggan atau angka palsu.
- Dialog info: tombol tanpa tujuan diubah menjadi perilaku nyata.
