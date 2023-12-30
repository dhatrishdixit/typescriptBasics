const user = {
    name:'dhatrish',
    email:'dhatrish29@gmail.com',
    isLoggedIn :true
}

function createUser({
    name:string,
    isLoggedIn:boolean
}):void{
    // console.log(name,isLoggedIn)
}

function userResponse():{name:string,status:boolean}{
    return{
        name:'dhatrish',
        status:true
    }
}

createUser({
    name:'dhatrish',
    isLoggedIn:true
})



export {}