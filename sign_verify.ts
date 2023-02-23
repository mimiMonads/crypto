
import signer from "https://deno.land/x/endofunctor@v0.0.2.1/components/signer/signer.ts";
import { SignVerifyOptions } from "https://deno.land/x/endofunctor@v0.0.2.1/components/signer/types.ts";
import verifier from "https://deno.land/x/endofunctor@v0.0.2.1/components/signer/verifier.ts";
import arrayOptions from "./arrayOptions.ts"

((a:SignVerifyOptions[])=>
  a.forEach( async x => {
    
    const  sign = await signer(x),
    string = Array.from( {length: x.size ?? 8}, () => "x").join(""),
    verify = await verifier(x),
    token = sign(string);

    let i = 0 
    const t1 = performance.now();

    while(i < 5_000_000){
       void verify(token)
      i++
    }
    const t2 = performance.now();
    console.log("Signs per second on "  + x.size + " " + "sequence " + x.sequence + " :" + ((5_000_000 / (t2- t1)* 1000).toFixed(0)));

  }))(arrayOptions);
