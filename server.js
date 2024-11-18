const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

function getAparelhoInfo(serial, modelo = "SEM_DADOS") {
    let vendor, card, vlan, olt, pon
    
    if (serial.includes("ALCL")) {
        vendor = "NOKIA"
        if (modelo === 'G-010G-P') {
            card = "1"
            vlan = 1000
            olt = "OLT-NOKIA-01"
            pon = "1/1/1"
        } else {
            card = "14"
            vlan = 1000
            olt = "OLT-NOKIA-02"
            pon = "1/1/2"
        }
    } else if (serial.includes("DACM")) {
        vendor = "DATACOM"
        card = "1"
        vlan = 1000
        olt = "OLT-DATACOM-01"
        pon = "1/1/3"
    } else if (serial.includes("HWTC")) {
        vendor = "HUAWEI"
        card = "6"
        vlan = 100
        olt = "OLT-HUAWEI-01"
        pon = "1/1/4"
    }

    return { vendor, modelo, card, vlan, olt, pon }
}

async function getMac(serial) {
    return `00:11:22:33:44:${serial.slice(-2)}`
}

app.post('/aparelho-info', async (req, res) => {
    const { serial, modelo } = req.body
    
    if (!serial) {
        return res.status(400).json({ error: 'Serial é obrigatório' })
    }

    const aparelhoInfo = getAparelhoInfo(serial, modelo)
    const mac = await getMac(serial)
    const ip = `192.168.1.${Math.floor(Math.random() * 254) + 1}`

    const response = {
        ...aparelhoInfo,
        mac,
        ip
    }

    res.json(response)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})