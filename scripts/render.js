const output = document.querySelector("[data-output]");

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

export function renderDemo(title, sections) {
  if (!output) return;

  const heading = createElement("h1", "title", title);
  output.appendChild(heading);

  sections.forEach(({ label, description, items }) => {
    const card = createElement("section", "card");
    card.appendChild(createElement("h2", "card__title", label));
    card.appendChild(createElement("p", "card__desc", description));

    const list = createElement("ul", "card__list");
    items.forEach((item) => list.appendChild(createElement("li", "", item)));
    card.appendChild(list);

    output.appendChild(card);
  });
}
