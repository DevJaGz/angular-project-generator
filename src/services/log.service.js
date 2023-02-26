/**
 * Handle the logs
 */
class LogService {

    /**
     * Print a log in console
     * @param {String} value - Value to print using console.log
     */
    print(value, show = true, isCustom = true){
        if (show){
            if (isCustom){
                this.#printCustom(value);
                return
            }
            console.log(value);
        }
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