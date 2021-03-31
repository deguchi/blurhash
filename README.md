# blurhash


```
deno run --allow-net ./blurhash.ts
```

```
deployctl run --watch ./blurhash.ts
```


## blurhash typescript

https://github.com/woltapp/blurhash/tree/master/TypeScript



## trouble

deno/deployに載せたかったが、unkown error  
おそらくdeno-canvasが使っているfetch-base64が使っているDeno.readFileが、deployのruntimeに入ってないため

https://deno.com/deploy/docs/runtime-api

## Deno Documents

https://deno.land/manual@main/introduction


https://deno.com/deploy/docs


https://doc.deno.land/https/raw.githubusercontent.com/denoland/deno/main/cli/dts/lib.deno.unstable.d.ts