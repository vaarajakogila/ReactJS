import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <h1>Welcome to Better.com Replica</h1>
      <p>A fast, simple, and responsive mortgage website.</p>
      <nav>
        <Link href="/about-us">About Us</Link>
        <Link href="/mortgage-calculator">Mortgage Calculator</Link>
        <Link href="/start">Get Started</Link>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  padding: 20px;
  nav a {
    margin: 10px;
    text-decoration: none;
    font-size: 18px;
  }
`;
