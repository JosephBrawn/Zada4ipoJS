// сумма чисел от 1 до n
console.log('Zadanie#1');
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
     sum = sum + i 
}
console.log ('Сумма чисел от 1 до',n,'=',sum);
//----------------------------------------------------------
// Вывести факториал числа N
console.log('Zadanie#2');
let fuctorial = 1;
for ( let i = 1; i <= n; i++) {
    fuctorial = fuctorial * i 
}
console.log ('Факториал числа',n,'=',fuctorial);
//-----------------------------------------------------------
// Вывести четные и нечетные числа от 1 до 100
console.log('Zadanie#3');
let evenNum = 'Четные числа ';
let oddNum = 'Нечетные числа ';
for ( let i = 1; i <= 100; i++){ 
        if (i % 2 === 0 ){ 
                evenNum = evenNum + i + ' '
            }
        else {
            oddNum = oddNum + i  + ' '
        }
}
console.log (evenNum);
console.log (oddNum);
//------------------------------------------------------------
// Вывести проверку на простое число
console.log ('Zadanie#4');
let primeNum = 17;
let count = 0;
for (let j = 2; j <= primeNum/2; j++){ 
    if (primeNum % j === 0){ 
        count = count + 1
    }
}    
console.log(primeNum, count?'составное число':'простое число')
//-------------------------------------------------------------
//Вывести таблицу умножения для числа N
console.log ('Zadanide#5');
let theMultiplicationTable = 9;
let meter = 1;
for (let i = 1; i <= 10; i++){
    console.log(theMultiplicationTable,'*',i,'=',meter = i*theMultiplicationTable)
}
//--------------------------------------------------------------
//Вывести сумму цифр числа N
console.log ('Zadanie#6');
const numN = 11111;
let sumOfTheDigits = 0;
sumStr = numN.toString();
for (i = 0; i < sumStr.length; i++){
    sumOfTheDigits = sumOfTheDigits + Number(sumStr[i])
}
console.log('сумма цифр числа',numN,'равна',sumOfTheDigits)
//--------------------------------------------------------------
// Обратное число
console.log ('Zadanie#7');
const reverseNumber = 1144555213;
let newStr = '';
conStr = reverseNumber.toString();
l = conStr.length 
for (i=0; i<l; i++){
    (newStr = conStr[i] + newStr)
}
console.log('число, обратное',reverseNumber,'равно',Number(newStr))
//---------------------------------------------------------------
//Количество цифр в числе N
console.log ('Zadanie#8');
const countNum = 12345;
countStr = countNum.toString();
console.log('количество цифр в числе',countNum,'равно',countStr.length)
//----------------------------------------------------------------
// Проверка палиндрома
console.log ('Zadanie#9');
const palindromNum = 123321;
palindromStr = palindromNum.toString();
l = palindromStr.length;
let result = 0;
for (let i=0; i<l/2; i++){ 
    if (palindromStr[i] !== palindromStr[l-i-1]){ 
        result = result + 1
    }
}    
console.log(palindromNum,result?'не палиндром':'палиндром')
//----------------------------------------------------------------
// Сумма квадратов чисел от 1 до N
console.log ('Zadanie#10');
const numSqr = 3;
let sumSqr = 0;
let strSqr = '';
for (i=1; i<=numSqr; i++){
    sumSqr = sumSqr + i**2;
    strSqr = strSqr + i +'^2+';
}
 console.log (strSqr,'=',sumSqr)
 //-------------------------------------------------------------- 

