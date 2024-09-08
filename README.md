# Jogos da FromSoftware

**Objetivo:**

Este projeto tem como objetivo criar uma página web simples que liste os jogos da empresa FromSoftware. A página permite que o usuário pesquise por jogos específicos.

**Tecnologias Utilizadas:**

* **HTML5:** Estrutura da página.
* **CSS3:** Estilização da página.
* **JavaScript:** Interatividade e manipulação do DOM.
* **JSON:** Armazenamento dos dados dos jogos (no arquivo `dados.js`).

**Estrutura dos Arquivos:**

* **index.html:** Arquivo principal da página.
* **styles.css:** Arquivo de estilos CSS.
* **dados.js:** Arquivo JSON contendo os dados dos jogos.
* **app.js:** Arquivo JavaScript com a lógica da aplicação.

**Como Executar:**

1. **Criar um servidor local:** Utilize um servidor web local como o Live Server (extensão para VS Code) ou um servidor HTTP simples para servir os arquivos.
2. **Abrir o arquivo index.html:** Abra o arquivo `index.html` no seu navegador.

**Funcionalidades:**

* **Pesquisa de jogos:** O usuário pode digitar o nome de um jogo no campo de pesquisa e clicar no botão "Confirme o jogo" para ver os resultados.
* **Exibição dos resultados:** Os resultados da pesquisa são exibidos na seção "resultados-pesquisa".

**Contribuições:**

* **Novos jogos:** Adicione novos jogos ao arquivo `dados.js`.
* **Melhorias visuais:** Modifique o arquivo `styles.css` para personalizar a aparência da página.
* **Novas funcionalidades:** Implemente novas funcionalidades em `app.js`, como ordenação dos resultados, filtros ou detalhes dos jogos.

**Observações:**

* **Arquivo `dados.js`:** Este arquivo deve conter um array de objetos, onde cada objeto representa um jogo com as seguintes propriedades: nome, plataforma e ano de lançamento.
* **Arquivo `app.js`:** Este arquivo contém a lógica da aplicação, como a função `pesquisar()` que filtra os jogos com base na entrada do usuário.

**Link para acessar a aplicação:**

* https://jogos-omega.vercel.app/
