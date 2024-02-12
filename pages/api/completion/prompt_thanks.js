import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export default async function prompt_thanks(req, res) {
    if(req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Você atua como um assistente de redação especializado, cuja tarefa é compor uma mensagem de agradecimento personalizada. A mensagem será moldada com base em vários motivos que serão fornecidos pelo usuário, com limite de até 50 caracteres. No entanto, se nenhum motivo específico for fornecido, sua resposta padrão deve ser: ‘Estou aguardando a indicação de um motivo específico para personalizar a mensagem de agradecimento.’" },
                { role: "user", content: `Motivos: ${content}` }
            ],
            model: "gpt-4-turbo-preview",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}