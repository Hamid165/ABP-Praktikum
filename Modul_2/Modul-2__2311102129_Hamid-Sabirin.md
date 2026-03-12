<div align="center">
  <br />
  <h1>LAPORAN PRAKTIKUM <br>APLIKASI BERBASIS PLATFORM</h1>
  <br />
  <h3>MODUL 2 <br> HTML</h3>
  <br />
  <br />
  <img src="assets/logo.jpeg" alt="Logo" width="300"> 
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

**HTML (HyperText Markup Language)** merupakan bahasa markah standar web yang digunakan untuk membuat dan menyusun struktur sebuah halaman website. HTML bekerja menggunakan sederet tag bersarang (*nested element*) untuk memberi tahu *web browser* bagaimana cara menampilkan elemen teks, gambar, maupun layout secara keseluruhan di layar.

Dalam pembuatan struktur tabel murni menggunakan HTML (tanpa bantuan *Cascading Style Sheets* atau CSS), digunakan format elemen `<table>` yang didukung oleh tag pendukungnya:
- `<thead>` — mengelompokkan baris header tabel.
- `<tbody>` — mengelompokkan baris isi data tabel.
- `<tr>` — mendefinisikan satu baris dalam tabel.
- `<th>` — mendefinisikan sel header (teks tebal dan rata tengah secara default).
- `<td>` — mendefinisikan sel data biasa.

HTML juga menyediakan atribut `rowspan` untuk menggabungkan beberapa baris secara vertikal dan `colspan` untuk menggabungkan beberapa kolom secara horizontal. Atribut presentasi lama yang masih sering diajarkan meliputi `border`, `cellpadding`, dan `cellspacing` pada tag `<table>`, serta tag `<center>` untuk meratakan konten ke tengah layar.

---

## 2. Penjelasan Kode HTML

Berikut ini adalah implementasi tabel berdasarkan struktur dasar HTML murni beserta hasil tampilannya.

### Kode HTML (`table.html`)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tabel Dasar</title>
</head>
<body>
    <center>
        <table border="1" cellpadding="5" cellspacing="0">
            <tr>
                <th rowspan="2">Nama Lengkap</th>
                <th colspan="2">Gelar Pendidikan</th>
                <th rowspan="2">Age</th>
            </tr>
            <tr>
                <th>Sarjana</th>
                <th>Magister</th>
            </tr>
            <tr>
                <td>Hamid</td>
                <td>S.Kom</td>
                <td>M.Kom</td>
                <td>21</td>
            </tr>
            <tr>
                <td>Hamid Sabirin</td>
                <td>S.Kom</td>
                <td>M.Kom</td>
                <td>22</td>
            </tr>
        </table>
    </center>
</body>
</html>
```

### Hasil Tampilan (Screenshot)

![Hasil Tabel HTML](assets/1.png)

### Penjelasan code:

- Pada baris **7**, tag `<center>` digunakan sebagai pembungkus seluruh elemen tabel agar tabel tampil rata tengah di layar browser secara otomatis tanpa memerlukan CSS tambahan. Meskipun tag ini sudah dianggap *deprecated* dalam standar HTML5, tag ini masih berfungsi di semua browser modern.
- Pada baris **8**, atribut `border="1"`, `cellpadding="5"`, dan `cellspacing="0"` ditulis bersama pada tag `<table>`. Ketiga atribut ini bekerja secara berurutan: `border="1"` membuat garis tepi setebal 1 piksel di setiap sel, `cellpadding="5"` memberi jarak 5 piksel antara isi teks dan batas garis sel, serta `cellspacing="0"` menghapus celah jarak antar sel yang secara bawaan muncul di browser.
- Pada baris **10–12**, tag `<th>` digunakan untuk baris header dan dilengkapi atribut `rowspan` serta `colspan`. `rowspan="2"` pada kolom *Nama Lengkap* dan *Age* menyebabkan sel tersebut membentang melewati dua baris ke bawah sekaligus, sementara `colspan="2"` pada kolom *Gelar Pendidikan* melebarkan sel tersebut melingkupi dua kolom anaknya yaitu *Sarjana* dan *Magister* secara horizontal.
- Pada baris **14–17**, baris kedua header (`<tr>`) hanya berisi dua elemen `<th>` yaitu *Sarjana* dan *Magister*. Baris ini tidak perlu memasukkan kolom *Nama Lengkap* dan *Age* karena keduanya sudah tertutup oleh atribut `rowspan="2"` dari baris header sebelumnya.
- Pada baris **18–29**, dua baris data diisi menggunakan tag `<td>` yang masing-masing dibungkus dalam satu `<tr>`. Setiap `<tr>` mewakili satu entri data mahasiswa yang terdiri atas empat kolom: nama, gelar sarjana, gelar magister, dan usia. Tag `<td>` berbeda dari `<th>` karena tidak mencetak teks secara tebal dan tidak merata tengahkan teks secara otomatis.

## Refrensi
- [Materi Modul 2](https://drive.google.com/file/d/1Gcsi-U4rzqU0GC6dYTlzO7KUthrGoL8q/view?usp=sharing)
- [MDN Web Docs — HTML Table Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [MDN Web Docs — rowspan & colspan](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attributes)