import prompt from "prompt"
import prompotSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js"
import handle from "../qr-code/handle.js"

async function createQRCode() {
    prompt.get(prompotSchemaQRCode, handle)


    prompt.start
}

export default createQRCode