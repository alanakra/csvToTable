const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const inputValue = document.getElementById('input-csv').value
const outputValue = document.getElementById('output-form')
const firstLineOk = document.getElementById('firstLineOk')
outputValue.value = ''

inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const rows = inputValue.replace(/\n\r?/g, '\n').split('\n');
    console.log(rows)
    outputValue.value = rows
})