<template>


<div class="qr-layout ">
        <div class="qr-code-section">
            <img src="@/assets/img/qr-code.png" alt="QR Code" class="qr-image">
        </div>
        <div class="qr-buttons">
            <div class="qr-btn qr-btn-share">
                <span class="icon">🔗</span> Share
            </div>
            <div class="qr-btn qr-btn-restart">
                <span class="icon">🔄</span> Restart
            </div>
            <div class="qr-btn qr-btn-download">
                <span class="icon">⬇️</span> Download
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'AppQrservice',
};
</script>

<style scoped>

.qr-layout {
    display: flex;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;

}

.qr-code-section {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.qr-image {
    width: 250px;
    height: 250px;
}

.qr-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 20px;
    background-color: #ffffff;
}

.qr-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.qr-btn:hover {
    background-color: #f0f0f0;
}

.qr-btn-share {
    color: #007bff;
}

.qr-btn-restart {
    color: #ffa500;
}

.qr-btn-download {
    color: #28a745;
}

.icon {
    font-size: 18px;
}

</style>
