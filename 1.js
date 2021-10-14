    let n = 200
    let result = []
    // Looping cek batas angka input
    for(let i = 1;  i <= n; i++){
            let divider = 0
            // looping banyak nya pembagi
            for(let j = 1; j <= i; j++){
            if(i%j == 0){
                divider++
            }
        }
        // Hasil Jika Kondisi Pembagi == 2
            if(divider==2){
            result.push(i)  
        }
    }
    console.log(result)

    function segitiga1(panjang) {
        let prime = result
        // console.log(prime)
        let hasil = '';
        for (let i = 0; i < panjang; i++) {
            for (let j = 0; j <= i; j++) {
                hasil +=
                    prime[0]++ + " ";
                }
                hasil += '\n';
            }
            return hasil;
        }
        console.log(segitiga1(10));
    