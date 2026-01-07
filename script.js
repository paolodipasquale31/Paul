function saluta() {
    const nome = document.getElementById("nome").value;

    if (nome === "") {
        document.getElementById("risultato").textContent =
            "Per favore inserisci un nome 🙂";
    } else {
        document.getElementById("risultato").textContent =
            "Ciao " + nome + "! Benvenuto nel mio sito 🎉";
    }
}
