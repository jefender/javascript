function testeCorona(opcao){
    var op = opcao.options[opcao.selectedIndex];
    alert(op.value);
    var msn = op.value;
    var imgCor = document.querySelector("#imgCorona");

    if (msn == 'Paciente sem contato'){
        imgCor.setAttribute('src', "./20210315_img/vacina.png");
    }

    else if (msn == 'Paciente contaminado'){
        imgCor.setAttribute('src', "./20210315_img/doente.png");
    }

    else if (msn == 'Paciente imunizado'){
        imgCor.setAttribute('src', "./20210315_img/curado.png");
    }
}