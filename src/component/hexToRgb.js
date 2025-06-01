export default function hexToRgb(hex) {
    let sub = hex.startsWith('#') ? hex.substring(1) : hex;
    
    const r = parseInt(sub.substring(0, 2), 16);
    const g = parseInt(sub.substring(2, 4), 16);
    const b = parseInt(sub.substring(4, 6), 16);

    return { r, g, b };
}