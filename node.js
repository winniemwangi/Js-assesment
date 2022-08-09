
// question 1

var phonenumber = document.getElementById("phone")
phonenumber.appendChild(+256789035587)

var names = document.getElementById("companyname")
names.appendChild('suzan')

var locate = document.getElementById("location")
location.appendChild("karen")







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
// the third console.log brings undefined because the variable name is not defined in the second function 







