function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value


    // Se o campo pesquisa é uma string vazia ou se contém espaços
    if (campoPesquisa == "" || campoPesquisa == " ") {
      section.innerHTML = "<p>Você precisa inserir alguma informação válida ou retirar os espaços!</p>"
      return
    };

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Concatena o HTML de cada resultado à string 'resultados'
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
      `;
      }

    }

    // Se resultados não existir
    if (!resultados) {
        resultados = "<p>Nada foi encontrado. A informação inserida não existe na base de dados!</p>"
    }
  
    // Atribui o conteúdo HTML da string 'resultados' à seção
    section.innerHTML = resultados;
  }