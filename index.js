const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const inputValue = document.getElementById('input-csv').value
const outputValue = document.getElementById('output-form')
let firstLineOk = document.getElementById('firstLineOk').checked



inputForm.addEventListener('submit', (e) => {
    console.log(firstLineOk)
    e.preventDefault()
    let rows = firstLineOk == true ? inputValue.replace(/\n\r?/g, '\n').split('\n') : inputValue.replace(/\n\r?/g, '\n').split('\n').slice(1)
    console.log(rows)
    // rows.forEach(index => console.log(index.replace(/\n\r?/g, '\n').split('\n')))
    rows.forEach(
        function collectPerson (index) {
            const arrPers = index.replace(/\n\r?/g, '\n').split('\n')[0].split(',')
            console.log(`
                <tr style="height: 16pt;" height="21">
                    <td class="xl66" style="color: white; background: #c00000; height: 16pt; width: 240px; border: none; text-align: left;" align="left">${arrPers[0]}</td>
                    <td class="xl66" style="color: white; background: #c00000; width: 240px; border: none; text-align: left;" align="left">${arrPers[1]}</td>
                    <td class="xl66" style="color: white; background: #c00000; width: 240px; border: none; text-align: left;" align="left">${arrPers[2]}</td>
                </tr>
            `)
        }
    )

    /*console.log(`
    <tr style="height: 16pt;" height="21">
        <td class="xl66" style="color: white; background: #c00000; height: 16pt; width: 240px; border: none; text-align: left;" align="left">${rows[0]}</td>
        <td class="xl66" style="color: white; background: #c00000; width: 240px; border: none; text-align: left;" align="left">${rows[1]}</td>
        <td class="xl66" style="color: white; background: #c00000; width: 240px; border: none; text-align: left;" align="left">${rows[2]}</td>
    </tr>
    `)*/
    outputValue.value = rows
})