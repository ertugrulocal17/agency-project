const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

router.get("/", pageController.getIndexPage);
router.get("/about", pageController.getAboutPage);
router.get("/contact", pageController.getContactPage);
router.get("/clients", pageController.getClientsPage);
router.get("/services", pageController.getServicesPage);
router.get("/team", pageController.getTeamPage);
router.get("/add", pageController.getAddPage);
router.get("/edit/:id", pageController.getEditPage);

module.exports = router;