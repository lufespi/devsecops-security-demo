# Roteiro da demonstração

Este repositório foi criado para demonstrar, de forma prática, como controles de segurança podem ser inseridos em um pipeline CI/CD.

## Cenário

A branch `main` contém uma versão segura. A branch `demo/vulnerable` contém falhas intencionais para que o Pull Request seja bloqueado pelo pipeline.

## O que cada etapa demonstra

| Controle | Ferramenta | Falha intencional |
|---|---|---|
| SAST | Semgrep | uso de `eval()` com entrada do usuário |
| SCA | Trivy | dependência `lodash` desatualizada |
| Secret Scan | Gitleaks | variável `DEMO_SECRET` hardcoded |
| IaC Scan | Checkov | SSH na porta 22 aberto para `0.0.0.0/0` |
| Build | Docker | comprova que a aplicação ainda é construível |
| DAST | OWASP ZAP | testa a aplicação em execução |

## Roteiro sugerido para a apresentação

1. Abra o Pull Request `demo/vulnerable` -> `main`.
2. Mostre a aba **Checks** e destaque que cada análise roda de forma independente.
3. Abra o job de **IaC Scan - Checkov** e mostre a regra que detecta SSH aberto para a Internet.
4. Mostre o job **Security Gate** falhando porque pelo menos um controle não passou.
5. Explique que, com proteção de branch configurada para exigir `Security Gate`, o merge fica bloqueado.
6. Compare os arquivos vulneráveis com a versão da `main`.
7. Mostre que, após a correção, o mesmo pipeline pode ficar totalmente verde e liberar o merge.

## Mensagem principal

O objetivo não é demonstrar apenas ferramentas isoladas. O exemplo mostra que SAST, SCA, análise de segredos, IaC scanning e DAST podem funcionar como controles automatizados durante o desenvolvimento, antes que uma alteração avance para produção.

## Segurança da demonstração

- Nenhuma credencial real é utilizada.
- Nenhum recurso AWS é criado.
- O pipeline nunca executa `terraform apply`.
- As vulnerabilidades existem apenas para fins acadêmicos.
