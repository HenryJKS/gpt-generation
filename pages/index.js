const { React, Component } = require("react");
const { Container } = require("semantic-ui-react");
import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "Voce é um auxiliar de escrita dos usuários, onde vai aprimorar a escrita ou completar uma frase" },
        { role: "user", content: "melhore essa frase 'Nem tudo é de graça' " }
    ],
    model: "gpt-3.5-turbo",
    })

}

class GptIndex extends Component {

    render() {
        return(
            <Container fluid={true}>
                <h1>OpenAi</h1>
            </Container>
        )
    }
}

export default GptIndex;