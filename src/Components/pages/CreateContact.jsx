import React, { useState, useEffect } from 'react'
import { Form } from 'semantic-ui-react';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
  { key: 'p', text: 'Prefer not to say', value: 'Prefer not to say' }
]

const prefixOptions = [
  { key: 'mr', text: 'Mr', value: 'Mr' },
  { key: 'mrs', text: 'Mrs', value: 'Mrs' },
  { key: 'ms', text: 'Ms', value: 'Ms' },
  { key: 'master', text: 'Master', value: 'Master' },
  { key: 'Dr', text: 'Dr', value: 'Dr' },
]

const CreateContact = (props) => {
  // const onFinish = (values) => {
  //   console.log('Success:', values);
  //   console.log('state: ', state);
  // }

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // }

  const [state, setState] = useState({})

  const handleChange = (e, { value }) => {
    setState({value})
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    console.log('FormData', Object.fromEntries(new FormData(target)));
    setState({ value:"" })
  }

  // return (
  //   <div>
  //     <Form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         setLoginError(!login);
  //         setPasswordError(!password);
  //       }}
  //     >
  //       <Form.Group>
  //         <Form.Input
  //           error={loginError && { content: "Login is required" }}
  //           placeholder="Login"
  //           name="login"
  //           value={login}
  //           onChange={(e) => {
  //             setLoginError(false);
  //             setLogin(e.target.value);
  //           }}
  //           onBlur={(e) => {
  //             setLoginError(!login);
  //           }}
  //         />
  //         <Form.Input
  //           error={passwordError && { content: "Password is required" }}
  //           placeholder="password"
  //           name="password"
  //           value={password}
  //           onChange={(e) => {
  //             setPasswordError(false);
  //             setPassword(e.target.value);
  //           }}
  //           onBlur={(e) => {
  //             setPasswordError(!password);
  //           }}
  //         />
  //         <Form.Button content="Submit" />
  //       </Form.Group>
  //     </Form>
  //   </div>
  // )

  return (

    <Form onSubmit={onSubmit}>
      <Form.Group inline label='Name'>
        <Form.Select
          fluid
          name='name_prefix'
          label='Name'
          options={prefixOptions}
          placeholder='Prefix'
        />
        <Form.Field fluid name="first_name" placeholder='First name' control='input' required='true' />
        <Form.Field fluid name="middle_name" placeholder='Middle name' control='input' />
        <Form.Field fluid name="last_name" placeholder='Last name' control='input' required='true' />
        <Form.Field fluid name="name_suffix" placeholder='Suffix' control='input' />
      </Form.Group>
        <Form.Field fluid name="nickname" label='Nickname' placeholder='Nickname' control='input' />
      <Form.Group inline>
        <Form.Field fluid name="organisation" label='Organisation' placeholder='Organisation' control='input' />
        <Form.Field fluid name="title" label='Title' placeholder='Title' control='input' />
        <Form.Field fluid name="role" label='Role' placeholder='Role' control='input' />
      </Form.Group>
      <Form.Group grouped>
        <Form.Field fluid name="email" label='Email' placeholder='first.last@home.com' control="input" type='email' />
        <Form.Field fluid name="work_email" label='Work Email' placeholder='full.name@work.com' control='input' type='email' />
        <Form.Field fluid name="other_email" label='Other Email' placeholder='other@a.b.com' control='input' type='email' />
      </Form.Group>
      <Form.Group grouped>
        <Form.Field fluid name="mobile_number" label='Mobile Number' placeholder='04123456789' control='input' />
        <Form.Field fluid name="home_phone_number" label='Home Phone Number' placeholder='03912345678' control='input' />
        <Form.Field fluid name="work_phone_number" label='Work Phone Number' placeholder='04912345678' control='input' />
        <Form.Field fluid name="pager_number" label='Pager Number' placeholder='Page Number' control='input' />
        <Form.Field fluid name="home_fax_number" label='Home Fax Number' placeholder='Home Fax Number' control='input' />
        <Form.Field fluid name="work_fax_number" label='Work Fax Number' placeholder='Work Fax Number' control='input' />
      </Form.Group>
      <Form.Group grouped>
        <Form.Field fluid name="home_address" label='Home Address' placeholder='Home Address' control='input' />
        <Form.Field fluid name="work_address" label='Work Address' placeholder='Work Address' control='input' />
        <Form.Field fluid name="other_address" label='Other Address' placeholder='Other Address' control='input' />
      </Form.Group>
      <Form.Group widths='equal'>
        <Form.Field control='button' type="primary"  htmlType="submit">
          Create Contact
        </Form.Field>
        <Form.Field control='button'>
          Reset Form
        </Form.Field>
      </Form.Group>
    </Form>
  )
}

export default CreateContact
