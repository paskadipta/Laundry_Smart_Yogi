// Fungsi untuk merender Navbar
// Fungsi untuk merender Navbar
function renderNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav class="navbar">
                <!-- Sisi Kiri: Logo -->
                <div class="nav-logo">
                    <img src="../asset/LAUNDRY 2.png" alt="Laundry Smart Logo" class="logo-img">
                </div>
                
                <!-- Sisi Tengah: Menu Teks -->
                <ul class="nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Laundry Smart</a></li>
                    <li><a href="">Paket Mitra</a></li>
                    <li><a href="">Kontak</a></li>
                </ul>

                <!-- Sisi Kanan: Spacer untuk Desktop ATAU Hamburger untuk Mobile -->
                <div class="nav-spacer"></div>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        `;

        // Logika untuk tombol Hamburger diklik
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
        }
    }
}

// Fungsi untuk merender Footer
// Fungsi untuk merender Footer
function renderFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="footer-top">
                <!-- Kolom 1: Brand & Sosial Media -->
                <div class="footer-brand">
                    <img src="../asset/LAUNDRY 3.png" alt="Laundry Smart Logo" class="footer-logo">
                    <p>Peluang usaha Laundry modern dengan standar layanan profesional dan sistem operasional efisien.</p>
                    <div class="footer-socials">
                        <a href="#" class="social-btn">IG</a>
                        <a href="#" class="social-btn">WA</a>
                        <a href="#" class="social-btn">WEB</a>
                    </div>
                </div>

                <!-- Kolom 2: Menu -->
                <div class="footer-col">
                    <h4>MENU</h4>
                    <ul>
                        <li><a href="#home">Beranda</a></li>
                        <li><a href="#paket">Paket Kemitraan</a></li>
                        <li><a href="#mengapa">Lihat Peluang Mengapa Laundry Smart</a></li>
                        <li><a href="#kontak">Hubungi Kami</a></li>
                    </ul>
                </div>

                <!-- Kolom 3: Kontak -->
                <div class="footer-col">
                    <h4>KONTAK</h4>
                    <div class="contact-item">
                        <span class="contact-label">WA/CALL</span>
                        <span class="contact-value">0857 7240 9608</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-label">INSTAGRAM</span>
                        <span class="contact-value">@laundrysmart_id</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-label">WEB</span>
                        <span class="contact-value">laundrysmart.id</span>
                    </div>
                </div>

                <!-- Kolom 4: Alamat -->
                <div class="footer-col">
                    <h4>ALAMAT KANTOR</h4>
                    <p>Jl. Kalibata Utara II<br>No.48<br>Kec. Pancoran, Jakarta<br>Selatan<br><br>DKI Jakarta 12740</p>
                </div>
            </div>

            <!-- Bagian Bawah Footer -->
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Laundry Smart. All rights reserved.</p>
                <p>Peluang Usaha Terpercaya</p>
            </div>
        `;
    }
}

// Eksekusi fungsi ketika DOM sudah siap dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
});