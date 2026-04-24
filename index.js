const { crawl } = require("./core/crawler");
const { START_URL } = require("./config");

(async () => {
    console.log("  Iniciando crawler modular...\n");

    await crawl(START_URL);

    console.log("\n  Finalizado");
})();