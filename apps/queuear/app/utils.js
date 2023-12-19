export function titleCase(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}
