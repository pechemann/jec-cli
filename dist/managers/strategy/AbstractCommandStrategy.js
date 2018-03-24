"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigParser_1 = require("../../utils/ConfigParser");
const minimist = require("minimist");
const path = require("path");
const HelpManager_1 = require("../HelpManager");
class AbstractCommandStrategy {
    constructor(version) {
        this.__argv = null;
        this.__version = null;
        this.__commands = null;
        this.__parser = null;
        this.initObj(version);
    }
    initObj(version) {
        this.__version = version;
        this.__commands = new Map();
        this.__argv = minimist(process.argv.slice(2));
        this.__parser = new ConfigParser_1.ConfigParser();
    }
    initCommands(config) {
        const cfg = this.__parser.parse(config);
        let len = cfg.length;
        let cmd = null;
        while (len--) {
            cmd = cfg[len];
            this.__commands.set(cmd.command, cmd);
            this.__commands.set(cmd.alias, cmd);
        }
    }
    invokeCommand() {
        const commandName = this.__argv._[0];
        const cmd = this.__commands.get(commandName.toLowerCase());
        if (cmd) {
            if (cmd.command === "help" || cmd.alias === "h") {
                HelpManager_1.HelpManager.build().showHelp(this.__argv, this.__commands);
            }
            else {
                const module = require(path.join("../../scripts", cmd.action));
                module.run(this.__argv);
            }
        }
        else {
            HelpManager_1.HelpManager.build().showSummary(this.__commands);
        }
    }
}
exports.AbstractCommandStrategy = AbstractCommandStrategy;
