// 1. Сумма двух чисел и всех чисел между ними
function sumAll(arr) {
    const [min, max] = [Math.min(...arr), Math.max(...arr)];
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

// 2. Элементы, найденные только в одном массиве
function diffArray(arr1, arr2) {
    const uniqueArr1 = arr1.filter(item => !arr2.includes(item));
    const uniqueArr2 = arr2.filter(item => !arr1.includes(item));
    return uniqueArr1.concat(uniqueArr2);
}

// 3. Удаление элементов из массива
function removeFromArray(arr, ...args) {
    return arr.filter(item => !args.includes(item));
}

// 4. Поиск объектов с совпадающими парами
function whatIsInAName(collection, source) {
    const keys = Object.keys(source);
    return collection.filter(obj => 
        keys.every(key => obj[key] === source[key])
    );
}

// 5. Конвертация строки в spinal-case
function spinalCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // добавляем пробел перед заглавной буквой
        .replace(/s+/g, '-') // заменяем пробелы на дефисы
        .replace(/_/g, '-') // заменяем подчеркивания на дефисы
        .toLowerCase(); // приводим к нижнему регистру
}

// 6. Поиск и замена слова с сохранением регистра
function myReplace(str, before, after) {
    const isUpperCase = before[0] === before[0].toUpperCase();
    const newAfter = isUpperCase ? after.charAt(0).toUpperCase() + after.slice(1) : after;
    return str.replace(before, newAfter);
}

// 7. Поиск пропущенных букв
function fearNotLetter(str) {
    const start = str.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== start + i) {
            return String.fromCharCode(start + i);
        }
    }
    return undefined;
}

// 8. Уникальные значения из нескольких массивов
function uniteUnique(...arrays) {
    return [...new Set(arrays.flat())]; // объединяем и удаляем дубликаты
}

// 9. Замена символов на HTML код
function convertHTML(str) {
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };
    return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

// 10. Сумма всех простых чисел до n
function sumPrimes(num) {
    function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return n > 1;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
}

// 11. Удаление элементов массива до выполнения условия
function dropElements(arr, func) {
    const index = arr.findIndex(func);
    return index === -1 ? [] : arr.slice(index);
}

// 12. Преобразование вложенного массива в одномерный
function steamrollArray(arr) {
    return arr.flat(Infinity); // используем flat для развертывания массива
}

// 13. Суммирование двух аргументов с частичной применением
function addTogether() {
    const [first, second] = arguments;
    
    if (typeof first !== 'number') return undefined;
    
    if (second !== undefined) {
        return typeof second === 'number' ? first + second : undefined;
    }
    
    return function(secondArg) {
        return typeof secondArg === 'number' ? first + secondArg : undefined;
    };
}

// Примеры использования и вывод результатов в консоль

console.log("Сумма всех чисел от 1 до 4:", sumAll([1, 4])); // 10
console.log("Элементы, найденные только в одном массиве:", diffArray([1, 2, 3], [2, 3, 4])); // [1, 4]
console.log("Удаление элементов из массива:", removeFromArray([1, 2, 3, 4], 3, 2)); // [1, 4]
console.log("Поиск объектов с совпадающими парами:", whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }], { "a": 1 })); // [{ "a": 1 }]
console.log("Конвертация строки в spinal-case:", spinalCase("This Is Spinal Tap")); // "this-is-spinal-tap"
console.log("Поиск и замена слова с сохранением регистра:", myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")); // "A quick brown fox leaped over the lazy dog"
console.log("Поиск пропущенных букв:", fearNotLetter("abce")); // "d"
console.log("Уникальные значения из нескольких массивов:", uniteUnique([1, 2, 3], [5, 2, 1], [4])); // [1, 2, 3, 5, 4]
console.log("Замена символов на HTML код:", convertHTML("Dolce & Gabbana")); // "Dolce &amp; Gabbana"
console.log("Сумма всех простых чисел до n:", sumPrimes(10)); // 17
console.log("Удаление элементов массива до выполнения условия:", dropElements([1, 2, 3, 4], n => n >= 3)); // [3, 4]
console.log("Преобразование вложенного массива в одномерный:", steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log("Суммирование двух аргументов с частичной применением:", addTogether(2)(3)); // 5
