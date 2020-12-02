import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { StyledImageWrapper } from "../components/SharedStyledComponents";

const UnitButton = ({ button }) => {
  const { unit1, unit2, unit3, unit4 } = useStaticQuery(
    graphql`
      query {
        unit1: file(relativePath: { eq: "unit1.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        unit2: file(relativePath: { eq: "unit2.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        unit3: file(relativePath: { eq: "unit3.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        unit4: file(relativePath: { eq: "unit4.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // const image = placeholderImage.childImageSharp;
  let image;
  switch (button) {
    case "1":
      image = unit1.childImageSharp;
      break;
    case "2":
      console.log("unit2", unit2);
      image = unit2.childImageSharp;
      break;
    case "3":
      image = unit3.childImageSharp;
      break;
    case "4":
      image = unit4.childImageSharp;
      break;
  }

  return (
    <StyledImageWrapper as={Link} to={`/unit${button}`}>
      <Img fluid={image.fluid} />
    </StyledImageWrapper>
  );
};
export default UnitButton;
