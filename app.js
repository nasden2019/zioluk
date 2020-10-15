
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const text4 = document.querySelector('.text4');
const text5 = document.querySelector('.text5');
const text6 = document.querySelector('.text6');
const text7 = document.querySelector('.text7');
const text8 = document.querySelector('.text8');
const text9 = document.querySelector('.text9');
const text10 = document.querySelector('.text10');
const text11 = document.querySelector('.text11');
const text12 = document.querySelector('.text12');

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');
const img6 = document.querySelector('.img6');
const img7 = document.querySelector('.img7');
const img8 = document.querySelector('.img8');
const img9 = document.querySelector('.img9');
const img10 = document.querySelector('.img10');
const img11 = document.querySelector('.img11');
const img12 = document.querySelector('.img12');

img1.addEventListener('mouseover', () => {
    text1.classList.remove('d-none')
    img1.classList.add('overlay')
})
img1.addEventListener('mouseout', () => {
    text1.classList.add('d-none')
    img1.classList.remove('overlay')
})

img2.addEventListener('mouseover', () => {
    text2.classList.remove('d-none')
    img2.classList.add('overlay')
})
img2.addEventListener('mouseout', () => {
    text2.classList.add('d-none')
    img2.classList.remove('overlay')
})

img3.addEventListener('mouseover', () => {
    text3.classList.remove('d-none')
    img3.classList.add('overlay')
})
img3.addEventListener('mouseout', () => {
    text3.classList.add('d-none')
    img3.classList.remove('overlay')
})

img4.addEventListener('mouseover', () => {
    text4.classList.remove('d-none')
    img4.classList.add('overlay')
})
img4.addEventListener('mouseout', () => {
    text4.classList.add('d-none')
    img4.classList.remove('overlay')
})

img5.addEventListener('mouseover', () => {
    text5.classList.remove('d-none')
    img5.classList.add('overlay')
})
img5.addEventListener('mouseout', () => {
    text5.classList.add('d-none')
    img5.classList.remove('overlay')
})

img6.addEventListener('mouseover', () => {
    text6.classList.remove('d-none')
    img6.classList.add('overlay')
})
img6.addEventListener('mouseout', () => {
    text6.classList.add('d-none')
    img6.classList.remove('overlay')
})

img7.addEventListener('mouseover', () => {
    text7.classList.remove('d-none')
    img7.classList.add('overlay')
})
img7.addEventListener('mouseout', () => {
    text7.classList.add('d-none')
    img7.classList.remove('overlay')
})

img8.addEventListener('mouseover', () => {
    text8.classList.remove('d-none')
    img8.classList.add('overlay')
})
img8.addEventListener('mouseout', () => {
    text8.classList.add('d-none')
    img8.classList.remove('overlay')
})

img9.addEventListener('mouseover', () => {
    text9.classList.remove('d-none')
    img9.classList.add('overlay')
})
img9.addEventListener('mouseout', () => {
    text9.classList.add('d-none')
    img9.classList.remove('overlay')
})

img10.addEventListener('mouseover', () => {
    text10.classList.remove('d-none')
    img10.classList.add('overlay')
})
img10.addEventListener('mouseout', () => {
    text10.classList.add('d-none')
    img10.classList.remove('overlay')
})

img11.addEventListener('mouseover', () => {
    text11.classList.remove('d-none')
    img11.classList.add('overlay')
})
img11.addEventListener('mouseout', () => {
    text11.classList.add('d-none')
    img11.classList.remove('overlay')
})

img12.addEventListener('mouseover', () => {
    text12.classList.remove('d-none')
    img12.classList.add('overlay')
})
img12.addEventListener('mouseout', () => {
    text12.classList.add('d-none')
    img12.classList.remove('overlay')
})

// img.forEach((i) => {
//     i.addEventListener('mouseover', (e) => {
//         if (e.target.contains('img1')) {
//             text1.classList.remove('d-none')
//             img1.classList.add('overlay')
//         } else {
//             text1.classList.add('d-none')
//             img1.classList.remove('overlay')
//         }
//     })
// })
