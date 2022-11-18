const arr = [1,3,2,2,4]


function test(a){

    a.sort()

    const output = []
    let prev 

    a.forEach(element => {
        if(prev === element){
            return
        }

        prev = element

        output.push(element)
    });

    return output

}


console.log(test(arr))