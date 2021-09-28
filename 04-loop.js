/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
// var i = 0
// var prima = 0
for (var i = 1; i <= 100; i++) {
    var not_prime = false;
    for (var j = 2; j <= (i-1); j++) {
      if(i%j === 0){
        not_prime = true;
      }
      }
      if(not_prime === false){
        console.log(i);
      }
     }
    
    
    /// Soal - 02
    /// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
    /// EDIT HERE
    function isPrime(num) {
      if(num < 2) return false;
      for (var i = 2; i < num; i++){
        if (num%i == 0) return false;
      }
      return true;
    }
    
    let primeCounter = 0;
    let fiftiethPrime;
    let num = 0;
    
    while (primeCounter < 50){
      const checkPrime = isPrime(num);
      if (checkPrime == true){
        primeCounter++
        if (primeCounter == 50)
        break;
      }
      num++
    }
    console.log(primeCounter)
    console.log(num)
    
    
    /// Soal - 03
    /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
    
    
    /// EDIT HERE
    // 
    // function isOdd(num) {
    //   if(num < 0) return false;
    //   for (var i = 0; i < num; i++){
    //     if (num%2 != 0) return false;
    //   }
    //   return true;
    // }
    
    // let oddCounter = 0;
    // let fiftiethOdd;
    // do {
    //   console.log(oddCounter)
    //   console.log(num)
    // }
    
    // while (oddCounter < 50){
    //   const checkOdd = isOdd(num);
    //   if (checkOdd == true){
    //     oddCounterr++
    //     if (oddCounter == 50);
    //   }
    //   num++
    // }