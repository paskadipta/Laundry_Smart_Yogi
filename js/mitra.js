// =========================================
// ANIMASI SMOOTH DROPDOWN KEUNGGULAN
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.keunggulan-dropdown');

    dropdowns.forEach(dropdown => {
        const summary = dropdown.querySelector('.keunggulan-summary');
        const content = dropdown.querySelector('.keunggulan-content');

        // Pastikan elemen ditemukan agar tidak memicu error di console
        if (!summary || !content) return;

        summary.addEventListener('click', (e) => {
            // Mencegah elemen terbuka/tertutup secara instan (sifat bawaan HTML)
            e.preventDefault(); 
            
            const isOpen = dropdown.hasAttribute('open');

            if (isOpen) {
                // ==== ANIMASI MENUTUP (Ke Atas) ====
                
                // Kunci tinggi saat ini sebelum diubah ke 0
                content.style.maxHeight = content.scrollHeight + "px"; 
                
                // Jeda 10ms untuk memancing transisi CSS berjalan
                setTimeout(() => {
                    content.style.maxHeight = "0";
                    content.style.opacity = "0";
                    content.style.padding = "0";
                }, 10);

                // Hapus atribut open setelah animasi selesai
                setTimeout(() => {
                    dropdown.removeAttribute('open');
                    // Bersihkan inline style agar rapi kembali
                    content.style.maxHeight = null;
                    content.style.opacity = null;
                    content.style.padding = null;
                }, 400); // 400ms ini sejajar dengan durasi transition 0.4s di CSS

            } else {
                // ==== ANIMASI MEMBUKA (Ke Bawah) ====
                
                // Sembunyikan konten sesaat sebelum atribut open ditambahkan
                content.style.maxHeight = "0";
                content.style.opacity = "0";
                content.style.padding = "0";
                
                // Tambahkan atribut open agar ikon panah memutar (diatur di CSS)
                dropdown.setAttribute('open', 'true');

                // Jeda 10ms untuk menjalankan animasi meluncur ke bawah
                setTimeout(() => {
                    // Tambah 24px untuk mengakomodasi padding-bottom yang kita atur di CSS
                    content.style.maxHeight = (content.scrollHeight + 24) + "px"; 
                    content.style.opacity = "1";
                    content.style.padding = "0 0 24px 0";
                }, 10);

                // Kembalikan max-height menjadi otomatis (none) setelah selesai
                // Ini penting agar jika teks di dalam dropdown membungkus ulang (misal di layar HP), tidak ada yang terpotong.
                setTimeout(() => {
                    content.style.maxHeight = "none";
                }, 400);
            }
        });
    });
});

// =========================================
// GSAP OVERLAPPING SECTIONS (HANYA AKTIF DI PC)
// =========================================
// =========================================
// GSAP OVERLAPPING SECTIONS & PARALLAX EFFECT
// =========================================
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('main > section');

let mm = gsap.matchMedia();

mm.add("(min-width: 431px)", () => {
    
    // 1. KUNCI PERBAIKAN: Matikan sticky CSS agar tidak bentrok dengan GSAP Pin
    gsap.set(sections, { position: "relative", top: "auto" });

    sections.forEach((section, index) => {
        
        // Kita terapkan pin & efek naik pada semua section kecuali yang paling bawah
        if (index !== sections.length - 1) {
            
            // 2. Fungsi Pin (Menahan section di atas layar)
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                pin: true,
                pinSpacing: false,
                end: "max" 
            });

            // 3. Fungsi Parallax Push yang SMOOTH seperti di video
            const nextSection = sections[index + 1];
            
            gsap.to(section, {
                y: -150, // Bergeser naik 40% (tidak perlu sampai 50% agar sisa konten bawahnya masih terlihat membayang)
                ease: "none",
                scrollTrigger: {
                    trigger: nextSection,
                    start: "top 50%", // Mulai didorong naik saat section bawahnya menyentuh setengah layar
                    end: "top 0%",   // Berhenti saat section bawahnya mentok di atas layar
                    scrub: true         
                }
            });
        }
    });
});

// =========================================
// GSAP ANIMASI MASUK: 12 KEUNGGULAN (SECTION 1)
// =========================================

// 1. KUNCI PERBAIKAN: Matikan dulu transition CSS agar tidak bentrok dengan GSAP!
gsap.set(".keunggulan-dropdown", { transition: "none" });

