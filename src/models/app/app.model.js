import path from "path";
import { logService } from "../../services/log.service.js";
import { resourceService } from "../../services/resource.service.js";

/**
 * Handle the app  
 */
class AppModel {

    #tsName = 'app.component.ts'
    #templateName = 'app.component.html'
    #styleName = 'app.component.scss'
    #specName = 'app.component.spec.ts'

    /**
     * Delete app.component.spec.ts file
    * @param {String} projectPath - Path where is the generated project* 
     * @param {Boolean} - showLogs - If it is true, show the logs in the method
     */
    deleteAppComponentSpec(projectPath, showLogs){
        const fileName = this.#specName;
        logService.print(`Deleting "${fileName}" file...`, showLogs)
        const filePath = path.join(projectPath, 'src', 'app', fileName)
        if (resourceService.deleteFile(filePath)){
            logService.print(`"${fileName}" DELETED`, showLogs)
        } 
    }

    /**
     * Delete app.component.scss file
    * @param {String} projectPath - Path where is the generated project
     * @param {Boolean} - showLogs - If it is true, show the logs in the method
     */
    deleteAppComponentStyle(projectPath, showLogs){
        const fileName = this.#styleName;
        logService.print(`Deleting "${fileName}" file...`, showLogs)
        const filePath = path.join(projectPath, 'src', 'app', fileName)
        if (resourceService.deleteFile(filePath)){
            logService.print(`"${fileName}" DELETED`, showLogs)
            const appComponentTsContent = this.#readAppComponentTs(projectPath, showLogs)
            if (appComponentTsContent){
                const regex = new RegExp(`styleUrls: \\['\\.\\/(${fileName})'\\]`);
                const appComponentTsContentUpdated = appComponentTsContent.replace(regex, '')
                this.#writeAppComponentTs(projectPath, appComponentTsContentUpdated)
            }
        } 
    }


    /**
     * Read the content inside of app.component.ts
     * @param {String} projectPath - Path where is the generated project
     * @param {Boolean} showLogs - True for show the logs
     * @returns The content in the app.component.ts
     */
    #readAppComponentTs(projectPath, showLogs){
        const fileName = this.#tsName;
        const componentPath = path.join(projectPath, 'src', 'app', fileName)
        return resourceService.readFile(componentPath);
    }



    /**
     * Overwrite the content inside of app.component.ts
     * @param {String} projectPath - Path where is the generated project
     * @param {String} value - Value to write in the file
     * @param {Boolean} showLogs - True for show the logs
     */    
    #writeAppComponentTs(projectPath, value, showLogs){
        const fileName = this.#tsName;
        const componentPath = path.join(projectPath, 'src', 'app', fileName)        
        resourceService.writeFile(componentPath, value)
    }
}

/**
 * Singleton
 */
export const appModel = Object.freeze(new AppModel())