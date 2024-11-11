import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { assets } from "../assets/frontend_assets/assets";
import MyButton from "./MyButton";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login">
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login-container"
      >
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

<div className="login-inputs">
          {currentState === "Login" ? (
          <></>
        ) : (
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
            <Input placeholder="Enter your username" />
          </Form.Item>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
         
        >
          <Input type="email" placeholder="Enter your email"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
</div>


        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className="login-conditions">
          <Checkbox style={{}} required>
            By continuing, I agree to the terms of use & privacy policy.
          </Checkbox>
          
                      {currentState === "Login" ? (
            <p className="">Forgot your password?</p>
          ) : (
            ""
          )}
          {currentState === "Login" ? (
            <p className="">
              New to TAMU?{" "}
              <span onClick={() => setCurrentState("Sign Up")} style={{cursor: 'pointer', color: '#ff5400'}}>
                Create Account
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")} style={{cursor: 'pointer', color: '#ff5400'}}>
                Login Here
              </span>
            </p>
          )}
          </div>

        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <MyButton text={currentState === "Sign Up" ? "Create Account" : "Login"} />
          {/* <Button type="primary" htmlType="submit" style={{backgroundColor: ' #ff5400'}}>
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </Button> */}
        </Form.Item>
      </Form>
    </div>
  );
}
