
const draw = (canvas) => {
    let context = canvas.getContext("2d");
    context.lineWidth = window.innerWidth * (0.011 / 3);
    context.strokeStyle = "white"

    const width = window.innerWidth * (0.10 / 3);
    const height = window.innerWidth * (0.10 / 3);
    const gap = window.window.innerWidth * (0.03 / 3);
    let x;
    let y;

    const off = window.innerWidth * (0.02 / 3);

    let objectsColumn = (wWidth / (width + gap));
    let objectsRow = (wHeight / (height + gap));
    console.log({ objectsRow }, { objectsColumn });

    for (let i = 0; i < objectsColumn; i++) {
        for (let j = 0; j < objectsRow; j++) {
            x = wWidth * Math.random() + (width + gap) * i;
            y = wHeight * Math.random() + (height + gap) * j;

            context.beginPath();
            context.rect(x, y, width, height);
            context.stroke();

            if (Math.random() > 0.5) {
                context.beginPath();
                context.rect(x + off / 2, y + off / 2, width - off, height - off);
                context.stroke();
            }
        }
    }

}


const canvas = document.querySelector("canvas");
const cardImage = document.querySelector(".card-image");


let wWidth = window.innerWidth;
let wHeight = window.innerHeight;

console.log({ wWidth });
console.log({ wHeight });

canvas.width = wWidth;
canvas.height = wHeight;

draw(canvas);

cardImage.addEventListener('mouseover', () => {
    canvas.style.opacity = 1;
    console.log("over")
})

cardImage.addEventListener('mouseout', () => {
    canvas.style.opacity = 0;
    console.log("out")
})

window.addEventListener("resize", () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;
    draw(canvas)
})


