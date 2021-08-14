// export const Obj1 = {
//     Id: '1',
//     Name: 'Germany'
// }

  const Obj1 = {
     Id: '1',
    Name: 'Germany'
 }
 


const Obj2 = {
    Id:'2',
    Name:'Sweden'
}

// export {Obj2}

// export default (_input) =>{ return Math.sqrt(_input)};
export {
    Obj2 as default,
    Obj1
}
