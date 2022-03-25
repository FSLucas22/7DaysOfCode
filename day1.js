function checa_tipo_e_valor(x, y) {
    if (x === y) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor e o mesmo tipo')
    } else if (x == y) {
      console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
    } else {
      console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
    }
}

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

checa_tipo_e_valor(numeroUm, stringUm)
checa_tipo_e_valor(numeroTrinta, stringTrinta)
checa_tipo_e_valor(numeroDez, stringDez)
