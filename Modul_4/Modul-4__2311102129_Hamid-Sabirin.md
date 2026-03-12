<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br>APLIKASI BERBASIS PLATFORM</h1>
  <br />
  <h3>MODUL 4 <br> BOOTSTRAP</h3>
  <br />
  <br />
  <img src="../Modul_1/assets/logo.jpeg" alt="Logo" width="300"> 
  <br />
  <br />
  <br />
  <br />
  <h3>Disusun Oleh :</h3>
  <p>
    <strong>HAMID SABIRIN</strong><br>
    <strong>2311102129</strong><br>
    <strong>S1 IF-11-REG01</strong>
  </p>
  <br />
  <h3>Dosen Pengampu :</h3>
  <p>
    <strong>Dimas Fanny Hebrasianto Permadi, S.ST., M.Kom</strong>
  </p>
  <br />
  <br />
    <h4>Asisten Praktikum :</h4>
    <strong> Apri Pandu Wicaksono </strong> <br>
    <strong>Rangga Pradarrell Fathi</strong>
  <br />
  <h3>LABORATORIUM HIGH PERFORMANCE
 <br>FAKULTAS INFORMATIKA <br>UNIVERSITAS TELKOM PURWOKERTO <br>2026</h3>
</div>

---

## 1. Dasar Teori

**Bootstrap** adalah kerangka kerja (*framework*) *open-source* untuk *front-end* yang sangat populer, diciptakan khusus untuk merancang antarmuka situs web dan aplikasi web agar lebih cepat dan mudah. Di dalamnya, Bootstrap berisi template desain berbasis HTML, CSS, serta JavaScript siap pakai yang dapat digunakan untuk mengatur tipografi, formulir, tombol, navigasi, dan komponen antarmuka lainnya.

Fitur paling krusial dari Bootstrap adalah sistem **Grid Responsif**-nya. Sistem *grid* ini menggunakan kontainer (`container`), baris (`row`), dan kolom (`col`) untuk menata letak yang secara otomatis menyesuaikan diri dengan berbagai ukuran layar perangkat seperti PC, tablet, maupun *smartphone*. Sistem grid Bootstrap dibagi menjadi **12 kolom** dan mendukung lima *breakpoint*: `xs` (< 576px), `sm` (≥ 576px), `md` (≥ 768px), `lg` (≥ 992px), dan `xl` (≥ 1200px).

Bootstrap juga menyediakan **metode integrasi CDN** (*Content Delivery Network*), yaitu cara menghubungkan library Bootstrap langsung dari server pihak ketiga melalui tag `<link>` dan `<script>` tanpa perlu mengunduh file-nya secara lokal.

Kelebihan utama menggunakan Bootstrap di antaranya adalah:
1. **Penghematan Waktu:** *Developer* tidak perlu menulis kode CSS dasar dari nol.
2. **Konsistensi:** Menjamin tampilan antarmuka selaras di berbagai *browser* yang berbeda.
3. **Responsif secara Default:** Komponen bawaan sudah mendukung desain *mobile-first*.
4. **Ekosistem Lengkap:** Tersedia komponen siap pakai seperti Modal, Navbar, Card, Alert, Badge, dan lainnya.

---

## 2. Penjelasan Kode HTML

Berikut merupakan implementasi kartu ucapan Ramadhan berbasis Bootstrap 5 murni dengan penggunaan berbagai *utility class* tanpa menyertakan dokumen CSS tambahan apa pun, beserta hasil eksekusinya.

### Kode HTML (`ramadan.html`)

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas 4 - Marhaban Ya Ramadhan</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
</head>
<body class="bg-dark bg-gradient text-light min-vh-100 d-flex justify-content-center align-items-center">

    <div class="container p-4">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                
                <div class="card bg-success bg-opacity-25 border border-warning border-3 rounded-5 shadow-lg text-center p-3 p-md-4">
                    
                    <div class="display-3 text-warning mb-3">
                        <i class="bi bi-moon-stars-fill shadow-sm"></i>
                    </div>
                    
                    <h1 class="display-6 text-warning fw-bolder mb-2 text-uppercase">Marhaban Ya Ramadhan</h1>
                    <h4 class="fw-semibold text-light mb-3">Selamat Menunaikan Ibadah Puasa 1447 H. Hamid Sabirin</h4>
                    
                    <hr class="border-warning border-2 opacity-50 w-50 mx-auto mb-3">
                    
                    <p class="fs-6 text-light text-opacity-75 mb-4 px-md-3">
                        "Semoga bulan suci ini senantiasa membawa kedamaian, keberkahan, rezeki yang melimpah, dan ampunan bagi kita semua. Mari kita bersihkan hati dan tingkatkan amal ibadah. 2311102129 - Hamid Sabirin."
                    </p>
                    
                    <div class="mt-3 text-warning opacity-75 d-flex justify-content-center align-items-center gap-3 fs-3">
                        <i class="bi bi-stars"></i>
                        <i class="bi bi-star-fill fs-5"></i>
                        <i class="bi bi-stars"></i>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmxc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    
