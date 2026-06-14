const product1 = {price: '10'};
const product2 = {price: 20};
const discount = 10;

// Konwersja Number, String i Boolean

if(isNaN(Number('20'))) // Sprawdzanie czy podana wartość jest liczbą
{
    console.log(`Chuj Ci w dupę`);
}
console.log(typeof product1.price)

const total = Number(product1.price) + product2.price;
const totalWithDiscount = total - discount;

console.log(`Cena przed zniżką  ${total} 
    Cena po zniżce ${totalWithDiscount}`);