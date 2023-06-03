// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: '',
    lastNameError: '',
    isFormSubmit: false,
  }

  onFormSubmitted = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstNameError: 'Required', lastNameError: 'Required'})
    } else if (firstName === '') {
      this.setState({firstNameError: 'Required'})
    } else if (lastName === '') {
      this.setState({lastNameError: 'Required'})
    } else {
      this.setState({isFormSubmit: true})
    }
  }

  getFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameError: 'Required'})
    } else {
      this.setState({firstName: event.target.value, firstNameError: ''})
    }
  }

  getLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameError: 'Required'})
    } else {
      this.setState({lastName: event.target.value, lastNameError: ''})
    }
  }

  newForm = () => {
    this.setState({isFormSubmit: false})
  }

  renderSubmittedForm = () => (
    <div className="submitted-container">
      <img
        className="success-logo"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="submit-content">Submitted Successfully</p>
      <button onClick={this.newForm} type="button" className="custom-btn">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {firstNameError, lastNameError, isFormSubmit} = this.state
    const firstErrorStyling =
      firstNameError === 'Required' ? 'error-styling' : 'input-field'

    const lastErrorStyling =
      lastNameError === 'Required' ? 'error-styling' : 'input-field'

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmit ? (
          <div>{this.renderSubmittedForm()}</div>
        ) : (
          <form className="card-container" onSubmit={this.onFormSubmitted}>
            <label htmlFor="firstName" className="first-name">
              FIRST NAME
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First name"
              className={firstErrorStyling}
              onBlur={this.getFirstName}
            />
            <p className="error">{firstNameError}</p>
            <label htmlFor="lastName" className="last-name ">
              LAST NAME
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Last name"
              className={lastErrorStyling}
              onBlur={this.getLastName}
            />
            <p className="error">{lastNameError}</p>
            <button type="submit" className="button-container">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
