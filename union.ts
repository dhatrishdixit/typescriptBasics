function myFun(val:string | number ):string | void{
    if(typeof val === 'string') return val.toLowerCase()
}

// string[] = array of strings
const arr : number[] = [1,2,3,4];
const arr2 : string[] = ['1','2','3'];
// const arr3 : string | number[] = ['1','2','3'];  in this data type is either a string or array of number
const arr3 :string[] | number[] = [1,2,3,4];
// either string array or number array 

// for having a mix of both of these 
const arr4 : (string | number)[] = [1,2,3,'4']