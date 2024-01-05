import rr from "./railroad.js";

rr.Diagram(
  rr.Choice(0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"),
).addTo(document.getElementById("number-literal-diagram"));
