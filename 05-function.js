/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    var calculate = 0;
    if(salary > 0 && salary <= 5000000){
      tax = (salary * 0);
      }else if (salary >= 5000000 && salary < 10000000){
        tax = (salary * 0.05);
      }else if (salary >= 10000000 && salary < 20000000){
        tax = (salary * 0.1);
      }else if (salary >= 20000000){
        tax = (salary * 0.2);
        }
    tax = tax.toFixed(2)
    return tax;
  }
  // contoh jika salary 4.500.000:
  console.log(taxCalc(4500000));
  
  
  
  /// Soal - 02
  /// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.
  
  /// Spesifikasi BMI
  /// - "under weight" apabila $BMI < 18.5
  /// - "normal" apabila 18.5 < $BMI < 24.9
  /// - "over weight" apabila 25 < $BMI < 29.9
  /// - "obese" apabila 30 < $BMI < 34.9
  /// - "extremely obese" apabila 35 < BMI
  
  /// Parameter
  /// - (Number) `height` ⇒ tinggi seseorang (cm)
  /// - (Number) `weight` ⇒ berat badan seseorang (kg) 
  
  /// Return Value
  /// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
  ///   (weight/(height^2)) * 10000
  
  /// EDIT HERE
  // function checkBMI(....) { .... }
  function checkBMI(weight, height) {
    let checkBMI = (weight / (height**2)) * 10000;
    
    if(checkBMI < 18.5){
      return "Under weight";
    }else if (checkBMI < 24.9){
      return "Normal";
    }else if (checkBMI < 29.9){
      return "Over weight";
    }else if (checkBMI < 34.9){
      return "Obsese"
    }else{
      return "Extremely Obese";
    }
  }
  // contoh jika berat 80 dan tinggi 170:
  console.log(checkBMI(80, 170));
  
  
  
  /// Soal - 03
  /// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar
  
  /// Parameter
  /// - (String) sentence => kalimat yang nanti akan diubah
  
  /// Return Value
  /// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar
  
  /// EDIT HERE
  // function convToUpperCase(....) { .... }
  function convToUpperCase(str) {
     var splitStr = str.toLowerCase().split(' ');
     for (var i = 0; i < splitStr.length; i++) {
         // You do not need to check if i is larger than splitStr length, as your for does that for you
         // Assign it back to the array
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
     }
     // Directly return the joined string
     return splitStr.join(' '); 
  }
  // contoh kalimat hello bandung:
  console.log(convToUpperCase("hello bandung"));
  
  
  
  /// Soal - 04
  /// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR
  
  /// Spesifikasi
  /// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
  /// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
  /// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama
  
  /// Parameter
  /// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)
  
  /// Result Value
  /// (String) huruf yang pertama kali tidak ada kembarannya
  
  /// EDIT HERE
  function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))) {
        return str.charAt(i)
      }
    }
    return 'no results found'
  }
  
  // console.log(firstNonRepeatedChar());