import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  const appointment = await Appointment.create({
    patient: req.session.user.id,
    doctor: req.body.doctor,
    date: new Date(req.body.date)
  });
  res.json(appointment);
};