// Zadanie pierwsze
/*Twoim zadaniem będzie stworzenie dwóch zmiennych z wartościami Hello oraz World, a następnie połączenie ich metodą inną niż wymienione powyżej.*/

const a = 'Hello';
const b = 'World';
const sayHello = (first, second) => console.log(`${first} ${second}`)
sayHello(a, b)

// Zadanie drugie
/*Stwórz funkcję multiply, która ma zwracać wynik działania operacji mnożenia dwóch wartości a i b. Możesz założyć, że jeśli użytkownik nie poda któregoś z parametrów, ma on zostać zastąpiony 1*/

const multiply = (first = 1, second = 1) => console.log(first * second);
multiply(6,)

// Zadanie trzecie
/*Napisz funkcję average, która obliczy średnią arytmetyczną wszystkich argumentów, które zostaną do niej przekazane. Załóż, że argumenty zawsze będą liczbami:
average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4
Skorzystaj z rest parameters! Funkcję stwórz za pomocą arrow function.*/

const average = (...args) => {
	let added = 0
	for (let i = 0; i < args.length; i++) {
		added += args[i];
	}
	return added / args.length
}
console.log(average(1, 3, 6, 6))

// Zadanie czwarte
/*Stwórz tablicę z ocenami const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1], a następnie w umiejętny sposób przekaż oceny do funkcji average tak, aby otrzymać wynik. Skorzystaj z operatora spread!*/

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades))


// Zadanie piąte
/*Podczas pracy nad projektem natknąłeś się na bardzo dziwną strukturę danych - [1, 4,'Iwona', false, 'Nowak']. Twoim zadaniem jest skorzystanie z destrukturyzacji w celu wyciągnięcia z tablicy zmiennych firstname oraz lastname.*/

const array = [1, 4,'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;
console.log(`${firstName} ${lastName}`);
