# jQuery BlurTitle

A simple jQuery plugin to show an alternative text for input elements.

## Usage

Create an input element and set the title attribute.

    <input name="name" type="text" title="What's your name?"></input>

Now call `blurTitle()` and the title attribute will be shown. When the input gets the focus the title disappears.

    $(document).ready(function() {
      $('form input[title]').blurTitle();
    });

Additionally the input will get the `.blur` class, so you can use some styles.
    
    <style type="text/css">
      input[type=text].blur, textarea.blur {
        font-style:italic;
        color:#999;
      }
    </style>
    
Or even change the `blurClass` and `titleAttribute` if you like or need to.

    $('form input[message]').blurTitle({
      blurClass: 'inactive',
      titleAttribute: 'message'
    });

That's it!

## Examples

You can find some examples in the `examples` folder.

## Author

Copyright 2010 by [blindgaenger](http://blindgaenger.net)