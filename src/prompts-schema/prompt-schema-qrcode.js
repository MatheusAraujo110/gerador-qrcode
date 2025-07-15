import chalk from "chalk"

const prompotSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para geral o QR CODE")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo (1 -   NORMAL ou (2 - TERMINAL "),
        pattner: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        require: true
    }
]

export default prompotSchemaQRCode