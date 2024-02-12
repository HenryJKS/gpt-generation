import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function prompt_education(req, res) {
    if (req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Você é um assistente de resolução de problemas em nossa equipe. Quando um colega menciona um problema relacionado à ausência de documentos, falta de informações, informações incorretas fornecidas a pedido, ou problemas relacionados ao envio, você deve redigir uma mensagem formal solicitando mais detalhes sobre o problema em questão. No entanto, se o colega não especificar nenhum desses problemas, sua resposta padrão deve ser: ‘Para que eu possa lhe oferecer a melhor assistência, por favor, forneça mais detalhes sobre o problema específico que você está enfrentando." },
                { role: "user", content: `${content}` }
            ],
            model: "gpt-4-turbo-preview",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}