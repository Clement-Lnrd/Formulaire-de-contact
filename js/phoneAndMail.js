/*
** CLEMENT LIENARD PROJECT, 2023
** Formulaire-de-contact
** phoneAndMail.js
*/

// Expressions régulières pour le numéro de téléphone et l'adresse mail
const PHONE_REGEX = /^0[1-9][0-9]{8}$/;
const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Messages d'alerte pour le numéro de téléphone et l'adresse mail
const PHONE_ALERT = ` n'est pas un numéro de téléphone valide.
Veuillez saisir un numéro de téléphone valide.
Exemple : 0123456789`;
const MAIL_ALERT = ` n'est pas une adresse mail valide.
Veuillez saisir une adresse mail valide.
Exemple : exemple@gmail.com`;

/**
 * Vérifie si le numéro de téléphone est valide. Il l'est si :
 * - il commence par 0
 * - il est composé de 10 chiffres
 * @param phone {string} - Le numéro de téléphone à vérifier
 * @returns {boolean} - true si le numéro est valide, false sinon
 */
function phoneIsValid(phone) {
    // Return true si le numéro de téléphone correspond à l'expression régulière
    if (PHONE_REGEX.test(phone))
        return true;
    // Sinon, afficher une alerte et return false
    alert(`${phone} ${PHONE_ALERT}`);
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
    // Return true si le mail correspond à l'expression régulière
    if (MAIL_REGEX.test(mail))
        return true;
    // Sinon, afficher une alerte et return false
    alert(`${mail} ${MAIL_ALERT}`);
    return false;
}

/**
 * Vérifie si le formulaire est valide. Il l'est si :
 * - le numéro de téléphone est valide
 * - l'adresse mail est valide
 * Si un des deux n'est pas valide, l'évènement submit est annulé et une alerte est affichée.
 */
$("#contact-form").on("submit", function(event) {
    // Récupérer le numéro de téléphone et l'adresse mail
    const phone = $("#phone").val();
    const mail = $("#email").val();

    // Annuler l'évènement submit si un des deux éléments n'est pas valide
    if (!phoneIsValid(phone) || !mailIsValid(mail))
        event.preventDefault();
});
