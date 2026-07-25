gsap.registerPlugin(ScrollTrigger);

// =========================================
// GSAP ANIMASI MASUK: KONTAK (SECTION 1)
// =========================================

// 1. Matikan transition CSS pada card agar tidak bentrok dengan GSAP
gsap.set(".kontak-card", { transition: "none" });

// 2. Buat timeline khusus untuk section Kontak (jalan otomatis saat web dibuka)
const tlKontak = gsap.timeline({
    delay: 0.3, // Jeda sebentar agar tidak terlalu buru-buru saat baru loading
    onComplete: () => {
        // Nyalakan kembali transition CSS setelah animasi selesai agar efek hover aktif lagi
        gsap.set(".kontak-card", { clearProps: "transition" });
    }
});

// 3. Judul "Hubungi Kami" muncul dari bawah memudar
tlKontak.from(".kontak-title", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
})

// 4. Deskripsi menyusul muncul dari bawah
.from(".kontak-desc", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.4") // Mulai sedikit lebih cepat sebelum judul selesai

// 5. Ketiga Kartu Kontak muncul berurutan dari bawah ke atas
.from(".kontak-card", {
    y: 80, // Mulai dari posisi bawah (80px)
    opacity: 0,
    duration: 0.8,
    stagger: 0.15, // Efek muncul berurutan satu per satu
    ease: "back.out(1.2)" // Memberikan sedikit efek membal (bouncy) yang elegan di akhir
}, "-=0.2");

// =========================================
// GSAP ANIMASI MASUK: FORMULIR (SECTION 2)
// =========================================

// Buat timeline khusus untuk section Formulir
const tlForm = gsap.timeline({
    scrollTrigger: {
        trigger: ".form-section",
        start: "top 75%", // Animasi mulai saat bagian atas section biru menyentuh 75% layar
        toggleActions: "play none none none" // Hanya dimainkan 1 kali saat di-scroll
    }
});

// 1. Judul "Kirim Pesan" muncul dari bawah memudar
tlForm.from(".form-title", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
})

// 2. Deskripsi menyusul dari bawah
.from(".form-desc", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.4") // Dimulai sedikit lebih cepat sebelum judul selesai

// 3. Kartu Formulir meluncur mulus dari bawah ke atas
.from(".form-card", {
    y: 100, // Mulai dari posisi bawah (100px)
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.2");

    const sections = gsap.utils.toArray('main > section');
    let mm = gsap.matchMedia();

    // Hanya aktif di layar PC (lebih dari 768px, sesuai batas mobile kamu)
    mm.add("(min-width: 769px)", () => {
            
        gsap.set(sections, { position: "relative", top: "auto" });

        sections.forEach((section, index) => {
            
            // Berlaku untuk semua section kecuali yang paling bawah
            if (index !== sections.length - 1) {
                    
                // 1. Tahan Container 1 di atas layar
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                     end: "max" 
                });

                // 2. Logika Naik Smooth: Saat Container 2 mencapai 50%
                const nextSection = sections[index + 1];
                    
                gsap.to(section, {
                    y: -150, // Container 1 didorong naik sedikit
                    ease: "none",
                    scrollTrigger: {
                        trigger: nextSection,
                        start: "top 50%", // KUNCI: Baru jalan saat Container 2 nyentuh tengah layar (50%)
                        end: "top 0%",   
                        scrub: true    // Membuat efek tarikan sangat smooth dan bergantung pada scroll
                    }
                });
            }
        });
    });