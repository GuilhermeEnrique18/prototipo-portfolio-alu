function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  campoPesquisa = campoPesquisa.toLowerCase();
  //console.log(campoPesquisa);
  let resultados = "";
  let linguagem = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    linguagem = dado.linguagem.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    

    if (linguagem.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      resultados += `

        <div class="item-resultado">
            <h2>
                <a href="${dado.link}" target="_blank">${dado.linguagem}</a>
            </h2>

                <p class="descricao-meta">${dado.descricao}</p>

                <a href=${dado.link} target="_blank"> Projetos em ${dado.linguagem} </a> 
        </div>
`
    }

    if (campoPesquisa == "") {
      section.innerHTML = "digite novamente, tente JavaScript ou Git";
      return
    }

  }

  if(!resultados ){
    resultados = "<p>Nada foi encontrado</p>"

  }


  section.innerHTML = resultados;
}


// let delay = 0;
// resultados.split('</div>').forEach(resultado => {
//   setTimeout(() => {
//     section.insertAdjacentHTML('beforeend', resultado + '</div>');
//     // Adicione uma classe CSS para aplicar um efeito de animação
//     let novoResultado = section.lastElementChild;
//     novoResultado.classList.add('mostrar');
//   }, delay);
//   delay += 500; // Ajuste o valor para controlar a velocidade
// } );