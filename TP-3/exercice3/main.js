document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // 1. Récupération des valeurs
    const code = document.getElementById('CoddeEtud').value;
    const nom = document.getElementById('Nom').value;
    const prenom = document.getElementById('Prenom').value;
    const semestre = document.getElementById('Semester').value;
    
    // Récupération des notes dans un tableau
    const notes = [];
    for(let i=1; i<=6; i++) {
        notes.push(parseFloat(document.getElementById(`module${i}`).value));
    }

    // 2. Validations (Champs vides et types)
    if (!code || !nom || !prenom || notes.some(isNaN)) {
        alert("Veuillez remplir tous les champs avec des notes valides.");
        return;
    }

    // 3. Calcul de la moyenne
    const somme = notes.reduce((Total, curr) => Total + curr, 0);
    const moyenne = (somme / notes.length).toFixed(2);

    // 4. Logique de décision
    // Critère b : moins de 3 modules non validés (entre 8 et 12)
    const modulesNonValides = notes.filter(n => n < 12 && n >= 8).length;
    
    let decision = "Semestre Non Validé";
    if (moyenne >= 12 && modulesNonValides < 3) {
        decision = "Semestre Validé";
    }

    // 5. Ajout au tableau
    const tableBody = document.getElementById('tableBody');
    const newRow = tableBody.insertRow();

    // Insertion des cellules
    newRow.insertCell().textContent = code;
    newRow.insertCell().textContent = nom;
    newRow.insertCell().textContent = prenom;
    newRow.insertCell().textContent = semestre;
    
    // Insertion des 6 notes
    notes.forEach(note => {
        newRow.insertCell().textContent = note;
    });

    newRow.insertCell().textContent = moyenne;
    newRow.insertCell().textContent = decision;

    
    this.reset();
});

// Gestion du bouton Annuler
document.getElementById('Annuler').addEventListener('click', () => {
    document.querySelector('form').reset();
});