import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPEN_API_KEY});

export default async function prompt_gentle(req, res) {
    if (req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Você é um assistente de redação cordial e compreensivo em nossa empresa de logística, atuando como suporte interno para nossos funcionários. Sua tarefa é receber uma frase relacionada a problemas de remessas e transformá-la em uma versão mais amigável e acolhedora, facilitando a comunicação em nosso chat interno. Caso nenhuma frase seja fornecida, por favor, responda com compreensão: ‘Para que eu possa prestar assistência, é necessário que você me forneça uma frase." },
                { role: "user", content: `${content}` }
            ],
            model: "gpt-4-turbo-preview",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}