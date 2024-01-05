import rr from "./railroad.js";
import { module, moduleIdent, moduleType, typeVar, ident, typeExpr, expr, pat } from "./defs.js";

rr.Diagram(
  rr.Sequence(
    "struct",
    rr.OneOrMore(
      rr.Choice(0,
        rr.Sequence(rr.Choice(0, "open", "open!"), module),
        rr.Sequence("include", module),
        rr.Sequence("module", moduleIdent, "=", module),
        rr.Sequence("module type", moduleIdent, "=", moduleType),
        rr.Sequence(
          "type",
          rr.Choice(0,
            rr.Skip(),
            typeVar,
            rr.Sequence("(", rr.OneOrMore(typeVar, ","), ")")),
          ident,
          "=",
          rr.Choice(0,
            typeExpr,
            rr.NonTerminal("record_type", { href: "#record_type" }),
            rr.NonTerminal("variant_type", { href: "#variant_type" }),
            rr.NonTerminal("polyvar_type", { href: "#polyvar_type" }),
            rr.NonTerminal("object_type", { href: "#object_type" }),
          )
        ),
        rr.Sequence(
          "let",
          rr.Choice(0, pat, rr.Sequence(ident, rr.ZeroOrMore(pat))),
          "=",
          expr,
        )
      )),
    "end")).addTo(document.getElementById("module-diagram"));
