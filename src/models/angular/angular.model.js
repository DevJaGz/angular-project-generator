import path from "path";
import { buildPath, builFolderName } from "../../constants/project.constant.js";
import { executionService } from "../../services/execution.service.js";
import { logService } from "../../services/log.service.js";

/**
 * Handle the Angular base project
 */
class AngularModel{
    #angularVersion = 14
    #appName = 'angular-application'

    /**
     * Create the Angular Project
     * @param { name: String, version: String } - Params to create the project
     * @param {String} - showLogs - If it is true, show the logs in the method
     * @returns - Root path where is the angular project generated (Project path)
     */
    createProject({ name, version } = {}, showLogs = true){
        const appName = name || this.#appName;
        const angularVersion =  version || this.#angularVersion

        if (showLogs){
            logService.print(`Creating Angular project....\n\tName: "${appName}"\n\tVersion: "${angularVersion}"`)
        }

        const command = `npx @angular/cli@${angularVersion} new ${appName} --force --skip-install --strict --style=scss --routing --prefix=app --defaults --collection=@schematics/angular --directory="./${builFolderName}/${appName}"`;
        executionService.runSync(command)

        const projectPath = path.resolve(buildPath, appName);

        if (showLogs){
            logService.print(`Angular Project created in ${projectPath}`)
        }        
        return projectPath
    }

}

/**
 * Singleton
 */
export const angularModel = Object.freeze(new AngularModel())