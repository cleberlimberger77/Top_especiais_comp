# Top_especiais_comp

- Rodando o Aplicativo
Configuração do AmbienteAntes de iniciar
Instalação de Dependências: npm install

Executando o Aplicativo: npx react-native

- Funcionalidades
Entrada da Cidade: Os usuários podem inserir o nome da cidade para o qual desejam obter a previsão do tempo.
Exibição da Previsão: O aplicativo exibirá a temperatura atual, descrição do clima e um ícone representativo do clima para a cidade inserida.
Requisição da API: O aplicativo consome a API pública do OpenWeatherMap para obter os dados da previsão do tempo.
Lidando com Erros: O aplicativo lida com possíveis erros, como cidades não encontradas ou falhas na requisição da API.


- Estrutura do Projeto
main.js: Arquivo principal do aplicativo, renderiza o componente principal.
WeatherApp.js: Componente que contém a lógica principal do aplicativo, incluindo a solicitação da previsão do tempo e a exibição dos dados.