import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export default async function prompt_boost(req, res) {
    if(req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Voce é um auxiliar de escrita de atendimento, onde vai melhorar a frase que receber acrescentado mais palavras, caso não receba nenhuma frase retorne que Preciso receber uma frase" },
                { role: "user", content: `${content}` }
            ],
            model: "gpt-3.5-turbo",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}