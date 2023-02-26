import { execSync } from 'child_process';

/**
 * Handle the logic of execution commands
 */
class ExecutionService {

    /**
     * 
     * @param {string} command - Command to run
     * @param {Object} options - execSync options - https://nodejs.org/api/child_process.html#child_processexecsynccommand-options
     */
    runSync(command, options){
        const execSyncOptions = options || { stdio: 'inherit' }
        execSync(command, execSyncOptions);
    }
}

/**
 * Singleton
 */
export const executionService = Object.freeze(new ExecutionService())