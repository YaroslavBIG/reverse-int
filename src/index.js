module.exports = function reverse (n) {
    const absolute = Math.abs(n);
    return absolute.toString().split('').reverse().join('');
}
