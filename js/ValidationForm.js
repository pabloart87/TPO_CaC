var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var error = document.getElementById('error');
var submit = document.getElementById('enviado');

function EnviarFormulario(){
    console.log('enviando formulario...');

    var MensajesError = [];
    var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    var regexTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/

    // nombre
    if(nombre.value === null || nombre.value === ''){
        MensajesError.push('Debe ingresar nombre.')
    }
     
    // email
    if(email.value === null || email.value === ''){
        MensajesError.push('Debe ingresar un email.')
    }
    else if(!regexMail.test(email.value) ){
        MensajesError.push('Verifique formato de email')
    }

    // teléfono

    if(telefono.value === null || telefono.value === ''){
        MensajesError.push('Debe ingresar un teléfono.')
    }
    else if(!regexTel.test(telefono.value) ){
        MensajesError.push('Verifique teléfono')
    }

    if(!MensajesError){
        alert('Formulario correctamente enviado');
        formulario.reset()
    }

    error.innerHTML = MensajesError.join(', ');

    // enviado.innerHTML = enviado('El formulario ha sido enviado correctamente.')

    return false;
}