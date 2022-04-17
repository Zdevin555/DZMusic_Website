/**
 * 1.指定路径别名，需要先导入路径模块，该模块是node自带可直接使用。
 * 2.path模块中resolve方法可以实现路径拼接
 * 3.自定义一个resolve变量，该变量接收一个箭头函数，参数dir是当前
 * 项目需要指定别名的文件的相对路径
 * 
*/
const path = require("path");
const resolve = dir => path.resolve(__dirname,dir);
module.exports = {
    webpack: {
        alias: {   
            "@":resolve("src"),
            "components":resolve("src/components")
        }
    }
}