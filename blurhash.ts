import decode from './blurhash/decode.ts'
import Canvas from 'https://deno.land/x/canvas@v1.1.1/mod.ts'

// function getQueryString(url: string) {
//     var params: any = {}
//     url.substr(1).split('&').map(function(param) {
//         var pairs = param.split('=');
//         params[pairs[0]] = decodeURIComponent(pairs[1]);
//     });
//     return params;    
// }

// addEventListener("fetch", (event) => {
//     const parsedUrl = new URL(event.request.url)
//     const params = getQueryString(parsedUrl.search)

//     // const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 32, 32);

//     // const canvas = Canvas.MakeCanvas(200, 200);
//     // const ctx = canvas.getContext("2d");
//     // const imageData = ctx.createImageData(width, height);
//     // imageData.data.set(pixels);
//     // ctx.putImageData(iamageData, 0, 0);

//     const response = new Response(JSON.stringify(params), {
//       headers: { "content-type": "application/json; charset=utf-8" },
//     });
//     event.respondWith(response);
// });

import { serve } from "https://deno.land/std@0.89.0/http/server.ts";

const canvas = Canvas.MakeCanvas(200, 200);
const ctx = canvas.getContext('2d');


const width = 200
const height = 200
const pixels = decode("LEHV6nWB2yk8pyo0adR*.7kCMdnj", 200, 200);
const imageData = ctx.createImageData(width, height);
imageData.data.set(pixels);
ctx.putImageData(imageData, 0, 0);

const server = serve({ hostname: "0.0.0.0", port: 8080 });
console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);

for await (const request of server) {
  request.respond({ status: 200, body: canvas.toBuffer() });
}