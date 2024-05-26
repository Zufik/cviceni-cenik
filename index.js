/*
Přidejte to stránky soubor s JavaScriptem.  DONE
Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu 
(základní 5Eček,rozšířený 10,mega 20). 
Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.
Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. 
My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, 
že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného 
prvku odebrat třídu plan--selected.
Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), 
ale na stránce by měl zůstat poslední vybraný plán.
*/


const selectPlan = (planNumber) => {
    document.querySelector ("#plan1").classList.remove ("plan--selected")
    document.querySelector ("#plan2").classList.remove ("plan--selected")
    document.querySelector ("#plan3").classList.remove ("plan--selected")

    const newPlan = document.querySelector (`#plan${planNumber}`)
    newPlan.classList.add ("plan--selected")
}

selectPlan (2)

