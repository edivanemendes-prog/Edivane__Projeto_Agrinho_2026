const respostas = document.querySelectorAll(".resposta");
const resultado = document.getElementById("resultado");

respostas.forEach(botao=>{

    botao.addEventListener("click",()=>{

        if(botao.dataset.correta==="true"){

            resultado.innerHTML="✅ Correto!";

            resultado.style.color="green";

        }else{

            resultado.innerHTML="❌ Resposta incorreta.";

            resultado.style.color="red";

        }

    });

});

const enviar = document.getElementById("enviar");

const lista = document.getElementById("listaComentarios");

enviar.addEventListener("click",()=>{

    const texto = document.getElementById("texto");

    if(texto.value.trim()=="") return;

    const div = document.createElement("div");

    div.className="comentario";

    div.innerHTML=texto.value;

    lista.prepend(div);

    texto.value="";

});

const tema = document.getElementById("tema");

tema.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        tema.innerHTML="☀️ Modo Claro";

    }else{

        tema.innerHTML="🌙 Modo Escuro";

    }

});