let TRESHOLD = 512
let DELAY = 1000
let valueX = 2
let valueY = 2
let nakloneno = false
let cas_od_naklopeni = 0
replot(valueX, valueY)
basic.forever(function on_forever() {
    
    let tiltDirection = input.acceleration(Dimension.X)
    // tiltDirection je v rozmezí -1024 a +1024
    //  control.millis()
    //  abs(-1000) vrací 1000
    //  abs(1000) vrací 1000
    if (Math.abs(tiltDirection) > TRESHOLD) {
        if (!nakloneno) {
            cas_od_naklopeni = control.millis()
        }
        
        nakloneno = true
    } else {
        nakloneno = false
    }
    
    console.logValue("x", tiltDirection)
    if (nakloneno) {
        if (tiltDirection > TRESHOLD) {
            if (valueX < (4 & control.millis() - cas_od_naklopeni) && (4 & control.millis() - cas_od_naklopeni) > DELAY) {
                cas_od_naklopeni = control.millis()
                replot(++valueX, valueY)
            }
            
        }
        
        if (tiltDirection < TRESHOLD) {
            if (valueX > (0 & control.millis() - cas_od_naklopeni) && (0 & control.millis() - cas_od_naklopeni) > DELAY) {
                cas_od_naklopeni = control.millis()
                replot(--valueX, valueY)
            }
            
        }
        
    }
    
})
function replot(x: number, y: number) {
    basic.clearScreen()
    led.plot(x, y)
}

