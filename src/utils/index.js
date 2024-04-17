/**
 * This utility function converts a timestamp string into the desired datetime string format in Indian time zone
 * @param {string} timestamp - The timestamp string to be converted
 * @returns {string} - A string containing the datetime in the desired format
 */
 export function formatDateTime(timestamp) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // deriving the date from timestamp
    const date = new Date(timestamp);
    const day = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Format single-digit hours and minutes with leading zeros
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert 0 to 12 for AM/PM display
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${day}, ${dayOfMonth} ${month} ${formattedHours}:${formattedMinutes} ${ampm}`;
}