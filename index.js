const inputForm = document.getElementById('input-form')
const outputForm = document.getElementById('output-form')
const inputValue = document.getElementById('input-csv').value
const outputValue = document.getElementById('output-form')
const firstLineOk = document.getElementById('firstLineOk')
outputValue.value = ''
const str = `Prénom,ville,Pharmacie,cadeau
Patricia M.,GUJAN MESTRAS,PHARM DE MEYRAN,Robot Multifonction Silver KENWOOD
Anaïs L.,CHATEAURENARD,PHARM DU COURS SELARL,Robot Multifonction Silver KENWOOD
jean-luc L.,CHOUZELOT,PHARM VERDENET,Multi-Styler 10 en 1 PHILIPS
Anais M.,montpellier,PHARM DU SOLEIL SELAS,Multi-Styler 10 en 1 PHILIPS
Angélique S.,Roquefort-sur-Soulzon,PHARM DE LA POSTE,Multi-Styler 10 en 1 PHILIPS
Mylène A.,Nice,GRANDE PHARM ANGLO AMERICAINE SELA,Multi-Styler 10 en 1 PHILIPS
armelle L.,toulouse,PHARM TOLOSANE S N C,Multi-Styler 10 en 1 PHILIPS
kevin t.,Mignaloux-Beauvoir ,PHARM DU GEANT CASINO,UV-AGE DAILY SPF50+
Laetitia A.,Grandfontaine ,PHARM VERDENET,UV-AGE DAILY SPF50+
`
console.log(str.split('\n'))
console.log(str.split('\n').slice(1))

inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(typeof(inputValue))
    const rows = inputValue.split('\n')
    //console.log(rows)


    outputValue.value = inputValue
})