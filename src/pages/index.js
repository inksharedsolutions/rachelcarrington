import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import Author from "../components/author"
import MidBook from "../components/front-book"
import FeaturedLogos from "../components/mid-main"
import ParallaxBottom from "../components/parallax-bottom"



const IndexPage = (props) => (
  <Layout>
      <Nav pathExt={props.path}/>
      <Banner/>
      <MidBook/>
      <Author/>
      <ParallaxBottom />
      <FeaturedLogos/>
  </Layout>
)

export default IndexPage