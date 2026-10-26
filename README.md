# 🧺 Laundry Smart — Frontend Styleguide & Documentation

Selamat datang di repositori resmi **Laundry Smart**. Dokumen ini berfungsi sebagai **Single Source of Truth (SSOT)** untuk seluruh arsitektur frontend, panduan desain (*design system*), komponen antarmuka (*UI components*), dan kaidah animasi interaktif website Laundry Smart.

Gunakan panduan ini sebagai acuan setiap kali membuat halaman baru, menambahkan section container, atau memodifikasi styling agar seluruh antarmuka tetap konsisten, elegan, dan berstandar tinggi.

---

## 📑 Daftar Isi
1. [Tech Stack & Filosofi Desain](#1-tech-stack--filosofi-desain)
2. [Struktur Direktori Proyek](#2-struktur-direktori-proyek)
3. [Design Tokens (Warna, Tipografi, Shadows)](#3-design-tokens)
4. [Pola Layout Utama: Overlapping Container Paradigm](#4-pola-layout-utama-overlapping-container-paradigm)
5. [Komponen Global: Navbar & Footer Dinamis](#5-komponen-global-navbar--footer-dinamis)
6. [Katalog Komponen UI](#6-katalog-komponen-ui)
7. [Standar Animasi GSAP & ScrollTrigger](#7-standar-animasi-gsap--scrolltrigger)
8. [Panduan Responsivitas & Breakpoints](#8-panduan-responsivitas--breakpoints)
9. [SOP Penambahan Halaman atau Container Baru](#9-sop-penambahan-halaman-atau-container-baru)

---

## 1. Tech Stack & Filosofi Desain

Website Laundry Smart dirancang dengan pendekatan **modern vanilla web**, mengutamakan performa kilat tanpa *overhead framework*:

- **Markup:** Semantic HTML5
- **Styling:** Vanilla CSS (CSS Grid, Flexbox, Glassmorphism, CSS Custom Properties)
- **Logika & Komponen:** Vanilla JavaScript (ES6+)
- **Mesin Animasi:** [GSAP 3.12.2](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)

### Filosofi Desain
1. **Fresh & Clean:** Identik dengan air, kebersihan, dan transparansi melalui palet biru laut, putih bersih, dan aksen es.
2. **Dynamic Depth:** Memanfaatkan efek tumpang tindih (*stacking/overlapping*), pantulan kaca (*glassmorphism*), dan animasi *parallax* berbasis scroll.
3. **Interactive & Responsive:** Transisi mikro yang halus, feedback visual saat hover/klik, dan penyesuaian tata letak otomatis dari layar HP hingga Desktop.

---

## 2. Struktur Direktori Proyek

```
Laundry_Smart Yogi/
├── index.html              # Titik masuk utama (meta-refresh ke html/home.html)
├── asset/                  # Gambar, logo brand, ilustrasi, dan foto fasilitas
│   ├── 1.jpg - 6.jpeg      # Foto fasilitas untuk carousel slider
│   ├── LAUNDRY 2.png       # Logo utama (horizontal / navbar & favicon)
│   ├── LAUNDRY 3.png       # Logo sekunder (footer)
│   └── foto_1.jpg          # Foto profil Tentang Kami
├── css/                    # Lembar gaya spesifik per modul & halaman
│   ├── navbar.css          # Styling global navbar melayang + footer 4 kolom
│   ├── home.css            # Styling khusus halaman Beranda (Hero, Water Blaze, Fitur)
│   ├── laundry.css         # Styling khusus halaman Tentang & Timeline Alur
│   ├── mitra.css           # Styling khusus Paket Kemitraan, Fasilitas, & Accordion
│   └── contact.css         # Styling khusus Formulir Kontak & Integrasi WhatsApp
├── html/                   # Halaman-halaman konten website
│   ├── home.html           # Halaman Beranda
│   ├── laundry.html        # Halaman Informasi Brand & Visi Misi
│   ├── mitra.html          # Halaman Paket Kemitraan & Keunggulan
│   └── contact.html        # Halaman Kontak & Form Permohonan Mitra
├── js/                     # Skrip fungsionalitas dan animasi GSAP
│   ├── navbar.js           # Render otomatis navbar glassmorphism & footer
│   ├── home.js             # Animasi Hero, Water Blaze, & Parallax Home
│   ├── laundry.js          # Animasi Visi Misi & Interactive Flow Timeline
│   ├── mitra.js            # Animasi Accordion Dropdown, Slider Foto, & Paket
│   └── contact.js          # Validasi formulir & integrasi API chat WhatsApp
└── README.md               # Dokumentasi Panduan Gaya & Sistem Frontend
```

---

## 3. Design Tokens

Seluruh komponen harus mengacu pada token desain berikut untuk menjaga konsistensi visual:

### 3.1. Palet Warna (Color Palette)

| Kategori | Hex Code | Deskripsi & Penggunaan |
| :--- | :--- | :--- |
| **Primary Blue** | `#007bff` | Tombol utama, border aktif, ikon aksen, badge judul |
| **Deep Navy** | `#003380` | Aksen gelap, stroke ikon tertentu, dasar gradasi teks |
| **Dark Royal Blue**| `#0056b3` | Awal gradasi judul utama, hover warna gelap |
| **Ice Blue** | `#80bdff` | Akhir gradasi teks, highlight halus |
| **Soft Border Blue**| `#dce7f7` | Garis tepi (*border*) kartu strategi, garis pembagi |
| **Neutral Dark** | `#111111`, `#333333` | Teks judul utama, angka kartu fitur, teks kontras tinggi |
| **Neutral Body** | `#555555`, `#444444` | Teks deskripsi/paragraf reguler |
| **Neutral Light**| `#777777`, `#888888` | Teks keterangan kecil, footer copyright |
| **Pure White** | `#ffffff` | Background kartu, background section ganjil, teks di atas biru |
| **Glass Surface**| `rgba(255, 255, 255, 0.15)` | Background transparan navbar melayang |

#### Rumus Gradasi Teks Khusus (*Gradient Text*)
Gunakan styling ini pada kata kunci judul untuk memberikan kesan premium:
```css
.text-gradient-blue {
    background: linear-gradient(180deg, #0056b3 0%, #80bdff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.08));
}
```

### 3.2. Tipografi (Typography)
- **Font Family Utama:** `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- **Tingkat Ketebalan (*Font Weights*):**
  - Regular (`400`): Paragraf deskripsi
  - Medium (`500`): Keterangan sekunder, teks di dalam card
  - Semi-Bold (`600`): Label sub-judul, menu navigasi, tombol
  - Bold (`700`): Judul kartu, teks penekanan (`<strong>`)
  - Extra Bold (`800` / `900`): Judul utama section & angka fitur

### 3.3. Sudut Melengkung (*Border Radius*)
- Ikon Box / Badge Kecil: `12px`
- Kartu UI Reguler (*Card*): `20px`
- Tombol Utama / Badge Besar: `25px`
- Navbar Melayang (*Floating Bar*): `30px`
- Ikon Melayang Bulat (*Circle Wrapper*): `50%`

### 3.4. Bayangan (*Box Shadow*)
- **Card Standar:** `0 10px 30px rgba(0, 0, 0, 0.04);`
- **Card Hover (Elevated):** `0 15px 35px rgba(0, 123, 255, 0.15);`
- **Navbar Glassmorphism:** `0 8px 32px 0 rgba(0, 0, 0, 0.15);`

---

## 4. Pola Layout Utama: Overlapping Container Paradigm

Ciri khas arsitektur Laundry Smart adalah efek tumpukan section (**Sticky Stacking Sections**). Saat pengunjung melakukan scroll ke bawah, section berikutnya akan meluncur naik menutupi section sebelumnya seperti tumpukan kartu.

```
+-------------------------------------------------------+
|  Fixed Navbar (z-index: 9999)                         |
+-------------------------------------------------------+
|  Hero Section (position: sticky; z-index: 0)         |
+-------------------------------------------------------+  <-- Ditimpa saat di-scroll
|  Container 2 (position: sticky; z-index: 10; top: 0)  |
+-------------------------------------------------------+  <-- Ditimpa saat di-scroll
|  Container 3 (position: sticky; z-index: 20; top: 0)  |
+-------------------------------------------------------+
|  Footer (position: relative; z-index: 50)             |
+-------------------------------------------------------+
```

### 4.1. Aturan Global CSS Wajib
Untuk mengaktifkan perilaku ini tanpa memotong animasi:
```css
/* PENTING: Gunakan clip, JANGAN hidden */
body {
    background-color: #ffffff;
    color: #333;
    overflow-x: clip; /* 'hidden' akan mematikan kemampuan position: sticky */
}

main {
    padding-top: 80px; /* Kompensasi untuk navbar melayang */
}
```

### 4.2. Rumus Section Overlapping
Setiap section di dalam `<main>` harus mengikuti urutan `z-index` yang meningkat bertahap:
```css
/* Section 1: Hero */
.hero {
    position: sticky;
    top: 80px;
    z-index: 0;
    height: calc(100vh - 80px);
}

/* Section 2 (Menimpa Hero) */
.section-tentang {
    position: sticky;
    top: 0;
    z-index: 10;
    min-height: 100vh;
    background-color: #007bff; /* Background solid wajib ada agar section bawahnya tertutup */
}

/* Section 3 (Menimpa Section 2) */
.section-fitur {
    position: sticky;
    top: 0;
    z-index: 20;
    min-height: 100vh;
    background-color: #ffffff;
}

/* Footer selalu memiliki z-index lebih tinggi dari section terakhir */
#footer-container {
    position: relative;
    z-index: 50;
    background-color: #ffffff;
}
```

---

## 5. Komponen Global: Navbar & Footer Dinamis

Navbar dan Footer tidak ditulis berulang-ulang di setiap file HTML, melainkan di-inject secara dinamis melalui [js/navbar.js](file:///d:/Laundry_Smart%20Yogi/js/navbar.js).

### 5.1. Struktur HTML Halaman
Setiap halaman HTML cukup memanggil kontainer kosong dan skripnya:
```html
<!-- Di bagian paling atas <body> -->
<header id="navbar-container"></header>

<main>
    <!-- Seluruh konten halaman berada di sini -->
</main>

<!-- Di bagian paling bawah <body> -->
<footer id="footer-container"></footer>

<!-- Panggil script navbar -->
<script src="../js/navbar.js"></script>
```

### 5.2. Spesifikasi Floating Glass Navbar
- **Container Positioning:** `position: fixed; top: 20px; width: 100%; z-index: 9999;`
- **Efek Kaca:**
  ```css
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.5); /* Trik pantulan cahaya atas */
  border-radius: 30px;
  ```

---

## 6. Katalog Komponen UI

### 6.1. Feature Card Standar (Nomor + Kotak Ikon Biru)
Digunakan untuk menampilkan daftar keunggulan atau fitur utama:

```html
<div class="feature-card">
    <div class="card-number">1</div>
    <div class="card-icon">
        <svg viewBox="0 0 24 24">
            <!-- Ikon SVG garis stroke putih -->
            <path d="..." />
        </svg>
    </div>
    <p class="card-text">
        <strong>Judul Poin</strong>
        Deskripsi singkat penjelasan poin.
    </p>
</div>
```

```css
.feature-card {
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1.5px solid #e9ecef;
    border-radius: 20px;
    padding: 20px 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    transition: top 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
    top: -5px; /* Catatan: gunakan 'top' bukan transform agar aman dengan GSAP */
    box-shadow: 0 15px 35px rgba(0, 123, 255, 0.15);
}
```

---

### 6.2. Floating Icon Card (Lingkaran Ikon Melayang Keluar Card)
Digunakan pada section Strategi Pemasaran untuk tampilan yang dinamis dan berkarakter:

```html
<div class="strat-card">
    <div class="strat-icon-wrapper">
        <!-- SVG stroke berwarna navy #003380 -->
        <svg viewBox="0 0 24 24" width="35" height="35" stroke="#003380" stroke-width="2" fill="none">...</svg>
    </div>
    <div class="strat-badge">NAMA STRATEGI</div>
    <p class="strat-text">Deskripsi strategi pemasaran.</p>
    <div class="strat-divider"></div>
</div>
```

```css
.strat-card {
    position: relative;
    background: #ffffff;
    border: 1.5px solid #dce7f7;
    border-radius: 20px;
    padding: 55px 35px 30px;
    box-shadow: 0 10px 30px rgba(0, 123, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.strat-icon-wrapper {
    position: absolute;
    top: -40px; /* Keluar setengah badan ke atas */
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: #ffffff;
    border: 1.5px solid #dce7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.1);
}
```

---

### 6.3. Accordion Dropdown (Kemitraan)
Digunakan pada daftar 12 Keunggulan Kemitraan:

```html
<details class="keunggulan-dropdown">
    <summary class="keunggulan-summary">
        <div class="summary-left">
            <span class="keunggulan-num">1.</span>
            <span>Design Interior</span>
        </div>
    </summary>
    <div class="keunggulan-content">
        <p>Penjelasan lengkap fasilitas interior yang didapat mitra.</p>
    </div>
</details>
```

---

### 6.4. Tombol Aksi (*Action Buttons*)
Terdapat 2 varian tombol resmi:

```html
<!-- Tombol Solid (Primary) -->
<a href="#" class="btn-solid">Lihat Paket</a>

<!-- Tombol Outline (Transparan / Ghost) -->
<a href="#" class="btn-outline">Hubungi Kami</a>
```

```css
.btn-solid {
    background-color: #007bff;
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 25px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-solid:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
}

.btn-outline {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 14px 32px;
    border-radius: 25px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-outline:hover {
    background-color: #ffffff;
    color: #007bff;
}
```

---

## 7. Standar Animasi GSAP & ScrollTrigger

Semua halaman menggunakan GSAP ScrollTrigger untuk animasi masuk (*reveal*) dan efek dorongan (*parallax push*).

### 7.1. Inisialisasi & Registrasi
Selalu registrasikan ScrollTrigger di baris pertama file JS:
```javascript
gsap.registerPlugin(ScrollTrigger);
```

### 7.2. Efek Parallax Push (Container Saling Mendorong)
Untuk membuat section naik sedikit saat tertimpa oleh section berikutnya:
```javascript
gsap.to("#section-atas", {
    y: -150, // Bergerak naik sejauh 150px
    ease: "none",
    scrollTrigger: {
        trigger: "#section-bawah",
        start: "top 70%", // Mulai didorong saat section bawah mencapai 70% layar
        end: "top 0%",    // Selesai saat section bawah menutup layar penuh
        scrub: true       // Scrubbing otomatis mengikuti roda mouse
    }
});
```

### 7.3. ⚠️ ATURAN EMAS: Mencegah Bentrok CSS Transition & GSAP
> [!CAUTION]
> **Penyebab Utama Animasi Patah-patah / Melompat:**
> Jika sebuah elemen memiliki properti CSS `transition: all 0.3s ease;` (misalnya untuk hover), maka GSAP yang mengubah nilai koordinat setiap *frame* (60-120fps) akan tertahan oleh transisi CSS tersebut!

**Solusi Standar Laundry Smart:**
1. **Matikan transisi sebelum animasi GSAP jalan:**
   ```javascript
   gsap.set(".feature-card", { transition: "none" });
   ```
2. **Nyalakan kembali transisi CSS di `onComplete`:**
   ```javascript
   const tl = gsap.timeline({
       onComplete: () => {
           gsap.set(".feature-card", { clearProps: "transition" });
       }
   });
   ```
3. **Alternatif di CSS Hover:**
   Jika elemen digerakkan sumbu `y` oleh GSAP, gunakan properti `top: -5px` pada `:hover` daripada `transform: translateY(-5px)`.

---

## 8. Panduan Responsivitas & Breakpoints

### 8.1. Patokan Ukuran Layar (*Breakpoints*)
- **Desktop:** `> 768px` (Tata letak penuh, multi-kolom, parallax aktif)
- **Tablet:** `431px - 768px` (Penyesuaian 2 kolom)
- **Mobile (Smartphones):** `<= 430px` (Stack 1 kolom vertikal, ukuran judul proporsional)

### 8.2. Penyesuaian Mobile Wajib (`max-width: 430px`)
Saat layar HP aktif:
1. **Hero Title:** Turunkan ukuran font menjadi `2.0rem` - `2.2rem`.
2. **Semua Grid:** Paksa menjadi 1 kolom (`grid-template-columns: 1fr; gap: 15px;`).
3. **Section Overlapping:** Ganti `justify-content: center` menjadi `justify-content: flex-start` serta beri `padding-top: 100px - 130px` agar konten panjang tidak terpotong atau tertutup navbar.

---

## 9. SOP Penambahan Halaman atau Container Baru

Saat Anda ingin membuat halaman baru (misal: `promo.html`) atau menambahkan section baru di halaman yang sudah ada, ikuti langkah-langkah berikut:

- [ ] **Langkah 1: Hubungkan Stylesheet Global & Lokal**
  Sertakan `navbar.css` sebelum stylesheet lokal halaman Anda di dalam `<head>`:
  ```html
  <link rel="stylesheet" href="../css/navbar.css">
  <link rel="stylesheet" href="../css/promo.css">
  ```
- [ ] **Langkah 2: Siapkan Wadah Navbar & Footer**
  Pastikan ada `<header id="navbar-container"></header>` dan `<footer id="footer-container"></footer>`.
- [ ] **Langkah 3: Atur Urutan Z-Index Section**
  Tentukan nilai `z-index` section baru (`z-index: 10, 20, 30...`) dan pastikan memiliki warna latar belakang solid (`#ffffff` atau `#007bff`).
- [ ] **Langkah 4: Gunakan Komponen yang Sudah Terstandar**
  Gunakan struktur card, tombol `.btn-solid` / `.btn-outline`, dan kelas warna `.text-gradient-blue` yang sudah tercantum di panduan ini.
- [ ] **Langkah 5: Tuliskan Animasi GSAP Sesuai SOP**
  Gunakan GSAP timeline dengan `ScrollTrigger`, pastikan mematikan transition CSS sebelum animasi jalan dan membersihkannya di `onComplete`.
- [ ] **Langkah 6: Uji Coba Responsif**
  Periksa tampilan di mode desktop dan mobile (lebar 375px - 430px) untuk memastikan tidak ada teks yang overflow ke samping.

---

© 2025 **Laundry Smart** — Peluang Usaha Laundry Bersih, Cepat, dan Terpercaya.
