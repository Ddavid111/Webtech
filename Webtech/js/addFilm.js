function validateForm() {

    var title = document.getElementById('title').value;
    var director = document.getElementById('director').value;
    var duration = document.getElementById("duration").value


    var isValid = true;

    var message = ''

    if (title === '') {
        message += 'Title is required\n'
        isValid = false;
        document.getElementById('title').classList.add('error');
    } else {
        document.getElementById('title').classList.remove('error');
    }

    if (director === '') {
        message += 'Director is required\n'
        isValid = false;
        document.getElementById('director').classList.add('error');
    } else {
        document.getElementById('director').classList.remove('error');
    }

    if (duration === '' || duration <= 0) {
        message += 'Duration must be a positive number\n'
        isValid = false;
        document.getElementById('duration').classList.add('error');
    } else {
        document.getElementById('duration').classList.remove('error');
    }

    if (isValid) {
        return true
    } else
    {
        showAlertBox(message)
        return false
    }
}

    const alertBox = document.getElementsByClassName('alert-box')
    const closeBtn = document.getElementsByClassName('close-alert')
    var timer;

function showAlertBox(message) {
    var content = alertBox[0].querySelector('p')
    var lines = message.split('\n')
    var modified = lines.join('<br>')
    content.innerHTML = modified

    closeBtn[0].addEventListener("click", function () {
        hideAlertBox()
        clearTimeout(timer)
    })
    console.log(alertBox)
    console.log(alertBox[0].classList)
    alertBox[0].classList.remove("hide");

    alertBox[0].classList.add("show");

    if (alertBox[0].classList.contains("hidden")) {
        alertBox[0].classList.remove("hidden")
    }

    timer = setTimeout(function () {
        hideAlertBox();
    }, 10000)


}


function hideAlertBox() {
    alertBox[0].classList.remove("show");
    alertBox[0].classList.add("hide");
}