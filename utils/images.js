const { normalizeUrl } = require("./url");

function isUsefulImage(url) {
    if (!url) return false;

    const lower = url.toLowerCase();

    if (!lower.match(/\.(jpg|jpeg)$/)) return false;

    const blacklist = ["icon", "logo", "banner", "header"];
    if (blacklist.some(w => lower.includes(w))) return false;

    return true;
}

function extractImages($, url) {
    return $("img")
        .map((i, el) => {
            const src = $(el).attr("src");
            const full = normalizeUrl(src, url);
            return isUsefulImage(full) ? full : null;
        })
        .get()
        .filter(Boolean);
}

module.exports = { extractImages };