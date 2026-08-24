const frm = document.querySelector("form")
const respNome = document.querySelector("h3#resp1")
const respPreco = document.querySelector("h3#resp2")

frm.addEventListener("submit",(e)=>{
    const nome = frm.inNome.value;
    const preco = Number(frm.inPreco.value);

    const produtos = (preco * 3) - (preco / 2) 
    const desconto = preco / 2
    
    respNome.innerText = `${nome} - Promoção: Leve 3 por R$ ${produtos.toFixed(2)}`;
    respPreco.innerText = `O 3° produto sai por R$${desconto.toFixed(2)}`;
    
    e.preventDefault();
})