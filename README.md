# Shorty

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/shorty?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/shorty/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/shory/workflows/Lint/badge.svg)

You can get this package by [nest.land](https://nest.land/package/shorty),
[deno.land](https://deno.land/x/shorty) or [denopkg](https://denopkg.com/UltiRequiem/shorty/mod.ts).

## Usage

This package exposes just one function, [shorty](https://github.com/UltiRequiem/shorty/blob/main/mod.ts#L3).

```typescript
import shorty from "https://deno.land/x/shorty/mod.ts";

const shortUrl = await shorty("https://github.com/UltiRequiem/shorty");

console.log(shortUrl); // https://cleanuri.com/OjXAO1
```

### License

[This project](https://deno.land/x/template) is licensed under the
[MIT License](./LICENSE.md).
