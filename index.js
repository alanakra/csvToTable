const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const inputValue = document.getElementById('input-csv').value
const outputValue = document.getElementById('output-form')
let firstLineOk = document.getElementById('firstLineOk').checked
const startString = `
<table style="width: 960px;" width="960" cellspacing="0" cellpadding="0" border="0">
<colgroup><col style="width: 240px;" width="240" /><col style="width: 240px;" width="240" /><col style="width: 240px;" width="240" /><col style="width: 240px;" width="240" /></colgroup>
<tbody>
<tr style="height: 16pt;" height="21">
<td class="xl66" style="color: white; background: #ffc000; height: 16pt; width: 240px; border: none; text-align: left;" align="left">PR&Eacute;NOM</td>
<td class="xl66" style="color: white; background: #ffc000; width: 240px; border: none; text-align: left;" align="left">VILLE</td>
<td class="xl66" style="color: white; background: #ffc000; width: 240px; border: none; text-align: left;" align="left">PHARMACIE</td>
</tr>
`
const endString = `
</tbody>
</table>
<br />
<br class="t-last-br" />
`



inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let rows = firstLineOk == true ? inputValue.replace(/\n\r?/g, '\n').split('\n') : inputValue.replace(/\n\r?/g, '\n').split('\n').slice(1)
    console.log(rows)
    rows.forEach(
        function collectPerson (index) {
            const arrPers = index.replace(/\n\r?/g, '\n').split('\n')[0].split(',')
            const template = (`
                <tr style="height: 16pt;" height="21">
                    <td class="xl66" style="color: white; background: #c00000; height: 16pt; width: 240px; border: none; text-align: left;" align="left">${arrPers[0]}</td>
                    <td class="xl66" style="color: white; background: #c00000; width: 240px; border: none; text-align: left;" align="left">${arrPers[1]}</td>
                    <td class="xl66" style="color: white; background: #c00000; width: 240px; border: none; text-align: left;" align="left">${arrPers[2]}</td>
                </tr>
            `)
            console.log(template)
        },
    )
    outputValue.value = rows
})