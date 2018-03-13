Drupal.behaviors.linkitCustomization = {
  attach : function(context) {
    if(jQuery("#linkit-imce").length > 0 && jQuery(".label-browser").length == 0) {
      jQuery("#linkit-imce")
        .before('<label for="linkit-imce" class="label-browser">B. Upload a file to the website</label>')
        .addClass('button secondary');
      jQuery("button.linkit-insert.form-submit")
        .addClass('button')
        .prepend('<i class="icon icon-generic" data-icon="L"></i> ');
      jQuery("a#linkit-cancel")
        .addClass('medium-gray-color small margin-left-large')
        .prepend('<i class="icon icon-functional" data-icon="x"></i> ');
    }
  }
}
