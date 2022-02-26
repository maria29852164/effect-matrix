const canvas = document.getElementById('matrix')
const ctx = canvas.getContext('2d')
canvas.width = document.body.offsetWidth;
const w = canvas.width
const h = canvas.height


let col = Math.floor( w / 20) + 1

let ypos =  Array(col).fill(0)
console.log (``)



const matrixEffect=()=>{
   	// Draw a semitransparent black rectangle on top of previous drawing
	ctx.fillStyle = '#0001';
	ctx.fillRect(0, 0, w, h);

	// Set color to green and font to 15pt monospace in the drawing context
	ctx.fillStyle = '#0f0';
	ctx.font = '20pt monospace';
     ypos.forEach((y,index)=>{
         const stringRandom = String.fromCharCode(Math.random() * 122 )
         const x =  index * 20 
         ctx.fillText(stringRandom , x , y)
         if ( y > 100 + Math.random() * 10000 ){
            ypos[index] = 0
         }else {
            ypos[index] = y + 20;
         }


     })

}


setInterval(matrixEffect, 50);