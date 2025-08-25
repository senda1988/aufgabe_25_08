const { mwst, brutto } = require("./mehrwertsteuer.js")

test("7% von 100 gleich 7", () => {
    expect(mwst(100, 0.07)).toBe(70);
});

test("19% von 200 gleich 38", () => {
    expect(mwst(200, 0.19)).toBe(38);
});

test("0 Betrag ergibt 0 Steuer", () => {
    expect(mwst(0, 0.19)).toBe(0);
});


test(("100 netto bei 19% gleich 119"), () => {
    expect(brutto(100, 0.19)).toBe(119);
});

test(("50 netto bei 7% -> 53,5 Brutto"), () => {
    expect(brutto(50, 0.07)).toBe(53.5)
})