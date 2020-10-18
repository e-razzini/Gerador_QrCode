

new Vue({
    el: '#app',
    data: {
        title: 'gerador de Qrcode',
        text: 'https://www.cod3r.com.br',
        qrcode: new QRious({ size: 300 })
    },
    computed: {
        newQRCode() {
            this.qrcode.value = this.text;
            return this.qrcode.toDataURL();
        }
    },
    methods: {
        onData(event) {
            this.text = event.target.value;
        }

    },
})

