const frm = document.querySelector("form")
const respNome = document.querySelector("h3#resp1")
const respPreco = document.querySelector("h3#resp2")

frm.addEventListener("submit",(e)=>{
    const nome = frm.inNome.value;
    const preco = Number(frm.inPreco.value);
    
    respNome.innerText = `Promoção de ${nome}`;
    respPreco.innerText = `Leve 2 por apenas: R$${Math.floor(preco)}`;
    
    e.preventDefault();
})