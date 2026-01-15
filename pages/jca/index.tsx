import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import JcaContent from "@/components/JcaContent";

JcaContent.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default JcaContent;
