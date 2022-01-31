let contador=0;
let comidaEscolhida='';
let bebidaEscolhida='';
let sobremesaEscolhida='';

function selecionarComida(clicado,palavra){
const itemJaSelecionado=document.querySelector(".comida .selecionado");
if(itemJaSelecionado!=null){itemJaSelecionado.classList.remove("selecionado")}
else{contador=contador+1;
    mostrarConfirmacao()};
const item=document.querySelector(clicado);
    item.classList.add("selecionado");
    comidaEscolhida=palavra
}

function selecionarBebida(clicado,palavra){
    const itemJaSelecionado=document.querySelector(".bebida .selecionado");
    if(itemJaSelecionado!=null){itemJaSelecionado.classList.remove("selecionado")}
    else{contador=contador+1;mostrarConfirmacao()}
    const item=document.querySelector(clicado);
    item.classList.add("selecionado");
    bebidaEscolhida=palavra
    
}

function selecionarSobremesa(clicado,palavra){
    const itemJaSelecionado=document.querySelector(".sobremesa .selecionado");
    if(itemJaSelecionado!=null){itemJaSelecionado.classList.remove("selecionado")}
    else{contador=contador+1;mostrarConfirmacao()}
    const item=document.querySelector(clicado);
    item.classList.add("selecionado");
    sobremesaEscolhida=palavra
}

function mostrarConfirmacao(){
    if(contador==3){
    const botao=document.querySelector(".botao");
    botao.classList.remove("escondido");
    const botaofalso=document.querySelector(".botao-falso")
    botaofalso.classList.add("escondido")
    }

}
function finalizar(){
    window.open(`https://wa.me/5521984636141?text=Ol%C3%A1%2C+gostaria+de+fazer+o+pedido%3A%0A-+Prato%3A+${comidaEscolhida}%0A-+Bebida%3A+${bebidaEscolhida}%0A-+Sobremesa%3A+${sobremesaEscolhida}%0ATotal%3A+R%24+27.70`)

}