const requestUrl = "https://7zj04t9tqk.execute-api.ap-northeast-2.amazonaws.com/Dust_Value"

const req = new Request(requestUrl)
const res = await req.loadJSON()

const data = res.response.body.items[0]

let pm10Code = '보통'
let pm25Code = '보통'

let pm10Color = Color.white()
let pm25Color = Color.white()

let pm10Spacer = '          '
let pm25Spacer = '          '

switch(data['pm10Grade']){
    case 2 :
    break;
    case 1 : 
        pm10Code = '좋음'
        pm10Color = Color.blue()
    break;
    case 3 :
        pm10Code = '나쁨'
        pm10Color = Color.red()
    break;
    case 4 :
        pm10Code = '매우나쁨'
        pm10Spacer = ''
        pm10Color = Color.red()
    break
}

switch(data['pm25Grade']){
    case 2 :
    break;
    case 1 : 
        pm25Code = '좋음'
        pm25Color = Color.blue()
    break;
    case 3 :
        pm25Code = '나쁨'
        pm25Color = Color.red()
    break;
    case 4 :
        pm25Code = '매우나쁨'
        pm25Spacer = ''
        pm25Color = Color.red()
    break
}

let widget = new ListWidget()
let pm10title = widget.addText('미세먼지')
let pm10value = widget.addText(`${pm10Spacer}${pm10Code} ${data['pm10Value']}`)

widget.addSpacer(5)

let pm25title = widget.addText('초미세먼지')
let pm25value = widget.addText(`${pm25Spacer}${pm25Code} ${data['pm25Value']}`)

pm10title = Color.black()
pm25title = Color.black()

pm10value.textColor = pm10Color
pm25value.textColor = pm25Color
widget.backgroundColor = Color.black()

// switch(Math.max(status)){
//     case 1:
//         widget.backgroundColor = Color.blue()
//     break;
//     case 2:
//         widget.backgroundColor = Color.red()
//     break;
// }


console.log(requestUrl)
console.log(res)

Script.setWidget(widget)
Script.complete()