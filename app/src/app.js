const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    service: 'devsecops-security-demo',
    status: 'vulnerable-demo',
    message: 'Branch criada propositalmente com falhas para a demonstração.'
  });
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.get('/calc', (req, res) => {
  const expression = req.query.expression || '1 + 1';

  // VULNERABILIDADE INTENCIONAL PARA DEMONSTRAÇÃO ACADÊMICA:
  // entrada controlada pelo usuário é executada com eval().
  const result = eval(expression);

  res.json({ result });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Vulnerable demo app listening on port ${port}`);
});
