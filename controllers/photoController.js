const Photo = require("../models/Photo");
const fs = require("fs");

exports.getAllPhotos = async (req, res) => {
  const photos = await Photo.find({});
  res.render("index", { photos:photos });
};

exports.createPhoto = async (req, res) => {
  const uploadDir = "public/uploads";
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
  let uploadImg = req.files.image;
  console.log(uploadImg);
  let uploadPath = __dirname + "/../public/uploads/" + uploadImg.name;
  uploadImg.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: "/uploads/" + uploadImg.name,
    });
  });
  res.redirect("/photos");
};

exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect("/photos");

};

exports.deletePhoto = async (req, res) => {
  const photoId = req.params.id;
  const photo = await Photo.findById(photoId);
  let deletedPhoto = __dirname + "/../public" + photo.image;
  fs.unlinkSync(deletedPhoto);
  await Photo.findByIdAndDelete(photoId);
  res.redirect("/photos");
};
