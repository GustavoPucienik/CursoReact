import './App.css';

//     ARRAYS

//map(): Cria um novo array ao chamar uma função para cada elemento do array original.
let originalArray = [1, 2, 3];
const newArray = originalArray.map((item) => item * 2);// multiplicados por 12
console.log(newArray); ; // Output: [2, 4, 6]


//filter(): Cria um novo array com todos os elementos que passam no teste fornecido por uma função.
originalArray = [1, 2, 3, 4, 5];
const filteredArray = originalArray.filter((item) => item % 2 === 0);//apenas impares
console.log(filteredArray); // Output: [2, 4]


//reduce(): Executa uma função em cada elemento do array, resultando em um único valor.
originalArray = [1, 2, 3, 4, 5];
const sum = originalArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


//forEach(): Executa uma função para cada elemento do array, sem criar um novo array.
originalArray = ['apple', 'banana', 'orange'];
originalArray.forEach((fruit) => console.log(fruit));// Output: apple, banana, orange (cada item impresso em uma nova linha)


//find(): Retorna o primeiro elemento do array que passa no teste fornecido por uma função.
originalArray = [1, 2, 3, 4, 5];
const foundItem = originalArray.find((item) => item > 3);
console.log(foundItem); // Output: 4


//sort(): Ordena os elementos do array de acordo com a função de comparação fornecida.
originalArray = [3, 1, 4, 2, 5];
originalArray.sort((a, b) => a - b);
console.log(originalArray); // Output: [1, 2, 3, 4, 5]


//slice(): Retorna uma cópia de uma parte do array, selecionada a partir do índice inicial até o índice final (não incluído).
originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);//Seleciona a partir do índice
console.log(slicedArray); // Output: [2, 3, 4]


//concat(): Concatena dois ou mais arrays.
let array1 = [1, 2, 3];
let array2 = [4, 5];
const concatenatedArray = array1.concat(array2);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5]


//indexOf(): Retorna o índice da primeira ocorrência de um elemento no array, ou -1 se não encontrado.
originalArray = [1, 2, 3, 4, 5];
let index = originalArray.indexOf(3);
console.log(index); // Output: 2


//includes(): Verifica se um elemento está presente no array, retornando true ou false.
const isIncluded = originalArray.includes(3);
console.log(isIncluded); // Output: true



//    STRINGS

//length: Retorna o tamanho da string.
let str = "Hello, world!";
console.log(str.length); // Output: 13


//toLowerCase(): Converte todos os caracteres da string para minúsculas.
const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); // Output: "hello, world!"


//toUpperCase(): Converte todos os caracteres da string para maiúsculas.
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Output: "HELLO, WORLD!"


//trim(): Remove espaços em branco no início e no final da string.
str = "   Hello, World!   ";
const trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, World!"


//split(): Divide a string em um array de substrings com base em um separador.
str = "apple,banana,orange";
const fruitsArray = str.split(",");
console.log(fruitsArray); // Output: ["apple", "banana", "orange"]

//substring(): Retorna uma parte da string, especificada pelos índices inicial e final.
str = "Hello, World!";
const substring = str.substring(0, 5);
console.log(substring); // Output: "Hello"


//indexOf(): Retorna o índice da primeira ocorrência de um valor na string ou -1 se não encontrado.
index = str.indexOf("World");
console.log(index); // Output: 7


//startsWith(): Verifica se a string começa com o valor especificado.
str = "Hello, World!";
const startsWithHello = str.startsWith("Hello");
console.log(startsWithHello); // Output: true


//endsWith(): Verifica se a string termina com o valor especificado.
str = "Hello, World!";
const endsWithWorld = str.endsWith("World!");
console.log(endsWithWorld); // Output: true


//replace(): Substitui um valor na string por outro valor.
str = "Hello, World!";
const replacedStr = str.replace("World", "Universe");
console.log(replacedStr); // Output: "Hello, Universe!"


function App() {
  return (
    <div className="App">
     <h1>Revendo metodos JS</h1>
    </div>
  );
}

export default App;
