# CAD 刷题

纯静态网页，无需安装服务器：双击 `index.html` 即可在浏览器中打开刷题。
答题进度保存在浏览器本地（localStorage），换浏览器不会同步。

## 功能
- 两个题库：`CAD 题库 122`（Excel）、`CAD 题库 151`（PDF）
- 单选即选即判；多选选择后点击"提交答案"
- 筛选：全部 / 未做 / 错题；可随机顺序；可按题号跳转
- 快捷键：`A`–`H` 选择，`Enter` 提交/下一题，`←` `→` 切换

## 更新题库
源文件在 `C:/Users/EZO2SZH/Downloads`，修改后运行：

    python scripts/build_data.py

会重新生成 `data/banks.js`。
