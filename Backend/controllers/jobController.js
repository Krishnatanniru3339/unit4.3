const BaseController = require("./baseController");
const JobModel = require("../models/jobModel");
class Job extends BaseController {
  constructor() {
    super(JobModel, Job);
  }
}
module.exports = new Job();
