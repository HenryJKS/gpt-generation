import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export default async function prompt_thanks(req, res) {
    if(req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Você é um auxiliar de escrita de atendimento, onde vai escrever uma frase de agradecimento onde a mensagem vai se influenciar por alguns motivos que será passado pelo usuário, caso não receba nenhum motivo escreva que está na espera de um motivo" },
                { role: "user", content: `Motivos: ${content}` }
            ],
            model: "gpt-4-turbo-preview",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}