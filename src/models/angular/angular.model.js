import { buildPath } from "../../constants/project.constant.js";
import { executionService } from "../../services/execution.service.js";


/**
 * Handle the Angular base project
 */
class AngularModel{
    #angularVersion = 14
    #appName = 'angular-application'

    /**
     * Create the Angular Project
     * @param { name: String, version: String} - Params to create the project
     */
    createProject({ name, version } = {}){
        const command = `npx @angular/cli@${version || this.#angularVersion} new ${name || this.#appName} --force --skip-install --strict --style=scss --routing --prefix=app --defaults --collection=@schematics/angular --new-project-root="${buildPath}`;
        executionService.runSync(command)
    }
}

/**
 * Singleton
 */
export const angularModel = Object.freeze(new AngularModel())