### THE STORY

Since new RegExp() not doing [Escaping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping) when we instantiate the RegExp class in javascript. So, in order to not forget this, i created this module as a remainder.

This module will escape the **STRING** when we instantiated the RegExp with this syntax: 

```
const regexInstance = RegExp.getInstance(STRING)
```

### HOW TO INSTALL

```
npm install @aikosia/escape-regex-factory
```

### HOW TO USE

``` 
import "@aikosia/escape-regex-factory";
```

### EXAMPLE

```
console.log("Hi, ${name}!".replace(RegExp.getInstance("${name}"),"jen"));//Hi, jen!
console.log("Hi, ${name}. ${name}, how are you?".replace(RegExp.getInstance("${name}","g"),"jen"));//Hi jen. jen, how are you?
```

More usage on: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>


