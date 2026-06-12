// This Logic is False
/*
    if(condition){
        break;
    }
*/

// Using Break Keyword

console.log("Using Break Keyword");

for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(i==j)
        {
            break;
        }
        console.log(i,j);
    }
}
console.log("\n");
// Output (i == j)
// 1 0
// 2 0
// 2 1

for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(i==1)
        {
            break;
        }
        console.log(i,j);
    }
}
console.log("\n");
// Output (i == 1)
// 0 0
// 0 1
// 0 2
// 2 0
// 2 1
// 2 2


for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(j==1)
        {
            break;
        }
        console.log(i,j);
    }
}
console.log("\n");
// Output (j == 1)
// 0 0
// 1 0
// 2 0


// Using Continue Keyword

console.log("Using Continue Keyword");

for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(i==j)
        {
            continue;
        }
        console.log(i,j);
    }
}
console.log("\n");
// Output (i == j)
// 0 1
// 0 2
// 1 0
// 1 2
// 2 0
// 2 1


for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(i==1)
        {
            continue;
        }
        console.log(i,j);
    }
}
console.log("\n");
// Output (i == 1)
// 0 0
// 0 1
// 0 2
// 2 0
// 2 1
// 2 2

for(let i=0; i<3; i++)
{
    for(let j=0; j<3; j++)
    {
        if(j==1)
        {
            continue;
        }
        console.log(i,j);
    }
}
console.log("\n");
// Output (i == 1)
// 0 0
// 0 2
// 1 0
// 1 2
// 2 0
// 2 2