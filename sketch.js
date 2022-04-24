let p = { x: 0, y: 0 };

let _p = { x: 0, y: 0 };

let a = { x: 0, y: 0 };

let adjust;

let speed1Slider;
let speed2Slider;

let graghX = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    console.log(myCircle());

    a.x = cos(90) * 100;
    a.y = sin(90) * 100;

    adjust = width / 2;

    speed1Slider = createSlider(-10, 10, 0);
    speed1Slider.position(10, 10);
    speed1Slider.style('width', '100px');

    speed2Slider = createSlider(-10, 10, 0);
    speed2Slider.position(10, 40);
    speed2Slider.style('width', '100px');

    speed3Slider = createSlider(-10, 10, 0);
    speed3Slider.position(10, 70);
    speed3Slider.style('width', '100px');

    speed4Slider = createSlider(-10, 10, 0);
    speed4Slider.position(10, 100);
    speed4Slider.style('width', '100px');

    speed5Slider = createSlider(-10, 10, 0);
    speed5Slider.position(10, 130);
    speed5Slider.style('width', '100px');

}

function draw() {
    let speed = frameCount;

    background(0, 10);
    translate(0, height / 2)

    // myCircle();

    stroke("white");
    strokeWeight(10);

    let tmp = moveCircle({ x: width / 2, y: 0 }, 100, speed * speed1Slider.value());
    let tmp1 = moveCircle({ x: tmp.x, y: tmp.y }, 70, speed * speed2Slider.value());
    let tmp2 = moveCircle({ x: tmp1.x, y: tmp1.y }, 50, speed * speed3Slider.value());
    let tmp3 = moveCircle({ x: tmp2.x, y: tmp2.y }, 30, speed * speed4Slider.value());
    let tmp4 = moveCircle({ x: tmp3.x, y: tmp3.y }, 15, speed * speed5Slider.value());

    noFill();
    strokeWeight(1);
    stroke("gray");
    circle(width / 2, 0, 200);
    // circle(tmp.x, tmp.y, 140);
    // circle(tmp1.x, tmp1.y, 100);
    // circle(tmp2.x, tmp2.y, 60);
    // circle(tmp3.x, tmp3.y, 30);


    stroke("red");
    strokeWeight(10);
    point(tmp4.x, tmp4.y);

    let tmpDist = dist(a.x, a.y, tmp4.x, tmp4.y);
    if (graghX > width) {
        graghX = 0;
    }
    graghX += 1;
    stroke("white");
    point(graghX, tmpDist - 600);

    stroke(100, 100, 100, 50)
    strokeWeight(2);
    line(a.x + width / 2, a.y, tmp4.x, tmp4.y);
}

function myCircle() {
    let coardinates = [];
    for (let theta = 0; theta < 360; theta++) {
        let x = cos(theta) * 100;
        let y = sin(theta) * 100;
        strokeWeight(2);
        stroke("white");
        point(x + adjust, y);
        coardinates.push({ x: x, y: y });
    }
    return coardinates;
}

function moveCircle(center, r, speed) {
    let p = { x: cos(speed) * r + center.x, y: sin(speed) * r + center.y };
    return p;
}

const dist = (x1, y1, x2, y2) => sqrt(sq(x2 - x1) + sq(y2 - y1));