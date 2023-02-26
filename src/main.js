import { angularModel } from "./models/angular/angular.model.js";
import { logService } from "./services/log.service.js";




const projectPath = angularModel.createProject({ name: 'angular'});
angularModel.initialDelete();

logService.print(`*** Angular Project Generator Done.`)