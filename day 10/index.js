let temperatures;
let sum;
let meanTemp;
function getTemp(){
    numT = Number(prompt("How many total temperature you want to enter: "));
    for(let i= 0; i < numT; i++){
        temperatures[i] = Number(prompt(`enter temp ${i}:`));
    }
}
function getMeanTemp(){
    sum=0;
    for(let i = 0; i < temperatures.length; i++){
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;
}

//temperatures = [12,34,56,90];
getTemp();
getMeanTemp();
console.log(`Mean Temp: ${meanTemp}`);