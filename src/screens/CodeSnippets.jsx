import React from "react";
import Page from "../components/Page";
import Image from "../components/Image";

export const CodeSnippets = () => {
  const snippets = [
    {
      id: "middleware-1",
      title: "Verify Role Middleware",
      src: "https://i.ibb.co/LPV9tHv/carbon.png",
      alt: "Middleware Code Snippet",
    },
  ];

  return (
    <Page title="Code Snippets">
      {snippets.map(({ id, title, src, alt }) => (
        <Image key={id} title={title} src={src} alt={alt} />
      ))}
    </Page>
  );
};
