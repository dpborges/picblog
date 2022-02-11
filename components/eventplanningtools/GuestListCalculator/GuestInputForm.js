import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
// import { Button } from 'react-native-elements'
import { Input } from '../../../components/formElements/Input';
import { Label } from '../../../components/formElements/Label';
import { Button }  from '../../../components/buttons/Button';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor, setMedia } from '../../../styles/CommonStyles';
import calcEstimatedGuests from './calcEstimatedGuests';
import {hasAtLeastOneNonEmptyValue}  from '../../../utils/validators/hasAtLeastOneNonEmptyValue'

const GuestInputForm = (props) => {
  
  let theFormCallBack = props.formCallBack;
  
  // Initial state variables
  const [formStatus, setFormStatus] = useState("");

  const [totalInvites, setTotalInvites] = useState(0);
  const [likelyToAttend, setLikelyToAttend] = useState(0);
  const [possibleNoShows, setPossibleNoShows] = useState(0);

  // Configure Input Element as Numeric Input  and set the width
  const NumericInput = ( (props) => {
    return (
      <Input   {...props}     />
    )
  })

  // Configure label component by setting width property for media query 
  const labelStyle = { fontSize: '1em', mq: { fontSize: '.9em', width: '3em', height: '4em' } };

  // Define validation schema
  const validationSchema = yup.object({
    localguests: yup.number().integer("Not an Integer").min(0, "invalid entry").notRequired("* is required").typeError("Not a number"),
    outOfTownGuests: yup.number().integer("Not an Integer").min(0, "invalid entry").notRequired().typeError("Not a number"),
    outOfStateGuests: yup.number().integer("Not an Integer").min(0, "invalid entry").notRequired().typeError("Not a number")
  })

  return (
    <div>
      <Formik initialValues={{ localguests: "", outOfTownGuests: "", outOfStateGuests: "" }} onSubmit={(data, {setSubmitting, setErrors, resetForm} ) => {
          
          // Ensure empty strings are converted  to 0 on input.
          let lg   = data.localguests      === "" ? 0 : data.localguests;
          let ootg = data.outOfTownGuests  === "" ? 0 : data.outOfTownGuests;
          let oosg = data.outOfStateGuests === "" ? 0 : data.outOfStateGuests;

          // Set form error if at least one value was not entered. 
          // console.log("values array ", [lg,  ootg, oosg])
          let hasOneInput = hasAtLeastOneNonEmptyValue([lg,  ootg, oosg], 0);
          // console.log("hastOneInput ", hasOneInput);
          hasOneInput ? setFormStatus("") : setFormStatus("At least one value required");

          // Calculate the guest estimates
          let results = calcEstimatedGuests(lg, ootg, oosg);
          setTotalInvites(results.totalInvites);
          setLikelyToAttend(results.likelyToAttend);
          setPossibleNoShows(results.possibleNoShows);

          // Fire the callback passed down from EventPlanningToolsPage to provide parent page numGuests likely to attend
          theFormCallBack(results.likelyToAttend)

          setSubmitting(true);
          /* Call async api to save data here; once completed, set setSubmitting(false) */
          setSubmitting(false);  /*
          /* allows you to reset form after submitting it and saving it to external store */
          // resetForm()
        }}
        validationSchema={ validationSchema }
      > 
        {/* below is the form - The form seems to be wrapped in a function that returns the form as JSX that in 
            turn becomes a children prop to Formik component. That being said, Formik passes down the values and the
            various callbacks */}
        {({ values, errors, handleSubmit, handleChange }) => (
            <Form>
              <FormErrorMsg>{formStatus}</FormErrorMsg>
              <View>
                <CustomLabel>Enter Number of Local Guests</CustomLabel>
                <NumericInput name="localguests" placeholder="number" errorStyle={{width: '9em'}}
                    value={values.localguests}
                    onChange={handleChange}
                    error={errors.localguests}
                    type="text"
                    autoComplete="off"
                />
              </View>              
              <View>
                <CustomLabel>Enter Number of Out of Town Guests / (eg. 2-4 hour travel)</CustomLabel>
                <NumericInput name="outOfTownGuests" placeholder="number"
                    value={values.outOfTownGuests}
                    onChange={handleChange}
                    error={errors.outOfTownGuests}
                    type="text"
                    autoComplete="off"
                />
              </View> 
              <View>
                <CustomLabel>Enter Number of Out of State Guests / (eg. requiring flight/hotel)</CustomLabel>
                <NumericInput name="outOfStateGuests" placeholder="number"
                    value={values.outOfStateGuests}
                    onChange={handleChange}
                    error={errors.outOfStateGuests}
                    type="text"
                    autoComplete="off"
                />
              </View>

              <ButtonContainer >
                <Button title="Submit" type="submit" containerStyle={ {width: '8.2em', mq: {width: "95%", justifyContent: 'center'}} } />
              </ButtonContainer>

              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2em"/>
              
              <ResultsContainer>
                <ResultLayout>
                  <Label labelStyle={labelStyle}>Total Guests</Label>
                  <Result>{totalInvites}</Result>
                </ResultLayout>
                <ResultLayout>
                  <Label labelStyle={labelStyle}>Likely to Attend</Label>
                  <Result>{likelyToAttend}</Result>
                </ResultLayout>
                <ResultLayout>
                  <Label labelStyle={labelStyle}>Possible No Shows</Label>
                  <Result>{possibleNoShows}</Result>
                </ResultLayout>
              </ResultsContainer>
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness=".1em" mt="1em"/>
            </Form>
        )}
      </Formik>
    </div>
  
  );
}

export default GuestInputForm;

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

const CustomLabel = styled.div`
  color: ${setColor.black} !important;
  font-size: 1em;
  width: 70%;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    margin-top: -.5em;
    width: 65%;
  }
`;

const View = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  color: ${setColor.black} !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: .50em;
  padding-right: 1em;
  /* padding-top: .5em; */
  width: 100%;
  height: 4em;
  vertical-align: top;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    height: 5em;
  }

`;

const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    margin: 0;
    width: 90%;
  }

`;

const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Result = styled.div`
  color: ${props => props.theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  padding-top: 1px;
  text-align: center;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${({ theme }) => theme.fontSize.xsmall};
    flex-direction: column;
  }

`;

const ButtonContainer = styled.div`
  margin-top: .5em;
  margin-right: 0;
  display: flex; 
  justify-content: flex-end;
  padding-right: 1em;
  /* width: 100%; */

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    margin-right: 0; 
  }

`;

const FormErrorMsg = styled.div`
  color: red;
  font-size: .9em;
  text-align: right;
  padding: 0;
  margin: .2em 0 1em 0;
  text-transform: capitalize;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    text-align: center;
  }

`;