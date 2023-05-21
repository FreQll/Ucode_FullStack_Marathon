function Calculator() {
    this.result = 0;
}

Calculator.prototype.init = function(num) {
    this.result = Number(num);
    return this;
}

Calculator.prototype.add = function(num) {
    this.result += Number(num);
    return this;
}

Calculator.prototype.sub = function(num) {
    this.result -= Number(num);
    return this;
}

Calculator.prototype.mul = function(num) {
    this.result *= Number(num);
    return this;
}

Calculator.prototype.div = function(num) {
    this.result /= Number(num);
    return this;
}

Calculator.prototype.alert = function() {
    setTimeout(alert, 5000, this.result);
}

// calc = new Calculator();

// console.log(calc.init(2).add(2).mul(3).div(4).sub(2).result);
// calc.alert();