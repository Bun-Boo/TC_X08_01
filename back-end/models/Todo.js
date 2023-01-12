import mongoose from "mongoose";
const TodoSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      require: true,
      unique: true,
    },
    priority: {
      type: String,
      require: true,
    },
    startTime: {
      type: Date,
      require: true,
      min: "1987-09-28",
      max: "2099-05-23",
    },
    endTime: {
      type: Date,
      require: true,
      min: "1987-09-28",
      max: "2099-05-23",
    },
    status: {
      type: String,
      require: true,
    },
    jobDetails: {
      type: String,
      require: true,
    },
    upshot: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Todo", TodoSchema);
