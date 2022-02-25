import React, {useState} from "react";
//removed useEffect for disabled 
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Schema'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  bacon: false,
  mushrooms: false,
  artichoke: false,
  pineapple: false,
  instructions: '',
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  instructions: '',
  special: '',
}

const App = () => {

  const [orders, setOrders] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [disabled, setDisabled] = useState(true);

  const postOrder = (newOrder) => {
    axios.post(`https://reqres.in/api/orders`, newOrder) 
    .then(res => {
      //...orders?
      setOrders([res.data, orders])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.error(err)
      setFormValues(initialFormValues)
    })
    // do i need to catch form values
  } 

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      bacon: formValues.bacon,
      mushrooms: formValues.mushrooms,
      artichoke: formValues.artichoke,
      pineapple: formValues.pineapple,
      instructions: formValues.instructions.trim(),
      special: formValues.special.trim(),
    }
    postOrder(newOrder)
  }

  // useEffect(()=>{
  //   schema.isValid(formValues)
  //   .then(valid=> setDisabled(!valid))
  // }, [formValues]) 


  return(
  <div>
  <header>
  <nav>
      <div className="logo">
          <h2>Lambda Eats</h2>
      </div>
      <div className="links">
      <a href="/">Home</a>
      </div>
  </nav>
</header>
  <Switch>
    <Route path='/pizza'>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      // disabled={disabled}
      errors={formErrors}
      />
    </Route>
    <Route path='/'>
      <Homepage />
    </Route>
  </Switch>
</div>
);
};
export default App;

//I need to download yup and cypress

