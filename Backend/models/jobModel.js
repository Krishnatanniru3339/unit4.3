var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
  job_id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  salary: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
