<h1>PROJETO TON MOVIE</h1>

<h2>O QUE É A TON MOVIE?</h2>

<p>A Ton Movie é um aplicativo que tem o objetivo de vender os filmes mais atuais do mercado e ele é composto por 3 páginas:</p>
<ul>
  <li>Home (tela de boas vindas)</li>
  <li>Lista de filmes</li>
  <li>Carrinho de compras (filmes selecionados)</li>
</ul>
(print das telas)


--------------------------------------------------------------------------------------------------------------

<h2>EXECUTANDO O APLICATIVO LOCALMENTE (INSTALAÇÃO REACT NATIVE E EXPO)</h2>

<h3>instalar o react-native e expo CLI:</h3>
<ol>
  <li>Abra o terminal ou prompt de comando e execute o seguinte comando para instalar o Expo CLI globalmente:</li>
  npm install -g expo-cli<br><br>
  <li>Crie um projeto React Native com Expo:</li>
  expo init nome-do-projeto<br><br>
  <li>Execute o seguinte comando para iniciar o servidor de desenvolvimento:</li>
  expo start<br>
  Isso abrirá o Metro Bundler no seu navegador.<br><br>
  <li>Para executar o aplicativo no dispositivo físico ou emulador:</li>
  No Metro Bundler, você verá um código QR. Você pode digitalizá-lo usando o aplicativo Expo Go no seu dispositivo físico (disponível na App Store ou Google Play) ou usar um emulador no seu computador.<br>
  Se você estiver usando um dispositivo físico, certifique-se de que o dispositivo esteja na mesma rede Wi-Fi que o seu computador.<br>
  Para emuladores, você pode selecionar a opção desejada no Metro Bundler.<br><br>
</ol>

<p>Para pegar o código do github e colocar na sua máquina. Faça do jeito que preferir, minha sugestão é usar o git clone;</p>


----------------------------------------------------------------------------------------------------------------------------------

<h2>BIBLIOTECAS USADAS NO PROJETO</h2>

