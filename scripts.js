const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000067

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value //quero SÓ o valor
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML === new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = Intl.NumberFormat('de-DE', 
        { style: 'currency', currency: 'XBT' }
        ).format(inputReais * bitcoin)
    }



}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')


    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro' //MUDEI A MOEDA
        currencyImg.src = './assets/euro.png' // MUDEI A BANDEIRA
    }
    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano' //voltei A MOEDA
        currencyImg.src = './assets/us.png' // voltei A BANDEIRA
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png' 
    }
convertValues() //assim converte automaticamente com a CHANGE

}

button.addEventListener('click', convertValues)//'click' é um evento, assim como 'focus' é outro
select.addEventListener('change', changeCurrency)// 'change' também







// 1) guardei meu 'convert-button' numa variável como BUTTON
// 2) criei uma ARROW FUNCTION com nome que lembre sua utilidade
// 3) adicionei um EVENT LISTENER 'click' e coloquei um FUNCTION
// 4) chama uma função
// 5) pega o valor do input e faz o cálculo