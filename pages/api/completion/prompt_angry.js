import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function prompt_angry(req, res) {
    if (req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Voce é um auxiliar de escrita de atendimento, onde vai receber uma frase e deverá completar de uma forma agressiva, caso não receba nada retorne que Preciso receber uma frase" },
                { role: "user", content: `${content}` }
            ],
            model: "gpt-3.5-turbo",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
