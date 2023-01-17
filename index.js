const prompt = require ('prompt-sync') ();

var nome = prompt ("Digite o seu nome: ");
var salario_bruto = parseFloat(prompt ("Digite o salário bruto: "));
var num = parseInt (prompt ("Digite o número de dependentes: "));
var renda = salario_bruto/num;

if (renda >= 500)  {
  if (salario_bruto > 0 && salario_bruto <= 1903.38) {
    var ir = salario_bruto * 0.05;
}else if (salario_bruto >1903.38 &&salario_bruto<= 2826.65){
  var ir = salario_bruto * 0.075;
}else {
  var ir= salario_bruto * 0.15
}
  var salario_liquido = salario_bruto - ir;
console.log ("Salário líquido R$", salario_liquido);

} else {
  var ir = 0
  console.log ("A pessoa está insenta do imposto de renda.")
}

