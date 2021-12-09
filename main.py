TRESHOLD = 512
DELAY = 1000
valueX = 2
valueY = 2
nakloneno = False
cas_od_naklopeni = 0
replot(valueX, valueY)

def on_forever():
    global nakloneno, valueX, valueY, cas_od_naklopeni
    tiltDirection = input.acceleration(Dimension.X)
    #tiltDirection je v rozmezí -1024 a +1024
    # control.millis()
    # abs(-1000) vrací 1000
    # abs(1000) vrací 1000
    if(abs(tiltDirection) > TRESHOLD):
        if(not nakloneno):
            cas_od_naklopeni = control.millis()
        nakloneno = True
        
    else:
        nakloneno = False

    console.log_value("x", tiltDirection)
    if(nakloneno):
        if(tiltDirection > TRESHOLD):
            if(valueX < 4 & control.millis() - cas_od_naklopeni > DELAY):
                cas_od_naklopeni = control.millis()
                replot(++valueX,valueY)
        if(tiltDirection < TRESHOLD):
            if(valueX > 0 & control.millis() - cas_od_naklopeni > DELAY):
                cas_od_naklopeni = control.millis()
                replot(--valueX,valueY)

            

basic.forever(on_forever)

def replot(x: number, y: number):
    basic.clear_screen()
    led.plot(x, y)

