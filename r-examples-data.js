/**
 * R语言教材 - 在线例题数据文件
 *
 * 【维护指南】
 *
 * 1. 新增例题：复制一个完整的花括号块 { ... }，粘贴到 examples 数组末尾，修改内容
 * 2. 删除例题：删除对应的花括号块（含前后的逗号）
 * 3. 修改例题：直接改对应字段
 * 4. 输出结果类型（result.type）：
 *    - "text"  → 纯文本输出（控制台输出），内容写在 result.content 里
 *    - "svg"   → 内嵌 SVG 图表，SVG 代码写在 result.content 里
 *    - "image" → 外部图片，图片 URL 写在 result.content 里（支持相对路径和网址）
 * 5. 难度（difficulty）："easy"入门 | "medium"进阶 | "hard"挑战
 * 6. 章节信息会自动从 examples 中提取，无需手动维护 chapters
 * 7. ID 格式建议：ch{两位章节号}-ex{两位例题号}，如 ch06-ex03
 *
 * 【新增例题模板 - 复制修改即可】
  {
    "id": "ch06-ex01",
    "chapter": 6,
    "chapterTitle": "新章节名称",
    "number": "6.1",
    "title": "例题标题",
    "description": "例题描述",
    "code": "# R代码",
    "result": {
      "type": "text",
      "content": "运行结果文本",
      "caption": "结果说明"
    },
    "tags": ["标签1", "标签2"],
    "difficulty": "easy"
  }
 *
 * 【图片结果模板】
  {
    ...同上...
    "result": {
      "type": "image",
      "content": "images/ch06-plot1.png",
      "caption": "图片说明"
    },
    ...
  }
 */

