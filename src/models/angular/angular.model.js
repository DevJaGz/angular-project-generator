import path from "path";
import { buildPath, builFolderName } from "../../constants/project.constant.js";
import { executionService } from "../../services/execution.service.js";
import { logService } from "../../services/log.service.js";
import { resourceService } from "../../services/resource.service.js";


/**
 * Handle the Angular base project
 */
class AngularModel{
    #angularVersion = 14
    #appName = 'angular-application'
    #projectPath = null;

    /**
     * Create the Angular Project
     * @param { name: String, version: String } - Params to create the project
     * @param {Boolean} - showLogs - If it is true, show the logs in the method
     * @returns - Root path where is the angular project generated (Project path)
     */
    createProject({ name, version } = {}, showLogs = true){
        const appName = name || this.#appName;
        const angularVersion =  version || this.#angularVersion

        logService.print(`Creating Angular project...\n\tName: "${appName}"\n\tVersion: "${angularVersion}"`, showLogs)

        const command = `npx @angular/cli@${angularVersion} new ${appName} --force --skip-install --strict --style=scss --routing --prefix=app --defaults --collection=@schematics/angular --directory="./${builFolderName}/${appName}"`;
        executionService.runSync(command)

        const projectPath = path.resolve(buildPath, appName);
        this.#projectPath = projectPath;

        logService.print(`Angular Project created in ${projectPath}`, showLogs)  
        return projectPath
    }

    /**
     * Delete initial files or folders
     * @param {Boolean} - showLogs - If it is true, show the logs in the method
     */
    initialDelete(showLogs = true){
        const projectPath = this.#projectPath 
        if (projectPath){
            logService.print(`Deleting intial files...`, showLogs)
            this.#deleteAppSpec(showLogs)
        }
    }

    /**
     * Delete app.component.spec.ts file
     * @param {Boolean} - showLogs - If it is true, show the logs in the method
     */
    #deleteAppSpec(showLogs){
        logService.print(`Deleting "app.component.spec.ts" file...`, showLogs)
        const filePath = path.join(this.#projectPath, 'src', 'app', 'app.component.spec.ts')
        if (resourceService.deleteFile(filePath)){
            logService.print(`"app.component.spec.ts" DELETED`, showLogs)
        } 
    }

}

/**
 * Singleton
 */
export const angularModel = Object.freeze(new AngularModel())