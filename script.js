$(document).ready(function () {

    $('#telefone').mask ('(00) 00000-0000')
    $('#cpf').mask ('000.000.000-00')
    $('#rg').mask ('00.000.000-0')
    $('#nascimento').mask ('00/00/0000')
    $('#numeroComplemento').mask ('000.000')
    $('#cep').mask ('00000-000')

    $('form').validate ({
        rules: {
            nome: {
                required: true        
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            rg: {
                required: true
            },
            nascimento: {
                required: true
            },
            endereco: {
                required: true
            },
            numeroEndereco: {
                required: true
            },
            complemento: {
                required: true
            },
            cidade: {
                required: true
            },
            cep: {
                required: true
            },
            estado: {
                required: true
            },
        },

        messages: { // This section should be outside the 'rules'
            nome: 'Necessário',
            email: 'Necessário',
            telefone: 'Necessário',
            cpf: 'Necessário',
            rg: 'Necessário',
            nascimento: 'Necessário',
            complemento: 'Necessário',
            endereco: 'Necessário',
            numeroEndereco: 'Necessário',
            cidade: 'Necessário',
            cep: 'Necessário',
            estado: 'Necessário',

        },

        submitHandler: function (form) {
            console.log (form)
            form.reset()
            alert('Formulário enviado com sucesso!')
        },

        invalidHandler: function (evento, validador) {
    let camposIncorretos = validador.numberOfInvalids ()
    if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
})
