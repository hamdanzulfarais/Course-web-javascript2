// Callback

// 1. Menggunakan Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }
// tampilkanPesan(halo);

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => {
//     alert(`Halo, ${nama}`);
// });

// Data array of object
// const mhs = [
//     {
//         "nama" : "haamdaan zr",
//         "nrp" : "001",
//         "email" : "hzr4305103002@gmail.com",
//         "jurusan" : "Teknik Industri",
//         "IdMhs" : 1
//     },
//     {
//        "nama" : "Raymond",
//        "nrp" : "002",
//        "email" : "raymonanadar@gmail.com",
//        "jurusan" : "Teknik Mesin",
//        "IdMhs" : 2
//     },
//     {
//          "nama" : "Ardiansyah",
//          "nrp" : "0003",
//          "email" : "ardiansyah@gmail.com",
//          "jurusan" : "Teknik Elektro",
//          "IdMhs" : 3
//     },
//     {
//        "nama" : "Yudo margowo",
//        "nrp" : "004",
//        "email" : "Margowoy@gmail.com",
//        "jurusan" : "Teknik Fisika",
//        "IdMhs" : 4
//     },
//     {
//         "nama" : "sakala",
//         "nrp" : "005",
//        "email" : "sakala@gmail.com",
//        "jurusan" : "Teknik mekatronika",
//        "IdMhs" : 5
//     }
// ];

// console.log('Mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('Selesai');

// 2. Menggunakan Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// // function success() {

// // }

// // function error() {

// // }

// console.log('Mulai');
// getDataMahasiswa('js/DATA.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('Selesai');

// 3. Menggunakan JQuery
console.log('Mulai');
$.ajax({
    url: 'js/DATA.json',
    success: (mhs) => {
        mhs.forEach(m => {
            console.log(m.nama);
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('Selesai');