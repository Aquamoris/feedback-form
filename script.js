// let phoneMask = new IMask(
//     document.getElementById('phone'), {
//         mask: '+{7}(000)000-00-00',
//         lazy: false,
//     });

// let checkPhone = () => {
//     const phone = document.getElementById('phone');
//
//     return phone.value.indexOf('_') === -1;
// }

let sendForm = () => {
    const fio = document.getElementById('fio');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (fio.value === '') {
        alert('Имя обязательно для ввода')
    } else {
        if (validatePhone(phone.value) === false) {
            alert('Введите корректный номер вида +7 423 123-45-67 или 8 423 123-45-67, используя только цифры');
        } else {
            if (email.value === '' || validateEmail(email.value) === true) {
                alert('Сообщение успешно отправлено! 🙂')
                fio.value = '';
                phone.value = '';
                email.value = '';
                message.value = '';
            } else {
                alert('Введите корректный E-mail адрес вида mail@example.com')
            }
        }
    }

    console.log(fio.value + ' ' + phone.value + ' ' + email.value + ' ' + message.value);
}

const button = document.getElementById('button');

button.addEventListener('click', sendForm);


function validateEmail(email) {
    const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^((\+7|7|8)+([0-9]){10})$/;
    return regex.test(phone);
}