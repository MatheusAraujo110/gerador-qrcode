import chalk from "chalk"

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD: "),
        pattern: /^[1-2]+$/,  // O usuário só pode escolher [1 ou 2]
        message: chalk.red("Escolha apenas entre 1 e 2"),  // Se a pessoa digitar algum número não desejado mando esse error. 
        require: true
    }
]

export default promptSchemaMain