const fs = require("fs");
const { OUTPUT } = require("../config");

function save(data) {
    fs.writeFileSync(OUTPUT, JSON.stringify(data, null, 2));
    console.log(`💾 Guardado: ${data.length}`);
}

module.exports = { save };