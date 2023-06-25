var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const jobController = require("../controllers/jobController");

router.post("/add-job", async (req, res) => {
  data = req.body;
  data.job_id = uuidv4();
  jobController.create(data, (err, jobResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: jobResponse,
    });
  });
});

router.post("/update-job", (req, res) => {
  let data = req.body;
  jobController.findOneAndUpdate(
    { job_id: req.body.job_id },
    data,
    (err, updatedJob) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedJob,
      });
    }
  );
});

router.get("/find-job/:id", (req, res) => {
  jobController.find({ job_id: req.params.id }, (err, jobDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: jobDetails,
    });
  });
});

router.post("/delete-job", (req, res) => {
  jobController.findOneAndRemove(
    { job_id: req.body.job_id },
    (err, deletedJob) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedJob,
      });
    }
  );
});

router.get("/find-all-jobs", (req, res) => {
  jobController.find({}, (err, allJobDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allJobDetails,
    });
  });
});

module.exports = router;
