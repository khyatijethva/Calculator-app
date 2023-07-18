function insert(num) {
    document.form1.textview.value = document.form1.textview.value + num;
}

function equal() {
    var exp = document.form1.textview.value;
    if (exp) {
        document.form1.textview.value = eval(exp)
    }
}

function backspace() {
    var exp = document.form1.textview.value;
    document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}



//----------- light-dark mode js
const bodywrapper = document.querySelector('body');
const radioButtons = document.querySelectorAll('.switch input');
bodywrapper.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    if (selectedSize == 1) {
        bodywrapper.removeAttribute("data-theme");
    }
    else if (selectedSize == 2) {
        bodywrapper.setAttribute("data-theme", "theme-2")
    }
    else {
        bodywrapper.setAttribute("data-theme", "theme-3")
    }
});