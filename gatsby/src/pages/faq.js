import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';

import SEO from '../components/SEO';
import HeroHeader from '../components/HeroHeader';
import CtaBanner from '../components/CtaBanner';

export default function Faq({ data }) {
  const { faqPage } = data;
  const allQuestions = faqPage.questionsArray;
  console.log(faqPage.questionsArray);
  const FaqPageStyles = styled.div`
    .faq-list {
      padding: 8rem 0;
    }
    .card {
      max-width: 1000px;
      margin: 0 auto 4rem;
      background-color: var(--pale-grey-bg);
    }
    .card h2 {
      font-size: 3rem;
      line-height: 1.33;
      background-color: var(--grey-bg);
      padding: 2rem 4rem;
      font-family: RalewayReg;
      border-bottom: 4px solid var(--accent-coral);
    }
    .card:nth-of-type(odd) h2 {
      border-color: var(--accent-blue);
    }
    .card p {
      font-size: 1.8rem;
      line-height: 1.5;
      padding: 2rem 4rem;
    }
  `;

  return (
    <>
      <SEO
        title={faqPage.metaContent.title}
        description={faqPage.metaContent.description[0].children[0].text}
        image={faqPage.metaContent.image.imageFile.asset.fluid.src}
      />
      <FaqPageStyles>
        <HeroHeader
          h1Heading={faqPage.h1Heading}
          imageSrc={faqPage.heroImage.imageFile.asset.fluid.src}
          heroParagraph={faqPage.heroParagraph}
        />
        <section className="faq-list wrapper">
          {allQuestions.map((question) => (
            <article className="card" key={question._key}>
              <h2>{question.heading}</h2>
              <PortableText blocks={question._rawParagraph} />
            </article>
          ))}
        </section>
        {faqPage.ctaBannerReference && (
          <CtaBanner
            bannerHeading={faqPage.ctaBannerReference.heading}
            bannerText={faqPage.ctaBannerReference.subHeading}
          />
        )}
      </FaqPageStyles>
    </>
  );
}

export const query = graphql`
  query {
    faqPage: sanityFaq {
      metaContent {
        title
        description {
          children {
            text
          }
        }
        image {
          imageFile {
            asset {
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      h1Heading
      heroImage {
        imageFile {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
        imageAltText
      }
      heroParagraph
      questionsArray {
        _key
        heading
        _rawParagraph
      }
      ctaBannerReference {
        heading
        subHeading
      }
    }
  }
`;