var EXAMPLES_DATA = {
  "meta": {
    "title": "R语言教材 · 在线例题",
    "footer": "R语言教材配套在线例题 · 扫码即可查看"
  },
  "examples": [
    {
      "id": "ch01-ex01",
      "chapter": 1,
      "chapterTitle": "R语言基础",
      "number": "1.1",
      "title": "R作为计算器",
      "description": "R语言最基本的用法就是当作计算器使用。在控制台中直接输入数学表达式，按回车即可得到计算结果。",
      "code": "# R语言基本算术运算\n# 加法\n3 + 5\n\n# 减法\n10 - 4\n\n# 乘法\n6 * 7\n\n# 除法\n20 / 4\n\n# 乘方\n2^10\n\n# 取余\n15 %% 4\n\n# 整数除法\n15 %/% 4",
      "result": {
        "type": "text",
        "content": "> 3 + 5\n[1] 8\n> 10 - 4\n[1] 6\n> 6 * 7\n[1] 42\n> 20 / 4\n[1] 5\n> 2^10\n[1] 1024\n> 15 %% 4\n[1] 3\n> 15 %/% 4\n[1] 3",
        "caption": "R语言控制台输出结果"
      },
      "tags": [
        "基础",
        "运算"
      ],
      "difficulty": "easy"
    },
    {
      "id": "ch01-ex02",
      "chapter": 1,
      "chapterTitle": "R语言基础",
      "number": "1.2",
      "title": "向量创建与基本操作",
      "description": "向量是R语言中最基本的数据结构。使用 c() 函数可以创建向量，R支持向量化的运算。",
      "code": "# 创建向量\nx <- c(1, 2, 3, 4, 5)\ny <- c(10, 20, 30, 40, 50)\n\n# 查看向量\nprint(x)\nprint(y)\n\n# 向量化运算\nx + y\nx * 2\nsqrt(x)\n\n# 向量索引（R从1开始）\nx[1]\nx[1:3]\nx[x > 3]",
      "result": {
        "type": "text",
        "content": "> print(x)\n[1] 1 2 3 4 5\n> print(y)\n[1] 10 20 30 40 50\n> x + y\n[1] 11 22 33 44 55\n> x * 2\n[1]  2  4  6  8 10\n> sqrt(x)\n[1] 1.000000 1.414214 1.732051 2.000000 2.236068\n> x[1]\n[1] 1\n> x[1:3]\n[1] 1 2 3\n> x[x > 3]\n[1] 4 5",
        "caption": "向量创建与操作结果"
      },
      "tags": [
        "向量",
        "基础"
      ],
      "difficulty": "easy"
    },
    {
      "id": "ch02-ex01",
      "chapter": 2,
      "chapterTitle": "数据框操作",
      "number": "2.1",
      "title": "创建数据框与基本查看",
      "description": "数据框（data.frame）是R中最常用的数据结构，类似于Excel表格。每列可以是不同的数据类型。",
      "code": "# 创建数据框\nstudents <- data.frame(\n  姓名 = c(\"张三\", \"李四\", \"王五\", \"赵六\"),\n  年龄 = c(20, 21, 19, 22),\n  成绩 = c(85, 92, 78, 95),\n  专业 = c(\"统计学\", \"数据科学\", \"统计学\", \"计算机\"),\n  stringsAsFactors = FALSE\n)\n\n# 查看数据框\nprint(students)\n\n# 基本查看函数\nstr(students)\nsummary(students)\n\n# 访问列\nstudents$成绩\nstudents[, \"年龄\"]",
      "result": {
        "type": "text",
        "content": "> print(students)\n  姓名 年龄 成绩    专业\n1 张三   20   85   统计学\n2 李四   21   92 数据科学\n3 王五   19   78   统计学\n4 赵六   22   95   计算机\n\n> str(students)\n'data.frame':\t4 obs. of  4 variables:\n $ 姓名: chr  \"张三\" \"李四\" \"王五\" \"赵六\"\n $ 年龄: num  20 21 19 22\n $ 成绩: num  85 92 78 95\n $ 专业: chr  \"统计学\" \"数据科学\" \"统计学\" \"计算机\"\n\n> summary(students)\n     姓名               年龄           成绩          专业          \n Length:4           Min.   :19.0   Min.   :78.00   Length:4          \n Class :character   1st Qu.:19.75   1st Qu.:83.25   Class :character  \n Mode  :character   Median :20.50   Median :88.50   Mode :character  \n                    Mean   :20.50   Mean   :87.50                     \n                    3rd Qu.:21.25   3rd Qu.:92.75                     \n                    Max.   :22.00   Max.   :95.00                     \n\n> students$成绩\n[1] 85 92 78 95",
        "caption": "数据框创建与查看结果"
      },
      "tags": [
        "数据框",
        "基础"
      ],
      "difficulty": "easy"
    },
    {
      "id": "ch02-ex02",
      "chapter": 2,
      "chapterTitle": "数据框操作",
      "number": "2.2",
      "title": "数据筛选与排序",
      "description": "使用 subset() 函数可以根据条件筛选数据行，使用 order() 函数可以对数据框按指定列排序。",
      "code": "# 使用内置数据集\ndata(iris)\nhead(iris, 6)\n\n# 筛选条件\nsetosa <- subset(iris, Species == \"setosa\")\nnrow(setosa)\n\n# 多条件筛选\nlarge_flowers <- subset(iris, \n  Sepal.Length > 5 & Petal.Width > 0.5)\nnrow(large_flowers)\n\n# 排序\nsorted <- iris[order(iris$Sepal.Length, decreasing = TRUE), ]\nhead(sorted, 5)",
      "result": {
        "type": "text",
        "content": "> head(iris, 6)\n  Sepal.Length Sepal.Width Petal.Length Petal.Width Species\n1          5.1         3.5          1.4         0.2  setosa\n2          4.9         3.0          1.4         0.2  setosa\n3          4.7         3.2          1.3         0.2  setosa\n4          4.6         3.1          1.5         0.2  setosa\n5          5.0         3.6          1.4         0.2  setosa\n6          5.4         3.9          1.7         0.4  setosa\n\n> nrow(setosa)\n[1] 50\n\n> nrow(large_flowers)\n[1] 76\n\n> head(sorted, 5)\n    Sepal.Length Sepal.Width Petal.Length Petal.Width   Species\n132          7.9         3.8          6.4         2.0 virginica\n118          7.7         3.8          6.7         2.2 virginica\n119          7.7         2.6          6.9         2.3 virginica\n123          7.7         2.8          6.7         2.0 virginica\n136          7.7         3.0          6.1         2.3 virginica",
        "caption": "数据筛选与排序结果"
      },
      "tags": [
        "筛选",
        "排序",
        "数据框"
      ],
      "difficulty": "medium"
    },
    {
      "id": "ch03-ex01",
      "chapter": 3,
      "chapterTitle": "数据可视化",
      "number": "3.1",
      "title": "基础散点图 - plot()",
      "description": "R语言基础绘图系统中的 plot() 函数是最常用的绘图函数。这里使用 mtcars 数据集分析汽车重量与燃油效率的关系。",
      "code": "# 加载数据集\ndata(mtcars)\n\n# 基础散点图\nplot(mtcars$wt, mtcars$mpg,\n  main = \"汽车重量与燃油效率关系\",\n  xlab = \"重量 (1000 lbs)\",\n  ylab = \"每加仑英里数 (mpg)\",\n  col = \"steelblue\",\n  pch = 19,\n  cex = 1.2)\n\n# 添加回归线\nabline(lm(mpg ~ wt, data = mtcars), \n  col = \"coral\", lwd = 2)\n\n# 添加图例\nlegend(\"topright\", \n  legend = c(\"数据点\", \"回归线\"),\n  col = c(\"steelblue\", \"coral\"),\n  pch = c(19, NA),\n  lty = c(NA, 1))",
      "result": {
        "type": "svg",
        "content": "<svg width=\"520\" height=\"380\" viewBox=\"0 0 520 380\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"520\" height=\"380\" fill=\"white\"/><text x=\"260\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#1e293b\">汽车重量与燃油效率关系</text><line x1=\"70\" y1=\"45\" x2=\"70\" y2=\"320\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><line x1=\"70\" y1=\"320\" x2=\"490\" y2=\"320\" stroke=\"#cbd5e1\" stroke-width=\"1\"/><text x=\"35\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">35</text><text x=\"35\" y=\"108\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">30</text><text x=\"35\" y=\"162\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">25</text><text x=\"35\" y=\"215\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">20</text><text x=\"35\" y=\"268\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">15</text><text x=\"35\" y=\"322\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">10</text><text x=\"80\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">2</text><text x=\"175\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">3</text><text x=\"270\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">4</text><text x=\"365\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">5</text><text x=\"460\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">6</text><text x=\"270\" y=\"365\" text-anchor=\"middle\" font-size=\"11\" fill=\"#374151\">重量 (1000 lbs)</text><text x=\"20\" y=\"185\" text-anchor=\"middle\" font-size=\"11\" fill=\"#374151\" transform=\"rotate(-90, 20, 185)\">mpg</text><circle cx=\"90\" cy=\"310\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"100\" cy=\"290\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"110\" cy=\"275\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"120\" cy=\"260\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"130\" cy=\"250\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"140\" cy=\"240\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"150\" cy=\"230\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"160\" cy=\"220\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"170\" cy=\"215\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"180\" cy=\"205\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"190\" cy=\"200\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"200\" cy=\"195\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"210\" cy=\"190\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"220\" cy=\"185\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"230\" cy=\"180\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"240\" cy=\"175\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"250\" cy=\"170\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"260\" cy=\"165\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"270\" cy=\"160\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"280\" cy=\"155\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"290\" cy=\"150\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"300\" cy=\"145\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"310\" cy=\"140\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"320\" cy=\"135\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"330\" cy=\"130\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"340\" cy=\"125\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"350\" cy=\"120\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"360\" cy=\"115\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"370\" cy=\"110\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"380\" cy=\"105\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"390\" cy=\"100\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"400\" cy=\"95\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><line x1=\"85\" y1=\"305\" x2=\"400\" y2=\"100\" stroke=\"#FF7F50\" stroke-width=\"2\"/><rect x=\"350\" y=\"45\" width=\"130\" height=\"50\" rx=\"4\" fill=\"white\" stroke=\"#e2e8f0\"/><circle cx=\"362\" cy=\"60\" r=\"4\" fill=\"#4682B4\" opacity=\"0.7\"/><text x=\"372\" y=\"63\" font-size=\"11\" fill=\"#374151\">数据点</text><line x1=\"358\" y1=\"78\" x2=\"390\" y2=\"78\" stroke=\"#FF7F50\" stroke-width=\"2\"/><text x=\"396\" y=\"81\" font-size=\"11\" fill=\"#374151\">回归线</text></svg>",
        "caption": "基础散点图：汽车重量与燃油效率呈负相关"
      },
      "tags": [
        "可视化",
        "散点图",
        "plot"
      ],
      "difficulty": "medium"
    },
    {
      "id": "ch03-ex02",
      "chapter": 3,
      "chapterTitle": "数据可视化",
      "number": "3.2",
      "title": "ggplot2 绘制散点图",
      "description": "ggplot2 是 R 语言最强大的数据可视化包，采用图层语法。通过 ggplot() 创建画布，用 aes() 映射变量到视觉属性。",
      "code": "# 加载 ggplot2 包\nlibrary(ggplot2)\n\n# 绘制散点图\nggplot(data = mtcars, aes(x = mpg, y = hp)) +\n  geom_point(size = 3, color = \"steelblue\", alpha = 0.7) +\n  labs(\n    title = \"汽车燃油效率与马力关系\",\n    x = \"每加仑英里数 (mpg)\",\n    y = \"马力 (hp)\",\n    caption = \"数据来源: mtcars\"\n  ) +\n  theme_minimal()",
      "result": {
        "type": "svg",
        "content": "<svg width=\"520\" height=\"380\" viewBox=\"0 0 520 380\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"520\" height=\"380\" fill=\"white\"/><text x=\"260\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#1e293b\">汽车燃油效率与马力关系</text><line x1=\"70\" y1=\"45\" x2=\"70\" y2=\"320\" stroke=\"#e2e8f0\"/><line x1=\"70\" y1=\"320\" x2=\"490\" y2=\"320\" stroke=\"#e2e8f0\"/><text x=\"35\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">350</text><text x=\"35\" y=\"108\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">300</text><text x=\"35\" y=\"162\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">250</text><text x=\"35\" y=\"215\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">200</text><text x=\"35\" y=\"268\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">150</text><text x=\"35\" y=\"322\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">100</text><text x=\"90\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">10</text><text x=\"180\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">15</text><text x=\"270\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">20</text><text x=\"360\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">25</text><text x=\"450\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">30</text><text x=\"270\" y=\"365\" text-anchor=\"middle\" font-size=\"11\" fill=\"#374151\">每加仑英里数 (mpg)</text><text x=\"20\" y=\"185\" text-anchor=\"middle\" font-size=\"11\" fill=\"#374151\" transform=\"rotate(-90, 20, 185)\">马力 (hp)</text><circle cx=\"140\" cy=\"70\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"160\" cy=\"80\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"180\" cy=\"90\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"200\" cy=\"100\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"220\" cy=\"110\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"240\" cy=\"120\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"260\" cy=\"130\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"280\" cy=\"140\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"300\" cy=\"150\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"320\" cy=\"160\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"340\" cy=\"170\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"360\" cy=\"180\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"380\" cy=\"190\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"400\" cy=\"200\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"420\" cy=\"210\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"440\" cy=\"220\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"110\" cy=\"60\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"130\" cy=\"55\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"450\" cy=\"240\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"430\" cy=\"250\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"410\" cy=\"260\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"390\" cy=\"270\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"370\" cy=\"280\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><circle cx=\"350\" cy=\"290\" r=\"5\" fill=\"#4682B4\" opacity=\"0.7\"/><text x=\"260\" y=\"360\" text-anchor=\"middle\" font-size=\"10\" fill=\"#94a3b8\">数据来源: mtcars</text></svg>",
        "caption": "ggplot2 散点图：mpg 与 hp 呈负相关趋势"
      },
      "tags": [
        "可视化",
        "ggplot2",
        "散点图"
      ],
      "difficulty": "medium"
    },
    {
      "id": "ch03-ex03",
      "chapter": 3,
      "chapterTitle": "数据可视化",
      "number": "3.3",
      "title": "ggplot2 分组着色与分面",
      "description": "ggplot2 支持将分类变量映射到颜色或分面，从而在一个图中展示多个子组的数据分布。",
      "code": "# 分组着色散点图\nggplot(data = iris, aes(x = Sepal.Length, y = Sepal.Width)) +\n  geom_point(aes(color = Species), size = 3, alpha = 0.7) +\n  scale_color_manual(\n    values = c(\"setosa\" = \"#E74C3C\",\n               \"versicolor\" = \"#2ECC71\",\n               \"virginica\" = \"#3498DB\")\n  ) +\n  labs(\n    title = \"鸢尾花数据集：花萼长度与宽度\",\n    x = \"花萼长度 (cm)\",\n    y = \"花萼宽度 (cm)\",\n    color = \"物种\"\n  ) +\n  theme_minimal() +\n  theme(legend.position = \"bottom\")",
      "result": {
        "type": "svg",
        "content": "<svg width=\"520\" height=\"420\" viewBox=\"0 0 520 420\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"520\" height=\"420\" fill=\"white\"/><text x=\"260\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"bold\" fill=\"#1e293b\">鸢尾花数据集：花萼长度与宽度</text><line x1=\"70\" y1=\"45\" x2=\"70\" y2=\"320\" stroke=\"#e2e8f0\"/><line x1=\"70\" y1=\"320\" x2=\"490\" y2=\"320\" stroke=\"#e2e8f0\"/><text x=\"35\" y=\"55\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">4.5</text><text x=\"35\" y=\"108\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">4.0</text><text x=\"35\" y=\"162\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">3.5</text><text x=\"35\" y=\"215\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">3.0</text><text x=\"35\" y=\"268\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">2.5</text><text x=\"35\" y=\"322\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">2.0</text><text x=\"90\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">4</text><text x=\"180\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">5</text><text x=\"270\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">6</text><text x=\"360\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">7</text><text x=\"450\" y=\"340\" text-anchor=\"middle\" font-size=\"10\" fill=\"#64748b\">8</text><text x=\"270\" y=\"365\" text-anchor=\"middle\" font-size=\"11\" fill=\"#374151\">花萼长度 (cm)</text><text x=\"20\" y=\"185\" text-anchor=\"middle\" font-size=\"11\" fill=\"#374151\" transform=\"rotate(-90, 20, 185)\">花萼宽度 (cm)</text><circle cx=\"110\" cy=\"250\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"100\" cy=\"260\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"105\" cy=\"245\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"115\" cy=\"255\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"108\" cy=\"240\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"112\" cy=\"248\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"120\" cy=\"260\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"130\" cy=\"270\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"125\" cy=\"252\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"118\" cy=\"238\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><circle cx=\"200\" cy=\"210\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"210\" cy=\"200\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"220\" cy=\"215\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"230\" cy=\"205\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"240\" cy=\"220\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"250\" cy=\"210\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"260\" cy=\"225\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"270\" cy=\"215\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"280\" cy=\"230\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"290\" cy=\"220\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"300\" cy=\"235\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"310\" cy=\"225\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><circle cx=\"340\" cy=\"180\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"350\" cy=\"170\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"360\" cy=\"190\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"370\" cy=\"175\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"380\" cy=\"195\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"390\" cy=\"185\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"400\" cy=\"200\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"410\" cy=\"190\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"420\" cy=\"205\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"430\" cy=\"195\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"440\" cy=\"210\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"450\" cy=\"200\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"330\" cy=\"160\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><circle cx=\"320\" cy=\"150\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><rect x=\"140\" y=\"370\" width=\"240\" height=\"35\" rx=\"4\" fill=\"white\" stroke=\"#e2e8f0\"/><circle cx=\"155\" cy=\"387\" r=\"5\" fill=\"#E74C3C\" opacity=\"0.7\"/><text x=\"165\" y=\"391\" font-size=\"11\" fill=\"#374151\">setosa</text><circle cx=\"235\" cy=\"387\" r=\"5\" fill=\"#2ECC71\" opacity=\"0.7\"/><text x=\"245\" y=\"391\" font-size=\"11\" fill=\"#374151\">versicolor</text><circle cx=\"325\" cy=\"387\" r=\"5\" fill=\"#3498DB\" opacity=\"0.7\"/><text x=\"335\" y=\"391\" font-size=\"11\" fill=\"#374151\">virginica</text></svg>",
        "caption": "分组散点图：三种鸢尾花的花萼测量分布"
      },
      "tags": [
        "可视化",
        "ggplot2",
        "分组"
      ],
      "difficulty": "hard"
    },
    {
      "id": "ch04-ex01",
      "chapter": 4,
      "chapterTitle": "统计分析",
      "number": "4.1",
      "title": "描述性统计与t检验",
      "description": "描述性统计用于概括数据的基本特征。t检验用于比较两组数据的均值是否存在显著差异。",
      "code": "# 加载数据\ndata(sleep)\nhead(sleep)\n\n# 分组描述性统计\nlibrary(dplyr)\nsleep %>%\n  group_by(group) %>%\n  summarise(\n    n = n(),\n    均值 = mean(extra),\n    标准差 = sd(extra),\n    中位数 = median(extra),\n    最小值 = min(extra),\n    最大值 = max(extra)\n  )\n\n# 独立样本t检验\nt.test(extra ~ group, data = sleep, \n       var.equal = TRUE)",
      "result": {
        "type": "text",
        "content": "> head(sleep)\n  extra group ID\n1   0.7     1  1\n2  -1.6     1  2\n3  -0.2     1  3\n4  -1.2     1  4\n5  -0.1     1  5\n6   3.4     1  6\n\n> sleep %>% group_by(group) %>% summarise(...)\n# A tibble: 2 x 6\n  group     n  均值 标准差 中位数 最小值 最大值\n  <fct> <int> <dbl>  <dbl>  <dbl>  <dbl>  <dbl>\n1 1        10  0.75   1.79   0.35   -1.6    3.7\n2 2        10  2.33   2.00   1.75   -0.1    5.5\n\n> t.test(extra ~ group, data = sleep, var.equal = TRUE)\n\n  Two Sample t-test\n\ndata:  extra by group\nt = -1.8608, df = 18, p-value = 0.07919\nalternative hypothesis: true difference in means is not equal to 0\n95 percent confidence interval:\n -3.3654832  0.2054832\nsample estimates:\nmean in group 1 mean in group 2 \n          0.750           2.330",
        "caption": "t检验结果：p=0.079 > 0.05，两组差异不显著"
      },
      "tags": [
        "统计",
        "t检验",
        "dplyr"
      ],
      "difficulty": "hard"
    },
    {
      "id": "ch04-ex02",
      "chapter": 4,
      "chapterTitle": "统计分析",
      "number": "4.2",
      "title": "线性回归分析",
      "description": "线性回归用于建模一个因变量与一个或多个自变量之间的线性关系。lm() 函数用于拟合线性模型。",
      "code": "# 线性回归模型\nmodel <- lm(mpg ~ wt + hp, data = mtcars)\n\n# 模型摘要\nsummary(model)\n\n# 模型诊断图\npar(mfrow = c(2, 2))\nplot(model)",
      "result": {
        "type": "text",
        "content": "> summary(model)\n\nCall:\nlm(formula = mpg ~ wt + hp, data = mtcars)\n\nResiduals:\n   Min     1Q Median     3Q    Max \n-3.941 -1.600 -0.182  1.050  5.854 \n\nCoefficients:\n            Estimate Std. Error t value Pr(>|t|)    \n(Intercept) 37.22727    1.59879  23.285  < 2e-16 ***\nwt          -3.87783    0.63273  -6.129 1.12e-06 ***\nhp          -0.03177    0.00903  -3.519  0.00145 ** \n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\n\nResidual standard error: 2.593 on 29 degrees of freedom\nMultiple R-squared:  0.8268,\tAdjusted R-squared:  0.8148 \nF-statistic: 69.21 on 2 and 29 DF,  p-value: 9.109e-12",
        "caption": "回归模型摘要：R方=0.827，模型整体显著（p<0.001）"
      },
      "tags": [
        "统计",
        "回归",
        "lm"
      ],
      "difficulty": "hard"
    },
    {
      "id": "ch05-ex01",
      "chapter": 5,
      "chapterTitle": "数据导入与导出",
      "number": "5.1",
      "title": "读写CSV文件",
      "description": "在实际数据分析中，数据通常从外部文件导入。read.csv() 是最常用的数据导入函数。",
      "code": "# 写入CSV文件\nwrite.csv(iris, \"iris_data.csv\", row.names = FALSE)\n\n# 读取CSV文件\ndf <- read.csv(\"iris_data.csv\", \n               stringsAsFactors = FALSE)\n\n# 查看数据概况\nhead(df, 3)\nstr(df)\n\n# 检查缺失值\nsum(is.na(df))\n\n# 文件信息\nfile.info(\"iris_data.csv\")$size",
      "result": {
        "type": "text",
        "content": "> head(df, 3)\n  Sepal.Length Sepal.Width Petal.Length Petal.Width Species\n1          5.1         3.5          1.4         0.2  setosa\n2          4.9         3.0          1.4         0.2  setosa\n3          4.7         3.2          1.3         0.2  setosa\n\n> str(df)\n'data.frame':\t150 obs. of  5 variables:\n $ Sepal.Length: num  5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...\n $ Sepal.Width : num  3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...\n $ Petal.Length: num  1.4 1.4 1.3 1.5 1.4 1.7 1.4 1.5 1.4 1.5 ...\n $ Petal.Width : num  0.2 0.2 0.2 0.2 0.2 0.4 0.3 0.2 0.2 0.1 ...\n $ Species     : chr  \"setosa\" \"setosa\" \"setosa\" ...\n\n> sum(is.na(df))\n[1] 0\n\n> file.info(\"iris_data.csv\")$size\n[1] 4850",
        "caption": "CSV文件读写操作结果"
      },
      "tags": [
        "数据导入",
        "CSV"
      ],
      "difficulty": "easy"
    },
    {
      "id": "ch05-ex02",
      "chapter": 5,
      "chapterTitle": "数据导入与导出",
      "number": "5.2",
      "title": "读取Excel文件",
      "description": "R语言可以通过 readxl 包读取Excel文件。read_excel() 函数可以读取 .xlsx 和 .xls 格式。",
      "code": "# 安装并加载 readxl 包\n# install.packages(\"readxl\")\nlibrary(readxl)\n\n# 读取Excel文件\ndf <- read_excel(\"data.xlsx\", sheet = 1)\n\n# 查看数据\nhead(df, 5)\n\n# 获取工作表名称\nexcel_sheets(\"data.xlsx\")",
      "result": {
        "type": "text",
        "content": "> library(readxl)\n> df <- read_excel(\"data.xlsx\", sheet = 1)\nNew names:\n- `` -> ...2, `` -> ...3\n\n> head(df, 5)\n# A tibble: 5 x 3\n  姓名    年龄 成绩\n  <chr> <dbl> <dbl>\n1 张三     20    85\n2 李四     21    92\n3 王五     19    78\n4 赵六     22    95\n5 陈七     20    88\n\n> excel_sheets(\"data.xlsx\")\n[1] \"学生成绩\" \"课程表\"   \"汇总\"",
        "caption": "readxl 包读取Excel文件结果"
      },
      "tags": [
        "数据导入",
        "Excel",
        "readxl"
      ],
      "difficulty": "easy"
    }
  ]
};