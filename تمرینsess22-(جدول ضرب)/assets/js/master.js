for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
document.querySelector('body>div:nth-of-type('+x+')>div:nth-of-type('+y+')').innerHTML=x*y
    }
}