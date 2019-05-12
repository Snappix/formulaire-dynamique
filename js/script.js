$(document).ready(function () {

    var $pseudo = $('#pseudo'),
        $mdp = $('#mdp'),
        $confirmation = $('#confirmation'),
        $mail = $('#mail'),
        $envoi = $('#envoi'),
        $reset = $('#rafraichir'),
        $erreur = $('#erreur'),
        $champ = $('.champ');


    //on vérifie que les infos rentrées soient cohérentes (+ de 5 caractères)
    $champ.keyup(function () {
        if ($(this).val().length < 5) { // si la chaîne de caractères est inférieure à 5
            $(this).css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        } else {
            $(this).css({ // si tout est bon, on le rend vert
                borderColor: '#2ecc71',
                color: '#2ecc71'
            });
        }
    });
    
    
    //on impose que le mot de passe soit différent du pseudo
    $mdp.keyup(function () {
        if ($(this).val() == $pseudo.val()) {
            alert("Le mot de passe ne peut pas être identique au pseudo");
            $(this).css({
                borderColor: 'red',
                color: 'red'
            });
        }
    });


    //on vérifie que la case confirmation est bien identique au mot de passe rentré avant
    $confirmation.keyup(function () {
        if ($(this).val() != $mdp.val()) { // si la confirmation est différente du mot de passe
            $(this).css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        } else {
            $(this).css({ // si tout est bon, on le rend vert
                borderColor: '#2ecc71',
                color: '#2ecc71'
            });
        }
    });


    //on appelle la fonction verifier
    $envoi.click(function (e) {
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        // puis on lance la fonction de vérification sur tous les champs :
        verifier($pseudo);
        verifier($mdp);
        verifier($confirmation);
        verifier($mail);
    });

    $reset.click(function () {
        /*$champ.css({ // on remet le style des champs comme on l'avait défini dans le style CSS
            borderColor: '#2980b9',
            color: '#555'
        });
        $erreur.css('display', 'none'); // on prend soin de cacher le message d'erreur*/
        location.reload();
    });

    
    //on vérifie que tous les champs sont remplis
    function verifier(champ) {
        if (champ.val() == "") { // si le champ est vide
            $erreur.css('display', 'block'); // on affiche le message d'erreur
            champ.css({ // on rend le champ rouge
                borderColor: 'red',
                color: 'red'
            });
        }
    }


});
