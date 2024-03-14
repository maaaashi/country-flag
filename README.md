# country Flag

![preview](./docs/images/preview.png)

<div align="center">Github repository containing the source code for country Flag Component</div>

<p align="center">

<a href="https://twitter.com/pg_maaaashi" rel="nofollow">
  <img src="https://img.shields.io/badge/created%20by-@pg_maaaashi-4BBAAB.svg" alt="created by X@pg_maaaashi">
</a>

# Table of Contents

- [country Flag](#country-flag)
- [Table of Contents](#table-of-contents)
- [Usage](#usage)
  - [script src](#script-src)
  - [npm](#npm)

# Usage

```html
<!-- 日本の国旗 -->
<country-flag></country-flag>
<!-- 艶やかなデザインに -->
<country-flag type="shiny"></country-flag>
<!-- アメリカの国旗 -->
<country-flag code="US"></country-flag>
<!-- 24pxで表示 -->
<country-flag size=24></country-flag>
```

## script src

```html
<head>
  <script src="https://maaaashi.github.io/country-flag/bundle.js"></script>
</head>
<body>
  <country-flag></country-flag>
</body>
```

## npm

```
$ npm install @maaaashi/country-flag
```

```jsx
import '@maaaashi/country-flag'

<country-flag></country-flag>
```