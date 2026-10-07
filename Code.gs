function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("SNAKE HOLES")
    .addItem("Play Game", "openGame")
    .addToUi();
}

function openGame() {
  const html = HtmlService.createHtmlOutputFromFile("Index")
    .setWidth(1000)
    .setHeight(750);
  SpreadsheetApp.getUi().showModalDialog(html, "Snake Holes");
}
