import cors from "cors";

export default cors({
  origin: ["http://localhost:3000", "https://mobile.app"],
  credentials: true
});