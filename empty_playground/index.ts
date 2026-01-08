function setup() {
    const centerX: number[] = [100, 150, 200, 250, 300]
    const centerY: number[] = [100, 150, 200, 250, 300]
    const diameter: number[] = [20, 40, 60, 80, 100]

    console.log("vor push", diameter)
    centerX.push(400)
    centerY.push(400)
    diameter.push(120)
    console.log("nach push", diameter)

    centerX.splice(0, 3)
    centerY.splice(0, 3)
    diameter.splice(0, 3)

    createCanvas(500, 500)
    background("white")

    fill("red")
    for(let i = 0; i < centerX.length; i++) {
        circle(centerX[i], centerY[i], diameter[i])
    }
}

