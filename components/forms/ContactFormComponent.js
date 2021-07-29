import React from 'react';
// import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import axios from 'axios';
import getAppConfigParm  from '../../config/AppConfig';

// import '../../styles/form.scss';
import inputStyles from '../../styles/inputs.module.scss';
import btnStyles   from '../../styles/button.module.scss';
import hpsStyles   from '../../styles/homepage-sections.module.scss';

// Below is a description of how to implement this component in the proper manner. 
// ---------------------------------------------------------------------------------
// Goal is to keep track of local state for all of the inputs. Only when form is sumbitted and validated,
// do we want to submit change to redux store. That submission (dispatch) is handled by parent component.
// The form here is simply responsible for presenting the form, validating inputs, saving data in 
// local state, and passing data to onSumbit function prop for dispatch.
// --------------------------------------------------------------------------------
// As you may notice, there is no connect() function imported for this component, therefore it cannot 
// connect to the redux store. Instead I used component state and handled the actual service call 
// right from this component, which is an anti-pattern.
export class ContactFormComponent extends React.Component {
    constructor(props) {
        super(props);
    
        // local component state
        this.state = {
            name:          '',
            email:         '',
            referredby:    '',
            feedback:      '',
            error:         undefined
        };
    }

    // Be aware that "e.target.value" cannot be used in the callback inside this.setState()
    // This is why we assign e.target.value to variable first. You may use e.persist() 
    // instead of the assignment line before setState() instead.
    onNameChange = (e) => {
        const name = e.target.value;    
        this.setState(() => ({ name }));
        // this.setState(
        //     { name: e.target.value },
        //     () => console.log(this.state.name)
        // );
    };

    onEmailChange = (e) => {
        const email = e.target.value;    
        this.setState(() => ({ email }));
        // this.setState(
        //     { lastname: e.target.value },
        //     () => console.log(`${this.state.firstname} ${this.state.lastname}`)
        // );
    };

    onReferredbyChange = (e) => {
        const referredby = e.target.value     // assign input value to email; allows to use object shorthand on next line
        this.setState(() => ({ referredby })); // update email on local state using ES6 shorthand
        // this.setState(
        //     { email: e.target.value },
        //     () => { console.log(`${this.state.firstname} ${this.state.lastname}`)
        //             console.log(`${this.state.email}`) }
        // );
    };

    onFeedbackChange = (e) => {
        // console.log("onPassWordChange called");
        const feedback = e.target.value;     // assign input value to description; allows to use object shorthand on next line
        this.setState(() => ({ feedback })); // update description on local state using ES6 shorthand
    };

    
    // Note: this local onSubmit method does validation, creates saves user feedback, but 
    // does NOT delegate the dispatch action to the parent component. Rather than dispatching
    // an action to make api call, the api call is made from this component itself (known to be an 
    // antipattern). This component is not connected to the redux store. It is using local
    // state to save form data and error messages.  I decided to place the axios api call within 
    // the onsubmit button below instead of an async action.  Since auth reducer was relegated 
    // to authentication, I did not want to create a separate reducer just to handle the api errors 
    // for this one form, and I did not what to mix form errors with the auth reducer. 
    // Instead I used component state to save error message. I may what to introdcue a general-app-data
    // reducer, to save common data that can apply to more that one domain set.
    onSubmit = (e) => {
        let self = this;
        e.preventDefault();
        if (this.isValidForm()) {   /* If valid form, create new user account */
            // console.log("onSubmit was called successfully");
            /* Try saving user feedback.  If there is an error, render error message to screen */
            this.saveUserFeedback().then(({name, email, referredby, feedback, errmsg}) => {
                // console.log("User Feedback saved from")
                if (errmsg) { /* no error encountered saving user feedback */
                    console.log("Error: ", errmsg)
                    /* update error msg on local state so it displays to user when component re-renders*/
                    this.setState(() => ({error: errmsg})); 
                } else {
                    /* If there are no error messages, clear form fields */
                    this.setState(() => ({ name: '', email: '', referredby: '',  feedback: '',  error: ''}));
                }
            }).catch((errmsg) => {  /* catch if error with axios call to create new user account*/
                console.log(errmsg);  /* print actual error message froma axios to console for you to view */
                errmsg = "Server issue. Please try again later."; /* create user friendly message */
                self.setState(() => ({error: errmsg})); /* set error message to show to user when component re-renders */
                // this.props.onSubmit({
                //     error
                // })
            })
        }
    };
    
