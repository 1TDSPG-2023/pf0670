/* <button id="meu-btn">CLICK</button> */

const btn = document.getElementById("meu-btn");

//Atrelando um evento ao ELEMENTO
btn.addEventListener("click", function(){

    //Função matemática Math
    //Math.randon = retorna números aleatórios entre 0 e 1 . Ex: 0.121821927
    //Math.floor = Função de arrendodamento para baixo
    //Math.ceil = Função de arrendodamento para cima
    //Math.round = Função de arrendodamento aleatório

    let r = 0;
    let g = 0;
    let b = 0;
    //Numeros aleatório gerados...
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

} );

//DESAFIO
//Recupere o elemento tit-sec e atrele a ele um evento de click.
//Quando clicado o elemento deve diminuir em 10px.



