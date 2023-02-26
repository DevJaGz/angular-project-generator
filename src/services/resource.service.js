import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'fs';


/**
 * Handle the Resources, like files and folders
 */
class ResourceService{

    /**
     * Delete a file
     * @param {String} path - Path of the file
     */
    deleteFile(path, throwError = true){
        try {
            if (existsSync(path)){
                unlinkSync(path);
                return true;
            }
            return false
          } 
        catch (error) {     
            if (throwError){
                throw new Error(`${new Date()} The file "${path}" could not be deleted BECAUSE: \n ${error}`)
            }
        }
    }

    /**
     * Read a file
     * @param {String} path - Path of the file
     */
    readFile(path, throwError = true){
        try {
            if (existsSync(path)){
                return readFileSync(path, { encoding: 'utf-8' });
            }
            return null
          } 
        catch (error) {     
            if (throwError){
                throw new Error(`${new Date()} The file "${path}" could not be read BECAUSE: \n ${error}`)
            }
        }
    }

    /**
     * Write a file
     * @param {String} path - Path of the file
     * @param {String} value - Value to write in the file
     */
    writeFile(path, value,  throwError = true){
        try {
            if (existsSync(path)){
                writeFileSync(path,value )
                return true
            }
            return null
          } 
        catch (error) {     
            if (throwError){
                throw new Error(`${new Date()} The file "${path}" could write the file BECAUSE: \n ${error}`)
            }
        }
    }    

}


/**
 * Singleton
 */
export const resourceService = Object.freeze(new ResourceService())