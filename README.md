# nodets-canil

Projeto feito no modulo do curso Node = TypeScript

#### Pré-requisitos Globais

`npm init -y`
`tsc --init`
`npm install -g nodemon typescript ts-node`

### Instalação

`npm install express`
`npm install dotenv`
`npm install mustache-express`

### Dependencias Types Script

`npm install --save-dev @types/express @types/mustache-express @types/node`

### Alteração do arquivo tsconfig.json

`target:ES6`
`outDir ./dist`
`rootDir ./src`
`moduleResolution: node`

### Criar a pasta src com arquivo server.ts

### Script para Start do servidor

`"start-dev": "nodemon -e ts,json,mustache src/server.ts"`

### Comando para Iniciar servidor

`npm run start-dev`
