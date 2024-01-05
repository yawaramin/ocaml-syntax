import rr from "./railroad.js";

rr.Diagram(
  rr.HorizontalChoice(
    rr.Choice(0, "A", "B", "C", "D", "E"),
    rr.Choice(0, "F", "G", "H", "I", "J"),
    rr.Choice(0, "K", "L", "M", "N", "O"),
    rr.Choice(0, "P", "Q", "R", "S", "T"),
    rr.Choice(0, "U", "V", "W", "X", "Y", "Z")),
).addTo(document.getElementById("uppercase-letter-diagram"));
