module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all()
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                res.sendStatus(500)
                console.log(err)
            })
    },
    createItem: (req, res) => {
        const db = req.app.get('db')
        let {name, price, img} = req.body
        db.create_product({name, price, img})
            .then(response => {
                res.status(200).send(response)
            })
            .catch(err => {
                res.sendStatus(500)
                console.log(err)
            })
    }
}