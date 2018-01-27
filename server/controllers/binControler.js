module.exports={
    getShelf: (req, res, next) => {
        const db = request.app.get('db');
        db.read_shelf([req.params.id])
            .then(shelf => res.status(200).send(shelf))
            .catch(() => res.status(500).send())
    },
    getBin: (req, res, next) => {
        const db = request.app.get('db');
        db.read_bin([req.params.id])
            .then(bin => res.status(200).send(bin))
            .catch(() => res.status(500).send())
    },
    update: (req, res, next) => {
        const db = request.app.get('db');
        db.read_bin([req.params.id])
            .then(bin => {
                if(bin.name===null){
                    res.status(500).send()
                }
                else{
                    db.update_bin([req.params.id, req.body.name, req.body.price])
                        .then(bin => res.status(200).send(bin))
                        .catch(() => res.status(500).send())
                }
            })
    },
    create: (req, res, next) => {
        const db = request.app.get('db');
        db.read_bin([req.params.id])
            .then(bin => {
                if(bin.name!==null){
                    res.status(500).send()
                }
                else{
                    db.update_bin([req.params.id, req.body.name, req.body.price])
                        .then(() => res.status(200).send())
                        .catch(() => res.status(500).send())
                }
            })
    },
    delete: (req, res, next) => {
        const db = request.app.get('db');
        db.update_bin([req.params.id, null, null])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())  
    }
}