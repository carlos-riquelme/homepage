module.exports = {
  // Customize me!
  siteMetadata: {
    company: "QuiloBytes Chiloé",
    domain: "https://www.quilobytes.cl",
    defaultTitle: "Soporte y Asesorías Informáticas para la isla de Chiloé",
    preamble:
      "Somos una pequeña empresa de informática basada en Ancud.",
    defaultDescription:
      " Nos dedicamos a asesorar a empresas y particulares de la isla de Chiloé para ayudarles a enfrentar la transformación digital, así como dar el soporte necesario para mantener la continuidad operacional de sus negocios.",
    postamble: "Si podemos ayudar a su proyecto o arreglar su computador, no dude en contactarnos:",
    contact: {
      email: "contacto@quilobytes.cl",
    },
    menuLinks: [],
  },
  pathPrefix: "/quilobytes",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-120162676-1",
      },
    },
  ],
};
