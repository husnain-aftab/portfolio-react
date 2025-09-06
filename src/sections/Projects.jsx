import React from "react";
import { motion } from "framer-motion";
import { Card, Button, Tag, Space } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";

const projects = [
  {
    title: "Lingostry",
    desc: "Language learning platform (ASP.NET Core + Angular, mobile app).",
    tags: ["ASP.NET Core", "Angular", "Mobile"],
    github: "#",
    demo: "#"
  },
  {
    title: "DocuWise",
    desc: "AI-powered document summarizer & categorizer (ASP.NET + Python).",
    tags: ["ASP.NET", "Python", "AI"],
    github: "#",
    demo: "#"
  },
  {
    title: "InsightInBytes",
    desc: "Weekly tech/AI newsletter with curated insights.",
    tags: ["Newsletter", "Tech", "AI"],
    github: "#",
    demo: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 container mx-auto px-4">
      <h2 className="mb-8 text-3xl font-semibold text-center">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Card
              hoverable
              className="h-full"
              actions={[
                <Button type="link" icon={<GithubOutlined />} href={p.github}>
                  Code
                </Button>,
                <Button type="link" icon={<LinkOutlined />} href={p.demo}>
                  Demo
                </Button>
              ]}
            >
              <Card.Meta
                title={p.title}
                description={
                  <div>
                    <p className="mb-4">{p.desc}</p>
                    <Space size={[0, 8]} wrap>
                      {p.tags.map((tag) => (
                        <Tag key={tag} color="blue">
                          {tag}
                        </Tag>
                      ))}
                    </Space>
                  </div>
                }
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
