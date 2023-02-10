const {Brand, Type} = require('../models/models')
const ApiError =require('../error/ApiError')

class BrandController {
    async create(reg, res) {
        const {name} = reg.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getALL(reg, res) {

    }
}

module.exports = new BrandController()