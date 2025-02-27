const axios = require("axios");
const fs = require("fs");
const path = require("path");
const JSZip = require("jszip");

const filePath = "C:/Users/Administrator/Downloads/download.zip";
if (!fs.existsSync(filePath)) {
  console.log(`文件不存在:${filePath}`)
  return
}

// 新增文件大小检查
const stats = fs.statSync(filePath);
if (stats.size > 10 * 1024 * 1024) { // 10MB = 10*1024*1024 bytes
  console.log(`文件过大（${(stats.size / 1024 / 1024).toFixed(2)}MB），已终止操作`);
  return
}

const extractPath = path.join(__dirname, "iconfont");
if (!fs.existsSync(extractPath)) {
  fs.mkdirSync(extractPath);
}

// 将解压逻辑封装到async函数中
async function unzipFile() {
  try {
    const data = fs.readFileSync(filePath);
    const zip = await JSZip.loadAsync(data);

    for (const [relativePath, entry] of Object.entries(zip.files)) {
      if (!entry.dir) {
        // 跳过第一层目录
        const targetPath = relativePath.split('/').slice(1).join('/');
        if (!targetPath) continue; // 忽略空路径

        const content = await entry.async('nodebuffer');
        const outputPath = path.join(extractPath, targetPath); // 修改这里
        const outputDir = path.dirname(outputPath);

        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, content);
        console.log(`已解压: ${targetPath}`);
      }
    }
    console.log('解压完成');
    fs.unlinkSync(filePath);
    console.log(`已删除原始文件: ${filePath}`);
  } catch (error) {
    console.error('解压失败:', error);
  }
}

// 执行异步函数并处理错误
unzipFile().catch(error => console.error('运行异常:', error));