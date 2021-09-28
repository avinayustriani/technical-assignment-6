/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
// - ada 2 yaitu global scope dan local scope.
// - local scope --> variable hanya bisa diakses di dalam blocks, 
// sedangkan global scope --> variable hanya bisa diakses di luar blocks.
// - contoh global scope:
// let myname = "Avina";
// function greeting(){
//   return myname;
// }
// console.log(myname);

// contoh local scope:
// function greeting(){
//   let myname = "Avina";
//   return myname;
// }
// console.log(greeting());
// console.log(myname);



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
// - yang tampil adalah Mariah
// - karena karena const name = "John Watson" tersebut berada di luar block, maka variabel name tidak bisa mengaksesnya, maka yang keluar malah Mariah.

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));