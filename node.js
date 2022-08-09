
// question 







// question 4
var myObject = {
    name: "Adalab",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();
// the third console.log brings undefined because the variable name is not defined in the second function scope






var fields = {
    document.addEventListener("DOMContentLoaded", function() {
        fields.firstName = document.getElementById('firstName');
        fields.lastName = document.getElementById('lastName');
        fields.email = document.getElementById('email');
        fields.address = document.getElementById('address');
       })
}
