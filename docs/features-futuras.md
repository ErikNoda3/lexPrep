# Ideias de features — LexPrep

Sugestões coerentes com o que o projeto já oferece (estilo ENAM, súmulas STF/STJ, questões, simulado, mapa, progresso por sessão e autenticação). Serve como backlog inspiracional; priorize conforme público-alvo e esforço.

---

## Experiência de estudo e revisão

| Feature | Por que faz sentido |
|--------|----------------------|
| **Favoritos e listas de revisão** | Guardar súmulas ou questões para revisar antes da prova; encaixa com conteúdo já indexado. |
| **Modo “revisão espaçada” leve** | Lembretes ou fila de itens marcados como “difíceis” / “rever em X dias”, sem precisar de app mobile complexo. |
| **Anotações por usuário** | Notas privadas ligadas a súmula ou questão (útil para mnemônicos e jurisprudência). |
| **Histórico de busca nas súmulas** | Atalhos para consultas recentes ou sugestões com base no que o usuário já filtrou. |

## Prática e desempenho

| Feature | Por que faz sentido |
|--------|----------------------|
| **Estatísticas por matéria no perfil** | O modelo já tem `progressoPorMateria` em `UserSession`; expor gráficos simples e tendência de acertos reforça retenção. |
| **Simulado personalizado** | Escolher nº de questões, matérias e tempo; complementa o fluxo atual de simulado. |
| **Modo prova (sem feedback imediato)** | Corrigir só ao final, como na prova real — diferencial pedagógico claro. |
| **Exportar relatório PDF do simulado** | Resumo de desempenho para arquivo ou compartilhamento com mentor. |

## Conta e dados

| Feature | Por que faz sentido |
|--------|----------------------|
| **Unificar progresso anónimo ↔ conta** | Migrar `UserSession` (cookie) para o `User` após login, evitando perda de histórico — alinhado à nota em `feature-landing-auth.md`. |
| **Recuperação de senha / verificação de email** | `User` já tem `emailVerified`; completar o fluxo melhora confiança e segurança. |
| **Login social (Google, etc.)** | NextAuth já suporta `Account`; reduz fricção no registo. |

## Conteúdo e descoberta

| Feature | Por que faz sentido |
|--------|----------------------|
| **Ligações súmula ↔ questões** | Onde fizer sentido pedagogicamente, ligar súmulas a questões do banco que exercitem o mesmo tema. |
| **Alertas de atualização** | Quando súmulas ou o banco de questões forem atualizados (changelog curto na área de estudo). |
| **Temas / edições do ENAM** | Filtros ou coleções “Edição 20XX” se o banco crescer com referências por ano. |

## Acessibilidade e UX

| Feature | Por que faz sentido |
|--------|----------------------|
| **Tema claro/escuro persistente** | Leitura longa (súmulas, questões) pede conforto visual. |
| **Atalhos de teclado na lista de questões** | Navegação 1–4 ou A–D acelera prática para power users. |
| **Modo leitura nas súmulas** | Tipografia e largura de coluna otimizadas para leitura contínua. |

## Produto e confiança

| Feature | Por que faz sentido |
|--------|----------------------|
| **Página “Como usamos os seus dados”** | Complementa `/privacidade` com linguagem prática (cookies, sessão anónima, Prisma). |
| **Roadmap público ou changelog** | Transparência para utilizadores e para o portfólio. |

## Técnicas (sem ser “feature de utilizador”)

| Ideia | Nota |
|-------|------|
| **Testes E2E críticos** | Fluxos: login, uma volta no simulado, abrir súmula — estabilidade ao evoluir o produto. |
| **Rate limiting em APIs de questões/progresso** | Proteção antes de escalar tráfego. |
| **Observabilidade** | Logs estruturados e erros de API rastreáveis em produção. |

---

## Sugestão de priorização (exemplo)

1. Unificar progresso anónimo com conta logada — maior impacto na retenção.  
2. Estatísticas por matéria no dashboard — reutiliza dados existentes.  
3. Favoritos / listas de revisão — alto valor percebido com modelo de dados simples.  
4. Recuperação de senha e OAuth — reduzem abandono no registo.

Este documento pode ser cortado em issues individuais à medida que forem escolhidas entregas.
