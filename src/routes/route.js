const express = require('express')
const router = express.Router()
const { getAparelhoInfo } = require('../controllers/AparelhoController')

router.post('/aparelho-info', (req, res) => {
    const { serial, modelo } = req.body
    
    if (!serial) {
        return res.status(400).json({ error: 'Serial é obrigatório' })
    }

    const aparelhoInfo = getAparelhoInfo(serial, modelo)
    res.json(aparelhoInfo)
})

module.exports = router