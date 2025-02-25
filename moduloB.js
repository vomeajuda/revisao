export default function(fat) {
    for (let i = fat - 1; i > 0; i--){
        fat *= i;
    }
    return fat;
}