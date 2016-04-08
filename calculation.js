// 解析算数表达式 求结果1123

function cal(str){
	var numArr = [],opArr = []
	for(var s in str){
		var tmp = str[s]
		// console.log(tmp)
		if (tmp=='+'||tmp=='-'||tmp=='*'||tmp=='/') {
			opArr.push(tmp)
		}else if(tmp=='('){

		}
		else if(tmp==')'){
			var num = Number(numArr.pop());
			var op = opArr.pop();
			// console.log(num,op)

			if (op=='+') num = Number(numArr.pop())+num
			if (op=='-') num = numArr.pop()-num
			if (op=='*') num = numArr.pop()*num
			if (op=='/') num = numArr.pop()/num
			numArr.push(num)
		}else{
			numArr.push(tmp)
		}
	}
	console.log(opArr)
	return numArr
}

console.log(cal('((1+(2*3)*(4+5)))'))