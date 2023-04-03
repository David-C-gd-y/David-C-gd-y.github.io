import { PluginObject } from "vuepress";

import path from "path";
import fse from "fs-extra";


const move_dist_dir: PluginObject = {
  name: "move-dist",

  // ...
  async onGenerated() {
    const viewDir = path.resolve(__dirname, "dist");
    const targetDir = path.join(
      path.resolve(__dirname, "../../"),
      path.basename(viewDir)
    );
    fse.copySync(viewDir, targetDir);
    setTimeout(() =>{
      fse.remove(viewDir)
    }, 1000)
  },
};

export default move_dist_dir;
