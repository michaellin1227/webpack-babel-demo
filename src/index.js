import './index.css'

const btn = document.querySelector('#btn');
const num = document.querySelector('#num');

btn, addEventListener('click', () => {
    const count = parseInt(num.innerText, 10)
    num.innerText = count + 1;
})

class Test {
    #a = 1
}

const tt = new Test();
console.log('tt.a', tt.a);