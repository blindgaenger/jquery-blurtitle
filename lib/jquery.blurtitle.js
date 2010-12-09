(function($){
  $.fn.blurTitle = function(options) {
  
    // pass the options variable to the function  
    var defaults = {
        blurClass: 'blur',
        titleAttribute: 'title'
    }  
    var settings = $.extend(defaults, options);  

    return this.each(function() {
      var context = $(this);        
      var blurClass = settings['blurClass'];
      var titleAttribute = settings['titleAttribute'];

      var blurred = function() {
        if (context.val().trim().length == 0 || context.val() == context.attr(titleAttribute)) { 
          context.val(context.attr(titleAttribute));
          context.addClass(blurClass);
        }
      }

      var focused = function() {
        if (context.val() == context.attr(titleAttribute)) { 
          context.val('');
        }
        context.removeClass(blurClass);
      }

      context.parents('form').submit(focused);
      context.focus(focused);
      context.blur(blurred);
      if (document.activeElement != context.get(0)) {
        blurred();
      }
            
    }); // this.each

  };
})(jQuery);
