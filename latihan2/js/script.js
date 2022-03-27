// 1. Execution Context, Hoisting, Scope:
// Contoh 1
// var nama = 'hamdan zr';
// console.log(nama);

// Creation phase pada Global Context
    // - Nama var = Undefined
    // - Nama function = fn()
// - Hoisting
    // - Window = Global object
    // - This = Window

// Function membuat local execution context
// - Yang didalamnya terdapat creation dan execution phase
    // - Window
    // - Arguments
    // - Hosting local

// Contoh 2
// var nama = 'hamdan';
// var umur = 22;
// console.log(sayHello());

// function sayHello() {
//     return(`Halo, namasaya ${nama}, saya ${umur} tahun`);
// }

// Contoh 3, Mengecek argument (Scope)
// var nama = 'hamdan';
// var username = '@hzr01';

// function cetakURL() {
//     // console.log(arguments[0]);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@rina'));

// Contoh 4, Function di dalam function
// function a() {
//     console.log('Ini a');

//     function b() {
//         console.log('Ini b');

//         function c() {
//             console.log('Ini c');
//         }
//         // Panggil function menggunakan Execution Stack (Tumpukan eksekusi)
//         c();
//     }

//     b();
// }

// a();


// Contoh 5
function satu() {
    var nama = 'hamdan';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'okin';
satu();
dua('gina');
console.log(nama);