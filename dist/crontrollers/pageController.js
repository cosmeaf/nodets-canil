"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const pet_1 = require("../models/pet");
const createmenuObjects_1 = require("../helpers/createmenuObjects");
const home = (req, res) => {
    let list = pet_1.Pet.getAll();
    res.render('pages/page', {
        menu: (0, createmenuObjects_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os Animais',
            backgroud: 'allanimals.jpg'
        },
        list: list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getFromType("dog");
    res.render('pages/page', {
        menu: (0, createmenuObjects_1.createMenuObject)('dog'),
        banner: {
            title: 'Cachorros',
            backgroud: 'banner_dog.jpg'
        },
        list: list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getFromType("cat");
    res.render('pages/page', {
        menu: (0, createmenuObjects_1.createMenuObject)('cat'),
        banner: {
            title: 'Catos',
            backgroud: 'banner_cat.jpg'
        },
        list: list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pet_1.Pet.getFromType("fish");
    res.render('pages/page', {
        menu: (0, createmenuObjects_1.createMenuObject)('fish'),
        banner: {
            title: 'Peixes',
            backgroud: 'banner_fish.jpg'
        },
        list: list
    });
};
exports.fishes = fishes;
