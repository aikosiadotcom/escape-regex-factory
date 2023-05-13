### INTRODUCTION

Since new RegExp() not doing [Escaping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping) in javascript. So, in order to not forget this, i created this module as a remainder.

### HOW TO INSTALL

```
npm install @aikosia/escape-regex-factory
```

### HOW TO USE

```
import * from "@aikosia/escape-regex-factory"
```

### EXAMPLE

```
console.log("Hi, ${name}!".replace(RegExp.getInstance("${name}"),"jen"));//Hi, jen!
console.log("Hi, ${name}. ${name}, how are you?".replace(RegExp.getInstance("${name}","g"),"jen"));//Hi jen. jen, how are you?
```

More usage on: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>


