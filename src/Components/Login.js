import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../App.css";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../Stylings/loginStyle";

const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const Auth = useAuth();
  const Navigate = useNavigate();

  const handleLogin = () => {
    Auth.login(user);
    // localStorage.setItem();
    // localStorage.getItem();
    Navigate("/landingpage");
    // setTimeout(() => {
    //   alert(`Hi ${user}, you have successfully loggedin!!!`);
    // }, 4000);
  };

  const isSubmitDisabled = user.trim() === "" && email.trim() === "";
  return (
    <LoginForm className="formName">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            className="userInput"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your password!",
              type: "email",
            },
          ]}
        >
          <Input
            className="emailInput"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            className="loginSubmitBtn"
            type="primary"
            htmlType="submit"
            onClick={() => handleLogin()}
            disabled={isSubmitDisabled}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginForm>
  );
};

export default Login;
