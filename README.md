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

<h3>Usage</h3>

```javascript
$(document).ready(function(){
                $("span.quote").quoteme();
                $("span.quote.blue").quoteme({
                    textColor       : "blue",
                    backgroundColor : "white"
                });
                $("span.quote.red").quoteme({
                    textColor       : "red",
                    backgroundColor : "white",
                    borderColor     : "red",
                    boxShadowColor  : "#ff208c"
                });
            });
```