document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // ==========================================
    // EFEK PARALLAX: CONTAINER NAIK SAAT DITIMPA (KHUSUS DESKTOP)
    // ==========================================
    let parallaxMm = gsap.matchMedia();
    
    parallaxMm.add("(min-width: 769px)", () => {
        const overlapSections = [
            { current: ".vm-section", next: ".mengapa-section" },
            { current: ".mengapa-section", next: ".kerjasama-section" },
            { current: ".kerjasama-section", next: ".timeline-section" }
        ];

        overlapSections.forEach(sec => {
            gsap.to(sec.current, {
                y: -150,       
                ease: "none",  
                scrollTrigger: {
                    trigger: sec.next, 
                    start: "top 70%",  
                    end: "top 0%",     
                    scrub: true
                }
            });
        });
    });

    // ==========================================
    // ANIMASI CONTAINER 1: VISI & MISI
    // ==========================================
    let vmTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".vm-section", // Mengambil patokan dari container utama Visi Misi
            start: "top 75%",       // Animasi mulai saat bagian atas container mencapai 75% tinggi layar
            toggleActions: "play none none reverse" // Mulus saat scroll naik-turun
        }
    });

    // 1. Header (Judul dan Garis) muncul dari atas
    vmTimeline.from(".vm-title", { opacity: 0, y: -30, duration: 0.6, ease: "power2.out" })
              .from(".vm-title-line", { scaleX: 0, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.3")
              .from(".vm-col-left", { opacity: 0, x: -50, duration: 0.6, ease: "power2.out" }, "-=0.2")
              .from(".vm-col-right", { opacity: 0, x: 50, duration: 0.6, ease: "power2.out" }, "-=0.4")
              .from(".list-right li", { opacity: 0, x: 20, duration: 0.4, stagger: 0.15, ease: "power1.out" }, "-=0.2");

    // ==========================================
    // ANIMASI CONTAINER 2: MENGAPA MEMILIH (FIXED)
    // ==========================================
    let mengapaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".mengapa-section",
            start: "top 60%", // Dipicu saat section sudah masuk 60% layar agar lebih akurat
            toggleActions: "play none none reverse"
        }
    });

    // 1. Teks "Mengapa Memilih"
    mengapaTimeline.fromTo(".mengapa-top", 
        { opacity: 0, y: 40 }, // Posisi awal (di bawah)
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" } // Posisi akhir (kembali normal)
    )
    
    // 2. Teks "Usaha Laundry?"
    .fromTo(".mengapa-bottom", 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
        "-=0.4"
    )
                   
    // 3. 5 Card Muncul Bersamaan (Tidak akan nyangkut lagi)
    .fromTo(".m-card-minimal", 
        { opacity: 0, y: 60 }, // Mulai dari 60px di bawah
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, // Kembali tegak lurus ke y: 0
        "-=0.2"
    );          

