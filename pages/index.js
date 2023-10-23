import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import * as React from "react";
import Navbar from "@/components/Navbar";
import { Avatar } from "@mui/material";
import Banner from "@/components/Banner";
import Authordetail from "@/components/Authordetail";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Cardblog from "../components/Cardblog"

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blog }) {
  console.log(blog);
  return (
    <div className="home">
      <div className="navbar">
        <Navbar />
      </div>
      <Banner />

      <div className="blogs-list">
        {blog.map((blogs) => (
          <Cardblog
          title ={blogs.title}
          subtitle ={blogs.subtitle}
          />
          // <Card sx={{ maxWidth: 345 }}>
          //   <CardMedia
          //     component="img"
          //     alt="green iguana"
          //     height="140"
          //     image="/static/images/cards/contemplative-reptile.jpg"
          //   />
          //   <Cardblog>
          //     <Typography gutterBottom variant="h5" component="div">
          //       {blogs.title}
          //     </Typography>
          //     <Typography variant="body2" color="text.secondary">
          //       {blogs.subtitle}
          //     </Typography>
          //   </Cardblog>
          //   <CardActions>
          //     <Button size="small">Share</Button>
          //     <Button size="small">Learn More</Button>
          //   </CardActions>
          // </Card>
        ))}
      </div>
      {/* 
      <div className="banner">
        <h1 className="title-name">{blog[0].title}</h1>
      </div>
      <div className="title">
        <div className="profile">
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUiaozqpRYv9yTLYOXEMdJnKWhOLbSAWkZw&usqp=CAU"
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <div className="profile-detail">
          <p>{blog[0].profile}</p>
        </div>
  </div>*/}
    </div>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "9vl22nzn",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]`;
  const blog = await client.fetch(query);

  console.log(blog);
  return {
    props: {
      blog,
    },
  };
}
