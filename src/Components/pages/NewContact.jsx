import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Input, Select, Radio } from 'antd'
import ContactForm from '../ContactForm';
import Header from '../Header';

const NewContact = (props) => {

  const nav = useNavigate()

  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    let full_name = ""
    if (values.name_prefix) { full_name += values.name_prefix += " "; }
    if (values.first_name) { full_name += values.first_name += " "; }
    if (values.last_name) { full_name += values.last_name += " "; }
    if (values.middle_name) { full_name += values.middle_name += " ";}
    if (values.name_suffix) { full_name += values.name_suffix }
    
    const options = {...values, full_name: full_name}
    const metadata = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options),
    }
    fetch('https://rp-contacts-manager-backend.herokuapp.com/contacts/', metadata)
      .then(res => res.json())
      .then(jsonResponse => nav(`/${jsonResponse._id}`))
      .then(res => form.resetFields())
      .catch((err) => console.log(err))
  };

  return (
    // <div>
    //   <Form name="contactForm"
    //     onFinish={onFinish} layout="verticle">
    //     <Input.Group compact>
    //       <span>Name: </span>
    //       <Form.Item
    //         name={['name', 'name_prefix']}
    //       >
    //         <Select name="" placeholder="prefix" allowClear>
    //           <Option value="Mr">Mr</Option>
    //           <Option value="Mrs">Mrs</Option>
    //           <Option value="Ms">Ms</Option>
    //           <Option value="Master">Master</Option>
    //           <Option value="Dr">Dr</Option>
    //         </Select>
    //       </Form.Item>
    //       <Form.Item
    //         name={['name', 'first_name']}
    //       >
    //         <Input type="text" placeholder="First Name" />
    //       </Form.Item>
    //       <Form.Item
    //         name={['name', 'middle_name']}
    //       >
    //         <Input type="text" placeholder="Middle Name" />
    //       </Form.Item>
    //       <Form.Item
    //         name={['name', 'last_name']}
    //       >
    //         <Input type="text" placeholder="Last Name" />
    //       </Form.Item>
    //       <Form.Item
    //         name={['name', 'name_suffix']}
    //       >
    //         <Input type="text" placeholder="Suffix" />
    //       </Form.Item>
    //     </Input.Group>
    //     <Form.Item name="nickname" label="Nickname">
    //       <Input type="text" placeholder="Nickname" />
    //     </Form.Item>
    //     <Form.Item name="organisation" label="Organisation">
    //       <Input type="text" placeholder="Organisation" />
    //     </Form.Item>
    //     <Form.Item name="title" label="Title">
    //       <Input type="text" placeholder="Title" />
    //     </Form.Item>
    //     <Form.Item name="role" label="Role">
    //       <Input type="text" placeholder="Role" />
    //     </Form.Item>
    //     <Form.Item name="gender" label="Gender">
    //       <Radio.Group >
    //         <Radio value="male"> Male </Radio>
    //         <Radio value="female"> Female </Radio>
    //         <Radio value="other"> Other </Radio>
    //         <Radio value="prefer not to say"> Prefer not to say </Radio>
    //       </Radio.Group>
    //     </Form.Item>
    //     <Form.Item name="email" label="Email">
    //       <Input type="email" placeholder="email address" />
    //     </Form.Item>
    //     <Form.Item name="phone_number" label="Contact Number">
    //       <Form.Item name="home_phone_number" label="Home">
    //         <Input type="number" />
    //       </Form.Item>
    //       <Form.Item name="work_phone_number" label="Work">
    //         <Input type="number" />
    //       </Form.Item>
    //       <Form.Item name="mobile_number" label="Mobile">
    //         <Input type="number" />
    //       </Form.Item>
    //       <Form.Item name="other_phone_number" label="Other">
    //         <Input type="number" />
    //       </Form.Item>
    //       <Form.Item name="pager_number" label="Pager">
    //         <Input type="number" />
    //       </Form.Item>
    //       <Form.Item name="fax_number" label="Fax Number">
    //         <Form.Item name="home_fax_number" label="Home">
    //           <Input type="number" />
    //         </Form.Item>
    //         <Form.Item name="work_fax_number" label="Work">
    //           <Input type="number" />
    //         </Form.Item>
    //       </Form.Item>
    //       <Form.Item name="address" label="Address">
    //         <Form.Item name="home_address" label="Home">
    //           <Input type="string" />
    //         </Form.Item>
    //         <Form.Item name="work_address" label="Work">
    //           <Input type="string" />
    //         </Form.Item>
    //         <Form.Item name="other_address" label="Other">
    //           <Input type="string" />
    //         </Form.Item>
    //       </Form.Item>
    //     </Form.Item>
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //     <Button htmlType="button" onClick={onReset}>
    //       Reset
    //     </Button>
    //   </Form>

    // </div>

    <div>
      {/* <Form name="contactForm"
        onFinish={onFinish} layout="verticle">
        <Input.Group compact>
          <span>Name: </span>
          <Form.Item name='name_prefix'>
            <Select name="" placeholder="prefix">
              <Option value="Mr">Mr</Option>
              <Option value="Mrs">Mrs</Option>
              <Option value="Ms">Ms</Option>
              <Option value="Master">Master</Option>
              <Option value="Dr">Dr</Option>
            </Select>
          </Form.Item>
          <Form.Item name='first_name'>
            <Input type="text" placeholder="First Name" />
          </Form.Item>
          <Form.Item name='middle_name'>
            <Input type="text" placeholder="Middle Name" />
          </Form.Item>
          <Form.Item name='last_name'>
            <Input type="text" placeholder="Last Name" />
          </Form.Item>
          <Form.Item name='name_suffix'>
            <Input type="text" placeholder="Suffix" />
          </Form.Item>
        </Input.Group>
        <Form.Item name="nickname" label="Nickname">
          <Input type="text" placeholder="Nickname" />
        </Form.Item>
        <Form.Item name="organisation" label="Organisation">
          <Input type="text" placeholder="Organisation" />
        </Form.Item>
        <Form.Item name="title" label="Title">
          <Input type="text" placeholder="Title" />
        </Form.Item>
        <Form.Item name="role" label="Role">
          <Input type="text" placeholder="Role" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Radio.Group >
            <Radio value="male"> Male </Radio>
            <Radio value="female"> Female </Radio>
            <Radio value="other"> Other </Radio>
            <Radio value="prefer not to say"> Prefer not to say </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="email" label="Email" rules={
          [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            }
          ]
        }>
          <Input type="email" placeholder="first.last@home.com" />
        </Form.Item>
        <Form.Item name="work_email" label="Work Email" rules={
          [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            }
          ]
        }>
          <Input type="email" placeholder="full.name@work.com" />
        </Form.Item>
        <Form.Item name="other_email" label="Other Email" rules={
          [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            }
          ]
        }>
          <Input type="email" placeholder="other@email.com" />
        </Form.Item>
        <Form.Item name="phone_number" label="Contact Number">
          <Form.Item name="home_phone_number" label="Home">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="work_phone_number" label="Work">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="mobile_number" label="Mobile">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="other_phone_number" label="Other">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="pager_number" label="Pager">
            <Input type="text" />
          </Form.Item>
          <Form.Item name="fax_number" label="Fax Number">
            <Form.Item name="home_fax_number" label="Home">
              <Input type="text" />
            </Form.Item>
            <Form.Item name="work_fax_number" label="Work">
              <Input type="text" />
            </Form.Item>
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Form.Item name="home_address" label="Home">
              <Input type="string" />
            </Form.Item>
            <Form.Item name="work_address" label="Work">
              <Input type="string" />
            </Form.Item>
            <Form.Item name="other_address" label="Other">
              <Input type="string" />
            </Form.Item>
          </Form.Item>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset" onClick={onReset}>
          Reset
        </Button>
      </Form> */}
      <Header text="Create a new Contact" />
      <ContactForm data="" onFinish={handleSubmit} />
    </div>
  )
}

export default NewContact