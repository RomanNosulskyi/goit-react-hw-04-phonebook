import {useState} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { PhoneBook } from '../PhoneBook/PhoneBook';

const Form = ()=> {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
const [name, setName] = useState(``);
const [number, setNumber] = useState(``);
const state = {
    name,
    number,
  };

 const SubmitForm = evt => {
    evt.preventDefault();
    onSubmit({ ...state, id: nanoid() });
   setName(``);
   setNumber(``);
  };

  const ChangeInput = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <PhoneBook
        SubmitForm={this.SubmitForm}
        ChangeInput={this.ChangeInput}
        options={this.state}
      />
    );
  }
}
export { Form };
