const { extractImages } = require("../utils/images");

function extractTitle($, url) {
    return (
        $("font[size='4']").first().text().trim() ||
        $("b").first().text().trim() ||
        url.split("/").pop().replace(".html", "")
    );
}

function extractFamily(text) {
    const match = text.match(/familia\s+([a-záéíóúñ]+)/i);
    return match ? match[1] : "Desconocida";
}

function parseSpecies(url, $) {
    const text = $("body").text().replace(/\s+/g, " ").trim();

    if (text.length < 150) return null;

    return {
        scientific_name: extractTitle($, url),
        family: extractFamily(text),
        description: text,
        images: extractImages($, url),
        source_url: url
    };
}

module.exports = { parseSpecies };