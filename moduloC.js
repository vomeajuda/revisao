const trocarValores = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;

    return [a, b];
}
export default trocarValores;