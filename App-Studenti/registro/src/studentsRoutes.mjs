import students from "../db/students.json" assert { type: "json" };
import { fetchAll } from "../scripts/fetchAll.mjs";




export const getGroupStudents = (req, res) => {
  res.send(students);
};

export const getAllStudents = async (req, res) => {
  let allStudents = await fetchAll();
  res.send(allStudents);
};
