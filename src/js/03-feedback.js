import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

const dataUser = {
        email: '',
        message: '',
}
    
const checkDataLocalStorage = () => {
    const currentDataLocalStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (currentDataLocalStorage) {
        refs.input.value = currentDataLocalStorage.email
        refs.textarea.value = currentDataLocalStorage.message
    }
}

const hadleForm = (event) => {
    
    if (event.target.name === 'email') {
        dataUser.email = event.target.value;
    } 
    if (event.target.name === 'message') {
        dataUser.message = event.target.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(dataUser))
}

const hadleSubmitForm = (event) => {
    event.preventDefault();

    if (!refs.input.value || !refs.textarea.value) {
        alert("Please fill out all fields")
        return
    }

    const form = event.target;
    const dataForm = JSON.parse(localStorage.getItem('feedback-form-state'))
    console.log(dataForm);
    localStorage.removeItem('feedback-form-state');

    form.reset()
}

refs.form.addEventListener('input', throttle(hadleForm, 500))
refs.form.addEventListener('submit', hadleSubmitForm)
checkDataLocalStorage()


