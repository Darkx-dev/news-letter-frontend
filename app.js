const warn_message = document.body.querySelector('#e-warn');
const form_page = document.querySelector('.form-page')
const greet_popup = document.querySelector('.greet-popup');

const set_warn_message = (target) => {
    warn_message.hidden = false
    target.classList.add('warn-active')
}

const remove_warn_message = (target) => {
    warn_message.hidden = true
    target.classList.remove('warn-active')
}

const emailValidation = (e) => {
    let value = e.target.value
    if (!value.includes("@") && !value.includes(".")) {
        set_warn_message(e.target)
    }
    else if (!value.includes("@")) set_warn_message(e.target)
    else if (!value.includes(".")) set_warn_message(e.target)
    else remove_warn_message(e.target)
}

const handleEmail = (e) => {
    emailValidation(e)
}

const handleSubmit = () => {
    form_page.classList.add('hidden')
    greet_popup.classList.remove('hidden')
}