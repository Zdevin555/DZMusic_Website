// function IsExactDivision(arg1,arg2){
//     if(typeof(arg1)!== 'number' || typeof(arg2)!== 'number' || arg1!==arg1 || arg2!==arg2){
//         console.log("not comparative");
//         return false;
//     }

// 	if(arg1<arg2){
// 		let flag=arg1;
// 		arg1=arg2;
// 		arg2=flag;
// 	};

// 	let t1=0,t2=0,r1=arg1,r2=arg2;
//     let arr1 = arg1.toString().split(".");
//     let arr2 = arg2.toString().split(".");
//     if(arr1.length>1){
//         r1=Number(arg1.toString().replace(".",""));
//         t1=arr1[1].length;
//     }
//     if(arr2.length>1){
//         r2=Number(arg2.toString().replace(".",""));
//         t2=arr2[1].length;
//     }
    
//     let times= (r1/r2)*Math.pow(10,t2-t1);
    
//     if (!(/(^[1-9]\d*$)/.test(times.toString()))) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

