/**
 * Handle the logs
 */
class LogService {

    /**
     * Print a log in console
     * @param {String} value - Value to print using console.log
     */
    print(value, addCustom = true){
        if (addCustom){
            this.#printCustom(value);
            return
        }
        console.log(value);
    }


    /**
     * Print a log adding custom styles
     * @param {String} value - Value to print using console.log
     */
    #printCustom(value){
        console.log(`
___

${value}
___
            `);
    }
}


/**
 * Singleton
 */
export const logService = Object.freeze(new LogService())