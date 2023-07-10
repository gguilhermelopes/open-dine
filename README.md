# Open Dine


![GitHub last commit](https://img.shields.io/github/last-commit/gguilhermelopes/open-dine)
![GitHub language count](https://img.shields.io/github/languages/count/gguilhermelopes/open-dine)
![Github repo size](https://img.shields.io/github/repo-size/gguilhermelopes/open-dine)
![Github stars](https://img.shields.io/github/stars/gguilhermelopes/open-dine?style=social)

![Capa do Projeto](https://raw.githubusercontent.com/gguilhermelopes/open-dine/main/docs/readme-cover.jpg)

> Projeto, feito em Next, de um aplicativo web para um sistema de disponibilidade e agendamento de mesas em restaurantes. Também conta com sistema de reviews e notas.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes dependências instaladas:

- Verifique se você possui o `node` instalado em sua máquina. Se não tiver, você pode baixar o `node` [aqui](https://nodejs.org/en).

## Como executar o projeto

Siga as etapas abaixo para executar o projeto em sua máquina local:

Execute os seguintes comandos a partir da pasta raiz do projeto:


### Clone este repositório

```bash
git clone https://github.com/gguilhermelopes/open-dine
```

### Instale as dependências

```bash
npm install
```

### Defina as variáveis de ambiente

Defina um arquivo .env na pasta raiz do projeto. Nesse arquivo é definida a string de conexão do banco de dados e a string secreta JWT. Mais informações na documentação do [Prisma](https://www.prisma.io/docs/reference/database-reference/connection-urls) (ORM utilizado) e do [JWT](https://jwt.io/introduction). Abaixo exemplo de utilização. Caso queira contribuir para o projeto, entre em contato comigo.

```
DATABASE_URL="postgres://postgres:supabase.co:/postgres"
JWT_SECRET="980fre8w90enfr0238sdfsjdhyfnkjhjkhpepola,smnhdsjks,ni@&¨&*¨&*#*(@#*()@*()))))"
```

### Execute o Projeto

```bash
npm run dev
```
## Como contribuir

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Criar a solicitação de pull.

Como alternativa, consulte a documentação do GitHub sobre [como criar uma solicitação de pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


[⬆ Voltar ao topo](#título)
