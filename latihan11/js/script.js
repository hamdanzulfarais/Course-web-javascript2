// Tagged Templates

// const nama = 'Hamdaan';
// const umur = 24;

// function coba(strings, ...values) {

//     // Membuat variable kosong untuk merangkai satu persatu menggunakan forEach
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // })
//     // return result;

//     // Menggunakan reduce (Lebih ringkas)
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''} `, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// 2. Highlight
const nama = 'haamdan zr';
const umur = 24;
const email = 'hzr4305103002@gmail.com';

function highlight(strings, ...values) {

    // Menggunakan reduce (Lebih ringkas)
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

// Penggunaan sederhana tagged template, string dibawah ini dilewatkan terlebih dahulu kedalam function nya
const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;
document.body.innerHTML = str;