import React from 'react'
import { useEffect } from 'react'
import { Form, Button, Input, Radio } from 'antd'
import { useNavigate } from 'react-router-dom'

const ContactForm = (props) => {
  const nav = useNavigate()
  const contact = props.data
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    throw errorInfo;
  };

  const onCancel = (e) => {
    nav("/contacts")
  }

  useEffect(() => {
    form.setFieldsValue(contact)
  }, [form, contact])

  return (
    <div>
      <Form
        form={form}
        layout="horizontal"
        name="contact-form"
        onFinish={props.onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={contact}>
        <Input.Group compact>
          <Form.Item name='name_prefix' label="Name:" >
            <Radio.Group >
              <Radio value="Mr"> Mr </Radio>
              <Radio value="Mrs"> Mrs </Radio>
              <Radio value="Ms"> Ms </Radio>
              <Radio value="Dr"> Dr </Radio>
              <Radio value="Prof"> Prof </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name='first_name' rules={[
            {
              type: "string",
              message: "Must be valid name",
            },
            {
              required: true,
              message: "First name is required",
            }
          ]}>
            <Input type="text" placeholder="First Name" />
          </Form.Item>
          <Form.Item name='middle_name' rules={[
            {
              type: "string",
              message: "Must be valid name",
            }
          ]}>
            <Input type="text" placeholder="Middle Name" />
          </Form.Item>
          <Form.Item name='last_name' rules={[
            {
              type: "string",
              message: "Must be valid name",
            }
          ]}>
            <Input type="text" placeholder="Last Name" />
          </Form.Item>
          <Form.Item name='name_suffix' rules={[
            {
              type: "string",
              message: "Must be valid name",
            }
          ]}>
            <Input type="text" placeholder="Suffix" />
          </Form.Item>
        </Input.Group>
        <Form.Item name="nickname" label="Nickname" rules={[
          {
            type: "string",
            message: "Must be valid name",
          }
        ]}>
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
        <Button type="primary" htmlType="submit" onSubmit={props.onSubmit}>
          Submit
        </Button>
        <Button htmlType="reset" onClick={onCancel}>
          Cancel
        </Button>
        <Button htmlType="reset" onClick={onReset}>
          Reset
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
