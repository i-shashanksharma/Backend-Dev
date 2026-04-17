import multer from "multer";

export const upload = multer({
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/dicom"
    ];
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error("Invalid file"));
    }
    cb(null, true);
  }
});