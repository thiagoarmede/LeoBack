# (LeoBack) Back-end para leonardo

Esse Back-end é utilizado para prover uma api para o [Bot](https://github.com/UNEB-SI/LeoBot) e para o [Dashboard](https://github.com/UNEB-SI/LeoDash)

## arquivo de configuração
o arquivo de configuração deve ficarm no seguinte caminho `others/config.js`

eis a composição do arquivo
```
module.exports = {
    databaseURI: 'mongodb://username:password@host:port/database',
    apiPort: '80'
}
```


### Ambiente de desenvolvimento
* [VScode](https://github.com/Microsoft/vscode)  Visual Studio Code 
* [ARC](https://github.com/jarrodek/ChromeRestClient) Advanced Rest Client Application 

### Tecnologias utilizadas:

 * [NodeJS](https://github.com/nodejs/node)
 * [Express](https://github.com/expressjs/express/) Fast, unopinionated, minimalist web framework for node. 
 * [MongoDB](https://github.com/mongodb/mongo)
 * [Yarn](https://github.com/yarnpkg/yarn)
