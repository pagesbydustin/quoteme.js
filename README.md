## quoteme.js
____________________

quoteme.js is a way to decorate your quotes on your site. It is:

+ Simple
+ Fast
+ Fun
+ Free


### Usage
HTML
```html
<head>
<!-- add jQuery library -->
    <script src="js/jquery.min.js"></script>
<!-- add jQuery quoteme.js plugin -->
    <script src="js/jQuery.quoteme.js"></script>
</head>

<body>
    <div id="container" style="width:75%; margin:auto auto">
        <h1>Quotes</h1>
        <p>No quote</p>
        <p><span class="quote" data-author="H.W.Longfellow">"It takes less time to do a thing right, than it does to explain why you did it wrong."</span></p>
        <p><span class="quote">"Hello World!"</span> is what he said.</p>
        <div>
            <p>A new <span class="quote red">"DIV"</span> and <span class="quote blue">"P"</span> tag to test with</p>
        </div>
    </div>
</body>
```
JavaScript
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
  //color #ff208c along with the name of the author
    $("span.quote.red").quoteme({
        textColor       : "red",
        backgroundColor : "white",
        borderColor     : "red",
        boxShadowColor  : "#ff208c",
        author          : "Me"
    })
});
```

### Options

+ backgroundColor
+ cornerRadius
+ borderWidth
+ borderStyle
+ borderColor
+ textColor
+ boxShadowColor
+ author