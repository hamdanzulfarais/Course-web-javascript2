// 1. HTML Fragments
// const mhs = {
//     nama: 'Hamdaaan',
//     umur: 22,
//     nrp: '2001403223xx',
//     email: 'hzr01502@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>    
// </div>`;

// Memangil ke DOM
// document.body.innerHTML = el;

// 2. Looping, Array of Object (Contoh mengambil API)
// const mhs = [
//     {
//         nama: 'Hamdaaam',
//         email: 'hzr0140232@gmail.com'
//     },
//     {
//         nama: 'Asmaran Abuha',
//         email: 'abuhaasmaran@gmail.com'
//     },
//     {
//         nama: 'jayanti sukwatima',
//         email: 'jayantis@gmail.com'
//     }
// ];

// // Melakukan perulangan untuk mendapatkan data dari array object
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')} // Menggunakan chaining agar koma nya hilang
// </div>`;
// document.body.innerHTML = el;

// 3. Conditional
// Menggunakan ternary function
// const lagu = {
//     judul: 'pasukan mati',
//     penyanyi: 'deadsquad',
//     tahun: 'tahun jebot'
// }

// // Jika judul lagu ada feat nya maka tampilkan nama orangnya
// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;
// document.body.innerHTML = el;

// 4. Nested
// Menggunakan HTML Fragment Bersarang (Array of Object)
const mhs = {
    nama: 'Hamdaaan',
    semester: 4,
    mataKuliah: [
        'Rekayasa Web', 
        'teori perancangan Sistem Informasi',
        'teknik automata bahasa dan kompilasi',
        'Pemrograman Berorientasi Object' 
    ]
};

// Mencetak list mata kuliah menggunakan perulangan method map yang disimpan kedalam function cetakMataKuliah
function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

// Mencetak lsit nama dan semester dari object
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;