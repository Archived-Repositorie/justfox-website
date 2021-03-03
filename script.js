//JustFox 2021
async function main() {
  var firstTime = localStorage.getItem("first_time");
  const mainText = document.getElementById("mainText");

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const text = "JustFox!";
  const textTable = [""];
  for (let i = 0; i < text.length; i++) {
    textTable.push(textTable[i] + text[i]);
  }
  async function words() {
    for (var i = 0; i < text.length; i++) {
      mainText.innerHTML = textTable[i] + "_";
      await sleep(800);
    }
    return (mainText.innerHTML = text);
  }
  async function wordsUndo() {
    for (var i = text.length; i <= text.length; i--) {
      mainText.innerHTML = textTable[i].replace(undefined, "") + "_";
      await sleep(800);
    }
    return (mainText.innerHTML = "_");
  }
  while (true) {
    words();
    await sleep(1600 * text.length);
    wordsUndo();
    await sleep(1600 * text.length);
  }
}
main();
