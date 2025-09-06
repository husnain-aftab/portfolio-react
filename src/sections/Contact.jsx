import React from "react";
import { motion } from "framer-motion";
import { Form, Input, Button, message } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // TODO: wire to your API / Formspree / EmailJS
    console.log(values);
    message.success("Thanks! I'll get back to you soon.");
    form.resetFields();
  };

  return (
    <section id="contact" className="py-16 container mx-auto px-4">
      <h2 className="mb-8 text-3xl font-semibold text-center">Get in Touch</h2>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="p-8 rounded-lg shadow-md bg-gradient-to-br from-sky-50 to-white dark:from-navy-900 dark:to-navy-800 dark:bg-opacity-90"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input size="large" placeholder="Your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" }
            ]}
          >
            <Input size="large" placeholder="your.email@example.com" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea
              rows={4}
              size="large"
              placeholder="What would you like to discuss?"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              icon={<SendOutlined />}
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </section>
  );
}
