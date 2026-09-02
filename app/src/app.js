const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.disable('x-powered-by');
app.use(express.json({ limit: '10kb' }));

app.get('/', (_req, res) => {
  res.json({
    service: 'devsecops-security-demo',
    status: 'ok',
    message: 'Aplicação segura para demonstração acadêmica de DevSecOps.'
  });
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.get('/calc', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).json({ error: 'Parâmetros a e b devem ser números.' });
  }

  return res.json({ result: a + b });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Demo app listening on port ${port}`);
});
