import { SidebarConfig } from "vuepress";
import path from "path";
import fs from "fs";
const viewDir = path.resolve(__dirname, "../../../guide");
const files = fs.readdirSync(viewDir);

/**
 * 检测guide目录下的所有 md 文件
 */

export const sidebarZh: SidebarConfig = files.reduce<SidebarConfig>(
  (fileParsePaths, filename) => {
    if (Array.isArray(fileParsePaths)) {
      if (filename.endsWith(".md")) {
        fileParsePaths.push(`/guide/${filename}`);
      }
    }
    return fileParsePaths;
  },
  []
);
