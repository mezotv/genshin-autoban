const GenshinClient = require("./src/util/client");
const ChalkAdvanced = require("chalk-advanced");

const client = new GenshinClient();

client.loginBot().then(() => {
  console.log(
    `${ChalkAdvanced.white("GenshinClient Bot")} ${ChalkAdvanced.gray(
      ">"
    )} ${ChalkAdvanced.green("Bot sucessfully started. ")}`
  );
});
