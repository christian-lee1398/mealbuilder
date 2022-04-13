import React, { Component } from 'react'
import Ingredients from './ingredients'
import './mealPicker.css'

class RandomMeal extends Component {
    static defaultProps = {
        protein: [
            'Chicken (Pasture-Raised)',
            'Steak (Grass-Fed)',
            'Ground Beef (Grass-Fed)',
            'Salmon (Wild-Caught)',
            'Tempeh',
            'Ground Turkey',
            'Pork Chops',
            'Tofu',
            'Shrimp',
        ],
        vegetables: [
            'Brussel Sprouts',
            'Peppers',
            'Broccoli',
            'Cucumber/Zucchini',
            'Spinach',
            'Asparagus',
            'Carrots',
            'Cauliflower',
            'Edamame'
        ],
        carbs: [
            'Sweet Potato',
            'Quinoa',
            'Brown Rice',
            'Lentil Pasta',
            'Chickpea Pasta',
            'Lentils',
            'Beans'
        ],
        fats: [
            'Avocado',
            'Feta',
            'Pine Nuts',
            'Olive Oil',
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            ingredient1: 'Protein',
            ingredient2: 'Vegetable',
            ingredient3: 'Carb',
            ingredient4: 'Fat',
        }
        this.genMeal = this.genMeal.bind(this);
    }
    genMeal() {
        const getProtein =
            this.props.protein[Math.floor(Math.random() * this.props.protein.length)]
        const getVegetable =
            this.props.vegetables[Math.floor(Math.random() * this.props.vegetables.length)]
        const getCarb =
            this.props.carbs[Math.floor(Math.random() * this.props.carbs.length)]
        const getFat =
            this.props.fats[Math.floor(Math.random() * this.props.fats.length)]
        this.setState({
            ingredient1: getProtein,
            ingredient2: getVegetable,
            ingredient3: getCarb,
            ingredient4: getFat
        })
    }
    render() {
        return (
            <div className="gencard">
                <h1>Healthy Meal Generator</h1>
                <h3><Ingredients face={this.state.ingredient1} /></h3>
                <h3><Ingredients face={this.state.ingredient2} /></h3>
                <h3><Ingredients face={this.state.ingredient3} /></h3>
                <h3><Ingredients face={this.state.ingredient4} /></h3>
                <button onClick={this.genMeal}>Generate Meal</button>
            </div>
        )
    }
}
export default RandomMeal;