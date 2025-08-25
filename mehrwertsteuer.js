// Berechnet die Mehrwertsteuer für einen Betrag (z. B. 19%).
function mwst(betrag, satz = 0.19) {
    const steuer = betrag * satz;
    // auf 2 Nachkommastellen runden (Geldbeträge)
    return Math.round(steuer * 100) / 100;
}

// Gibt den Bruttobetrag (Netto + Steuer) zurück.
function brutto(betragNetto, satz = 0.19) {
    const steuer = mwst(betragNetto, satz);
    return Math.round((Number(betragNetto) + steuer) * 100) / 100;
}
console.log(mwst(200, 0.19))
console.log(mwst(100, 0.07))
module.exports = { mwst, brutto };