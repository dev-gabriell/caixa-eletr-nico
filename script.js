let saldo = 0
let sal = document.getElementById("center-bot")
sal.innerHTML = ""
let insul = document.getElementById("vvr")

function abrirModal(){
  const modal = document.getElementById('janela-modal')
  modal.classList.add('abrir')
    modal.addEventListener('click',(e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}

function dep(){
    abrirModal()
    let tot = document.getElementById("tot")
    let jm = document.getElementById("jm")
    let val = document.getElementById("val")
    val.value = "";

        jm.innerHTML = "DEPÓSITO<br>"
        jm.style.fontFamily = "Arial"
        tot.innerHTML = '';
        //BOTÃO DE ENTRADA
        let ent = document.createElement("input")
        ent.type = "button"
        ent.value = "Entrar"
        ent.id = "enter"
        ent.onclick = depositado
        tot.appendChild(ent)
        sal.innerHTML = ""
        insul.innerHTML = ""
}
function saque(){
  let val = document.getElementById("val")
  val.value = "";
    abrirModal()
    jm.innerHTML = "SAQUE<br>"
    jm.style.fontFamily = "Arial"
    tot.innerHTML = ''
    //BOTÃO DE SACAR
    let bots = document.createElement("input")
    bots.type = "button"
    bots.id = "saq"
    bots.onclick = sacado
    bots.value = "Sacar"
    tot.appendChild(bots)
    sal.innerHTML = ""
}
function exibirSaldo(){
  sal.innerHTML = (`Saldo atual: ${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
}

function sair(){
  sal.innerHTML = ""
  saldo = saldo * 0
  window.alert(`Você saiu do caixa eletrônico`)
}
function adicionarNumero(numero) {
    let val = document.getElementById("val");
    val.value += numero;
}

function deletarNumero() {
    let val = document.getElementById("val");
    val.value = val.value.slice(0, -1);
}

//DEPOSITO
function depositado() {
    let depo = parseFloat(document.getElementById("val").value)
    const modal = document.getElementById('janela-modal')
    if(!isNaN(depo) && depo > 0){
      saldo += depo
      let valorFormatado = depo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      window.alert(`Depósito de ${valorFormatado} realizado com sucesso!`)
      document.getElementById("val").value = ""
      modal.classList.remove('abrir')
    } 
    else{
      window.alert("Valor do depósito invalido!")
    }
}

//SAQUE
function sacado() {
    let saque = parseFloat(document.getElementById("val").value);
    const modal = document.getElementById('janela-modal')//
    if (!isNaN(saque) && saque > 0) {
        if (saque > saldo) {
          window.alert("Saldo insuficiente!");
          insul.innerHTML = "Saldo insulficiente"
          insul.style.fontFamily = "Arial"
          insul.style.textAlign = "center"
          insul.style.color = "red"
          insul.style.fontWeight = 700
          document.getElementById("val").value = ""
        } else {
            saldo -= saque;
            let valorFormatado = saque.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            window.alert(`Saque no valor de ${valorFormatado} realizado com sucesso!`)
            document.getElementById("val").value = ""
            modal.classList.remove('abrir')//retira a janela aberta automaticamente
        }
      } 
    else {
        window.alert("Valor de saque inválido.");
    }
  }