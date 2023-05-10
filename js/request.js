/*
** CLEMENT LIENARD PROJECT, 2023
** Formulaire-de-contact
** request.js
*/

/**
 * Supprime la première option du select si elle est déselectionnée
 */
function removeBlankOption() {
    // Récupérer le select
    const select = document.getElementById("request");

    // Supprimer la première option si elle est déselectionnée est que c'est bien celle qui est vide
    if (!select.options[0].selected && select.options[0].value === "")
        select.options[0].remove();
}
