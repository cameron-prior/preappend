var preappend = require("./");
//why use a test package from npm for your npm package when you can roll your own?
//like really don't do this stuff, like, ever
function testPreappend(s1, s2, expected) {
    var result = preappend(s1, s2);

    if (result === expected) {
        console.log(result + ": Yup");
    } else {
        console.log(result + ": Nope");
    }
}

testPreappend("pre", "append", "preappend");
testPreappend("fizz", "buzz", "fizzbuzz");
testPreappend("racecar", "racecar", "fail this");