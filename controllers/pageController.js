const Photo = require('../models/Photo')
exports.getIndexPage = (req, res) => {
    res.status(200).render('index')
}
exports.getAboutPage = (req, res) => {
    res.status(200).render('about')
}
exports.getContactPage = (req, res) => {
    res.status(200).render('contact')
}
exports.getClientsPage = (req, res) => {
    res.status(200).render('clients')
}
exports.getServicesPage = (req, res) => {
    res.status(200).render('services')
}
exports.getTeamPage = (req, res) => {
    res.status(200).render('team')
}
exports.getAddPage = (req, res) => {
    res.status(200).render('add')
}
exports.getEditPage = (req, res) => {
    const photo = Photo.findOne({ _id: req.params.id })
    res.status(200).render('edit', { photo: photo._conditions._id })

}