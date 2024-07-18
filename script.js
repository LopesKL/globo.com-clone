document.getElementById('botao').addEventListener('click', verificar);

function verificar() {
    let lugarNumero = document.getElementById("lugarNumero");
    let nomeInput = document.getElementById("nomeInput");
    let lugarNumeroMenor = document.getElementById("lugarNumeroData");
    let validadeNumero = document.getElementById("validadeNumero");

    let numero = lugarNumero.value;
    let nome = nomeInput.value;
    let tres = lugarNumeroMenor.value;
    let data = validadeNumero.value;

    let resultado;

    let numeroValido = false;
    let nomeValido = false;
    let tresValido = false;
    let dataValida = false;
    let certo = false;
    
    if (numero.length !== 0) {
        numeroValido = true;
    }

    if (nome.length !== 0) {
        nomeValido = true;
    }

    if (tres.length !== 0) {
        tresValido = true;
    }

    if (data.length !== 0) {
        dataValida = true;
    }

    if (numeroValido && nomeValido && tresValido && dataValida) {
        document.getElementById('banner').style.display = 'block';
        certo = true;
    };
    
    if (certo = true){
        resultado = (Math.floor(Math.random() * 9));
    };
    
    console.log(resultado);
    
    let imafodasse;
    
    switch (resultado){
        case 0: 
            imafodasse = ("imagens/img1.png");
            break;
        case 2: 
            imafodasse = ("imagens/img2.png");
            break;
        case 3: 
            imafodasse = ("imagens/img3.png");
            break;
        case 4: 
            imafodasse = ("imagens/img4.png");
            break;
        case 5: 
            imafodasse = ("imagens/img5.png");
            break;
        case 6: 
            imafodasse = ("imagens/img6.png");
            break;
        case 7: 
            imafodasse = ("imagens/img7.png");
            break;
        case 8: 
            imafodasse = ("imagens/img8.png");
            break;
        case 1: 
            imafodasse = ("imagens/img9.png");
            break;
        default: 
            imafodasse = ("imagens/img1.png");
    }

    document.getElementById("resultado").src = imafodasse;

}

document.getElementById('closeBannerBtn').addEventListener('click', function() {
    document.getElementById('banner').style.display = 'none';
});




document.getElementById("resultado").src = "landscape.jpg";