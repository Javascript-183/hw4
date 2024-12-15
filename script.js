//task 1
//შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

function findEveryThird(array) {
    for (let i = 0; i < 10; i++) {
        if ((i + 1) % 3 === 0) {
            document.write(array[i] + " ");
        }
    }
}

// let array = [1,2,3,4,5,6,7,8,9,10];
// findEveryThird(array);

// task2
//შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

function log10to1() {
    let i = 10;
    while (i > 0) {
        console.log(i)
        i--;
    }
}
// log10to1();

//task 3
//3.	მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

function removeBobWithLoop(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Bob") {
            array.splice(i, 1);
        }
    }
    return array;
}

function removeBobNoLoop(array) {
    let bobIndex = array.indexOf("Bob");
    if (bobIndex >= 0) {
        array.splice(bobIndex, 1);
    }
    return array;
}

// let namesArray = ['John', 'Nick', 'Bob', 'Mary', 'Sue', 'Ann'];

// console.log(removeBobWithLoop(namesArray));
// console.log(removeBobNoLoop(namesArray));

//task 4
//ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function numberPower(number, power) {
    let answer;
    if (typeof number != 'number' || typeof power != 'number') {
        answer = "please put in numbers";
    } else if (power % 1 != 0 || power < 0) {
        answer = "please put in whole positive number for power";
    } else if (power === 0) {
        answer = 1;
    } else {
        answer = 1;
        for (let i = 0; i < power; i++) {
            answer = answer * number;
        }
    }
    console.log(answer);
}
// numberPower(5 , 3);

// task 5
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

function numberChecker() {
    let i = 1;
    while (i < 101) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ' FizzBuzz');
        } else if (i % 3 === 0) {
            console.log(i + ' Fizz');
        } else if (i % 5 === 0) {
            console.log(i + ' Buzz');
        } else {
            console.log(i);
        }

        i++;
    }
}
// numberChecker();

// task 6
//შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120

function factorialCalculator(number) {
    let answer = number;
    if (typeof number != 'number') {
        answer = "please put in a number";
    } else {
        for (let i = 1; i < number; i++) {
            answer *= i;
        }
    }
    console.log(answer);
}
// factorialCalculator(5);

//task 7
//შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function capitalizeFirstLetter(string) {
    let answer;
    if (typeof string != 'string') {
        answer = "please put in a string";
    } else {
        answer = String(string).charAt(0).toUpperCase() + String(string).slice(1);
    }
    console.log(answer);
}
// capitalizeFirstLetter("javascript");

//task 8
//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function blankStringChecker(testString){
    let answer;
    if (typeof testString!= 'string') {
        answer = "please put in a string";
    } else if(testString.trim().length === 0){
        answer = "this string is blank";
    }else{
        answer = "this string is NOT blank";
    }
    console.log(answer);
}
// blankStringChecker("     ");

//task 9
//შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(testString){
    let array = testString.split(" ");
    for(let i = 0; i < array.length; i++){
        if(array[i].charAt(array[i].length -1) === ","){
            array[i] = array[i].slice(0, -1);
        }
    }
    console.log(array);
}
// stringToArray("Hello, World");

// task 10
//შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

function emailProtection(email) {
    let length = email.length;
    let protectedEmail = email.split("");
    
    for (let i = 0; i < length; i++) {
        if (protectedEmail[i] === "@") {
            break;
        } else if (protectedEmail[i] === "." && protectedEmail[i + 1] !== "@") {
            protectedEmail[i + 1] = ".";
        }
    }

    let result = protectedEmail.join("");  
    console.log(result);
}
// emailProtection("beqa.beqauri@gmail.com");

//task 11
//შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

function findLongestWord(string){
    let stringArray = string.split(" ");
    let length = stringArray.length;
    let result = stringArray[0];
    let compLen = result.length;

    for (let i = 1; i < length; i++) {
        let wordLen = stringArray[i].length;

        if (wordLen > compLen) {
            result = stringArray[i];
            compLen = wordLen;
        }
    }

    let finalResult = [];
    for (let i = 0; i < length; i++) {
        let len = stringArray[i].length;
        if (len === compLen) {
            finalResult.push(stringArray[i]);
        }
    }

    console.log(finalResult);
}
// findLongestWord("Lorem ipsum dolor sit amet consectetur adipisicing elit");

//task 12
//შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით

function calculator(number1, number2){
    return {
        num1: number1,
        num2: number2,
        add: function() {
            return this.num1 + this.num2;
        },
        
        subtract: function() {
            return this.num1 - this.num2;
        },
        
        multiply: function() {
            return this.num1 * this.num2;
        },
        
        divide: function() {
            if (this.num2 === 0) {
                return "Division by 0 is not allowed";
            } else {
                return this.num1 / this.num2;
            }
        }

    }
}
// let calc = calculator(10, 5);
// console.log(calc.add());
// console.log(calc.subtract());
// console.log(calc.multiply());
// console.log(calc.divide()); 

//this-is gareshe:)
function calculator2(number1, number2) {
    return {
        num1: number1,
        num2: number2,
        add: number1 + number2,
        subtract: number1 - number2,
        multiply: number1 * number2,
        divide: number2 === 0 ? "Division by 0 is not allowed" : number1 / number2
    };
}
// console.log(calculator2(10, 5));
