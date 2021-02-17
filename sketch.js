var brush
var clear
var title

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  
if(mouseIsPressed){
  if(mouseX <= 100){
    if(mouseY <= 100){
      brush = "blue"
    } else if(mouseY <= 200){
      brush = "red"
    }else if(mouseY <= 300){
      brush = "green"
    }else if(mouseY <= 400){
      brush = "yellow"
    }else if(mouseY <= 500){
      brush = "orange"
    }else if(mouseY <= 600){
      brush = "black"
    }else if(mouseY <= 700){
      brush = "white"
    }else if(mouseY <= 800){
      brush = "grey"
  }
}
stroke(brush)
line(mouseX, mouseY, pmouseX, pmouseY)
}

  fill("blue")
  rect(0, 0, 100, 100)

  fill("red")
  rect(0, 100, 100, 100)

  fill("green")
  rect(0, 200, 100, 100)

  fill("yellow")
  rect(0, 300, 100, 100)

  fill("orange")
  rect(0, 400, 100, 100)

  fill("black")
  rect(0, 500, 100, 100)

  fill("white")
  rect(0, 600, 100, 100)

  fill("grey")
  rect(0, 700, 100, 100)
  
  size1 = createButton("Small")
  size1.position(width - 100, 550)

  size2 = createButton("Medium")
  size2.position(width - 100, 600)

  size3 = createButton("Large")
  size3.position(width - 100, 650)

  size1.mousePressed(()=>{
    strokeWeight(5)
  })

  size2.mousePressed(()=>{
    strokeWeight(10)
  })

  size3.mousePressed(()=>{
    strokeWeight(15)
  })
Clear = createButton("CLEAR")
Clear.position(width - 100, 20)
Clear.style("width", "70px")
Clear.style("height", "70px")
Clear.mousePressed(()=>{
  clear()
})
title = createElement("h1", "Drawing Game")
title.position(width/2-80, 0)
title.style("text-decoration", "underline")
}
