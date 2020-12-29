import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 5vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h4 {
    font-size: 1.9rem;
  }

  p {
    font-size: 1.5rem;
  }

  .logo {
    width: 10%;
  }
  .latest-blog {
    width: 60%;
  }
  .social-media {
    width: 30%;
    text-align: right;
    h4,
    li {
      margin: 1rem 0;
    }
  }

  .copyright {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1rem;
    }
  }

  .placeholder-logo {
    width: 75px;
    height: 75px;
    background-color: var(--light-green);
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="wrapper">
      <div className="logo">
        <div className="placeholder-logo" />
      </div>
      <div className="latest-blog">
        <p>
          See our latest blog post - Finals season: Coping with academic stress
        </p>
      </div>
      <div className="social-media">
        <h4>Let's connect!</h4>
        <ul>
          <li>
            <div>
              <p>@createwithcassandra</p>
            </div>
          </li>
          <li>
            <div>
              <p>Send me an email</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>Designed by: Cassandra Brennan</p>
        <p>&copy; CB Therapy {new Date().getFullYear()}</p>
        <p>
          Developed by:{' '}
          <a className="link" href="https://codeturkie.io">
            Philip Turkiewicz
          </a>
        </p>
      </div>
    </FooterStyles>
  );
}
