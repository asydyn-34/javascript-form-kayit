let sayilar = [-5,3,-2,9,-11,6,0,4,7,-8]

let pozitifToplam = 0;
let negatifToplam =0;
let pozitifSayisi =0;
let negatifSayisi = 0;

for (let i =0; i <sayilar.length; i++) {
    let sayi = sayilar [i];

    if (sayi > 0) {
        pozitifToplam += sayi;
        pozitifSayisi++;
        
    }

    else if (sayi < 0){
        negatifToplam += sayi;
        negatifSayisi++;
    }
}

let pozitifOrtalama = pozitifToplam / pozitifSayisi;
let negatifOrtalama = negatifToplam / negatifSayisi;

console.log("Dizi:",sayilar);
console.log("Pozitif Sayılar Toplamı:",pozitifToplam);
console.log("Pozitif Sayılar Ortalaması:",pozitifOrtalama);
console.log("Negatif Sayılar Toplamı:",negatifToplam);
console.log("Negatif Sayılar Ortalaması:",negatifOrtalama);