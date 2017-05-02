// var names = ['Jakub', 'Zenon', 'Dawid'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name)=>{
//   console.log('arrow',name);
// });
//
// var returnMe = (name) => name+'!';
// console.log(returnMe("test"));

// var person = {
//   name: 'Jakub',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + " wita " + name);
//     })
//   }
// };
//
// person.greet();

function add(a, b){
  return a+b;
};

var addStatement = (a,b) => {
  console.log(a+b);
};

var addExpression = (a,b) => a+b;

console.log(add(1,2));
addStatement(11,11);
console.log(addExpression(10,10));
