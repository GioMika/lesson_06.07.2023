
let names = [
  {id: 1, name: 'Steven', salary: '5000'},
  {id: 2, name: 'Neena', salary: '10000'},
  {id: 3, name: 'John', salary: '4500'},
  {id: 4, name: 'Rogers', salary: '3400'},
  {id: 5, name: 'Cevin', salary: '500'},
  {id: 6, name: 'Alshey', salary: '1210'},
  {id: 7, name: 'Milki', salary: '110'},
  {id: 8, name: 'Polar', salary: '120'},
  {id: 9, name: 'Grindell', salary: '10'},
  ]
  

  // task 1



//   let resul = 0 ;
// for(let i = 0;i < names.length;i++){
// if(names[i].id % 2==1){
//   resul+=1
// }
// }

// console.log(resul);
// +++++++++++++++++++++++++++++++++++++++++++++

// task 2

// let resul = 0 ;
// for(let i = 0;i < names.length;i++){
// resul += +names[i].salary
// }
// console.log(resul);

// ++++++++++++++++++++++++++++++++++++++++++++++
//    task 3

// let resul = 0 ;
// for(let elem of names){
// if(elem.name.includes('e')){
// resul+=1
// }
// }
// console.log(resul);
// +++++++++++++++++++++++++++++++++++++++++++++++++++

// task 4
// Найдите запись, где зарплата будет не кратна 100

// let result = names.find((value) =>  value.salary % 100!==0)
// console.log(result);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// tesk5
// Найдите запись, где вычисляется квадратный корень у атрибута ID без остатка


// let result = names.find((value) =>  (value.id ** 0.5) % 1 ===0 )
// console.log(result);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// task 6 
// Найдите запись, где вычисляется квадратный корень у длины имени

// let result = names.find((value) =>  (value.name.length ** 0.5) % 1 ===0 )
// console.log(result);