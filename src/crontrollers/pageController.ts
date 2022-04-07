import { Request, Response } from "express";

export const home = (req: Request, res: Response)=>{
  res.send('Controller Home');
  // res.render('pages/page);
}

export const dogs = (req: Request, res: Response)=>{
  res.send('Controller Dogs');
  // res.render('pages/dogs);
}

export const cats = (req: Request, res: Response)=>{
  res.render('Controller Cats');
  // res.render('pages/cats);
}

export const fishes = (req: Request, res: Response)=>{
  res.send('Controller Fishes');
  // res.render('pages/fishes);
}