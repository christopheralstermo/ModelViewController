function cursorPointerON() {
    document.getElementById('enGridBoksMedOrd').classList.remove('enGridBoksMedOrdOff')
    document.getElementById('enGridBoksMedOrd').classList.add('enGridBoksMedOrdOn')
}


function cursorPointerOff() {
    document.getElementById('enGridBoksMedOrd').classList.add('enGridBoksMedOrdOff')
}


function clickOnTextButtons() {
    clickOnTextButtonsSwitch = true
}


function getWord(ruta){
    if(clickOnTextButtonsSwitch){
        ordId ++;
        ordetPåInsidenAvRuta = ruta.innerHTML;
        document.getElementById(String(ordId)).innerHTML = ordetPåInsidenAvRuta
    }
}


function randomHistorier() {
    if(historieBryter == true){
        clickOnTextButtons();
        historieneSamlet();
        historieSwitch();
        cursorPointerON();
    }

}


function historieSwitch() {
    historieBryter = !historieBryter;
}


function egneOrdKnappen(element){
    if(historieBryter){
        egneOrd = element;
        egneOrdIstedetForDeGenererte();
        document.getElementById('inputten').value = "";
}
}


function ruteInnhold() {
if(historieBryter){
    cursorPointerOff()
    word = ordLagetAvTekst();
    denNyeLista.push(word);
    let dobbleNavn = denNyeLista.filter( (v,i,a) => a.indexOf(v) < i ); // direkte copy-paste fra nettet
    if(dobbleNavn.length > 0 || word === undefined){
        denNyeLista.pop();
        theWordExistError();
        advarselStyles();
    }
    else{
        addWord();
        theWordExistErrorClear();
    }
}

}


function ordLagetAvTekst() {
    ordlisteCount ++;
    let theText = "hva hvis jeg bare rabler ned en lang og idiotisk røkkel av en tekst som inneholder ord som rød og blå og masse farger og former som rund og firkantet og merkelig og stygg men også en del ting som mennesker og dyret og hunder og katter og bugs og tøys og lager ei liste ut av det kan det hende at den lista kanskje blir brukanes men samtidig blir det også en jævla lang og døv tekst og jeg vil ikke egentlig skrive noe mer i lengden men egentlig heller sette det nedover i bredden bare at da skjer det noen bugs jeg ikke helt klarer å nøste opp i enda og det plager meg ganske så hardt faktisk men kanskje alt ordner seg hvis jeg skriver inn masse navnene til hele gjengen som er Kjartan Merete Trine Rogern Bønna Benny og Lilly men ikke bare det kjøttet var billig og fløyta spelte opp til dans så alle ble både virile og anstrengte på en gang og det hele virket som et slags skuespill enda de gjorde så godt de kunne med å holde maska men både ord som bølla og kølla kan egentlig være med da de gir sluggern noe å fortelle utbryterkongen lillejon som hadde messet med høvdingen i tillegg legger jeg ute noen ekstra ord som armen benet hodet billiardkøen billiardkula kroppen bilen maten brettet armbågan";
    const denStoreLista = theText.split(' ');
    let randomMixAvOrdene = denStoreLista[Math.floor(Math.random()*denStoreLista.length)]; // direkte copy-paste fra nettet
    return randomMixAvOrdene;
}
