import { blue, bold, green, red } from "./deps.ts";
import shortify from "./mod.ts";

function getUrl(): string {
  if (Deno.args[0] === undefined) {
    console.log(red("You have to pass an URL"));
    Deno.exit();
  }

  return Deno.args[0];
}

async function main() {
  const URL = getUrl();
  const SHORT_URL = await shortify(URL);

  console.log(blue(bold("Original URL:")), URL);
  console.log(green(bold("Short URL:")), SHORT_URL);
}

if (import.meta.main) {
  main();
}
