const apiKey = "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";

fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "tngtech/deepseek-r1t2-chimera:free",
    "messages": [
      { "role": "user", "content": "What is the meaning of life?" }
    ]
  })
})
  .then(res => res.json())
  .then(data => {
    // Log the text content of the response
    console.log("Model response:");
    console.log(data.choices[0].message.content);
  })
  .catch(err => console.error(err));
