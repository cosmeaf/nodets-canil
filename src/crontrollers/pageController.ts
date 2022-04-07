import { Request, Response } from "express";

import { Pet } from '../models/pet';

import {createMenuObject} from '../helpers/createmenuObjects';


export const home = (req: Request, res: Response)=>{
  let list = Pet.getAll();

  res.render('pages/page',{
    menu: createMenuObject('all'),
    banner:{
      title: 'Todos os Animais',
      backgroud: 'allanimals.jpg'
    },
    list: list
  });
}

export const dogs = (req: Request, res: Response)=>{
  let list = Pet.getFromType("dog");
  res.render('pages/page',{
    menu: createMenuObject('dog'),
    banner:{
      title: 'Cachorros',
      backgroud: 'banner_dog.jpg'
    },
    list: list
  });
}

export const cats = (req: Request, res: Response)=>{
  let list = Pet.getFromType("cat");
  res.render('pages/page',{
    menu: createMenuObject('cat'),
    banner:{
      title: 'Catos',
      backgroud: 'banner_cat.jpg'
    },
    list: list
  });
}

export const fishes = (req: Request, res: Response)=>{
  let list = Pet.getFromType("fish");
  res.render('pages/page',{
    menu: createMenuObject('fish'),
    banner:{
      title: 'Peixes',
      backgroud: 'banner_fish.jpg'
    },
    list: list
  });
}