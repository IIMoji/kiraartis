function hesapla() {

    let sayi = document.getElementById("sayi").value;

    let secenek = document.getElementById("secenek").value;

    let zamorani = sayi * secenek;

    let toplam = parseFloat(zamorani) + parseFloat(sayi);

    document.getElementById("zamorani").innerHTML = "Zam oranı: " + zamorani;
    document.getElementById("toplam").innerHTML ="Kira Zamlı Fiyatı: "+ toplam;
}