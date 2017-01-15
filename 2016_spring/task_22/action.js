var box1 = Array.prototype.slice.call(document.getElementsByClassName("box1"), 0); //将 nodelist 转化成 array
var box2 = Array.prototype.slice.call(document.getElementsByClassName("box2"), 0);
var box3 = Array.prototype.slice.call(document.getElementsByClassName("box3"), 0);
var box4 = Array.prototype.slice.call(document.getElementsByClassName("box4"), 0);
var allBoxes = box1.concat(box2).concat(box3).concat(box4); //按顺序存储结构存储的div数组
var array = []; //存放先序遍历后的div

function preOrderTraverse(x){
	array.push(allBoxes[x]);
	if (allBoxes[2 * x + 1]) preOrderTraverse(2 * x + 1);
	if (allBoxes[2 * x + 2]) preOrderTraverse(2 * x + 2);
}

function animation(){
	var i = 0;
	array[i].style.backgroundColor = "red";
	setTimeout(function(){
		if (i == array.length - 1){
			array[array.length - 1].style.backgroundColor = "white";
		} else {
			i++;
			console.log(i);
			array[i].style.backgroundColor = "red";
			array[i-1].style.backgroundColor = "white";
			setTimeout(arguments.callee, 500);
		}
	}, 500);
}

function zero(){
	array = [];
}

function init(){
	var btn = document.getElementById("inOrder");
	btn.addEventListener("click", function(){
		zero();
		preOrderTraverse(0);
		animation();
	}, false);
}

init();