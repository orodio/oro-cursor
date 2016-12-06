```javascript
import cursor from "oro-cursor"

cursor([1, "bob", 2, "pat"]) // [1, "bob", 2, "pat"]
cursor("1|bob|2|pat")        // [1, "bob", 2, "pat"]

cursor`1|bob|2|pat`          // [1, "bob", 2, "pat"]

var a = "bob"
cursor(`1|${ a }|2|pat`)   // [1, "bob", 2, "pat"]
cursor`1|${ a }|2|pat`     // [1, "bob", 2, "pat"]
cursor([1, bob, 2, "pat"]) // [1, "bob", 2, "pat"]
```
