import React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { Input } from '../../../components/formElements/Input';
// import { Button }  from '../../../components/buttons/Button';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor, setMedia } from '../../../styles/CommonStyles';
import DrinkResults from './DrinkResults';
import ColumnHeading from './ColumnHeading';

const DrinkInputForm = (props) => {

  // Configure Input Element as Numeric Input  and set the width
  const containerStyle      = {width: '10em', height: '7em'};        // Set the width of the input container.
  const inputContainerStyle = {textAlign: 'center'};   // Text-align right Input for use with numeric data

  const NumericInput = ( (props) => {
    return (
      <Input  
              {...props} 
      />
    )
  })

  // Define validation schema
  const validationSchema = yup.object({
    numGuests: yup.number().integer("Not an Integer").min(1, "* Enter number").required("* is required").typeError("Not a number"),
    numHours:  yup.number().integer("Not an Integer").min(1, "* Enter number").required("* is required").typeError("Not a number"),
  })

  return (
    <div>
      <Formik initialValues={{ numGuests: "", numHours: ""}} onSubmit={(data, {setSubmitting, setErrors, resetForm} ) => {
          
          // Ensure empty strings are convert to 0 on input.
          // let ng = data.numGuests      === "" ? 0 : data.numGuests;
          // let nh = data.numHours  === "" ? 0 : data.numHours;

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
              <View>
                <CustomLabel>Enter Number of Guests</CustomLabel>
                <NumericInput name="numGuests" placeholder="number"
                    value={values.numGuests}
                    onChange={handleChange}
                    error={errors.numGuests}
                    autoComplete="off"
                />
              </View>              
              <View>
                <CustomLabel>Enter Number of Hours for the Event</CustomLabel>
                <NumericInput name="numHours" placeholder="number"
                    value={values.numHours}
                    onChange={handleChange}
                    error={errors.numHours}
                    autoComplete="off"
                />
              </View> 
            {/*
              <ButtonContainer>
                <Button title="Calculate" type="submit" />
              </ButtonContainer>
            */}
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2em"/>
              <ColumnHeading />
              <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em"/>

              <DrinkResults numGuests={values.numGuests} numHours={values.numHours} />
            </Form>
        )}
      </Formik>
    </div>
  
  );
}

export default DrinkInputForm;

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

const CustomLabel = styled.div`
  color: ${setColor.black} !important;
  font-size: 1em;
  margin-top: -1em;
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
  margin-top: 1em;
  align-items: center;
  padding-left: .5em;
  padding-right: 1em;
  /* padding-top: .5em; */
  width: 100%;
  height: 4em;
  vertical-align: top;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    height: 3em;
  }

`;

