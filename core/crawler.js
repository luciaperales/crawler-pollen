const cheerio = require("cheerio");
const { fetch } = require("../utils/http");
const { normalizeUrl } = require("../utils/url");
const { isSpeciesPage } = require("../utils/filters");
const { parseSpecies } = require("../parsers/species");
const { save } = require("../utils/save");
const { DELAY } = require("../config");

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function crawl(startUrl) {
    const visited = new Set();
    const queue = [startUrl];
    const results = [];

    while (queue.length) {
        const url = queue.shift();
        if (visited.has(url)) continue;
        visited.add(url);

        console.log("→", url);

        try {
            const html = await fetch(url);
            const $ = cheerio.load(html);

            if (isSpeciesPage(url, $)) {
                const data = parseSpecies(url, $);

                if (data) {
                    results.push(data);
                    console.log(`   ✔ ${data.scientific_name} (${data.images.length})`);

                    if (results.length % 5 === 0) {
                        save(results);
                    }
                }
            }

            $("a[href$='.html']").each((i, el) => {
                const link = normalizeUrl($(el).attr("href"), url);
                if (link && !visited.has(link)) {
                    queue.push(link);
                }
            });

            await sleep(DELAY);

        } catch (err) {
            console.log("   ✖", err.message);
        }
    }

    save(results);
    return results;
}

module.exports = { crawl };