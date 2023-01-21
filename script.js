
let cpfJS = document.getElementById('cpf').value

cpf.addEventListener('keypress', () => {
    let inputlength = cpf.value.length

    if (inputlength === 3 || inputlength === 7) {
        cpf.value += '.'
    } else if (inputlength === 11) {
        cpf.value += '-'
    }

})

tel.addEventListener('keypress', () => {
    let inputlength = tel.value.length

    if (inputlength === 0) {
        tel.value += '('
    } else if (inputlength === 3) {
        tel.value += ') '
    } else if (inputlength === 6) {
        tel.value += ' '
    } else if (inputlength === 11) {
        tel.value += '-'
    }

})

function validar() {

    let nomeJS = document.getElementById("nome").value
    let emailJS = document.getElementById("email").value
    let cpfJS = document.getElementById("cpf").value
    let telJS = document.getElementById("tel").value
    let senhaJS = document.getElementById("senha").value

    if (nomeJS == "") {
        document.getElementById("COnome").innerHTML = "*Campo Obrigatório"
        document.getElementById("COnome").style.color = "#E73550"
    } else {
        document.getElementById("COnome").innerHTML = "a"
        document.getElementById("COnome").style.color = "#181818"
    }

    if (emailJS == "") {
        document.getElementById("COemail").innerHTML = "*Campo Obrigatório"
        document.getElementById("COemail").style.color = "#E73550"
    } else {
        document.getElementById("COemail").innerHTML = "a"
        document.getElementById("COemail").style.color = "#181818"
    }
    if (cpfJS == "") {
        document.getElementById("COcpf").innerHTML = "*Campo Obrigatório"
        document.getElementById("COcpf").style.color = "#E73550"
    } else {
        document.getElementById("COcpf").innerHTML = "a"
        document.getElementById("COcpf").style.color = "#181818"
    }
    if (telJS == "") {
        document.getElementById("COtel").innerHTML = "*Campo Obrigatório"
        document.getElementById("COtel").style.color = "#E73550"
    } else {
        document.getElementById("COtel").innerHTML = "a"
        document.getElementById("COtel").style.color = "#181818"
    }
    if (senhaJS == "") {
        document.getElementById("COsenha").innerHTML = "*Campo Obrigatório"
        document.getElementById("COsenha").style.color = "#E73550"
    } else {
        document.getElementById("COsenha").innerHTML = "a"
        document.getElementById("COsenha").style.color = "#181818"
    }


    if (nomeJS == "" || emailJS == "" || cpfJS == "" || telJS == "" || senhaJS == "") {
        document.getElementById("status").innerHTML = "*Campos obrigatórios não registrados!"
        document.getElementById("status").style.color = "#E73550"
    } else {
        document.getElementById("status").innerHTML = "Sucesso!"
        document.getElementById("status").style.color = "#0F7B0F"
    }

}
