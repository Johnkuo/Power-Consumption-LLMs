
# 大模型显存估算器（支持多精度 + LoRA + GraphRAG）

本项目是一个前端静态网页工具，用于估算大语言模型在不同精度配置下的显存占用情况，适用于以下部署场景：

- 普通推理（Inference）
- LoRA 微调（Fine-tuning with LoRA）
- GraphRAG 推理增强（包含向量模型 bge-m3）

---

## 🔧 功能特色

✅ 支持四种主流精度选项：

- FP32（4 Byte/param）  
- FP16/BF16（2 Byte/param）  
- INT8（1 Byte/param）  
- INT4（0.5 Byte/param）  

✅ 输出以下三类显存估算值：

| 模式         | 内容说明                                               |
|--------------|--------------------------------------------------------|
| 推理显存     | 模型权重 + 激活 + 通信开销（固定 5+5 GB）              |
| LoRA 微调    | 推理基础上叠加 LoRA adapter 参数 + 梯度 + 优化器状态 |
| GraphRAG     | 推理基础上叠加 2GB 的向量模型显存（如 bge-m3）        |

---

## 🚀 使用方法

1. 打开 [`index.html`](./index.html) 文件；
2. 输入你希望估算的模型规模（单位：Billion 参数量，如 7、13、70）；
3. 点击“计算显存”；
4. 页面将展示所有精度下的三类显存估算结果；

---

## 🌐 在线访问（GitHub Pages）

你可以通过下方链接在线访问此工具（需启用 GitHub Pages）：

```
https://<你的GitHub用户名>.github.io/<你的仓库名>/
```

> 如果你尚未启用 GitHub Pages，请进入仓库 Settings → Pages，选择 `main` 分支 和 `/(root)` 或 `/docs`，即可部署。

---

## 📁 文件结构

```
├── index.html   # 主页面，上传到 GitHub Pages 即可使用
└── README.md    # 项目说明文档
```

---

## 📜 License

本工具由你自定义逻辑实现，若引用请注明出处。代码可自由部署与扩展。
