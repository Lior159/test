const Product = require("../models/product");

exports.getAccountPage = (req, res) => {
  res.render("account/account", {
    path: "/account",
    pageTitle: "Account",
  });
};

exports.getAddProductPage = (req, res) => {
  res.render("account/add-product", {
    path: "/account/add-product",
    pageTitle: "Add product",
  });
};

exports.postAddProductPage = (req, res) => {
  const { title, price, imgUrl, description } = req.body;
  const product = new Product({
    title,
    price,
    imgUrl,
    description,
  });
  product.save().then((result) => {
    res.redirect("/account/add-product");
  });
};

exports.getPersonalInfoPage = (req, res) => {
  res.render("account/personal-info", {
    path: "/account/personal-info",
    pageTitle: "Personal information",
    user: req.session.user,
  });
};
