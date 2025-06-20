function transcriptIt() {
  const button = document.querySelector("button.rounded-full.w-\\[32px\\]");
  if (!button) {
    console.warn("Button not found.");
  }

  button.click();

  const transList = document.querySelector("ul.flex.flex-col.px-4.pb-4");
  if (!transList) {
    console.warn("List not found.");
  }

  const items = transList.children;
  const fullText = Array.from(items)
    .map((el) => el.innerText.trim())
    .join("\n");

  return fullText;
}