    render() {
        return (
             <div id="contact-form" className={hpsStyles["homepage-s4"]}>
                <h1 className={hpsStyles["homepage-s4__heading"]}>WE'RE HAPPY TO HEAR FROM YOU</h1>
                <hr className={hpsStyles["hr-medium-section4"]} />
                <form className={inputStyles["form-feedback"]} onSubmit={this.onSubmit}>
                    {this.state.error ? <span className={inputStyles["error"]}>{this.state.error}</span> : <div className="rc-mt-2">&nbsp;</div>}
                    <div className={inputStyles["form__label-field-combo"]} >
                        <label className={inputStyles["form__feedback-form-label"]} 
                               htmlFor="name">Name</label>
                        <input 
                            type="text"
                            placeholder="name"
                            className={inputStyles["form__field--large"]}
                            value={this.state.name}
                            onChange={this.onNameChange}
                            maxLength="75"
                        />
                    </div>
                    <div className={inputStyles["form__label-field-combo"]}>
                        <label className={inputStyles["form__feedback-form-label"]} 
                          htmlFor="email">Email</label>
                        <input 
                            type="text"
                            placeholder="email"
                            className={inputStyles["form__field--large"]}
                            value={this.state.email}
                            onChange={this.onEmailChange}
                            maxLength="75"
                        />
                    </div>
                    <div className={inputStyles["form__label-field-combo"]}>
                        <label className={inputStyles["form__feedback-form-label"]} 
                               htmlFor="howfound">How did you find us? 
                           <span style={{fontSize: "1.2rem", fontWeight: '400'}}>(optional)</span>
                        </label>
                        <input 
                            type="text"
                            placeholder="(eg. Google Search, Social Media, other?)"
                            className={inputStyles["form__field--large"]}
                            onChange={this.onReferredbyChange}    // change the state.email value vi on change method
                            value={this.state.referredby}         // render component with value from state object
                            maxLength="75"
                        />
                    </div>
                    <div className={inputStyles["form__label-field-combo"]}>
                        <label className={inputStyles["form__feedback-form-label"]} htmlFor="feedback">Your message</label>
                        <textarea
                            placeholder=""
                            className={inputStyles["textarea-large"]}
                            onChange={this.onFeedbackChange}    // change the state.description value
                            value={this.state.feedback}         // render component with value from state object
                            maxLength="300"
                        >
                        </textarea>
                    </div>
                    <div className={inputStyles["form__label-field-combo"]} >
                      <label htmlFor="filler">&nbsp;</label>
                      <button className={btnStyles["feedback-form-button"]}><p className="color-w">Send It</p></button> 
                    </div>
                </form>
                <div className="rc-horiz-spacer-large">&nbsp;</div>
            </div>
        );
    }

    isValidForm = () => {
        let valid = false;
        if (!this.state.name) {
            this.setState(() => ({ error: 'Please enter name'}))
        } else
        if (!this.state.email || !isEmail(this.state.email)) {
            this.setState(() => ({ error: 'Please enter valid email address'}))
        } else
        // if (!this.state.referredby) {
        //     this.setState(() => ({ error: 'Tell us how you found us'}))
        // } else
        if (!this.state.feedback) {
            this.setState(() => ({ error: 'Please provide feeback'}))
        } else {   // Clear the error when all validations passed
            this.setState(() => ({ error: ''}));
            valid = true;
        }
        return valid;
    }
   
    saveUserFeedback = () => {
        let self = this;
        let createUserPromise  = new Promise (
            function resolver(resolve, reject) {
                let url   = getAppConfigParm("picUrl") + '/feedback'; 
                let axiosConfig = getAppConfigParm("axiosConfig"); 
                let postData = {
                    name: self.state.name,
                    email: self.state.email,
                    referredby: self.state.referredby || "no-referral",
                    feedback: self.state.feedback
                };
                axios.post(url, postData, axiosConfig)
                    .then(function (response) {
                        // console.log('User feedback saved succesfully: ', response.data);
                        let errmsg = response.data.errmsg || '';
                        let name = response.data.name;
                        let email = response.data.email;
                        let referredby = response.data.referredby;
                        let feedback = response.data.feedback;
                        resolve({name, email, referredby, feedback, errmsg});
                    }).catch (function (error){
                        let caughtError = error.message || error.name || "Axios Error";
                        let errorComponent = '"HomePage Feedback Form"';
                        let userEmail = postData.email;
                        // Concat parts of the error message below
                        var errorMsg = `${caughtError} occurred; component:'${errorComponent}'  Email:${postData.email}`
                        reject({error: errorMsg});
                });
            } // End of function resolver
        ); // End of promise
        return createUserPromise;
    }; // end of createNewUserAccount function

} // END OF REACT component
