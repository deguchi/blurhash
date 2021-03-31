import decode from './blurhash/decode.ts'
import Canvas from './deno-canvas/mod.ts'

function getQueryString(url: string) {
  var params: any = {}
  url.substr(1).split('&').map(function(param) {
      var pairs = param.split('=');
      params[pairs[0]] = decodeURIComponent(pairs[1]);
  });
  return params;    
}

addEventListener("fetch", (event) => {
  const parsedUrl = new URL(event.request.url)
  const params = getQueryString(parsedUrl.search)

  console.log(params.blurhash)
  const blurhash = params.blurhash ? String(params.blurhash) : "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
  console.log(blurhash)

  const width = params.width ? parseInt(params.width) : 200
  const height = params.height ? parseInt(params.height) : 200
  const canvas = Canvas.MakeCanvas(width, height);
  const ctx = canvas.getContext('2d');
  const pixels = decode(blurhash, width, height);
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);


  const response = new Response(canvas.toBuffer() , {
    headers: { "content-type": "image/jpeg" },
  });
  event.respondWith(response);
});
