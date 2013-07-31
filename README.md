<h1>quoteme.js</h1>
<hr/>
<p>
quoteme.js is a way to decorate your quotes on your site. It is:
</p>
<ul>
 <li>Simple</li>
 <li>Fast</li>
 <li>Fun</li>
</ul>

### Usage

```javascript
$(document).ready(function(){
  //Select a span tag with the class of quote and add quoteme()
    $("span.quote").quoteme();

  //Select a span tag with the class of quote and blue and add quoteme() 
  //with custom blue text and white background
    $("span.quote.blue").quoteme({
        textColor       : "blue",
        backgroundColor : "white"
    });

  //Select a span tag with the class of quote and red and add quoteme() 
  //with custom red text, white background, red border color and a boxShadow 
  //color #ff208c
    $("span.quote.red").quoteme({
        textColor       : "red",
        backgroundColor : "white",
        borderColor     : "red",
        boxShadowColor  : "#ff208c"
    });
});
```

### Options