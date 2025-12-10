import greet from "./greetings.js";
import { add, circleArea, PI } from "./math.js";
import { renderDemo } from "./render.js";
import { average, max, min } from "./stats.js";

const names = ["Toby", "Sam", "Alex"];
const greetingExamples = names.map((name) => greet(name));

const mathExamples = [
  `10 + 20 = ${add(10, 20)}`,
  `3 + 7 = ${add(3, 7)}`,
  `Area of r=5 using PI (${PI}) = ${circleArea(5).toFixed(2)}`,
];

const dataset = [2, 5, 8, 3, 10, 4];
const statsExamples = [
  `Numbers: ${dataset.join(", ")}`,
  `Average = ${average(dataset).toFixed(2)}`,
  `Min / Max = ${min(dataset)} / ${max(dataset)}`,
];

const orchestrationNotes = [
  'index.js imports "greetings.js", "math.js", dan "stats.js".',
  'UI concerns di "render.js" saja; data sudah disiapkan sebelum di-render.',
  "Module - module tetap terfokus pada satu fungsi; index.js hanya mengkoordinasikan flow nya.",
];

renderDemo("Demo ES6 Modules", [
  {
    label: "Greeting module",
    description: "Logika greeting reusable yang di sisihkan ke satu module.",
    items: greetingExamples,
  },
  {
    label: "Math module",
    description:
      "Berisi reusable math functions dan constanta matematika yang bisa terpakai lagi.",
    items: mathExamples,
  },
  {
    label: "Stats module",
    description:
      "Merangkum dataset kecil tanpa menyentuh UI atau logic lain.",
    items: statsExamples,
  },
  {
    label: "Index.js (Orchestrator)",
    description:
      "File index.js `orkestrasi` atau menghubungkan semua modul menjadi satu.",
    items: orchestrationNotes,
  },
]);

console.info("Greeting outputs:", greetingExamples);
console.info("Math outputs:", mathExamples);
console.info("Stats outputs:", statsExamples);
