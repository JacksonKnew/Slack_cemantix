import { serve } from "https://deno.land/std@0.119.0/http/server.ts";


async function handler(_req: Request): Promise<Response> {
  
    const url = "http://nlp.polytechnique.fr/similarityscore"
    const data = {
        "lang": "fr",
        "sim1": "papa",
        "sim2": "maman",
        "type": "General Word2Vec"
    }

    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    });
    const r_data = await response.json();
  
    return new Response(r_data.simscore);
}

serve(handler);

