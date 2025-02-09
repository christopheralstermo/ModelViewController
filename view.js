

function startHistorieSpill() {
    appenMin.innerHTML = /*HTML*/ `
    Dette er et slags "spill" hvor du først genererer noen ord (helst flere enn 12 ord), før du låser ordlista
     for derettet å åpne en mangelfull historie ordene kan puttes inn i. Spillet bugger hardt hvis det spilles på en skjerm smalere enn teksten.<br><br>
    <button onclick="rutenett()">Start historiespillet</button>
    `;
}

function rutenett(){
    appenMin.innerHTML = /*HTML*/`
    <div id="advarselen" style="border: ${advarselBorder}; width: 150px; height: 155px; font-size: 20px; margin-bottom: 30px;">Hvis samme ord genereres flere ganger slettes det fra lista og du må generere et nytt ord.</div>
    <button onclick="ruteInnhold()" style="font-size: 25px">Generer ord</button>
    <input placeholder="Eget ord" id="inputten" style="font-size: 25px;width: 150px; height: 30px" type="text" onchange="egneOrdKnappen(this.value)">
    <button onclick="randomHistorier()" style="font-size: 25px">Historie</button>
    <div id="enGridBoksMedOrd" style="width:${breddenTilGridBoksMedOrd}px;"></div>
    <div id="selveHistorien"></div>

`;
}

function egneOrdIstedetForDeGenererte(){
    document.getElementById('enGridBoksMedOrd').innerHTML += /*HTML*/ `
    <div onclick="getWord(this)">${egneOrd}</div>
    `;
}


function addWord() {
    return document.getElementById('enGridBoksMedOrd').innerHTML += /*HTML*/ `
    <div onclick="getWord(this)">${word}</div>
    `;
}

function theWordExistError() {
     return document.getElementById("advarselen").innerHTML = /*HTML*/`<div style="font-size: 23px">Klikk igjen. Ordet som ble generert er <b>"${word}"</b> og finnes allerede i lista</div>`
 }


function theWordExistErrorClear() {
     return document.getElementById("advarselen").innerHTML = ""
 }

function historieneSamlet(){
    return document.getElementById('selveHistorien').innerHTML = /*HTML*/`
    <div style="font-size: 20px;">
        <div style="display: flex;">Her er en liten historie som er veldig [${utbytteOrd1}]. Den handler om [${utbytteOrd2}] og en [${utbytteOrd3}].</div>
        <div style="display: flex;">Uansett hvor mye de [${utbytteOrd4}] samtidig som de [${utbytteOrd5}].</div>
        <div style="display: flex;">De strevde med både [${utbytteOrd6}] og [${utbytteOrd7}]</div>
        <div style="display: flex;">Heldigvis kom [${utbytteOrd8}] på en god idè mens han klødde seg på [${utbytteOrd9}]</div>
        <div style="display: flex;">"Hva hvis jeg investerer i en skikkelig [${utbytteOrd10}] som passer perfekt til [${utbytteOrd11}]?"</div>
        <div style="display: flex;">Dæven! Det gjør jeg jaggu med en gang sa han til [${utbytteOrd12}]</div>
    </div>
    `;
}