// 2. Buat timeline khusus untuk section Keunggulan
const tlKeunggulan = gsap.timeline({
    delay: 0.3,
    onComplete: () => {
        // Nyalakan lagi transition CSS setelah animasi GSAP selesai 
        // agar efek hover/klik dropdown kembali normal
        gsap.set(".keunggulan-dropdown", { clearProps: "transition" });
    }
});

// 3. Paragraf Judul muncul dari bawah ke atas
tlKeunggulan.from(".keunggulan-title", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
})

// 4. Sub-paragraf menyusul dari bawah ke atas
.from(".keunggulan-subtitle-wrapper", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.4")

// 5. 6 Dropdown Kiri (Masuk dari Kiri ke Kanan)
.from(".keunggulan-col:nth-child(1) .keunggulan-dropdown", {
    x: -80, 
    opacity: 0,
    duration: 0.6,
    stagger: 0.1, // Efek muncul berurutan ke bawah
    ease: "power2.out"
}, "-=0.2")

// 6. 6 Dropdown Kanan (Masuk dari Kanan ke Kiri)
.from(".keunggulan-col:nth-child(2) .keunggulan-dropdown", {
    x: 80, 
    opacity: 0,
    duration: 0.6,
    stagger: 0.1, 
    ease: "power2.out"
}, "<"); // Paksa dropdown kanan jalan serentak bareng dropdown kiri

// =========================================
// GSAP TIMELINE: TAHAPAN MENJADI MITRA (SECTION 4)
// =========================================

// 1. Sembunyikan elemen (Dot dan Box) sebelum di-scroll
gsap.set(".timeline-dot", { scale: 0 });
gsap.set(".timeline-content", { opacity: 0, y: 30 }); // Box disembunyikan dan agak turun 30px

// 2. Buat timeline utama
const tlTahapan = gsap.timeline({
    scrollTrigger: {
        trigger: ".tahapan-section",
        start: "top 60%", // Sedikit dinaikkan jadi 60% agar paragraf langsung ke-trigger saat masuk layar
        toggleActions: "play none none none"
    }
});

// 3. [TAMBAHAN BARU] Paragraf Judul muncul dari bawah ke atas terlebih dahulu
tlTahapan.from(".tahapan-title", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
});

const tahapanItems = gsap.utils.toArray('.timeline-item');
const durasiGaris = 3.5; // Waktu garis horizontal dari ujung kiri ke ujung kanan

// KUNCI SINKRONISASI: Kita buat penanda/label agar animasi bawahnya jalan barengan dari titik ini
// Diberi jeda 0.2 detik setelah judul muncul biar lebih dramatis
tlTahapan.add("mulaiGaris", "+=0.2"); 

// 4. ANIMASI GARIS HORIZONTAL: Menarik width dari 0% ke 100%
tlTahapan.to(".timeline-center-line", {
    width: "100%",
    duration: durasiGaris,
    ease: "none" 
}, "mulaiGaris"); // Mulai tepat di label "mulaiGaris"

// 5. Looping efek berurutan (Dot -> Tiang -> Box)
tahapanItems.forEach((item, index) => {
    const dot = item.querySelector('.timeline-dot');
    const content = item.querySelector('.timeline-content');
    
    // Perhitungan waktu otomatis agar animasi pas dengan ujung garis yang lagi jalan
    const waktuMulai = (durasiGaris / (tahapanItems.length - 1)) * index; 

    // A. Dot nomor muncul (Efek Popup membal)
    tlTahapan.to(dot, {
        scale: 1,
        duration: 0.4,
        ease: "back.out(1.5)"
    }, `mulaiGaris+=${waktuMulai}`); // Dihitung dari label "mulaiGaris"

    // B. Tiang vertikal menyeret (GSAP menarik nilai --line-height dari 0px ke 60px)
    tlTahapan.to(item, {
        "--line-height": "60px",
        duration: 0.3,
        ease: "power1.inOut"
    }, `mulaiGaris+=${waktuMulai + 0.2}`); 

    // C. Box konten muncul memudar ke atas
    tlTahapan.to(content, {
        opacity: 1,
        y: 0, 
        duration: 0.4,
        ease: "power2.out"
    }, `mulaiGaris+=${waktuMulai + 0.5}`); 
});

