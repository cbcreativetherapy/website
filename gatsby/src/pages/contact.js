import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';

import CtaBanner from '../components/CtaBanner';
import HeroHeader from '../components/HeroHeader';
import SEO from '../components/SEO';
import CleanLink from '../components/CleanLink';

const ContactPageStyles = styled.div`
  .intro {
    font-size: 2rem;
    line-height: 1.3;
    margin: 4rem auto;
    width: 80%;
    @media (max-width: 730px) {
      width: 95%;
    }
    @media (max-width: 420px) {
      font-size: 1.6rem;
    }
    a {
      color: var(--dark-green);
      font-style: italic;
      text-decoration: underline solid transparent;
      transition: text-decoration 0.4s;
      &:hover,
      &:focus {
        text-decoration: underline solid var(--dark-green);
        transition: text-decoration 0.4s;
      }
    }
  }
  form {
    margin: 0 auto 4rem;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 730px) {
      width: 95%;
    }
    .gotcha {
      display: none;
    }

    .first-name,
    .last-name,
    .email,
    .phone-num {
      width: calc(50% - 4rem);
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
      font-size: 2rem;
      font-family: QuicksandReg;
      @media (max-width: 730px) {
        width: 100%;
      }
      @media (max-width: 420px) {
        font-size: 1.6rem;
      }

      input {
        width: 100%;
        font-size: 1.8rem;
        padding: 1rem;
        margin-top: 1rem;
        border: 2px solid var(--grey-bg);
        background-color: var(--grey-bg);
        transition: border 0.4s;
        &:hover,
        &:focus {
          border: 2px solid var(--mid-green);
          transition: border 0.4s;
        }
        @media (max-width: 420px) {
          font-size: 1.4rem;
        }
      }
    }
    .message {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
      font-size: 2rem;
      font-family: QuicksandReg;
      @media (max-width: 420px) {
        font-size: 1.6rem;
      }

      textarea {
        width: 100%;
        min-height: 130px;
        background-color: var(--grey-bg);
        font-size: 1.8rem;
        padding: 1rem;
        margin-top: 1rem;
        border: 2px solid var(--grey-bg);
        transition: border 0.4s;
        &:hover,
        &:focus {
          border: 2px solid var(--mid-green);
          transition: border 0.4s;
        }
        @media (max-width: 420px) {
          font-size: 1.4rem;
          min-height: 100px;
        }
      }
    }
    .submit {
      margin: 0 auto;
      font-size: 2rem;
      padding: 1rem 2.5rem;
      cursor: pointer;
      font-family: QuicksandReg;
      background-color: var(--grey-bg);
      color: var(--text-color);
      border: 2px solid var(--grey-bg);
      border-radius: 2px;
      transition: padding 0.4s, border 0.4s;
      &:hover,
      &:focus {
        padding: 1rem 3.2rem;
        border: 2px solid var(--mid-green);
        transition: padding 0.4s, border 0.4s;
      }
      @media (max-width: 420px) {
        font-size: 1.6rem;
      }
    }
  }
  .social-media {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 5rem 0;
    h2 {
      width: 100%;
      text-align: center;
      font-size: 2.2rem;
      margin-bottom: 2rem;
      @media (max-width: 420px) {
        font-size: 1.8rem;
      }
    }
    a {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      color: var(--dark-green);
      transition: color 0.2s;
      margin-left: 2rem;
      @media (max-width: 559px) {
        &:last-of-type {
          margin-top: 2rem;
        }
      }
      @media (max-width: 420px) {
        font-size: 1.4rem;
      }
      h3 {
        color: var(--dark-green);
        transition: color 0.2s;
      }
      &:hover,
      &:focus {
        color: var(--mid-green);
        transition: color 0.2s;
        h3 {
          color: var(--mid-green);
          transition: color 0.2s;
        }
      }

      .icon {
        font-size: 4.3rem;
        margin-right: 5px;
        @media (max-width: 420px) {
          font-size: 3.4rem;
        }
      }
    }
  }
`;

export default function Contact({ data: { contactPage } }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [message, setMessage] = useState('');

  const returnIcon = (type) => {
    if (type === 'instagram') {
      return <FaInstagram className="icon" aria-label={`${type} icon`} />;
    }
    if (type === 'linkedin') {
      return <AiOutlineLinkedin className="icon" aria-label={`${type} icon`} />;
    }
  };

  return (
    <>
      <SEO
        title={contactPage.metaContent.title}
        description={contactPage.metaContent.description[0].children[0].text}
        image={contactPage.metaContent.image.imageFile.asset.fluid.src}
      />
      <ContactPageStyles>
        <HeroHeader
          h1Heading={contactPage.h1Heading}
          imageSrc={contactPage.heroImage.imageFile.asset.fluid.src}
        />
        <div className="wrapper">
          <section className="intro">
            <PortableText blocks={contactPage._rawIntroParagraph} />
          </section>
          <form action="https://formspree.io/f/xeqpdppy" method="POST">
            <input type="text" name="_gotcha" className="gotcha" />
            <label htmlFor="firstName" className="first-name">
              First Name
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="lastName" className="last-name">
              Last Name
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label htmlFor="email" className="email">
              Email Address
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="phoneNum" className="phone-num">
              Phone Number
              <input
                type="tel"
                id="phoneNum"
                name="phoneNum"
                value={phoneNum}
                onChange={(e) => setPhoneNum(e.target.value)}
                required
              />
            </label>
            <label htmlFor="message" className="message">
              Your message
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Please include if you would prefer a phone call or email follow-up"
              />
            </label>
            <button type="submit" className="submit">
              Send
            </button>
          </form>
          <section className="social-media">
            <h2>{contactPage.socialMediaHeading}</h2>
            {contactPage.socialMedias.map((social) => (
              <CleanLink key={social.id} url={social.link}>
                {returnIcon(social.platformName.toLowerCase())}
                {social.linkText}
              </CleanLink>
            ))}
          </section>
        </div>
        <CtaBanner
          bannerHeading={contactPage.ctaBannerReference.heading}
          bannerText={contactPage.ctaBannerReference.subHeading}
        />
      </ContactPageStyles>
    </>
  );
}

export const query = graphql`
  query {
    contactPage: sanityContact {
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
      _rawIntroParagraph
      socialMediaHeading
      socialMedias {
        id
        platformName
        link
        linkText
      }
      ctaBannerReference {
        heading
        subHeading
      }
    }
  }
`;
