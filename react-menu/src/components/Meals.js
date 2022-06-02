import App from "../App.css";

export default function Meals() {
    // api im grabbing the items from
    const API_URL = "http://headshot.mockable.io/menu"


    return (
        <div className="App">
            <header className="App-header">
                <h2>Our Menu</h2>
            </header>
            {/* reminder for me that it means working on flexbox in the css */}
            <div className='data'>
               
            </div>
                <button type="submit" value="See Items"><span>See our delicious items on menu</span></button>
        </div>
    )
};


