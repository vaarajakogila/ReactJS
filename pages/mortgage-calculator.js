import { useState } from 'react';
import styled from 'styled-components';

export default function MortgageCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateMortgage = () => {
    const principal = parseFloat(amount);
    const interest = parseFloat(rate) / 100 / 12;
    const payments = parseFloat(years) * 12;
    if (principal && interest && payments) {
      const monthlyPayment = (principal * interest) / (1 - Math.pow(1 + interest, -payments));
      setResult(monthlyPayment.toFixed(2));
    } else {
      setResult("Invalid Input");
    }
  };

  return (
    <Container>
      <h1>Mortgage Calculator</h1>
      <Input type="number" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Input type="number" placeholder="Interest Rate (%)" value={rate} onChange={(e) => setRate(e.target.value)} />
      <Input type="number" placeholder="Loan Term (years)" value={years} onChange={(e) => setYears(e.target.value)} />
      <Button onClick={calculateMortgage}>Calculate</Button>
      {result && <h2>Monthly Payment: ${result}</h2>}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin: 10px auto;
  padding: 8px;
`;

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px;
  cursor: pointer;
`;
