//Input Const's

const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#day')
const button = document.querySelector('#button')
//Input Const's
var activate = false

var resultY, resultM, resultD

button.addEventListener('click', () =>{
    let resLines = Array.from(document.querySelectorAll('.res_lines'))
    let resYear = resLines[0]
    let resMonth = resLines[1]
    let resDay = resLines[2]

    if (activate === false){
        calc()
        resYear.textContent = resultY
        resMonth.textContent = resultM
        resDay.textContent = resultD
        
    }
})

function calc(){
    var yearNum = parseFloat(year.value)
    var monthNum = parseFloat(month.value)
    var dayNum = parseFloat(day.value)

    const date = new Date()
    const todayY = date.getFullYear()
    const todayM = date.getMonth()
    const todayD = date.getDay()

    resultY = todayY - yearNum
    resultM = todayM - monthNum
    resultD = todayD - dayNum

    if (resultM < 0) {
        resultY--;
        resultM += 12;
    }
    if (resultD < 0) {
        resultM--;
        var prevMonth = new Date(todayY, todayM - 1, 0);
        resultD += prevMonth.getDate();
    }
}