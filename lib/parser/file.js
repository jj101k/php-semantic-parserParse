import { Token } from "../lex"
import { ParserPHP } from "./php"

export class ParserFile {
    /**
     *
     * @param {Token[]} tokens
     */
    parse(tokens) {
        const nodes = []
        for(let i = 0; i < tokens.length; i++) {
            const t = tokens[i]
            if(t.type == "php") {
                const php = new ParserPHP()
                const consumed = php.parse(tokens.slice(i + 1))
                nodes.push(php)
                i += consumed
            } else {
                console.log(tokens.slice(i))
                throw new Error(`Unexpected node of type ${t.type}`)
            }
        }
        this.nodes = nodes
    }
}