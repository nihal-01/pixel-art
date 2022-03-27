const container = document.querySelector('.container');
const color = document.querySelector('.colorInput');
const sizeEl = document.querySelector('.sizeInput');
let size = sizeEl.value;
const resetBtn = document.querySelector('.resetBtn');

let clicked = false;

const populate = (size) => {
    container.style.setProperty('--size', size);

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');

        div.addEventListener('mouseover', () => {
            if (!clicked) return;
            div.style.backgroundColor = color.value;
        });

        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = color.value;
        });

        container.appendChild(div);
    }
};

window.addEventListener('mousedown', () => {
    clicked = true;
});

window.addEventListener('mouseup', () => {
    clicked = false;
});

const reset = () => {
    container.innerHTML = '';
    populate(size);
};

resetBtn.addEventListener('click', reset);

sizeEl.addEventListener('keyup', () => {
    console.log('keyup');
    size = sizeEl.value;
    reset();
});

sizeEl.addEventListener('change', () => {
    if (size !== sizeEl.value) {
        console.log('cahange');
        size = sizeEl.value;
        reset();
    }
});

populate(size);
