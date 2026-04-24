const { BASE } = require("../config");

function normalizeUrl(href, current) {
    if (!href || href.startsWith("#")) return null;

    try {
        const url = new URL(href, current).href;
        return url.startsWith(BASE) ? url : null;
    } catch {
        return null;
    }
}

module.exports = { normalizeUrl };