//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {Command} from "../Command";
import {CliLogger} from "../../utils/CliLogger";

// Config file:
const CFG:any = require("../../../config/glasscat-install-config.json");

/**
 * The <code>GlassCatVersion</code> displays the default GlassCat version used
 * for installing GlassCat servers with the <code>jec glasscat-install</code>
 * command.
 */
export class GlassCatVersion implements Command {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>GlassCatVersion</code> instance.
   */
  constructor() {}

  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public run(argv:any):void {
    const logger:CliLogger = CliLogger.getInstance();
    logger.log(`Default GlassCat version: ${CFG.version}.`);
  }
}