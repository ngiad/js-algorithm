const arr = [1,3,2,2,4]

function test (a){

    const output = []
    
    a.forEach(element => {
        if(output.find((item) =>  item === element)){
            return
        }

        output.push(element)
    });

    return output
}

console.log(test(arr))