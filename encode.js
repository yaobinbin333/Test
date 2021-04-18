let url = "/Users/yaobinbin/Code/100 - Inbox/kkb-git/dd.txt"
console.log(encodeURI(url))

let birth = 200
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        console.log(b)
        var fn = function () {
            return new Date().getFullYear() - this.birth; // this指向window或undefined
        };
        return fn();
    }
};
let f = obj.getAge
console.log(f())
// obj.getAge()