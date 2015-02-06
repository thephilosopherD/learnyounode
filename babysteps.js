var arraylength = process.argv.length
var sum = 0

for (i = 2; i < arraylength; i++)
{
sum += +process.argv[i] //Also, Number(process.argv[i]); Either works.  
}

console.log(sum)

