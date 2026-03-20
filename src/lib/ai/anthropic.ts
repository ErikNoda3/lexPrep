type AnthropicModel = string;

export async function callAnthropicMessages(prompt: string, model?: AnthropicModel) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY não configurada");
  }

  const anthopicModel =
    model ?? process.env.ANTHROPIC_MODEL ?? "claude-sonnet-4-20250514";

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: anthopicModel,
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Anthropic error: ${res.status} ${text}`);
  }

  const data = await res.json();
  const extracted = data?.content?.[0]?.text;
  if (typeof extracted !== "string") throw new Error("Resposta da IA inesperada");
  return extracted;
}

