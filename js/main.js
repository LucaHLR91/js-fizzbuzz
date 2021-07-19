// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// scrivi un programma che stampi numeri da 1 a 100 
var iterazioni = 100;

for(i = 0; i < iterazioni; i++) {
    
    if (i % 15 == 0) {
        console.log('FizzBuzz');
    }else if (i % 3 == 0) {
        console.log('Fizz');
    }else if (i % 5 == 0) {
        console.log('Buzz');
    }else {
        console.log(i);
    }
}

