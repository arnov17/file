let volumeKubus = () => {
    document.getElementById('hasil-kubus').innerHTML = 'Volume kubus : ';
    let sisi = document.getElementById('sisi').value;
    let volume = sisi * sisi * sisi;

    document.getElementById('hasil-kubus').append(volume);
    document.getElementById('sisi').value = ''
}

let luasLingkaran = () => {
    document.getElementById('hasil-lingkaran').innerHTML = 'Luas Lingkaran : '
    let diameter = document.getElementById('diameter').value;
    let r = diameter / 2;
    let luas;
    if(r % 7 == 0) {
        luas = 22/7 * r * r;
        // console.log(7)
    } else {
        luas = 3.14 * r * r;
        // console.log(3.14)
    }
    document.getElementById('hasil-lingkaran').append(luas);
    document.getElementById('diameter').value = ''
}

let luasSegitiga = () => {
    document.getElementById('hasil-segitiga').innerHTML = 'Hasil Segitiga : '
    let alas = document.getElementById('alas').value
    let tinggi = document.getElementById('tinggi').value
    let luas = alas * tinggi * 0.5;
    document.getElementById('hasil-segitiga').append(luas);

    document.getElementById('alas').value = ''
    document.getElementById('tinggi').value = ''
}