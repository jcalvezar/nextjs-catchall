import React from "react";
import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import { CLONE_REGISTRY, CloneKey } from "./clonesRegistry";

type Props = { slug: string[] | null };

function ClonesPage({ slug }: Props) {
  console.log("SLUG:", slug);

  const key = slug?.[0]?.toLowerCase() as CloneKey | undefined;
  const Component = key ? CLONE_REGISTRY[key] ?? null : null;

  return (
    <>
      <Head>
        <title>/clones{key ? `/${key}` : ""}</title>
      </Head>
      {Component ? (
        <Component />
      ) : (
        <main style={{ padding: "2rem" }}>
          <h2>Clon no encontrado</h2>
          <p>Slugs válidos: clon1, clon2, clon3</p>
        </main>
      )}
    </>
  );
}

ClonesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ slug?: string[] }>
) => {
  const { slug } = context.params ?? {};

  return {
    props: {
      slug: slug ?? null,
    },
  };
};

export default ClonesPage;
