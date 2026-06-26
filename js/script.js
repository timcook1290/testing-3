// 1. Quote Estimator Logic
function calculateQuote() {
    const serviceType = document.getElementById('service-type').value;
    const areaSize = parseFloat(document.getElementById('area-size').value);
    const resultDiv = document.getElementById('quote-result');

    if (!areaSize || areaSize <= 0) {
        resultDiv.innerHTML = "Kripya sahi area size dalein!";
        resultDiv.style.color = "red";
        return;
    }

    let rate = 0;
    if (serviceType === 'basic') rate = 50;      // ₹50 per sq.ft
    if (serviceType === 'premium') rate = 120;  // ₹120 per sq.ft
    if (serviceType === 'luxury') rate = 250;   // ₹250 per sq.ft

    const totalEstimate = areaSize * rate;
    resultDiv.style.color = "#2c3e50";
    resultDiv.innerHTML = `Estimated Cost: ₹${totalEstimate.toLocaleString('en-IN')}`;
}

// 2. Visualizer Logic
function changeColor() {
    const color = document.getElementById('color-picker').value;
    const previewBox = document.getElementById('preview-box');
    previewBox.style.backgroundColor = color;
    previewBox.innerHTML = `Selected Color: ${color.toUpperCase()}`;
}
