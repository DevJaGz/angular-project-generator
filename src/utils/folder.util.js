
/**
 * Get the folder path where is located the file
 * @param {string} metaURL - Meta URL of a file (import.meta.url)
 * @returns - Folder path 
 */
export const _dirPath = (metaURL) => {
    return new URL('.', metaURL).pathname;
}

/**
 * Get the file path where is located
 * @param {string} metaURL - Meta URL of a file (import.meta.url)
 * @returns - File path 
 */
export const _filePath = (metaURL) => {
    return new URL(metaURL).pathname;
}