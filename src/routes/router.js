const express = require("express");
const mongoose = require("mongoose");

const employeeSchema = require("../models/employee");
const router = express.Router();
const Employee = mongoose.model("Employee", employeeSchema);

router.post("/employee", async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(201).redirect("/user");
  } catch (error) {
    res
      .status(500)
      .send({
        one: error.errors.fullName.message,
        two: error.errors.mobile.message
      });
  }
});
router.get("/user", async (req, res) => {
  try {
    const employee = await Employee.find({});
    const count = await Employee.countDocuments();
    if (!employee) {
      return res.status(404).send();
    }
    res.status(200).send({ count, employee });
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/employee", (req, res) => {
  res.render("index", { title: "Insert an employee" });
  console.log(req.body);
});

router.delete("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    await Employee.findByIdAndDelete(_id);
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("*", (req, res) => {
  const badURL = req.url;
  res.status(404).send({ error: "page not found" });
});

module.exports = router;


