function solve(arr, param1, param2) {


    let first = arr.indexOf(param1);
    let second = arr.indexOf(param2);

  
   arr = arr.slice(first, second + 1);
  
   return(arr);

}
console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'

));