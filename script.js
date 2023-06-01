$(document).ready(function () {
    // Récupérer les images depuis l'API
    fetch('http://127.0.0.1:8000/api/carousels')
        .then(response => response.json())
        .then(data => {
            var images = data;
            var listElement = $("#list-image");
            console.log(images)
            console.log(listElement)

            // Parcourir les images et ajouter chaque image à la liste
            images.forEach(image => {
                var imageURL = 'http://127.0.0.1:8000/storage/' + image.image;
                var listItem = $("<li>").html(`<img src="${imageURL}">`);
                listElement.append(listItem);
                console.log(imageURL)
                console.log(listItem)
            });

            // Initialiser Flipster
            $('.carousel').flipster({
                style: 'carousel',
                spacing: -0.3,
            });
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des images depuis l\'API:', error);
        });
});