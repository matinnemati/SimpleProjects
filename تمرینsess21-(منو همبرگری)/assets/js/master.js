let x = document.getElementsByClassName('mymenu')[0].classList
function _logo() {
    x.toggle('flex')
    x.toggle('d-none')
}
const mat = (e) => {
    let temp = e.target.getAttribute('data-fl')
    if (temp == 'first') {
        e.target.nextElementSibling.style.color = 'green';
    } else if (temp == 'last') {
        e.target.previousElementSibling.style.color = 'green';
    }
    else {
        e.target.nextElementSibling.style.color = 'green';
        e.target.previousElementSibling.style.color = 'green';
    }
    e.target.style.color = 'rgba(97, 97, 97, 0.453)';
    console.log(mat);
}
