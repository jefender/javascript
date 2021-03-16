function mensagem(){
    alert("Bem-vindo, mestre Getúlio! Melhor Professor!!!");}

function testeImg(poligono){
    alert("Imagem clicada: " + poligono);

    var imgPoli= document.querySelector("#imgPoligono");

    if (poligono == 'Hexágono'){
        imgPoli.setAttribute('src', "./20210315_img/hexagono.png");
    }

    else if (poligono == 'Pentagono'){
        imgPoli.setAttribute('src', "./20210315_img/pentagono.png");
    }

    else if (poligono == 'Quadrado'){
        imgPoli.setAttribute('src', "./20210315_img/quadrado.png");
    }

    else if (poligono == 'Triangulo'){
        imgPoli.setAttribute('src', "./20210315_img/triangulo.png");
    }
}