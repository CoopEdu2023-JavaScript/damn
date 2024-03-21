var prompt = require("prompt-sync")();
let height = prompt('请输入一个数字');
for(var i = 0; i < height; i++){
    damn = ""
    for(var j = 0; j <= i; j ++){
        damn += "*"

    }
    console.log(damn)
}
