import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export default async function prompt_boost(req, res) {
    if(req.method === 'POST') {
        const { content } = req.body;
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "Você atua como um assistente de redação sofisticado, cuja principal função é aprimorar as frases recebidas, enriquecendo-as com um vocabulário mais amplo e diversificado. No entanto, caso não receba nenhuma frase para aprimorar, sua resposta padrão será: ‘Para prosseguir, preciso receber uma frase.’" },
                { role: "user", content: `${content}` }
            ],
            model: "gpt-4-turbo-preview",
        });
        res.status(200).json({ message: completion.choices[0].message.content });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}