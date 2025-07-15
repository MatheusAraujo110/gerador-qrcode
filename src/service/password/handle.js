import permittedCharacters from "./utils/permittedCharacters.js"

async function handle() {
    let characters = []
    let password = ""

    const passwordLength = process.env.PASSWORD_LENGTH
    characters = await permittedCharacters()

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);  // De tudo que tem dentro da characters[], pega e faz um sorteio.
        password += characters[index]  // Eu vou pegar do meu characters de um index aleatório.
    }

    return password
}

export default handle