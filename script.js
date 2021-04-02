let boxes = document.querySelectorAll('.content');

window.addEventListener('scroll', checkBoxes);


function checkBoxes() {

    const trigger_bottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {

        const box_top = box.getBoundingClientRect().top;

        if (box_top < trigger_bottom) {
            box.classList.add("show");
        }
        else {
            box.classList.remove("show");
        }

    })
}

