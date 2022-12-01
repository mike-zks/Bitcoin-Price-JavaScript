const url = 'https://blockchain.info/ticker';

// async avec fetch ou axios
async function actualiser() {


    // let requete = new XMLHttpRequest();
    // requete.open('GET', url);
    // requete.responseType = 'json';
    // requete.send();

    // requete.onload = function () {
    //     if (requete.readyState === XMLHttpRequest.DONE) {
    //         if (requete.status === 200) {
    //             let reponse = requete.response;
    //             let prixEuro = reponse.EUR.last;
    //             document.querySelector('#price_label').textContent = prixEuro;
    //         } else {
    //             alert('Problème survenu! Veuillez reéssayé plus tard');
    //         }
            
    //     }
    // }


// Avec fetch
    // const requete = await fetch(url, {
    //     method: 'GET'
    // });

    // if (!requete.ok) {
    //     alert('Problème survenue!')
    // } else {
    //     let data = await requete.json();
    //     document.querySelector('#price_label').textContent = data.EUR.last;
    // }

//Avec Axios

axios.get(url)
    .then((req) => {
        document.querySelector('#price_label').textContent = req.data.EUR.last;
    }).catch((err) => {
        console.log(err);
    });
}

setInterval(actualiser, 1000);