import { Request, Response } from "express";

export const search = (req: Request, res: Response)=>{
  res.send('Controller Search');
  // res.render('pages/search);
}