import rr from "./railroad.js";
import { lowercaseLetter, numberLiteral, uppercaseLetter } from "./defs.js";

rr.Diagram(
  rr.Sequence(
    uppercaseLetter,
    rr.OneOrMore(rr.Choice(0, "_", uppercaseLetter, lowercaseLetter, numberLiteral)),
  )
).addTo(document.getElementById("module-ident-diagram"));
