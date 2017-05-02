// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Wroclaw',function (err, temp) {
//   if (err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp)
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(29);
//       reject('City not found');
//     },1000)
//   });
// }
//
// getTempPromise('Wroclaw').then(function(temp){
//   console.log('promise success', temp)
// }, function(err){
//   console.log('promise error', err);
// });

if(typeof 7 == 'number')

function addPromise(a,b){
  return new Promise(function(resolve, reject){
    if(typeof a == 'number' && typeof b == 'number') resolve(a+b);
    reject('Enter a valid number');
  })
}

addPromise(20,21).then(
  function(sum){
  console.log(sum);
},
  function(err){
  console.log('Error', err);
}
)

addPromise(21,21).then(
  function(sum)
  {
    console.log(sum);
  },
  function(err)
  {
    console.log('Error', err);
  }
)
