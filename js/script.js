const imgs = ['1.jpg', '2.jpg', '3.jpeg', '4.jpeg', '5.jpeg']
const slider = document.querySelector('.slider')

let active = 0

let items_content = '';

for (let i = 0; i < imgs.length; i++) {
    console.log(imgs[i])
    items_content += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`
}
slider.innerHTML = slider.innerHTML + items_content;

document.querySelector('.item').classList.add('show')

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const items = document.querySelectorAll('.item')
console.log(items)

prev.addEventListener('click', function () {
    if (active > 0) {
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    } else {
        items[active].classList.remove('show');
        active = (items.length - 1);
        items[active].classList.add('show');
    }
})

next.addEventListener('click', function () {

    if (active < items.length - 1) {
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    } else {
        items[active].classList.remove('show');
        active = 0;
        items[active].classList.add('show');
    }

});