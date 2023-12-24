let on = document.getElementById('ul');
const btn = () => {
    on.classList.toggle('d-none');
}
/////////////////////////////////////////////
let inp = document.getElementById('intext');
const _add = () => {
    let qq = inp.value;
    if (
        (qq == "") ||
        (qq == " ") ||
        (qq == null) ||
        (qq == "\n")
    ) {
        alert('not found')
    } else {
        let _li = document.createElement('li');
        _li.innerHTML = qq
        document.getElementById('ul').appendChild(_li)
        inp.value = null;
        inp.focus();
    }
}



































// let inp = document.getElementById('inp');
// const mytodo = () => {
//     let temp = inp.value;
//     if (
//         (temp == "") ||
//         (temp == " ") ||
//         (temp == null) ||
//         (temp == "\n")
//     ) {
//         alert('adam bash')
//     } else {
//         let _li = document.createElement('li');
//         _li.innerHTML = temp;
//         document.getElementById('list').appendChild(_li);
//         inp.value = null;
//         inp.focus('')
//         ////
//         // add class to the element

//         ////
//     }
// }