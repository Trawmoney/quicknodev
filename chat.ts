import { OpenAI } from 'openai'

const fireworks = new OpenAI({baseURL: 'https://api.fireworks.ai/inference/v1', apiKey: process.env.OPENAI_API_KEY!})

// Request the Fireworks API for the response
async function start() {
  const response = await fireworks.chat.completions.create({
    model: accounts/fireworks/models/${model.name},
    stream: true,
    promptOrMessages: messages,
    max_tokens: 1000,
    temperature: 0.75,
    top_p: 1,
  })

  const result = await response.json();
  const completion = result.choices[0].message.content
  console.log(completion)
}

start()
