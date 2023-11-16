import { nanoid } from 'nanoid';
import css from './Form.module.css';
const { Component } = require('react');

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    this.props.onSubmit({ id, name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.formContainer}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label>
            <input
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <input
              className={css.input}
              type="tel"
              placeholder="Number"
              name="number"
              value={this.state.number.replace(/[^0-9.]/g, '')}
              onChange={this.handleChange}
              required
            />
          </label>
          <button className={css.formButton}>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default Form;
