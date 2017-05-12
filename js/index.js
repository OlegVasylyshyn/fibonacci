function print (message) {
    document.write(message + '<br>');
}

function getNumber (message) {
    while(true){
        var number = Number(prompt(message));    
        if(!number || isNaN(number)) continue;
        return number;
    }
}

function fibonacciR (n){
    return n <= 2 ? 1 : fibonacciR(n -1) + fibonacciR(n - 2);
}

function fibonacciC (n){
    if(n <= 2) return 1;

    var f1 = 1;
    var f2 = 1;
    
    while(n-- > 2){
        var f = f1 + f2;
        f1 = f2;
        f2 = f;
    }
    
    return f;
}

var num = getNumber('Enter number');
var fR = fibonacciR(num);
var fC = fibonacciC(num);

print('F (recursive) = ' + fR);
print('F (iterate) = ' + fC);