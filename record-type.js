import rr from "./railroad.js";
import { ident, typeExpr } from "./defs.js";

rr.Diagram(
  rr.Sequence(
    "{",
    rr.OneOrMore(rr.Sequence(ident, ":", typeExpr), ";"),
    "}",
  )
).addTo(document.getElementById("record-type-diagram"));
