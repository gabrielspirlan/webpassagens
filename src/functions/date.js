function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

export default function formatDate(date) {
    const d = zeroFill(date.getDate());
    const mo = zeroFill(date.getMonth() + 1);
    const y = zeroFill(date.getFullYear());
    const h = zeroFill(date.getHours());
    const mi = zeroFill(date.getMinutes());
    // const s = zeroFill(date.getSeconds());

    return `${h}:${mi}h do dia ${d}/${mo}/${y} `;
}

