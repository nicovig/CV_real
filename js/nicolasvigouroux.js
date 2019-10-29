$(function(){
    var words = [
        'un developpeur',
        'un créatif'
    ];
    i=0;


    //On gère l'affiche du menu responsive pour les écrans inférieux ou égaux à md (>992px);
    $(".navbar-responsive").toggle();

    $(".menu").click(function() {
        $(".navbar-responsive").toggle("slow");
    });
    //On gère l'affichage aléatoire des phrases d'accroche du header (toutes les 3.5sec)
    setInterval(function () {
        $("#word").fadeOut(function () {
            $(this).html(words[ i = (i+1)% words.length]).fadeIn();
        });
    }, 3500);


    //On gère le scroll vers le différentes parties du site
    $(".scroll").click(function () {
        var section = $("."+this.id)
        $("html, body").animate({scrollTop: section.offset().top}, 'slow');
        });

    //On gère l'affichage ralenti du HEADER
    window.sr= ScrollReveal();
    sr.reveal('.name',{
        origin:'left',
        duration: 6000,
    });

    window.sr= ScrollReveal();
    sr.reveal('.navbar',{
        origin:'left',
        duration: 6000,
        });

    window.sr= ScrollReveal();
    sr.reveal('.down-hand',{
        origin:'left',
        duration: 6000,
    });

});