const checkName = (req, res, next) => {
    if (req.body.name) {
        console.log('Name is valid');
        next()
    } else {
        res.status(404).json({error: "Name is required."})
    }
}

const checkBoolean = (req, res, next) => {
    if(req.body.is_favorite === true || req.body.is_favorite === false) {
        next()
    } else {
        res.status(400).json({error: "is_favorites must be a boolean"})
    }
}

module.exports = {
    checkName,
    checkBoolean
}