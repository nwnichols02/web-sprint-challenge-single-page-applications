import React from "react";

export default function PizzaForm(props) {
  const { values, change, submit, errors, disabled } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className="form-container">
      <form id="pizza-form" onSubmit={onSubmit}>
        <div className="errors">
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.pepperoni}</div>
          <div>{errors.bacon}</div>
          <div>{errors.mushrooms}</div>
          <div>{errors.artichoke}</div>
          <div>{errors.pineapple}</div>
          <div>{errors.instructions}</div>
          <div>{errors.special}</div>
        </div>
        <div className="build-pizza-title">
          <h3>Build your Pizza!</h3>
        </div>
        <div>
          <h3>Choice of size</h3>
          <label>
            <select
              name="size"
              id="size-dropdown"
              onChange={onChange}
              value={values.size}
            >
              <option value="">--Select an Option--</option>
              <option value="single">Single Size</option>
              <option value="couple">Couple Size</option>
              <option value="family">Family Size</option>
            </select>
          </label>
        </div>
        <div>
          <h3>Toppings...Yum!</h3>
          <label className="pepperoni">
            Pepperoni:
            <input
              type="checkbox"
              name="peperoni"
              onChange={onChange}
              value={values.pepperoni}
            />
          </label>
          <label className="bacon">
            bacon:
            <input
              type="checkbox"
              name="bacon"
              onChange={onChange}
              value={values.bacon}
            />
          </label>
          <label className="mushrooms">
            =Mushrooms:
            <input
              type="checkbox"
              name="mushrooms"
              onChange={onChange}
              value={values.mushrooms}
            />
          </label>
          <label className="artichoke">
            Artichoke:
            <input
              type="checkbox"
              name="artichoke"
              onChange={onChange}
              value={values.artichoke}
            />
          </label>
          <label className="pineapple">
            Pineapple:
            <input
              type="checkbox"
              name="pineapple"
              onChange={onChange}
              value={values.pineapple}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              id="name-input"
              name="name"
              onChange={onChange}
              value={values["name"]}
            />
          </label>
        </div>
        <div>
          <label>
            Instructions:
            <input
              id="instructions"
              name="instructions"
              onChange={onChange}
              value={values["instructions"]}
            />
          </label>
        </div>
        <div>
          <label>
            Special:
            <input
              id="special-text"
              name="special"
              onChange={onChange}
              value={values["special"]}
            />
          </label>
        </div>
        <div>
          <button id="order-button" disabled={disabled}>
            Add to Order
          </button>
        </div>
      </form>
    </div>
  );
}
