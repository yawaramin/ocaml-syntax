import rr from "./railroad.js";

rr.Diagram(
  rr.HorizontalChoice(
    rr.Choice(0, "a", "b", "c", "d", "e"),
    rr.Choice(0, "f", "g", "h", "i", "j"),
    rr.Choice(0, "k", "l", "m", "n", "o"),
    rr.Choice(0, "p", "q", "r", "s", "t"),
    rr.Choice(0, "u", "v", "w", "x", "y", "z")),
).addTo(document.getElementById("lowercase-letter-diagram"));
