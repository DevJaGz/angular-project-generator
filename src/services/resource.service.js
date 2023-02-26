import { existsSync, unlinkSync } from 'fs';


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

}


/**
 * Singleton
 */
export const resourceService = Object.freeze(new ResourceService())