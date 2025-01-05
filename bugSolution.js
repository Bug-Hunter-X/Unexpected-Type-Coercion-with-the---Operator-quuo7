function foo(a,b){
  //Type checking and explicit conversion to numbers
  if(typeof a === 'string') a = parseInt(a);
  if(typeof b === 'string') b = parseInt(b);
  return a+b;
}
console.log(foo(1,2));//Expected output:3
console.log(foo(1,"2"));//Expected output:3
console.log(foo("1",2));//Expected output:3
console.log(foo("1","2"));//Expected output:3