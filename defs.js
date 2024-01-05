import rr from "./railroad.js";

export const expr = rr.NonTerminal("expr", { href: "#expr" });
export const ident = rr.NonTerminal("ident", { href: "#ident" });
export const lowercaseLetter = rr.NonTerminal("lowercase_letter", { href: "#lowercase-letter" });
export const module = rr.NonTerminal("module", { href: "#module" });
export const moduleIdent = rr.NonTerminal("module_ident", { href: "#module-ident" });
export const moduleType = rr.NonTerminal("module_type", { href: "#module-type" });
export const moduleTypeIdent = rr.NonTerminal("module_type_ident", { href: "#module-type-ident" });
export const numberLiteral = rr.NonTerminal("number_literal", { href: "#number-literal" });
export const pat = rr.NonTerminal("pat", { href: "#pat" });
export const typeExpr = rr.NonTerminal("type_expr", { href: "#type-expr" });
export const typeVar = rr.Sequence("'", ident);
export const uppercaseLetter = rr.NonTerminal("uppercase_letter", { href: "#uppercase-letter" });
