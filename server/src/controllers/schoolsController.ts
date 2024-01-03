import { Request, Response } from "express";
import pool from "../config/db";
import type { FormData } from "../interfaces/index";
import { addSchoolSchema } from "../utils/index";

//create a school
export const addSchool = async (req: Request, res: Response) => {
  try {
    const addSchoolValidate = addSchoolSchema.strict().safeParse(req.body);
    if (addSchoolValidate.success) {
      const { name, address, city, state, contact, image, email_id }: FormData =
        addSchoolValidate.data;
      const query =
        "INSERT INTO schools(name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
      await pool.query(query, [
        name,
        address,
        city,
        state,
        contact,
        image,
        email_id,
      ]);
      res.status(200).json({
        success: true,
        message: "Successfully added a school",
      });
    }
    return res.status(400).send({
      message: "Could not add a school",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// show schools
export const showSchools = async (req: Request, res: Response) => {
  try {
    const [rows, fields] = await pool.query(
      "SELECT id, name, address, city, image FROM schools"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errror: "Internal Server Error" });
  }
};
