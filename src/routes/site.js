const Site = require("../models/site");
const auth = require("../middleware/auth");

const express = require("express");
const router = new express.Router();

router.get("/site-info", async (req, res) => {
  const siteSettings = await Site.findOne({});
  if (!siteSettings) {
    const site = {
      adminEmail: "ash@s.in",
      number: "+1 (7635) 547-12-97",
      address: "1212 28th St SW, Wyoming, MI 49509, United States",
      bankName: "Sumex Investment Bank",
      tagLine: "Experience the future",
      initialFees: 1500,
    };
    const siteInfo = await new Site(site);
    await siteInfo.save();
    res.send(siteInfo);
  } else {
    res.send(siteSettings);
  }
});

router.patch("/site-info", auth, async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(200).send({ error: "You are not an Admin" });
  } else {
    const changes = Object.keys(req.body);
    const initialInfo = await Site.findOne({});
    try {
      const siteChanges = ["adminEmail", "bankName", "tagLine", "initialFees", "number", "address"];
      const isValid = changes.every((change) => siteChanges.includes(change));
      if (!isValid) {
        return res.status(200).send({ error: "Some field is invalid" });
      }
      changes.forEach((change) => (initialInfo[change] = req.body[change]));

      await initialInfo.save();
      res.send(initialInfo);
    } catch (e) {
      res.status(200).send({ error: "Email is invalid" });
    }
  }
});

module.exports = router;
