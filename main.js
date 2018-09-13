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
canvasContext.beginPath(); // 每次呼叫，sub-path list 都會被重新設定 (以繪製新路徑/圖形)
// 通常緊接著的下一步都會是moveTo

// moveTo 和 lineTo 須成對使用
canvasContext.moveTo(50, 150); // 定位, not yet!!
canvasContext.lineTo(140,10); // 畫, but not yet!!

// canvasContext.moveTo(150, 300); // 定位, not yet!! , 繪製線的過程中如果移動定位，則closePath, fill不會起作用
canvasContext.lineTo(140,30); // 畫, but not yet!!

// closePath is [optional], 主要用以繪製現在所在點到原點的線以閉合圖形，如果圖形已經閉合或是只含一個點，這個方法不會有任何效果
// 另，當呼叫fill()，任何開放的圖形都會自動閉合，所以不需要再呼叫closePath()
canvasContext.closePath(); // 繪製回到圓點的線 

canvasContext.stroke(); // 真正畫出來!!
// 或可用 fill() 來填滿路徑所圍成的區塊以繪製圖型
// 當呼叫fill()，任何開放的圖形都會自動閉合，所以不需要再呼叫closePath()

// 2. drawing rect. // 直接繪製矩型，而非透過線條來繪製
// 不同於SVG，canvas只支援矩型的繪製
// fillRect(x, y, width, height): 填滿的矩型
// strokeRect(x, y, width, height): 邊框的矩型
// clearRect(x, y, width, height): 清除指定矩形區域內的內容

// 顏色的設定順序，沒特別設定就會跟著最近的那一個
canvasContext.fillStyle = 'rgba(255, 0, 0, 0.1)';
canvasContext.fillRect(25,25,100,100); // 粉色
canvasContext.fillStyle = 'blue';
canvasContext.fillRect(250,250,100,100); // 藍色
canvasContext.fillRect(125,125,100,100); // 藍色
