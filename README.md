
# LLM Resource & Energy Prediction Models

本项目整理并集成了六个基于对数多项式特征 + 岭回归训练得到的预测模型，用于对大语言模型本地部署任务的运行时、吞吐量、响应时间与能耗进行估算。

---

## 📦 模型列表

### 1. 最终_LoRA_runtime
- **用途**：预测 LoRA 微调任务的总运行时间（单位：秒）
- **输入特征**：
  - GPUs（显卡数量）
  - ModelSize（模型规模，单位：B）
  - DataSize（训练数据规模，单位：K）
  - BatchSize（训练批次大小）
- **输出**：运行时间（秒）

---

### 2. 最终_GraphRAG_runtime
- **用途**：预测 GraphRAG 任务的运行时长（单位：秒）
- **输入特征**：
  - GPUs
  - ModelSize
  - DataSize
- **输出**：运行时间（秒）

---

### 3. 最终_推理_吞吐量
- **用途**：预测推理任务的 Output Token 吞吐量（单位：tok/s）
- **输入特征**：
  - GPUs
  - ModelSize
  - 并发度 Parallel
- **输出**：吞吐量（tok/s）

---

### 4. 最终_推理_ttft
- **用途**：预测推理任务的首 Token 响应时间（单位：秒）
- **输入特征**：
  - GPUs
  - ModelSize
  - 并发度 Parallel
  - 输入 Token 数 in_token
- **输出**：TTFT（秒）

---

### 5. 最终_LoRA_power
- **用途**：预测 LoRA 微调任务的单卡功耗（单位：W）
- **输入特征**：
  - GPUs
  - ModelSize
  - BatchSize
- **输出**：瞬时功耗（W）

---

### 6. 最终_GraphRAG&Inference_power
- **用途**：预测 GraphRAG 和推理任务的单卡功耗（单位：W）
- **输入特征**：
  - GPUs
  - ModelSize
- **输出**：瞬时功耗（W）

---

## 📁 文件说明

- `llm_prediction_suite_v3_final_allrestored_fully.html`：最终版 HTML 工具页面，集成所有模型与计算逻辑
- `llm_final_model_parameters.json`：六个模型的完整参数文件，可用于还原预测逻辑
