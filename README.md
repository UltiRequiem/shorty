# Shorty

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/shorty?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/shorty/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/shorty/workflows/Lint/badge.svg)

You can get this package by [nest.land](https://nest.land/package/shorty),
[deno.land](https://deno.land/x/shorty) or
[denopkg](https://denopkg.com/UltiRequiem/shorty/mod.ts).

## Usage

This package exposes just one function,
[shorty](https://github.com/UltiRequiem/shorty/blob/main/mod.ts#L3).

```typescript
import shorty from "https://deno.land/x/shorty/mod.ts";

const shortUrl = await shorty("https://github.com/UltiRequiem/shorty");

console.log(shortUrl); // https://cleanuri.com/OjXAO1
```

## CLI Tool

### Installation

- [deno.land/x](https://deno.land/x/shory/cli.ts):

```bash
deno install --allow-net https://deno.land/x/shorty/cli.ts
```

- [denopkg.com](https://denopkg.com/UltiRequiem/shorty/cli.ts):

```bash
deno install --allow-net https://denopkg.com/UltiRequiem/shorty/cli.ts
```

- [nest.land](https://x.nest.land/shorty/cli.ts):

```bash
deno install --allow-net https://x.nest.land/shorty@1.1.1/mod.ts
```

### Usage

```bash
$ shorty https://stackoverflow.com/questions/5717093
Original URL: https://stackoverflow.com/questions/5717093
Short URL: https://cleanuri.com/GeWAQO
```

> It is printed with colors :)

### License

[This project](https://deno.land/x/template) is licensed under the
[MIT License](./LICENSE.md).
