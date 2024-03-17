const btns = document.getElementsByClassName('btn');
const body = document.getElementsByTagName('body')[0];

function changeBackground(btn) {
    const bg = btn.value;
    body.style.backgroundColor = bg;
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        changeBackground(this);
    });
}