// =========================================
// TOGGLE SLIDER FOTO PREVIEW FASILITAS
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // Array 4 Foto yang akan ditampilkan secara bergantian
    const galleryImages = [
        "../asset/1.jpg",
        "../asset/2.jpg", // <--- Masukkan nama file foto ke-2
        "../asset/3.jpg", // <--- Masukkan nama file foto ke-3
        "../asset/4.jpg",  // <--- Masukkan nama file foto ke-4
        "../asset/5.jpeg",
        "../asset/6.jpeg"
    ];

    let currentIndex = 0;
    const previewImg = document.getElementById('preview-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!previewImg || !prevBtn || !nextBtn) return;

    function updateImage(index) {
        // Efek fade-out kilat
        previewImg.style.opacity = '0.3'; 
        
        // Ganti src foto setelah memudar, lalu fade-in lagi
        setTimeout(() => {
            previewImg.src = galleryImages[index];
            previewImg.style.opacity = '1';
        }, 200); 
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateImage(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateImage(currentIndex);
    });
});

// =========================================
// GSAP ANIMASI MASUK: HARGA PAKET USAHA (SECTION 2)
// =========================================

// 1. Matikan transition CSS pada card sementara waktu agar tidak bentrok dengan GSAP
gsap.set(".paket-card", { transition: "none" });

// 2. Buat timeline khusus untuk section Paket Harga
const tlPaket = gsap.timeline({
    scrollTrigger: {
        trigger: ".paket-section",
        start: "top 75%", // Animasi mulai saat bagian atas section ini menyentuh 75% layar
        toggleActions: "play none none none"
    },
    onComplete: () => {
        // Nyalakan kembali transition CSS setelah animasi selesai 
        // agar efek hover kaca (glassmorphism) kembali berfungsi normal
        gsap.set(".paket-card", { clearProps: "transition" });
    }
});

// 3. Subtitle "HARGA PAKET USAHA" muncul dari atas memudar
tlPaket.from(".paket-subtitle", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
})

// 4. Title "LAUNDRY SMART" menyusul muncul dari bawah
.from(".paket-title", {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.3") // Mulai lebih awal sebelum subtitle selesai

// 5. Keempat Kartu Paket muncul berurutan dari bawah ke atas
.from(".paket-card", {
    y: 100, // Mulai dari posisi bawah (100px)
    opacity: 0,
    duration: 0.8,
    stagger: 0.15, // Efek muncul berurutan (jeda 0.15s antar kartu)
    ease: "back.out(1.2)" // Sedikit efek membal/bouncy yang elegan di akhir
}, "-=0.2");

// =========================================
// GSAP ANIMASI MASUK: FASILITAS (SECTION 3)
// =========================================

// 1. Matikan sementara transition CSS agar efek hover tidak bentrok dengan GSAP
gsap.set(".fasilitas-card", { transition: "none" });

// 2. Buat timeline khusus untuk section Fasilitas
const tlFasilitas = gsap.timeline({
    scrollTrigger: {
        trigger: ".fasilitas-section",
        start: "top 75%", // Animasi mulai saat bagian atas section ini menyentuh 75% layar
        toggleActions: "play none none none"
    },
    onComplete: () => {
        // Nyalakan kembali transition CSS setelah animasi selesai agar efek hover kembali aktif
        gsap.set(".fasilitas-card", { clearProps: "transition" });
    }
});

// 3. Judul "Fasilitas" muncul dari atas memudar
tlFasilitas.from(".fasilitas-title", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
})

// 4. List 7 Kartu Fasilitas (Kiri) masuk berurutan dari kiri ke kanan
.from(".fasilitas-card", {
    x: -60, // Mulai dari posisi luar kiri
    opacity: 0,
    duration: 0.5,
    stagger: 0.1, // Jeda waktu 0.1 detik antar kartu agar muncul berurutan ke bawah
    ease: "power2.out"
}, "-=0.2") // Mulai sedikit lebih cepat sebelum judul selesai

// 5. Frame Foto Slider (Kanan) masuk dari kanan ke kiri
.from(".preview-card", {
    x: 60, // Mulai dari posisi luar kanan
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "<0.2");

// =========================================
// GSAP ANIMASI MASUK: CALL TO ACTION (SECTION 5)
// =========================================

// Buat timeline khusus untuk section CTA
const tlCta = gsap.timeline({
    scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%", // Animasi mulai saat bagian atas section ini menyentuh 80% layar dari atas
        toggleActions: "play none none none"
    }
});

// Card CTA meluncur mulus dari bawah ke atas sambil transisi opacity
tlCta.from(".cta-glass-card", {
    y: 80,          // Mulai dari jarak 80px di bawah posisi aslinya
    opacity: 0,     // Mulai dari transparan (tidak terlihat)
    duration: 1,    // Durasi 1 detik agar terasa sangat smooth dan elegan
    ease: "power3.out" // Efek melambat perlahan di akhir animasi
});