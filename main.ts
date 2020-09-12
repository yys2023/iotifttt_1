let humidity = 0
let temperature = 0
I2C_LCD1602.LcdInit(32)
I2C_LCD1602.ShowString("Temp:", 0, 0)
I2C_LCD1602.ShowString("Humi:", 0, 1)
basic.pause(2000)
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    temperature = Math.round(dht11_dht22.readData(dataType.temperature))
    humidity = Math.round(dht11_dht22.readData(dataType.humidity))
    I2C_LCD1602.ShowNumber(temperature, 5, 0)
    I2C_LCD1602.ShowNumber(humidity, 5, 1)
    basic.pause(10000)
})
