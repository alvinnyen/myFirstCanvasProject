const canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvasContext = canvas.getContext('2d');

// 0. test
// canvasContext.fillRect(100, 100, 100, 100);

// 1. drawing lines
canvasContext.lineWidth = 2; // default lineWidth is 1
canvasContext.strokeStyle = 'red'; // default strokeStyle is #000000

// 關於beginPath的詳解: https://www.cnblogs.com/xuehaoyue/p/6549682.html
canvasContext.beginPath();

// moveTo 和 lineTo 須成對使用
canvasContext.moveTo(50, 150); // 定位, not yet!!
canvasContext.lineTo(140,10); // 畫, but not yet!!

// canvasContext.moveTo(150, 300); // 定位, not yet!! , 繪製線的過程中如果移動定位，則closePath不會起作用
canvasContext.lineTo(140,30); // 畫, but not yet!!

canvasContext.closePath(); // 繪製回到圓點的線

canvasContext.stroke(); // 真正畫出來!!

