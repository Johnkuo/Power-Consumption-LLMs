function predict_runtime(model_size, gpus, batch_size, parallel, log_data_size) {
    const w0 = 3.21, w1 = 1.12, w2 = -0.98, w3 = 0.45, w4 = 0.87, w5 = -0.31;
    return w0 + w1 * model_size + w2 * gpus + w3 * batch_size + w4 * parallel + w5 * log_data_size;
}

function run() {
    const model_size = parseFloat(document.getElementById("model_size").value);
    const gpus = parseInt(document.getElementById("gpus").value);
    const batch = parseInt(document.getElementById("batch_size").value);
    const parallel = parseInt(document.getElementById("parallel").value);
    const data_size = parseFloat(document.getElementById("data_size").value);

    const log_data_size = Math.log(data_size);
    const runtime = predict_runtime(model_size, gpus, batch, parallel, log_data_size);
    document.getElementById("result").innerText = `预计运行时长为：${runtime.toFixed(2)} 秒`;
}
