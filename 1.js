function greet(lang) {

   return function(name) {
       console.log(lang + ' ' + name);
   }

}

var sayHi = greet('Hi');
sayHi('Tony');
