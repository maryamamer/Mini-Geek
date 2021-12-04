
            function Rec() {
                let canvas = document.getElementById("canvas");
                let ChangeColor = document.getElementById("fill-color").value;
                let BorderColor = document.getElementById("stroke-color").value;
                const context = canvas.getContext("2d");
                context.rect(10, 10, 100, 50);
                context.fillStyle = ChangeColor;
                context.fill();
                context.lineWidth = 5;
                context.strokeStyle = BorderColor;
                context.stroke();

            }
            function Circle() {
                let canvas = document.getElementById("canvas");
                let ChangeColor = document.getElementById("fill-color").value;
                let BorderColor = document.getElementById("stroke-color").value;
                const context = canvas.getContext("2d");
                context.fillStyle = ChangeColor;
                context.fill();
                context.strokeStyle = BorderColor;
                context.stroke();
                context.beginPath();
                context.arc(300, 200, 50, 0, 2 * Math.PI);
                
            }
            function Line() {
                let canvas = document.getElementById("canvas");
                let ChangeColor = document.getElementById("fill-color").value;
                let BorderColor = document.getElementById("stroke-color").value;
                const context = canvas.getContext("2d");
                context.fillStyle = ChangeColor;
                context.fill();
                context.strokeStyle = BorderColor;
                context.moveTo(500, 50);
                context.lineTo(200, 50);
                context.stroke();
            }

            function Clearfun() {
                let canvas = document.getElementById("canvas");
                const context = canvas.getContext("2d");
                context.clearRect(0, 0, canvas.width, canvas.height);
            }


            //Paint Draw
            function PaintDraw()
            {
                /* window.addEventListener('load',()=>{
                    console.log("document loaded"); */
                  
                    const canvas = document.getElementById('canvas');
                    const ctx = canvas.getContext("2d");
                  
                    //resizing
                    /* canvas.height = window.innerHeight;
                    canvas.width = window.innerWidth; */
                  
                    //variables
                    let painting = false;
                  
                    //methods
                    function startPosition(e){
                      painting =true;
                      console.log("in progress...");
                  
                      //when click only
                      draw(e)
                    }
                  
                    function finishedPosition(){
                      painting =false;
                      console.log("end paint");
                  
                      //after start from new position
                      ctx.beginPath();
                    }
                  
                    function draw(e){
                      if(!painting) return;
                  
                      //style
                      let ChangeColor = document.getElementById("fill-color").value;
                      ctx.lineWidth = 10;
                      ctx.strokeStyle = ChangeColor;
                      ctx.lineCap = "round";
                  
                      ctx.lineTo(e.clientX, e.clientY);
                      ctx.stroke(); 
                  
                    }
                  
                    //listener
                    canvas.addEventListener('mousedown',startPosition);  
                    canvas.addEventListener('mouseup',finishedPosition);  
                    canvas.addEventListener('mousemove',draw);  
                  }