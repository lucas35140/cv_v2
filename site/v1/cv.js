
//script Formation


	// On attend que la page soit chargée 
	jQuery(document).ready(function()
	{
	   // On cache la zone de texte
	   jQuery('#mc-description').hide();
	   // toggle() lorsque le lien avec l'ID #toggler est cliqué
	   jQuery('a#mc-lien').click(function()
	  {
	      jQuery('#mc-description').toggle(400);
	      return false;
	   });
	});

	jQuery(document).ready(function()
	{
	   // On cache la zone de texte
	   jQuery('#bac-description').hide();
	   // toggle() lorsque le lien avec l'ID #toggler est cliqué
	   jQuery('a#bac-lien').click(function()
	  {
	      jQuery('#bac-description').toggle(400);
	      return false;
	   });
	});
	jQuery(document).ready(function()
	{
	   // On cache la zone de texte
	   jQuery('#brevet-description').hide();
	   // toggle() lorsque le lien avec l'ID #toggler est cliqué
	   jQuery('a#brevet-lien').click(function()
	  {
	      jQuery('#brevet-description').toggle(400);
	      return false;
	   });
	});
	jQuery(document).ready(function()
	{
	   // On cache la zone de texte
	   jQuery('#autres-description').hide();
	   // toggle() lorsque le lien avec l'ID #toggler est cliqué
	   jQuery('a#autres-lien').click(function()
	  {
	      jQuery('#autres-description').toggle(400);
	      return false;
	   });
	});
	/* ]]> */ 


// fin script formation

//script bar de skill
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

//fin skill bar

//debut scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//fin scroll



//effet popup

