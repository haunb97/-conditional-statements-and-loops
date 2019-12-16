var count = 50;
if (count > 0) {
    count--;
    // console.log(count)
}
else {
    count = 0;
}
console.log(count);
console.log('for loop');
var keys = 'abcdef';
for (var idx_1 = 0; idx_1 < keys.length; ++idx_1) {
    console.log(keys[idx_1]);
}
console.log(("while loop"));
var id = 0;
while (id < keys.length) {
    console.log(keys[id]);
    ++id;
}
console.log("do-while loop");
var idx = 0;
do {
    console.log(keys[idx]);
    ++idx;
} while (idx < keys.length);
console.log("for-of loop");
for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var item = keys_1[_i];
    console.log(item);
}
console.log("for-in loop");
var user = {
    name: 'Bob',
    age: 55
};
for (var key in user) {
    console.log(key + ": " + user[key]);
}
