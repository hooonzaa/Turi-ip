

const quotes = [
    "Představte si to ticho, kdyby lidé říkali jen to, co vědí.",
    "Čtenář prožije tisíc životů, než zemře.",
    "Člověk, jenž nikdy nečte, prožije jen jeden.",
    "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít.",
    "Žít, to je nejvzácnější věc na světě, neboť většina lidí jenom existuje.",
    "kamo kys. - Sýkora",
    "To je život. - Eliáš",
    "Všechno je Fandovo vina - John Smith",
    "Člověk je sám i mezi lidmi. - Antoine de Saint-Exupéry.",
    " Rána bičem působí modřinu, ale rána jazykem drtí kosti.“ — Edgar Allan Poe",
    "Když už člověk jednou je, tak má koukat aby byl. A když kouká, aby byl a je, tak má být to, co je a nemá být to, co není, jak tomu v mnoha případech je.“ —Jan Werich"
]

let oneQuote = ""


function quoteButton() {

    const citatElement = document.getElementById("quote");

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const randomCitat = quotes[randomIndex];

    citatElement.textContent = randomCitat;
}
