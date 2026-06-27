// src/components/Seo.jsx
//
// Usage (top of any page component):
//   <Seo
//     title="Operating Systems Interview Questions | PlacementVault"
//     description="Practice 50+ OS interview questions on processes, scheduling, memory & deadlocks for placement interviews."
//     path="/os"
//   />
//
// Why this is needed: index.html only ships ONE static <title> for the
// whole SPA. Without this, every route (/os, /dbms, /resume...) would show
// the same title + description in Google search results, hurting each
// page's individual ranking. This is the single fix for that.

import { Helmet } from "react-helmet-async";

const SITE_NAME = "PlacementVault";
const SITE_URL = "https://placementvault.com"; // update once domain is live
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export default function Seo({ title, description, path = "/", image = DEFAULT_IMAGE }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph (WhatsApp/LinkedIn previews — relevant since students share these links) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}