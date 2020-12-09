import React, { Fragment } from 'react'

export default function FoodDetails({searchItems, foodName}) {
    return (
        <Fragment>
        <div className="product-list">
           <div className="container">
                <div className="row box-shadow-custom">
                    <div className="col-lg-12">
                        <div className="product-header">
                            <h5 className="product-headline">{searchItems.length === 0 ? 'Searching Recipes...' : `Search Result for ${foodName}`}</h5>
                            <div className="underline"></div>
                        </div>
                    </div>
                    {searchItems.map(item => 
                    <div className="col-lg-3 product-wrapper" key={Math.random() * 100}>
                        <a className="product-info" href={item.recipe.url} target="_blank" rel="noopener noreferrer">
                        <div className="product-img">
                            <img className="img-fluid" src={item.recipe.image} alt={item.recipe.label}/>
                        </div>
                        <div className="product-title">
                            {item.recipe.label}
                        </div>
                        <div className="product-price">
                            {item.recipe.source}
                        </div>
                        <div className="product-footer">
                            <div className="product-rating">
                               Calories: {item.recipe.calories.toFixed(2)}
                            </div>
                            <div className="product-reviews">
                                Total-Weight: {item.recipe.totalWeight.toFixed(2)}
                            </div>
                        </div>
                        </a>
                    </div>
                    )}
                </div>
            </div>
        </div>
        </Fragment>
    )
}
