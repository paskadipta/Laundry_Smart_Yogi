document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Gunakan MatchMedia supaya animasi timeline kompleks hanya jalan di Desktop
    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        // Set kondisi awal (opacity 0 dan agak mengecil)
        gsap.set(".t-node", { opacity: 0, scale: 0.8 });

        // Buat Timeline GSAP yang terikat dengan scroll section timeline-laundry
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#timeline-laundry",
                start: "top 50%", // Mulai animasi ketika section menyentuh 50% layar dari atas
                toggleActions: "play none none reverse" // Maju = Play, Mundur = Reverse (anti-lag)
            }
        });

        // Sequence Animasinya (Node muncul -> Garis merambat -> Node berikutnya muncul, dst)
        tl.to(".n1", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
          .to("#tl-1", { scaleX: 1, duration: 0.3, ease: "none" })
          .to(".n2", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
          .to("#tl-2", { scaleX: 1, duration: 0.3, ease: "none" })
          .to(".n3", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
          .to("#tl-3", { scaleY: 1, duration: 0.3, ease: "none" })
          .to(".n4", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
          .to("#tl-4", { scaleX: 1, duration: 0.3, ease: "none" }) // Mengarah ke kiri
          .to(".n5", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
          .to("#tl-5", { scaleX: 1, duration: 0.3, ease: "none" }) // Mengarah ke kiri
          .to(".n6", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
          .to("#tl-6", { scaleY: 1, duration: 0.3, ease: "none" })
          .to(".n7", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" });
    });

    mm.add("(max-width: 768px)", () => {
        // Animasi simpel untuk tampilan HP (karena garisnya diringkas jadi 1 vertikal lurus)
        gsap.from(".t-node", {
            scrollTrigger: {
                trigger: "#timeline-laundry",
                start: "top 70%",
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.2
        });
    });
});