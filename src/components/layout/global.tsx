import React from "react"
import Layout from "./index"

const CustomLayout = ({ element, props }: any) => {
  return <Layout {...props}>{element}</Layout>
}

export default CustomLayout
