const express =  require('express')
const app = express()

const { Configuration, OpenAIApi } = require("openai")

app.use(express.static('public'))

app.listen(5000, ()=> {
    console.log("Server is active")
})
const openai = new OpenAIApi(new Configuration({
    // replace your-api-key with your API key from ChatGPT
    apiKey: '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'
}))

app.post('/chat', async (req, res)=> {   
    try {
      const resp = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
          messages: [
            { role: "user", content: req.body.question}
          ]  
      })           
          
      res.status(200).json({message: resp.data.choices[0].message.content})
    } catch(e) {
        res.status(400).json({message: e.message})
    }
  })