function addTwo(num: number):number{
    return num + 2 ;
    // return 'hello'
}
// do these in function as it is not good in interfering data types in functions ,whereas it is good in intervering datatypes in variables 
addTwo(5);

function returnVal (val:number):number|string{
      if(val < 5){
        return val;
      }
      return 'val should be less than 5'
}
returnVal(8)
function getUpperCase(val: string){
    return val.toUpperCase()
};

getUpperCase('dhatrish');

function registerUser(
    name:string,
    email:string,
    phone:number = 9660057922
):void{
    console.log(name,email,phone)
}


registerUser('dhatrish','dhatrish@gmail.com',9660057922)

// therefore mentions types for parameters in functions

registerUser('hello','hello@gmail.com')

export {}