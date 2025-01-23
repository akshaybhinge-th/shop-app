/**
 * Truncates a given string to a specified length and appends an ellipsis ("...") if the string exceeds that length.
 * If the input string is empty or null, it returns an empty string.
 * If the input string length is less than or equal to 6, it returns the original string.
 *
 * @param params - The input string to be truncated.
 * @param length - The maximum allowed length of the truncated string.
 * @returns The truncated string with "..." appended if it exceeds the specified length, or the original string if not.
 */

export function truncateText(params:string, length:number):string {
    if(!params) return "";
    if(params.length <= 6) return params;
    return params.length > length ? params.substring(0, length) + "..." : params;
}