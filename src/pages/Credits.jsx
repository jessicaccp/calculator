import React from "react";

export default function Credits() {
  const links = [
    {
      url: "https://favicon.io/favicon-converter/",
      title: "Favicon Converter",
    },
    {
      url: "https://www.flaticon.com/free-icons/calculator",
      title: "Calculator icons",
    },
  ];

  function getLinks(links) {
    return links.map((link, key) => (
      <li key={key}>
        <a href={link.url}>{link.title}</a>
      </li>
    ));
  }

  return <ul>{getLinks(links)}</ul>;
}
