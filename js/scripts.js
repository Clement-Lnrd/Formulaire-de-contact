/*
** CLEMENT LIENARD PROJECT, 2023
** Formulaire-de-contact
** scripts.js
*/

/**
 * Vérifie si le numéro de téléphone est valide. Il l'est si :
 * - il commence par 0
 * - il est composé de 10 chiffres
 * @param phone {string} - Le numéro de téléphone à vérifier
 * @returns {boolean} - true si le numéro est valide, false sinon
 */
function phoneIsValid(phone) {
    if (/^0[1-9][0-9]{8}$/.test(phone))
        return true;
    alert("Veuillez saisir un numéro de téléphone valide.");
    return false;
}

/**
 * Vérifie si l'adresse mail est valide. Elle l'est si :
 * - elle continent un '@'
 * - elle continent un '.'
 * - elle ne contient pas d'espace
 * - elle a au moins 1 caractère avant le '@'
 * - elle a au moins 1 caractère entre le '@' et le '.'
 * - elle a au moins 1 caractère après le '.'
 * @param mail {string} - L'adress mail à vérifier
 * @returns {boolean} - true si l'adresse mail est valide, false sinon
 */
function mailIsValid(mail) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
        return true;
    alert("Veuillez saisir une adresse mail valide.");
    return false;
}

/**
 * Vérifie si le formulaire est valide. Il l'est si :
 * - le numéro de téléphone est valide
 * - l'adresse mail est valide
 * S'il n'est pas valide, l'évènement submit est annulé.
 */
$("#contact-form").on("submit", function(event) {
    const phone = $("#phone").val();
    const mail = $("#email").val();

    if (!phoneIsValid(phone) || !mailIsValid(mail))
        event.preventDefault();
});
