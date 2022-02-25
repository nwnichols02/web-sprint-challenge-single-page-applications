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
        </div>
    )
}        

export default Homepage



