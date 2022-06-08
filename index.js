const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const outputValue = document.getElementById('output-form')
let firstLineOk = document.getElementById('firstLineOk').checked



inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputValue = document.getElementById('input-csv').value
    let rows = firstLineOk == true ? inputValue.replace(/\n\r?/g, '\n').split('\n') : inputValue.replace(/\n\r?/g, '\n').split('\n').slice(1)
    console.log(rows)
    rows.forEach(
        function collectPerson (index) {
            const arrPers = index.replace(/\n\r?/g, '\n').split('\n')[0].split(',')
            const template = (`
            <tr style="height: 16pt;" height="21">
            	<td style="color: black; height: 16pt; width: 240px; border: none; text-align: left;"><span style="text-align: start; letter-spacing: normal;">${arrPers[0]}</span></td>
            	<td class="xl65" style="color: black; border: none; text-align: left; width: 240px;"><span style="text-align: start; letter-spacing: normal;">${arrPers[1]}</span></td>
            	<td class="xl65" style="color: black; border: none; text-align: left; width: 240px;"><span style="text-align: start; letter-spacing: normal;">${arrPers[2]}</span></td>
        	</tr>
            `)
            console.log(template)
        },
    )
    outputValue.value = rows
})