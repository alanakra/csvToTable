const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const inputValue = document.getElementById('input-csv').value
const outputValue = document.getElementById('output-form')
let firstLineOk = document.getElementById('firstLineOk').checked


inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let rows = firstLineOk == true ? inputValue.replace(/\n\r?/g, '\n').split('\n') : inputValue.replace(/\n\r?/g, '\n').split('\n').slice(1)
    console.log(rows)
    outputValue.value = rows
})