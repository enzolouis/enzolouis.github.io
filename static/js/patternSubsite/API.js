const APIBASEURL = "http://127.0.0.1:8000"
//const APIBASEURL = "https://embin.onrender.com"

function getAllByAPI() {
	showLoader()
	return fetch(`${APIBASEURL}/patrons/`, {  // attention au slash final
		method: 'GET',
	})
	.then(response => {
	    // Vérifie que la réponse est bien du JSON
	    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
	    return response.json();
	})
	.then(data => {
		hideLoader()
		if (data.status === "ok") {
			return data.patterns;			
		} else {
			console.error('Erreur API:', data.message);
			return [];
		}
		return [];
	})
	.catch(error => {
		errorLoader();
		console.error('Error:', error);
		return [];
	});
}

function deleteByAPI(id) {
	showLoader()
	fetch(`${APIBASEURL}/patrons/${id}/`, {
		method: 'DELETE',
	})
	.then(response => {
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    	return response.json();
	})
	.then(data => {
		hideLoader()
		if (data.status === "ok") {
			document.getElementById(id).remove()
		} else {
			console.error('Error:', error);
		}
	})
	.catch(error => {
		console.log('Error:', error);
	});
}

function getByAPI(id) {
	showLoader()
	return fetch(`${APIBASEURL}/patrons/${id}/`, {
		method: 'GET',
	})
	.then(response => {
		if (!response.ok) {
			hideLoader()
			throw new Error(`HTTP error! status: ${response.status}`);
    	}
    	return response.json();
	})
	.then(data => {
        hideLoader()

		if (data.status === "ok") {
			return data.pattern;
		} else {
			console.error('Error:', error);
		}	
	})
	.catch(error => {
		console.log('Error:', error);
	});
}

function putByAPI(id, obj) {
	showLoader()
	return fetch(`${APIBASEURL}/patrons/${id}/`, {
		method: 'PUT',
		headers: {
	        'Content-Type': 'application/json'  // on envoie du JSON
	    },
	    body: JSON.stringify(obj)
	})
	.then(response => {
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    	return response.json();
	})
	.then(data => {
		hideLoader()
		if (data.status === "ok") {
			return data.status;
		} else {
			console.error('Error:', error);
		}
	})
	.catch(error => {
		console.log('Error:', error);
	});
}

function postByAPI(dataToSend) {
	showLoader()
	return fetch(`${APIBASEURL}/patrons/`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(dataToSend)
	})
	.then(response => {
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    	return response.json();
	})
	.then(data => {
		hideLoader()
		if (data.status === "ok") {
			return data.id;
		} else {
			console.error('Error:', error);
		}
	})
	.catch(error => {
		console.log('Error:', error);
	});
}





const loader = document.getElementById("loader");

// Fonction pour activer le loader
function showLoader() {
  loader.style.display = "flex";
  document.body.style.overflow = "hidden"; // empêche le scroll
}

// Fonction pour désactiver le loader
function hideLoader() {
  loader.style.display = "none";
  document.body.style.overflow = "auto"; // réactive le scroll
}

function errorLoader() {
    loader.innerHTML = "<p>Erreur lors du chargement.</p>";
}

/*

return new Promise(resolve => {
        	setTimeout(() => {
        	hideLoader()

		if (data.status === "ok") {
			resolve( data.pattern);
		} else {
			console.error('Error:', error);
		}	// resolve(...) au lieu de return ...
}, 2000)})
*/