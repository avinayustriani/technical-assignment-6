/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
// - Type Error terjadi saat variabel atau parameter bukan tipe yang valid.
// - Reference Error terjadi saat saat mereferensikan invalid referensi.
// - Range Error terjadi saat variabel numerik atau parameter berada di luar rentang validnya.
// - Syntax Error terjadi karena syntax nya salah, tidak mengikuti aturan pemrograman.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// - terjadi error.
// - termasuk kategori ReferenceError.
// - karena sudah mengakses salaryWithConst terlebih dahulu sebelum variabel tersebut dideklarasikan

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
