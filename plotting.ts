import signer from "https://deno.land/x/endofunctor@v0.0.2.1/components/signer/verifier.ts";
import { SignVerifyOptions } from "https://deno.land/x/endofunctor@v0.0.2.1/components/signer/types.ts";
const eight_8 = {
    seed: "hello",
    size: 8,
    plotter: "SHA-1",
    sequence: 2
  } as SignVerifyOptions,
  sixteen_8 = {
    seed: "hello",
    size: 16,
    plotter: "SHA-1",
    sequence: 2
  } as SignVerifyOptions,
  twentyFour_8 = {
    seed: "hello",
    size: 24,
    plotter: "SHA-1",
    sequence: 2
  } as SignVerifyOptions
  , thirtyThree_8 = {
    seed: "hello",
    size: 32,
    plotter: "SHA-1",
    sequence: 2
  } as SignVerifyOptions
  
  
let i = 0 ,t1, t2;

i= 0 
t1 = performance.now();

while(i < 1000){
   void await signer(eight_8)
  i++
}
 t2 = performance.now();
console.log(" eight_8 takes :" + ((1_000_000 / (t2 - t1) )).toFixed(2)+ "  per second");

i= 0 
t1 = performance.now();

while(i < 1000){
   void await signer(sixteen_8)
  i++
}
 t2 = performance.now();
console.log(" sixteen_8 takes :"  + ((1_000_000 / (t2 - t1) )).toFixed(2)+ "  per second");

i= 0 
t1 = performance.now();

while(i < 1000){
   void await signer(twentyFour_8)
  i++
}
 t2 = performance.now();
console.log(" twentyFour_8 takes :"  + ((1_000_000 / (t2 - t1) )).toFixed(2)+ "  per second");


i= 0 
t1 = performance.now();

while(i < 1000){
   void await signer(thirtyThree_8)
  i++
}
 t2 = performance.now();
console.log(" thirtyThree_8 takes :"  + ((1_000_000 / (t2 - t1) )).toFixed(2)+ "  per second");