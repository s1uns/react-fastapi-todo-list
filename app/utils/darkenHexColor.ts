export const darkenHexColor = (hex: string, percent: number) => {
    hex = hex.replace("#", "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    let darkenAmount = Math.round((255 * percent) / 100);

    r = Math.max(0, r - darkenAmount);
    g = Math.max(0, g - darkenAmount);
    b = Math.max(0, b - darkenAmount);

    let darkenedHex =
        "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    return darkenedHex;
};
