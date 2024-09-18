function hitungAkar(inputValue) {

    if (isNaN(inputValue)) {
        console.log("Input tidak valid. Harap masukkan bilangan bulat.");
        return;
    }

    if (inputValue < 0) {
        console.log("Tidak bisa input bilangan negatif");
       return;
    }

    if (inputValue % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
       return
    }

    const akar = Math.sqrt(inputValue);
    console.log(`Akar pangkat 2 dari ${inputValue} adalah ${akar.toFixed(2)}`);
}

hitungAkar(100);