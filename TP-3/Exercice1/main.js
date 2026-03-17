const btnAnnuler = document.getElementById("Annuler");
const form = document.querySelector("form");
const recapDiv = document.getElementById("recap");
btnAnnuler.addEventListener("click", function() {
console.log("annulation...");

    form.reset();
    const recapDiv = document.getElementById("recap");
    recapDiv.innerHTML = "";
});
   
form.addEventListener("submit", RecupererInfo);

function RecupererInfo(event) {
console.log("Récupération des informations...");



    event.preventDefault();

   
    const inputs = document.querySelectorAll(".InscrForm");
    const langue = document.getElementById("Langue").value;
    const commentaire = document.getElementById("Cmt").value;
    const Nom = document.getElementById("Nom").value;
    const Prenom = document.getElementById("Prenom").value;
    const Email = document.getElementById("Email").value;
    const Tel = document.getElementById("Tel").value;
    const PassWord = document.getElementById("PassWord").value;
    const ResaisirMP = document.getElementById("ResaisirMP").value;

    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
        }
    });

    if (commentaire.trim() === "") {
        isValid = false;
    }
    if(PassWord !== ResaisirMP){
        isValid = false;
    }

    if (!isValid) {
        alert("Tous les champs sont obligatoires !");
        return;
    }

    // Si tout est valide → afficher récapitulatif
    recapDiv.innerHTML = `
        <h3>Récapitulatif :</h3>
        <p><strong>Nom :</strong> ${Nom}</p>
        <p><strong>Prénom :</strong> ${Prenom}</p>
        <p><strong>Email :</strong> ${Email}</p>
        <p><strong>Téléphone :</strong> ${Tel}</p>
        <p><strong>Langue :</strong> ${langue}</p>
        <p><strong>Commentaire :</strong> ${commentaire}</p>
    `;
}
