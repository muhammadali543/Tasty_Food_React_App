import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodDetails from './FoodDetails';
import { BsSearch} from 'react-icons/bs';
import brandIcon from '../logo-tasty.png';

export default function Food() {
    const [foodName, setFoodName] = useState('chicken');
    const [searchItems, setSerachItems] = useState([]);

    useEffect(() => {
        getFoods();
    }, []);

    const API_ID = process.env.REACT_APP_API_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getFoods = async () => {
        const { data } = await axios.get(`https://api.edamam.com/search?q=${foodName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=32&calories=591-722&health=alcohol-free`);
        setSerachItems(data.hits);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getFoods();
    }
    return (
        <div>
          <header>
              <div className="promo-block">
                  <div className="promo-block-inner"></div>
                    <div className="brand-icon">
                        <img src={brandIcon} alt={brandIcon}/>
                    </div>
                    <div className="search-box">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Search Your Recipe..." name="foodName" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
                            <button type="submit" className="search-btn"><BsSearch/></button>
                        </form>
                    </div>
              </div>
          </header>
          <FoodDetails searchItems={searchItems} foodName={foodName}/>
        </div>
    )
}
