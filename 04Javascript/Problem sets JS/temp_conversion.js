function celsiusTofahrenheit(num){
    return `${parseFloat(num * (9/5)+32).toFixed(1)}°F`
}
function fahrenheitTocelsius(num){
    return `${parseFloat((num-32)*(5/9)).toFixed(1)}°C`
}
console.log(celsiusTofahrenheit(32));
console.log(fahrenheitTocelsius(94));
