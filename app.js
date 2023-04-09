// პირველი დავალება
const numberArrays = [2,4,6,8,10,12];
let last = numberArrays[5];
numberArrays.pop();
numberArrays.unshift(last);
console.log(numberArrays);

// მეორე დავალება

const product = [
    {
        productTitle : 'ASUS zenbook',
        productPrice : '2999Gel'
    },
    {
        productTitle : 'ASUS TUF',
        productPrice : '3999Gel'
           
    },
    {
        productTitle : 'ASUS ROG',
        productPrice : '5999Gel'
   
    }
]

console.log(product);
// მესამე დავალება

const averageArray =[1,2,3,4,5];
let sum = averageArray[0] + averageArray[1] +  averageArray[2] + averageArray[3] + averageArray[4] ;
let averageOfArr = sum / averageArray.length
console.log(averageOfArr);

// მეოთხე დავალება 

const phone = {
    phoneName:'Samsung Galaxy S23 ultra',
    phoneDescription:'5G S918B/DS 12/512GB Cream',
    phonePrice:'3499',
    shopAddresses : ['Tsereteli av. N1','City Mall', 'K.Gamsakhurdia str. N14a'],
    phoneMemoryInGB:'512GB'
};

let buy = `Phone name is ${phone.phoneName},phone price is ${phone.phonePrice} gel and you can buy it at ${phone.shopAddresses[0]}`;

console.log(buy);
