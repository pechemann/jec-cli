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

import {CommandManager, AbstractCommandManager} from "jec-tool-cli";
import {JecCommandStrategy} from "./strategy/JecCommandStrategy";
import * as path from "path";

/**
 * The <code>JecCommandManager</code> class runs specific Jec commands depending
 * on users inputs.
 */
export class JecCommandManager extends AbstractCommandManager
                               implements CommandManager {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JecCommandManager</code> instance.
   * 
   * @param {string} processTitle the name of the  current process.
   */
  constructor(processTitle:string) {
    super(processTitle, path.resolve(__dirname, "../../package.json"));
    this.initManager();
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Private methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Initialises this object. This method is called by the constructor function.
   */
  private initManager():void {
    this.__strategy = new JecCommandStrategy(this.__version);
  }
  
  //////////////////////////////////////////////////////////////////////////////
  // Public methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * @inheritDoc
   */
  public process():void {
    super.process();
  }
}