// ==========================================
    // ANIMASI CONTAINER 3: SISTEM KERJASAMA
    // ==========================================
    let kerjasamaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".kerjasama-section", 
            start: "top 60%", // Dipicu saat section sudah masuk 60% agar akurat
            toggleActions: "play none none reverse"
        }
    });

    // 1. Judul "SISTEM KERJASAMA" muncul dari bawah ke atas
    kerjasamaTimeline.fromTo(".kerjasama-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
    
    // 2. Deskripsi paragraf menyusul dari atas ke bawah
    .fromTo(".k-top-text",
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3" 
    )
    
    // 3. 2 Card Kiri (Aturan) meluncur dari kiri ke kanan secara berurutan
    .fromTo(".k-row",
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.2"
    )
    
    // 4. 3 Card Kanan (Tahun) meluncur dari kanan ke kiri secara berurutan
    .fromTo(".tahun-card",
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
        "-=0.5" // Dibuat hampir berbarengan dengan card kiri agar rapi
    );

    // ==========================================
    // ANIMASI CONTAINER 4: HEADER TIMELINE
    // ==========================================
    let timelineHeaderTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".timeline-section",
            start: "top 60%", // Dipicu saat section sudah masuk 60%
            toggleActions: "play none none reverse"
        }
    });

    // 1. Teks "TIMELINE" muncul dari bawah ke atas
    timelineHeaderTimeline.fromTo(".timeline-top",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    )
    
    // 2. Teks "PELUANG USAHA LAUNDRYSMART" menyusul dari bawah ke atas
    .fromTo(".timeline-bottom",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
    );

    // ==========================================
    // ANIMASI CONTAINER 4: ALUR NODE (STRICT SEQUENCE)
    // ==========================================
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        // 1. Sembunyikan semua elemen secara spesifik di awal agar bisa dianimasikan satu-satu
        gsap.set(".t-circle", { opacity: 0, scale: 0.5 });
        gsap.set(".t-node h3, .t-node ul", { opacity: 0, y: 15 });
        gsap.set(".line-box", { opacity: 0 }); // Track abu-abu disembunyikan dulu

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#timeline-laundry",
                start: "top 50%",
                toggleActions: "play none none reverse"
            }
        });

        // 2. Data urutan Node agar eksekusi kodenya terstruktur
        const nodes = [
            { id: ".n1", line: "#tl-1", isVertical: false },
            { id: ".n2", line: "#tl-2", isVertical: false },
            { id: ".n3", line: "#tl-3", isVertical: true },
            { id: ".n4", line: "#tl-4", isVertical: false },
            { id: ".n5", line: "#tl-5", isVertical: false },
            { id: ".n6", line: "#tl-6", isVertical: true },
            { id: ".n7", line: null, isVertical: false }
        ];

        // 3. Loop untuk menjalankan animasi secara bergantian tanpa tumpang tindih
        nodes.forEach(node => {
            
            // A. Logo Bulet Muncul Paling Pertama
            tl.to(`${node.id} .t-circle`, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.5)" })
            
            // B. Teks Deskripsi Menyusul (Baru jalan setelah logo benar-benar selesai 100%)
              .to(`${node.id} h3, ${node.id} ul`, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });

            // C. Line (Track + Garis Aktif) Muncul & Merambat setelah teks selesai
            if (node.line) {
                // Munculkan background track abu-abu sekejap
                tl.to(`${node.id} .line-box`, { opacity: 1, duration: 0.1 }); 
                
                // Jalankan garis putih merambat (vertikal atau horizontal)
                if (node.isVertical) {
                    tl.to(node.line, { scaleY: 1, duration: 0.35, ease: "none" });
                } else {
                    tl.to(node.line, { scaleX: 1, duration: 0.35, ease: "none" });
                }
            }
        });
    });

    // ==========================================
    // EFEK OVERLAPPING (PIN) KHUSUS MOBILE
    // ==========================================
    let mobileMm = gsap.matchMedia();

    mobileMm.add("(max-width: 430px)", () => {
        // [KODE LAMA] Daftar container yang mau kita bikin tumpang tindih
        const sectionsToPin = [".vm-section", ".mengapa-section", ".kerjasama-section"];
        sectionsToPin.forEach(sec => {
            ScrollTrigger.create({
                trigger: sec,
                start: "bottom bottom", 
                pin: true, 
                pinSpacing: false 
            });
        });

        // ==========================================
        // [KODE BARU] ANIMASI ALUR TIMELINE MOBILE
        // ==========================================
        // 1. Sembunyikan elemen awal
        gsap.set(".t-circle", { opacity: 0, scale: 0.5 });
        gsap.set(".t-node h3, .t-node ul", { opacity: 0, x: -15 }); // Geser teks sedikit ke kiri
        gsap.set(".line-box", { opacity: 0 }); 

        let tlMobile = gsap.timeline({
            scrollTrigger: {
                trigger: "#timeline-laundry",
                start: "top 60%", // Mulai animasi
                toggleActions: "play none none reverse"
            }
        });

        // 2. Data urutan Node
        const mobileNodes = [
            { id: ".n1", line: ".n1 .line-box .line-active", box: ".n1 .line-box" },
            { id: ".n2", line: ".n2 .line-box .line-active", box: ".n2 .line-box" },
            { id: ".n3", line: ".n3 .line-box .line-active", box: ".n3 .line-box" },
            { id: ".n4", line: ".n4 .line-box .line-active", box: ".n4 .line-box" },
            { id: ".n5", line: ".n5 .line-box .line-active", box: ".n5 .line-box" },
            { id: ".n6", line: ".n6 .line-box .line-active", box: ".n6 .line-box" },
            { id: ".n7", line: null, box: null } 
        ];

        // 3. Eksekusi animasi secara berurutan
        mobileNodes.forEach(node => {
            // A. Logo Bulet Muncul
            tlMobile.to(`${node.id} .t-circle`, { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.5)" })
            
            // B. Teks muncul menyusul
            .to(`${node.id} h3, ${node.id} ul`, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });

            // C. Garis meluncur lurus ke bawah
            if (node.line) {
                tlMobile.to(node.box, { opacity: 1, duration: 0.1 }) 
                        .fromTo(node.line, { scaleY: 0 }, { scaleY: 1, duration: 0.35, ease: "none" });
            }
        });
    });
});