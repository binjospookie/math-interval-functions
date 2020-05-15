# math-interval-functions
![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
![Version](https://badgen.net/npm/v/math-interval-functions)
![CI](https://github.com/binjospookie/math-interval-functions/workflows/Build/badge.svg)

A tiny (109 bytes) and blazing fast solution for operations on intervals.

## Installation
`npm i math-interval-functions`

## Functions
### inInterval
Check that value belongs to the interval.

#### Examples
```javascript
inInterval({ interval: '(1,5)', value: 1 }); // false
inInterval({ interval: '[1,5)', value: 1 }); // true
inInterval({ interval: '[1,5)', value: 5 }); // false
inInterval({ interval: '[1,5]', value: 5 }); // true
inInterval({ interval: '(1,5]', value: 5 }); // true
inInterval({ interval: '(,5]', value: 5 }); // true
inInterval({ interval: '(,5]', value: 1 }); // true
inInterval({ interval: '123jkvb12h3b12h3', value: 1 }); // false
inInterval({ interval: '[-10,0]', value: -5 }); // true
inInterval({ interval: '[-10,0]', value: 1 }); // false
```

### Addition
WIP
### Subtraction
WIP
### Multiplication
WIP
### Division
WIP

## Benchmarks
```
inInterval: 8,857,180 ops/sec
```