</body>
</html>
```

### Hasil Tampilan (Screenshot)

![Hasil Tampilan Bootstrap](assets/1.png)

### Penjelasan Code:

- Pada baris **8–10**, dilakukan pemuatan dua *library* Bootstrap melalui metode CDN menggunakan tag `<link>`. Baris **8** mengimpor `bootstrap.min.css` yang berisi seluruh aturan CSS Bootstrap (termasuk grid, komponen, dan utilitas), sedangkan baris **10** mengimpor `bootstrap-icons.min.css` yang menyediakan koleksi ikon vektor siap pakai. Atribut `integrity` berfungsi sebagai verifikasi keamanan (*Subresource Integrity*) untuk memastikan file yang diunduh tidak dimodifikasi pihak ketiga.
- Pada baris **13**, *utility class* Bootstrap diterapkan langsung di tag `<body>`. `bg-dark` menetapkan latar belakang berwarna gelap, `bg-gradient` menambahkan efek gradasi halus di atasnya, `text-light` mewarnai semua teks turunan menjadi putih, `min-vh-100` memastikan tinggi body minimal satu layar penuh, serta `d-flex justify-content-center align-items-center` mengaktifkan Flexbox untuk menengahkan konten kartu secara horizontal dan vertikal di tengah layar.
- Pada baris **15–17**, struktur grid Bootstrap dibangun: `container` membatasi lebar konten dan memberikan *padding* horizontal otomatis, `row justify-content-center` membuat baris grid dan memusatkan kolom-kolomnya, serta `col-12 col-md-8 col-lg-6` mendefinisikan lebar responsif kolom — lebar penuh di layar kecil (`col-12`), dua pertiga di tablet (`col-md-8`), dan separuh di laptop (`col-lg-6`).
- Pada baris **19**, komponen kartu dibuat menggunakan kelas `.card` dari Bootstrap. Dilengkapi dengan modifier: `bg-success bg-opacity-25` menciptakan latar belakang hijau transparan 25% untuk efek kaca, `border border-warning border-3` membuat garis tepi berwarna kuning setebal 3 piksel, `rounded-5` membulatkan sudut kartu secara maksimal, dan `shadow-lg` menambahkan bayangan tebal di bawah kartu untuk kesan kedalaman.
- Pada baris **21–23**, ikon bulan dan bintang dari Bootstrap Icons ditampilkan menggunakan tag `<i class="bi bi-moon-stars-fill">`. Pembungkus `<div class="display-3 text-warning mb-3">` memberi ukuran ikon yang sangat besar (`display-3` setara ±48px), warna kuning emas (`text-warning`), dan jarak bawah (`mb-3` setara 1rem margin-bottom).
- Pada baris **25–26**, `<h1>` dengan kelas `display-6` menggunakan tipografi *display* Bootstrap yang lebih besar dari heading biasa, dikombinasikan `fw-bolder` (font-weight ekstra tebal) dan `text-uppercase` (mengubah semua teks menjadi kapital). Sementara `<h4>` di bawahnya menggunakan `fw-semibold` dan `text-light` untuk membedakan hierarki visual antara judul utama dan subjudul.
- Pada baris **28**, tag `<hr>` Bootstrap diberi *utility class* `w-50 mx-auto` sehingga garis pemisah hanya memiliki lebar 50% dari kontainer dan diposisikan di tengah. `border-warning border-2 opacity-50` mengatur warna kuning, ketebalan 2px, dan transparansi 50% pada garis tersebut.
- Pada baris **34–38**, tiga ikon bintang didekorasi menggunakan `d-flex justify-content-center align-items-center gap-3` untuk menyejajarkannya secara horizontal dengan jarak antar ikon yang seragam. Kelas `fs-3` pada pembungkus membuat ikon berukuran besar, sedangkan ikon tengah `bi-star-fill` diberi `fs-5` yang lebih kecil untuk menciptakan variasi ukuran yang estetis.
- Pada baris **45**, tag `<script>` memuat modul JavaScript Bootstrap Bundle (`bootstrap.bundle.min.js`) yang berisi plugin JS Bootstrap beserta library Popper.js di dalamnya. File ini ditempatkan di akhir `<body>` agar tidak memblokir proses *rendering* HTML, dan menggunakan atribut `integrity` sebagai verifikasi keamanan CDN.

## Refrensi
- [Materi Modul 4](https://drive.google.com/file/d/1TW5Y0AdzkVk24ThPUf1OQNs2Mnw3XNO5/view?usp=sharing)
- [Bootstrap 5 Official Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/)