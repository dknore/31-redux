import React from 'react';
import {connect} from 'react-redux';

import {
  create,
  update,
  remove,
} from '../actions/actions.jsx';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catName: '',
      budget: '',
      date: new Date(),
      isEditing: false,
    };
    // this.updateCatName = this.updateCatName.bind(this);
    // this.updateBudget = this.updateBudget.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // updateCatName(event) {
  //   this.setState({title: event.target.value});
  // }

  // updateBudget(event) {
  //   this.setState({content: event.target.value});
  // }

  submit(event) {
    event.preventDefault();
    if (this.props.name === 'create') {
      this.props.create(this.state);
    }
    if (this.props.name === 'update') {
      let newValue = Object.assign(this.state, {isEditing: false, id: this.props.id});
      this.props.update(this.state);
    }
  }

  handleChange(event) {
    this.setState ({[event.target.name]: event.target.value});
  }

  render() {
    return <form id="add-cat" onSubmit={this.submit}>
      <input 
        type="text" 
        name="catName" 
        value={this.state.catName}
        placeholder="Category"
        onChange={this.handleChange}
      />
      
      <input 
        type="text" 
        name="budget" 
        value={this.state.budget}
        placeholder="Budget"
        onChange={this.handleChange}
      />
      
      <button type="submit"> Add Category </button>
    </form>;
  }
}

const mapStateToProps = state => ({
  category: state.category
});

const mapDispatchToProps = (dispatch) => {
  return {
    create: category => dispatch(create(category)),
    update: category => dispatch(update(category)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);