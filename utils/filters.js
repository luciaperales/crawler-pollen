function isIndexPage(url) {
    return (
        url.includes("letra") ||
        url.includes("index") ||
        url.includes("metodologia") ||
        url.includes("antecedentes") ||
        url.includes("contactos") ||
        url.includes("linea")
    );
}

function isSpeciesPage(url, $) {
    const text = $.text().toLowerCase();

    return (
        !isIndexPage(url) &&
        text.includes("polen") &&
        text.includes("tipo polínico")
    );
}

module.exports = { isSpeciesPage };