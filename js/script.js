"use strict";

{  
    // Task 1

    const calcResult = (a, b, c) => (a - b) / c;
    
    console.log(calcResult(10, 2, 2));
}

{
    // Task 2
    console.log("\n");

    function calcResult(a) {

        const square = Math.pow(a, 2);
        const cube = Math.pow(a, 3);
        return `Квадрат числа = ${square}, Куб числа = ${cube}`;
    }
    console.log(calcResult(456));
}

{
    // Task 3
    console.log("\n");

    const min = (a, b) => a < b ? a : b;
    console.log(`Наименьшее число = ${min(46, 33)}`);

    const max = (a, b) => a > b ? a : b;
    console.log(`Наибольшее число = ${max(46, 33)}`);

}

{
    // Task 4
    console.log("\n");

    const minNumber = +prompt("Введите число:");
    const maxNumber = +prompt("Введите число:");
    
    function getArray(a, b) {
        let array = [];

        for (let i = a; i <= b; i++) {
            array.push(i);
        }
        return array;
    }
    
    function showArray(array) {
        console.log(array);
    }

    const array = getArray(minNumber, maxNumber);
    showArray(array);

}

{
    // Task 5
    console.log("\n");

    const isEven = (even) => even % 2 === 0;
    console.log(isEven(167));


    // Task 6 
    console.log("\n");

    const array = [1, 6, 9, 10, -6];


    function getArray(arr) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            const isEvenItem = isEven(item);
            if (isEvenItem) {
                result.push(item);
            }
        }
        return result;
    }
    
    console.log(getArray(array));
}

{
    // Task 7
    console.log("\n");

    function showPyramid(count, symbol) {
        for (let i = 1; i <= count; i++) {
            const char = symbol ?? i.toString();
            let str = "";
            while (str.length < i) {
                str += char;
            }
            // const str = char.repeat(i);
            console.log(str);
        }

    }
    showPyramid(9);
    showPyramid(9, "*");
    
}

{
    // Task 8

    console.log("\n");

    function drawLine(row, i) {
        let str = "";
        for (let j = 0; j < row * 2 - 1; j++) {
            if (j === row + i - 1) {
                break;
            }
            if (j < row - i) {
                str += " ";
            } else {
                str += "*";
            }
        }
        console.log(str);
    }

    function designPyramid(row) {
        for (let i = 1; i <= row; i++) {
            drawLine(row, i);
        }
    }

    function designInversePyramid(row) {
        for (let i = row; i >= 1; i--) {
            drawLine(row, i);
        }
    }

    designPyramid(5);
    console.log("\n");
    designInversePyramid(5);
}

{
    // Task 9
    console.log("\n");

    function getArray() {
        const arr = [0, 1];
        while (true) {
            const prevNum1 = arr[arr.length - 1];
            const prevNum2 = arr[arr.length - 2];
            const num = prevNum1 + prevNum2;
            if (num > 1000) {
                break;
            }
            arr.push(num);  
        }
        return arr;
        
    }

    console.log(getArray());

}

{
    // Task 10
    console.log("\n");

    function getSum(value) {
        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            sum += +value[i];
        }
        if (sum > 9) {
            return getSum((sum.toString()));
        }
        return sum;
    }

    console.log(getSum(prompt("Введите число:")));
    
}

{
    // Task 11
    console.log("\n");

    let arr = [9, 2, 7, 8, 12, 10];

    function getArray(array) {
        if (array.length === 0) {
            return;
        }
        console.log(array[0]);
        const newArray = array.slice(1);
        getArray(newArray);
    }

    getArray(arr);

}

{
    // Task 12
    console.log("\n");

    function showInfo(name, group) {
        let arr = ["Домашняя работа: «Функции»", `Выполнил: студент гр. ${group}`, name];
        let longString = 0;

        for(let value of arr) {
            if(value.length > longString) {
                longString = value.length;
            }
        }

        for(let i = 0; i < arr.length; i++) {
            const countRepeat = longString - arr[i].length;

            arr[i] = `* ${arr[i]}${" ".repeat(countRepeat)} *`;
        }

        arr.push("*".repeat(longString + 4));
        arr.unshift("*".repeat(longString + 4));

        for(let value of arr) {
            console.log(value);
        }
    }

    showInfo("Иванов Иван Иванович", "W4017");
    
}
