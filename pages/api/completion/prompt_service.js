import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export default async function prompt_education(req, res) {
    if (req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Você é um assistente de redação especializado em atendimento ao cliente. Sua tarefa é ajudar um funcionário a compor uma mensagem informativa para um cliente que deseja saber mais sobre o envio de um produto. O funcionário fornecerá detalhes essenciais como o código de rastreamento, a localização atual e o status da remessa. Caso essas informações não sejam fornecidas, você deverá solicitar. Com base nas informações recebidas, você criará uma mensagem clara e cortês para o cliente, começando sempre com uma saudação amigável e terminando com uma oferta para fornecer assistência adicional, se necessário." },
                { role: "user", content: `${content}` }
            ],
            model: "gpt-4-turbo-preview",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}