// 1. Функция для вычисления факториала
function factorial(n) {
    if (n < 0) return undefined; // Факториал для отрицательных чисел не определен
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 2. Функция для нахождения длины самого длинного слова в строке
function longestWordLength(str) {
    const words = str.split(' ');
    let maxLength = 0;
    for (const word of words) {
        maxLength = Math.max(maxLength, word.length);
    }
    return maxLength;
}

// 3. Функция для нахождения наибольшего числа в каждом подмассиве
function maxInSubarrays(arrays) {
    return arrays.map(subArray => Math.max(...subArray));
}

// 4. Функция для обрезки строки с добавлением "..." в конце
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + '...';
    }
    return str;
}

// 5. Функция для форматирования строки
function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// 6. Функция для копирования элементов из одного массива в другой
function copyToArray(arr1, arr2, index) {
    const newArray = [...arr2]; // Копируем второй массив
    for (let i = 0; i < arr1.length; i++) {
        newArray[index + i] = arr1[i]; // Заполняем новый массив
    }
    return newArray;
}

// 7. Функция для удаления ложных значений из массива
function removeFalsyValues(arr) {
    return arr.filter(Boolean); // Используем filter с Boolean для удаления ложных значений
}

// 8. Функция для проверки, содержит ли первая строка все буквы второй
function containsAllLetters(arr) {
    const [str1, str2] = arr.map(s => s.toLowerCase());
    return str2.split('').every(char => str1.includes(char));
}

// 9. Функция для разбивки массива на группы
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

// 10. Рекурсивная функция для заполнения массива числами от p до 1
function fillArrayRecursively(p, current = []) {
    if (p < 1) return current;
    current.push(p);
    return fillArrayRecursively(p - 1, current);
}

// Примеры использования функций
console.log(factorial(5)); // 120
console.log(longestWordLength("Hello world!")); // 5
console.log(maxInSubarrays([[1, 2, 3], [4, 5], [6, 7, 8, 9]])); // [3, 5, 9]
console.log(truncateString("Hello, world!", 10)); // "Hello, ..."
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(copyToArray([2, 3], [4, 5], 1)); // [4, 2, 3, 5]
console.log(removeFalsyValues([0, 1, false, 2, '', 3])); // [1, 2, 3]
console.log(containsAllLetters(["hello", "oeh"])); // true
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(fillArrayRecursively(5)); // [5, 4, 3, 2, 1]
