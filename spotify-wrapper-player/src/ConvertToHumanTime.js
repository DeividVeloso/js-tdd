export default function convertToHumanTime(duration) {
    let s = parseInt((duration / 1000) % 60, 10);
    console.log("Segundos", s)
    return '0:00'
}