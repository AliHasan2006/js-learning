const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const newMap = new Map()
newMap.set('IN', "India")
newMap.set('USA', "United States of America")
newMap.set('Fr', "France")
newMap.set('IR', "Iran")
console.log(newMap);


for (const key in newMap) {
    console.log(key);
}

