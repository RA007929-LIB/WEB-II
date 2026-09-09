const form  = document.querySelector('form');
const resp = document.querySelector('#resp1');
const resp1 = document.querySelector('#resp2');

form.addEventListener("submit", (e)=>{
    const nome = (form.inNome.value);
    const preco = Number(form.inPreco.value);
    const valor = (preco * 2) - (preco*0.1);
    resp.innerText = `Promoção de ${nome}!`;
    resp1.innerText = `na compra de 2 un pague R$${valor.toFixed(2)}!`;
    e.preventDefault();
})