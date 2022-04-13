export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split('h').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;
}