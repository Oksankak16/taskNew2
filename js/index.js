// for (let i=100; i>=0; i--){
//     if(i%2===0 && i%10===0){document.write(i+'<br>')}
//     else{}
// // document.write(i+'<br>');
// }
// let i=0;
// while(i<100){
//     document.write(i+'<br>');
//     i++;
// }
// let i=0;
// do{
// document.write(i+'<br>');
//     i++;
// // }while(i<100)
// let num=parseFloat(promt('Enter a number'));
// while(Number.isNan(num)){
//     alert('You entered not a number!');
//     num=parseFloat(promt('Enter a number'));
// }
let products =['Teslax', 'BMW', 'Tesla S'];
products[3]='Tesla Y';
// products[4]='ZAZ';
products.push('Chevy', 'ZAZ');
console.log(products.length);
products.push('lada');
products[7]="BMW5";
console.log(products.length);
products[10]="Toyota";
for (let i=0; i<=products.length; i++)
{
    if (products[i]!==undefined)
{console.log(products[i])}
}
products.forEach(function(element){
    console.log(element);
});
products.forEach(el=>console.log(el) );


