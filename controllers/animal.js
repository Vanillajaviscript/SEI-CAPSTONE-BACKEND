const express = require('express');
const AnimalModel = require( "../models/animal.js");

const createAnimal = async (req, res) => {
  const animal = req.body;
  const newAnimal = new AnimalModel({
    ...animal,
    createdAt: new Date().toISOString()
  });

  try {
    await newAnimal.save();
    res.status(201).json(newAnimal);
  } catch(error) {
    res.status(404).json({message: "Error"})
  }
}

const getAnimals = async (req, res) =>{
  try {
    const animals = await AnimalModel.find();
    res.status(200).json(animals)
  } catch(error) {
    res.status(404).json({message: "Error"})
  }
}
module.exports = {
  createAnimal,
  getAnimals,
}
