const buff1 = Buffer.alloc(10)
console.log(buff1);
const buff2 = Buffer.alloc(10, 10)
buff2.write("interview")
console.log(buff2);