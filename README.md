# DevSecOps Security Demo

Repositório acadêmico e propositalmente simples para demonstrar **Security by Design** e **DevSecOps** em um pipeline CI/CD.

A demonstração integra diferentes controles de segurança em um único Pull Request:

- **SAST:** Semgrep
- **SCA:** Trivy
- **Secret Scanning:** Gitleaks
- **IaC Scanning:** Checkov
- **DAST:** OWASP ZAP
- **CI/CD:** GitHub Actions
- **Aplicação:** Node.js + Express
- **Infraestrutura:** Terraform (somente análise estática; nenhum `terraform apply` é executado)

## Objetivo da demonstração

A branch `main` representa a versão segura. Uma branch de demonstração vulnerável será usada para abrir um Pull Request contendo falhas intencionais. O pipeline identifica os problemas antes do merge e funciona como um **Security Gate**.

> **Importante:** todas as credenciais e vulnerabilidades presentes em branches de demonstração são fictícias e foram criadas exclusivamente para fins acadêmicos. Este repositório não provisiona recursos em nuvem.

## Fluxo

```text
Pull Request
    |
    +--> SAST -------- Semgrep
    +--> SCA --------- Trivy
    +--> Secrets ----- Gitleaks
    +--> IaC Scan ---- Checkov
    +--> Build ------- Docker
    +--> DAST -------- OWASP ZAP
    |
    +--> Security Gate
            |
            +--> FAIL: merge bloqueado
            +--> PASS: merge permitido
```

## Execução local

```bash
cd app
npm install
npm start
```

A aplicação ficará disponível em `http://localhost:3000`.

Consulte [`docs/DEMO.md`](docs/DEMO.md) para o roteiro completo da apresentação.
