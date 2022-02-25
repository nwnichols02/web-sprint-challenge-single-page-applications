import { useHistory } from 'react-router-dom';

function Homepage () {
    const history = useHistory();
    const pizzaRoute = () => {
        history.push('/pizza')
    }
    return (
        <div>
        <section id="pizza-header">
        <center>
            <h3>Your favorite food, delivered while coding.</h3>
            <button id='order-pizza' onClick={pizzaRoute}>Pizza?</button>
        </center>
        </section> 
        <section id="six-images" className="bgimg">
        <div>
           <h4>blah blah blah add later</h4>
        </div>

        </section> 
        </div>
    )
}        

export default Homepage



