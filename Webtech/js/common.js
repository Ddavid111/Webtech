function setBackgroundColor() {

    let storedColor = localStorage.getItem('backgroundColor');
    if (storedColor !== "#ffffff") {
        document.body.style.backgroundColor = storedColor;
    }
}