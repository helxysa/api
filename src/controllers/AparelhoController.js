function getAparelhoInfo(serial, modelo = "SEM_DADOS") {
    let vendor, card, vlan, olt, pon
    
    if (serial.includes("ALCL")) {
        vendor = "NOKIA"
        if (modelo === 'G-010G-P') {
            card = "1"
            vlan = 1000
            olt = "OLT-NOKIA-01"
        } else {
            card = "14"
            vlan = 1000
            olt = "OLT-NOKIA-02"
        }
    } else if (serial.includes("DACM")) {
        vendor = "DATACOM"
        card = "1"
        vlan = 1000
        olt = "OLT-DATACOM-01"
    } else if (serial.includes("HWTC")) {
        vendor = "HUAWEI"
        card = "6"
        vlan = 100
        olt = "OLT-HUAWEI-01"
    }

    return { vendor, modelo, card, vlan, olt, pon }
}

module.exports = {
    getAparelhoInfo
}

