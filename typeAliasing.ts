type User ={
    name:string ,
    email: string ,
    isActive: boolean
}

function createUser(user: User){
   console.log(user)
}
createUser({
    name:'dhatrish',
    email:'dhatrish@gmail.com',
    isActive:true
})

type mongoUser = {
    readonly _id: string,
    name: string ,
    email: string ,
    isActive: boolean,
    credCardDetails?:number
}

let user:mongoUser ={
    _id: '2345',
    name:'dhatrish',
    email:'d@d.com',
    isActive:true
}


export {}