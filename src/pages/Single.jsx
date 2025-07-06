import Edit from "../img/edit.png";
import Delete from "../img/bin.png";
import {Link} from 'react-router-dom';
import Menu from "../components/Menu.jsx";

import "../style/single.scss";
const Single = () => {
    return (
        <div className="single">
            <div className='single-img'>
                <img src='https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D'></img>
            </div>
            <div className='single-header'>

                <div className="user">
                    <img src="https://th.bing.com/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?cb=thvnextc1&rs=1&pid=ImgDetMain"></img>
                    <div className="info">
                        <p>Username</p>
                        <p>Posted 2 days ago</p>
                    </div>
                </div>

                <div className="single-edit">
                    <Link  to={`/write?edit=2`}>
                        <img src={Edit}></img>
                    </Link>
                    <img src={Delete}></img>
                </div>
            </div>
            <div className="single-content">

                <div className='single-content-article'>
                    <h1>📰 How I Accidentally Became a React Developer While Trying to Order Pizza</h1>
                    <div className='date'>
                        Published on: June 15, 2025 — by Codey McCodeface
                    </div>

                    <div className='single-content-text'>
                        <div className="prose mx-auto p-4">
                          <p>It all started with hunger.</p>

                          <p>
                            One night, I decided to build a simple app to order pizza because calling
                            people makes me uncomfortable...
                          </p>

                          <h3>🚧 Step 1: npm install hunger</h3>
                          <p>
                            I didn’t know what npm was, but it felt important...
                          </p>

                          <h3>🎨 Step 2: JSX—HTML with Trust Issues</h3>
                          <p>
                            I tried to write normal HTML, but React wanted these weird curly braces...
                          </p>

                          <pre>
                            <code>{'<h1>Hello, Pizza!</h1>'}</code>
                          </pre>

                          <h3>🔁 Step 3: useState(🍕)</h3>
                          <p>
                            I learned that useState is basically a mood tracker for components...
                          </p>

                          <pre>
                            <code>{`const [toppings, setToppings] = useState(['cheese']);`}</code>
                          </pre>

                          <h3>📦 Step 4: I built a component and felt powerful</h3>
                          <p>
                            I built a reusable PizzaButton component and used it 5 times...
                          </p>

                          <pre>
                            <code>{'<PizzaButton topping="pineapple" />'}</code>
                          </pre>

                          <h3>🍕 Conclusion</h3>
                          <p>
                            I never did get to eat that pizza. But I deployed my first app...
                          </p>
                        </div>
                    </div>
                </div>
                <Menu/>

            </div>

            <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by Freepik - Flaticon</a>

        </div>


    );
}

export default Single;