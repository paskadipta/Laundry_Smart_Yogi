document.addEventListener("DOMContentLoaded", () => {
    // Inisialisasi Timeline GSAP 
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Animasi Air muncul dari bawah ke atas
    tl.from(".water-blaze-container", {
        y: "100%",       // Berada jauh di bawah layar
        opacity: 0,      // Mulai dari transparan
        duration: 1.5
    })
    
    // 2. Disusul Logo dari bawah ke atas
    // "-=1" artinya animasi logo dimulai 1 detik lebih awal sebelum animasi air benar-benar selesai (agar transisinya menyambung)
    .from(".hero-logo", {
        y: 60,
        opacity: 0,
        duration: 1.2
    }, "-=1")
    
    // 3. Disusul Judul (Paragraf Utama) dari ATAS ke BAWAH
    .from(".hero-title", {
        y: -60,          // Minus berarti posisinya di atas
        opacity: 0,
        duration: 1
    }, "-=0.8")
    
    // 4. Disusul Deskripsi dari BAWAH ke ATAS
    // Stagger akan membuat desc-primary dan desc-secondary muncul berurutan (tidak berbarengan) dengan jeda 0.2 detik
    .from(".desc-primary, .desc-secondary", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    }, "-=0.8");
    
});

// Daftarkan plugin ScrollTrigger agar bisa digunakan
    gsap.registerPlugin(ScrollTrigger);
    // Buat timeline baru khusus untuk Container 2
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#mengapa",      // Elemen yang memicu animasi (Container 2)
            start: "top 65%",         // Animasi dimulai saat batas atas Container 2 mencapai 65% layar
            toggleActions: "play none none none" // Mainkan 1 kali saja saat di-scroll ke bawah
        },
        defaults: { ease: "power3.out", duration: 1 }
    });

    // 1. Teks "TENTANG KAMI" (Muncul dari atas ke bawah)
    tl2.from(".label-tentang", {
        y: -50,
        opacity: 0
    })
    
    // 2. Teks "Laundry Smart 2025" (Muncul dari atas ke bawah)
    .from(".teks-utama", {
        y: -50,
        opacity: 0
    }, "-=0.7") // Berjalan sedikit lebih awal sebelum animasi ke-1 selesai
    
    // 3 & 4. Deskripsi Paragraf (Kiri ke Kanan)
    // Stagger: 0.3 membuat paragraf pertama masuk, dijeda 0.3 detik, baru paragraf kedua menyusul
    .from(".deskripsi-tentang", {
        x: -80, // Minus berarti posisi awal berada di sebelah kiri
        opacity: 0,
        stagger: 0.3 
    }, "-=0.6")
    
    // 5. Gambar (Kanan ke Kiri)
    .from(".about-image", {
        x: 80,  // Positif berarti posisi awal berada di sebelah kanan
        opacity: 0,
        duration: 1.2
    }, "-=0.8"); // Dijalankan berbarengan saat paragraf sedang masuk agar dinamis

    // =========================================
    // ANIMASI CONTAINER 3 (MENGAPA MEMILIH)
    // =========================================
    
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#paket",
            start: "top 70%", // Animasi dieksekusi saat batas atas Container 3 mencapai 70% layar
            toggleActions: "play none none none"
        },
        defaults: { ease: "power3.out", duration: 1 }
    });

    // 1. Teks "Mengapa Memilih" (Muncul dari BAWAH ke ATAS)
    tl3.from(".title-top", {
        y: 60,
        opacity: 0
    })
    
    // 2. Teks "Laundry Smart?" (Muncul dari BAWAH ke ATAS, menyusul dengan mulus)
    .from(".text-gradient-blue", {
        y: 60,
        opacity: 0
    }, "-=0.7")
    
    // 3. Card 1 & 4 (Muncul dari KIRI ke KANAN)
    .from(".feature-card:nth-child(1), .feature-card:nth-child(4)", {
        x: -80,
        opacity: 0,
        stagger: 0.2 // Jeda 0.2 detik antara baris atas (Card 1) dan baris bawah (Card 4)
    }, "-=0.4")
    
    // 4. Card 2 & 5 (Muncul dari BAWAH ke ATAS)
    // Parameter "<" memastikan animasi ini berjalan PERSIS BERSAMAAN dengan Card 1 & 4 agar tidak lag/overlap
    .from(".feature-card:nth-child(2), .feature-card:nth-child(5)", {
        y: 80,
        opacity: 0,
        stagger: 0.2
    }, "<")
    
    // 5. Card 3 & 6 (Muncul dari KANAN ke KIRI)
    .from(".feature-card:nth-child(3), .feature-card:nth-child(6)", {
        x: 80,
        opacity: 0,
        stagger: 0.2
    }, "<");

    // =========================================
    // ANIMASI CONTAINER 4 (STRATEGI PEMASARAN)
    // =========================================
    
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#strategi",     // Membidik Container 4
            start: "top 70%",         // Berjalan saat batas atas menyentuh 70% layar
            toggleActions: "play none none none"
        },
        defaults: { ease: "power3.out", duration: 1 }
    });

    // 1. Teks "STRATEGI" (Muncul dari BAWAH ke ATAS)
    tl4.from(".teks-strategi", {
        y: 60,
        opacity: 0
    })
    
    // 2. Card Teks "PEMASARAN" (Muncul dari BAWAH ke ATAS)
    // Disusul dengan mulus 0.7 detik sebelum animasi pertama selesai
    .from(".card-pemasaran", {
        y: 60,
        opacity: 0
    }, "-=0.7")
    
    // 3. Keempat Card (Muncul dari BAWAH ke ATAS)
    // Menggunakan stagger agar 4 card muncul bergantian dengan jeda 0.2 detik tanpa saling mendahului
    .from(".strat-card", {
        y: 80,
        opacity: 0,
        stagger: 0.2 
    }, "-=0.5");

    // =========================================
    // EFEK PARALLAX (CONTAINER NAIK SEDIKIT SAAT DITIMPA)
    // =========================================
    
    // 1. Container 1 (Hero) perlahan naik saat Container 2 naik
    gsap.to("#home", {
        y: -150, // Bergerak naik sejauh 150px (naik sedikit)
        ease: "none",
        scrollTrigger: {
            trigger: "#mengapa",
            start: "top 70%", // Animasi MULAI saat Container 2 mencapai persis di tengah layar
            end: "top 0%",    // Animasi SELESAI saat Container 2 menutupi layar penuh
            scrub: true       // KUNCI: Animasi maju/mundur mengikuti gesekan scroll mouse!
        }
    });

    // 2. Container 2 (Tentang Kami) perlahan naik saat Container 3 masuk
    gsap.to("#mengapa", {
        y: -150,
        ease: "none",
        scrollTrigger: {
            trigger: "#paket",
            start: "top 70%",
            end: "top 0%",
            scrub: true
        }
    });

    // 3. Container 3 (Mengapa Memilih) perlahan naik saat Container 4 masuk
    gsap.to("#paket", {
        y: -150,
        ease: "none",
        scrollTrigger: {
            trigger: "#strategi",
            start: "top 70%",
            end: "top 0%",
            scrub: true
        }
    });