import MedicalRecord from "../models/MedicalRecord.js";
import { clean } from "../utils/sanitizer.js";

export const createRecord = async (req, res) => {
  const data = clean(req.body.data);
  const record = await MedicalRecord.create({
    patient: req.session.user.id,
    doctor: req.body.doctor,
    data
  });
  res.json(record);
};

export const getRecords = async (req, res) => {
  const records = await MedicalRecord.find({
    patient: req.session.user.id
  });
  res.json(records);
};