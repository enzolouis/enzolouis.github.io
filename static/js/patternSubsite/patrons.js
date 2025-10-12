const formatDate = iso => {
    const d = new Date(iso);
    
    // Liste des mois en anglais
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const day = d.getDate(); 
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? "pm" : "am";
    
    hours = hours % 12 || 12; // 12h format
    
    // Format sans minutes si pile (ex: "11am"), sinon "11:30am"
    const time = minutes === "00" ? `${hours}${ampm}` : `${hours}:${minutes}${ampm}`;
    
    return `${day} ${month} ${year} at ${time}`;
};

function annulationSuppression(button) {
	const backgroundToBlur = document.querySelectorAll('main *:not(#suppression)');

	backgroundToBlur.forEach(element => {
	    element.style.filter = 'none';
	});

	document.getElementById("suppression").style.display = "none"
}


function askDelete(button, id) {
	const backgroundToBlur = document.querySelectorAll('main *:not(#suppression)');

	backgroundToBlur.forEach(element => {
	    element.style.filter = 'blur(0.5rem)';
	});

	let supprParagraph = document.getElementById("suppression");
	supprParagraph.style.display = "block"
	supprParagraph.children[0].innerText = "Really want to delete this pattern ?";

	console.log(id)
	document.getElementById("confirmDeleteButton").onclick = () => {deleteByAPI(id); annulationSuppression(button);};

}

getAllByAPI().then(usagers => {
    const container = document.querySelector(".container-pattern");

    usagers.forEach(usager => {
        // Créer le div principal
        const userDiv = document.createElement("div");
        userDiv.id = usager.id

        // First part (infos)
        const firstPart = document.createElement("div");
        firstPart.className = "first-part";

        const divP = document.createElement("div")

        const nameP = document.createElement("span");
        nameP.className = "name";
        nameP.textContent = usager.name;
        divP.appendChild(nameP)


        const patternSize = document.createElement("p")
        patternSize.className = "label"
        patternSize.textContent = `Size ${Math.floor(usager.chestCirc / 2)} cm`

        const patternEaseAllowance = document.createElement("p")
        patternEaseAllowance.className = "label"
        patternEaseAllowance.textContent = `Ease allowance ${usager.easeallowance} cm`

        const labelSpan = document.createElement("p");
        labelSpan.className = "label";
        labelSpan.textContent = `Created ${formatDate(usager.created_at)}`;

        const labelSpan2 = document.createElement("p");
        labelSpan2.className = "label";
        labelSpan2.textContent = `Last modified ${formatDate(usager.updated_at)}`;


        firstPart.appendChild(divP);
        firstPart.appendChild(patternSize);
        firstPart.appendChild(patternEaseAllowance);
        firstPart.appendChild(labelSpan);
        firstPart.appendChild(labelSpan2);

        // Second part (boutons)
        const secondPart = document.createElement("div");
        secondPart.className = "second-part";

        const modifyLink = document.createElement("a");
        modifyLink.href = `patron.html?profile=${usager.name}&id=${usager.id}`;
        const modifyButton = document.createElement("button");
        modifyButton.className = "btna bluenoshadow inside-button-modifier";
        modifyButton.style.backgroundColor = "var(--primary-dark-color)"
        modifyLink.appendChild(modifyButton);
        modifyButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'

        const deleteButton = document.createElement("button");
        deleteButton.className = "btna rednoshadow inside-button-supprimer";
        deleteButton.onclick = () => askDelete(deleteButton, usager.id);
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'

        secondPart.appendChild(modifyLink);
        secondPart.appendChild(deleteButton);

        // Assembler le tout
        userDiv.appendChild(firstPart);
        userDiv.appendChild(secondPart);

        container.appendChild(userDiv);
    });
})