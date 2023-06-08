import express from "express";
import * as students from "./studentsRoutes.mjs";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Gruppo 1");
});

app.get("/digitazon/2023/02/group/1/students", students.getGroupStudents);
app.get("/digitazon/2023/02/students", students.getAllStudents);



app.listen(8000, () => {
  console.log("Gruppo uno, porta 8000");
});
