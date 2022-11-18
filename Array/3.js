const arr = [1,3,2,4,5,6]

function test (a){
    a.sort()

    const output = []

    for (let index = 0; index < a.length/2; index++) {
        output.push(a[index])
        output.push(a[(a.length -1) - index])
    }

    if(a.length%2 !== 0){
        output.splice(output.length - 1 ,1)
    }

    return output
}

console.log(test(arr))