<h3>-React Navigation</h3> (você pode encontrar mais informações no: https://reactnavigation.org/.)<br>
O comando de instalação é npm install @react-navigation/native<br>
Instale também as dependências adicionais necessárias para a sua escolha de navegador React Navigation.Por exemplo, para instalar o React Navigation Stack, execute o comando: npm install @react-navigation/stack


<h3>-react-native-vector-icons</h3>
Se você tiver o expo baixado no seu projeto você pode usar uma biblioteca incluída no expo de ícones que na hora de importar o ícone você usa por exemplo: import { AntDesign } from '@expo/vector-icons';<br>
O site para achar diversos ícones é: https://icons.expo.fyi/<br>

--------------------------------------------------------------------------------------------------------------------
<h2>USO DA API</h2>

<h3>Conseguimos acessar esses filmes em alta no mercado com uma Api pública chamada Tmdb, e para usa-lá precisamos:</h3>
<ol>
  <li>Acessar o site: https://www.themoviedb.org/?language=pt-BR ; </li>
  <li>Fazer uma conta gratuita; </li>
  <li>Clique no header em "mais" e depois em "api"; </li>
  <li>Após clicar ele irá te encaminhar para o link https://developer.themoviedb.org/docs, no meio do texto clique em "API link"; </li>
  <li>Neste link você achará a sua chave da API para fazer suas requisições e logo abaixo um exemplo de como você vai precisar usa-lá dentro do código; </li>
</ol>

<h4>Dica:</h4>
<h4>Para saber o que tem dentro do Json da requisição que você está fazendo:</h4>

<ul>
  <li>Você pode pegar o exemplo abaixo da chave da API e colar no site: https://resttesttest.com/ e ele retornará todas as informações;</li>
  <li>Para formatar esse Json e facilitar a compreensão você pode usar o site: https://jsonviewer.stack.hu/ , basta você copiar o json fornecido pelo resttesttest e colocar nesse site;</li>
</ul>


-----------------------------------------------------------------------------------------------------------------------------------------
<h2>SOBRE O QUE CADA COMPONENTE DO PROJETO FAZ:</h2>


<h3>Dentro da pasta context:</h3>
<h4>GlobalContext:</h4>
<p>Esse código coloca um contexto global no React usando a API createContext do React. O contexto global é utilizado para compartilhar dados entre componentes sem a necessidade de passar as informações através de props manualmente.</p>

<p>Definição do tipo de dados Movie: É definido um tipo Movie que possui as propriedades id, posterPath e title. É usada para tipar os dados relacionados a filmes.</p>
<p>Definição do tipo GlobalContextValue: É definido um tipo GlobalContextValue que especifica a estrutura dos dados e das funções do contexto global. É usado para tipar o valor fornecido pelo contexto.</p>
<p>Criação do contexto global: É criado o contexto global utilizando createContext do React. O valor inicial do contexto é definido como undefined, mas depois é substituído.</p>
<p>Componente GlobalContextProvider: É criado um componente GlobalContextProvider que fornece o valor do contexto para seus componentes filhos. Esse componente recebe as propriedades children (ReactNode), que representam os componentes filhos que serão envolvidos pelo contexto.</p>
<p>Estado e funções do contexto: Dentro do GlobalContextProvider, são definidos o estado addedMovies (array de Movie) e as funções isMovieAdded, handleAddItem e removeMovieFromCart que manipulam esse estado.</p>
<ul>
    <li>isMovieAdded: Verifica se um filme já foi adicionado à lista addedMovies.</li>
    <li>handleAddItem: Adiciona ou remove um filme da lista addedMovies com base no ID do filme (no componente MovieDetails). Se o filme já estiver adicionado, ele é removido; caso contrário, é adicionado na lista.</li>
    <li>removeMovieFromCart: Remove um filme específico da lista addedMovies (no componente ShoppingCart).</li>
</ul>
<p>Valor do contexto: O valor do contexto é definido como um objeto que contém as informações do estado e as funções do contexto. Esse valor é utilizado para fornecer o contexto para os componentes filhos.</p>

<p>Hook useGlobalContext: É criado um hook useGlobalContext que permite que outros componentes acessem o valor do contexto global. Esse hook utiliza a função useContext do React para ter o valor do contexto e faz uma verificação para garantir que o contexto esteja definido.</p>
<p>Ao envolver os componentes desejados com o GlobalContextProvider, você poderá acessar o estado addedMovies e as funções isMovieAdded, handleAddItem e removeMovieFromCart através do hook useGlobalContext em qualquer componente descendente, permitindo que eles acessem e modifiquem os dados do contexto global.</p>

------------------------------
<h3>Dentro da pasta src/api:</h3>
<h4>Tmdb:</h4>
<p>Esse código tem uma função basicFetch para fazer requisições da API do (TMDb) e uma função getHomeList que retorna uma lista de filmes por gênero (ação, comédia e romance).</p>

<p>const API_KEY: Define a chave da API do TMDb que vai ser usada nas requisições.</p>
<p>const API_BASE: Define o URL base da API do TMDb.</p>

<p>Interface Movie: Define uma interface que representa a estrutura de um objeto de filme. Possui as propriedades slug, title e items. O tipo any é utilizado temporário, mas vai ser substituído pelo tipo correto dos itens retornados pela API.</p>

<p>Função basicFetch: Essa função recebe um endpoint da API e faz uma requisição utilizando o fetch. Ela retorna uma promessa que vai ser resolvida com o JSON retornado pela requisição.</p>
<p>Função getHomeList: Essa função retorna uma lista de filmes divididos por gênero. Ela faz uso da função basicFetch para buscar os filmes de cada gênero na API do TMDb.</p>

<p>A função getHomeList faz três chamadas à função basicFetch, uma para cada gênero: Ação, Comédia e Romance.</p>
<p>Cada gênero possui as propriedades slug (um identificador único para o gênero, tipo id), title (o título do gênero) e items (os filmes do gênero obtidos através da API).</p>
<p>Exportação da função getHomeList: Exporta a função getHomeList como a exportação padrão, isso significa que ao importar esse arquivo em outro local a função getHomeList estará disponível como default.</p>


------------------------------
<h3>Dentro da pasta src/components:</h3>

<h4>MovieRow:</h4>
<p>Esse componente mostra uma lista de filmes em linhas, cada linha representa um gênero de filme.</p>
<p>Dentro do componente MoviesRow, é definido um estado list para armazenar a lista de filmes que será obtida através da API. A função useState é usada para inicializar o estado com um array vazio. Depois é usado useEffect para carregar a lista de filmes assim que o componente for montado.</p>
<p>Dentro do useEffect é definida uma função assíncrona loadAll que faz a chamada da função getHomeList do componente Tmdb para ter a lista de filmes.</p>
<p>A lista de filmes obtida é armazenada no estado list através do setList.</p>
<p>Renderização: O componente MoviesRow renderiza tela que inclui um título "Nossos filmes" e 3 listas de filmes dividida por gênero.</p>
<p>O list.map é utilizado para percorrer os itens da lista e renderizar um componente View para cada filme.</p>
<p>Cada item da lista contém um título do gênero (movie.title) e um componente MovieDetails, que recebe a lista de filmes (movie.items).</p><br><br>



<h4>MovieDetails:</h4>
<p>Esse componente renderiza os detalhes de um filme. Exibe uma lista horizontal de filmes com seus respectivos cards tendo título, imagem e um botão para adicionar ou remover o filme.</p>

<p>Declaração do MovieDetails: É declarado um componente de função MovieDetails, que recebe a propriedade movies tendo a lista de filmes para serem exibidos.</p>
<p>Acesso ao contexto global e navegação: Dentro do componente MovieDetails, são utilizados os hooks useGlobalContext e useNavigation para acessar o contexto global e o objeto de navegação.</p>
<p>Manipulação de adicionar e remover filmes: O componente MovieDetails define a função handleAddToCart que chama a função handleAddItem do contexto global para adicionar ou remover um filme do carrinho.</p>

<p>O movies.results.map é utilizada para percorrer os filmes e renderizar um card para cada filme.</p>
<p>Dentro do card, é exibida a imagem do filme utilizando a propriedade poster_path.</p>
<p>O título do filme é exibido com um limite de 25 caracteres usando a função substring para evitar que o título ocupe muito espaço.</p>
<p>O botão de adicionar/remover que chama a função handleAddToCart ao ser pressionado. O ícone mostrado no botão e o texto variam depende se o filme já foi adicionado ou não utilizando a função isMovieAdded do contexto global.</p><br><br>



<h4>Navbar:</h4>
<p>É responsável por mostrar a barra de navegação, ela pode exibir um logotipo na esquerda e um ícone de carrinho de compras na direita.</p>

<p>Definição dos tipos de navegação: São definidos os tipos para a navegação da barra de navegação utilizando o tipo StackNavigationProp.</p>
<p>Const statusBarHeight: É definida uma constante que representa a altura da barra de status no dispositivo levando em consideração se a altura é fornecida pela função StatusBar.currentHeight ou definindo um valor padrão de 60.</p>
<p>É declarada uma função Navbar que recebe a propriedade navigation e uma propriedade opcional showLogo (padrão como true).</p>

<p>O botão do carrinho de compras tem a função navigation.navigate que é chamada ao pressionar o botão para navegar para a tela "ShoppingCart".</p>
<p>Se a propriedade showLogo for definida como false, o botão de voltar será renderizado em vez do logotipo. Esse botão chama a função navigation.goBack para voltar à tela anterior.(ela é true quando está na ListMovie e false quando está no ShoppingCart)</p>


-------------------------------
<h3>Dentro da pasta src/pages:</h3>

<h4>Home:</h4>
<p>Ele exibe uma imagem de logotipo, um título de boas-vindas e um botão "Entrar" que leva à tela de listagem de filmes(ListMovies).</p>

<p>Definição dos tipos de navegação: São definidos os tipos para a navegação da tela inicial utilizando o tipo StackNavigationProp.</p>

<p>Componente Home: É declarada uma função Home que recebe a propriedade navigation para lidar com a navegação entre telas.</p>
<p>O botão "Entrar" tem a função navigation.navigate que é chamada ao pressionar o botão para navegar para a tela "ListMovies".</p><br><br>



<h4>ListMovies:</h4>
<p>Exibe a tela de listagem de filmes. A tela tem um container principal que tem um componente Navbar e um componente MoviesRow.</p>

<p>Definição dos tipos de navegação: São definidos os tipos para a navegação da tela de listagem de filmes utilizando o tipo StackNavigationProp.</p>
<p>Componente ListMovies: É declarada uma função de componente ListMovies que recebe a propriedade navigation para lidar com a navegação entre telas.</p><br><br>



<h4>ShoppingCart:</h4>
<p>Exibe a tela dos filmes adicionados ao carrinho e permite remover eles do carrinho.</p>

<p>Definição dos tipos de navegação: São definidos os tipos para a navegação da tela do carrinho de compras utilizando o tipo StackNavigationProp.</p>
<p>Componente ShoppingCart: É declarada uma função de componente ShoppingCart que recebe a propriedade navigation para lidar com a navegação entre telas.</p>

<p>Uso do contexto global: É utilizado o hook useGlobalContext para obter o estado addedMovies (filmes adicionados ao carrinho) e a função removeMovieFromCart (para remover um filme do carrinho).</p>
<p>Remoção de filmes: A função handleRemoveMovie é definida para remover um filme do carrinho chamando a função removeMovieFromCart.</p>

<p>Se houver filmes adicionados no carrinho (addedMovies.length > 0) os filmes são renderizados em uma lista. Caso contrário, é exibida a mensagem "Carrinho de compras vazio". </p>
<p>Cada filme é exibido com uma imagem, título e um ícone de remoção. Quando clicar no ícone de remoção, a função handleRemoveMovie é chamada para remover o filme do carrinho.</p>
