const arr = [1,3,2,2,4] 

function test (a){
    const output = []
    a.forEach(element => {
        if(a.filter((item) => item === element).length > 1){
            return
        }

        output.push(element)
    });

    return output
}


console.log(test(arr))