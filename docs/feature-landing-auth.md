# Feature: Landing pública, páginas legais e dashboard protegido

## Objetivo

Permitir que visitantes vejam uma landing de apresentação do LexPrep, acedam a Termos de Uso e Política de Privacidade, e criem sessão (login/registo). A área da aplicação (hub, estudo, prática e APIs sensíveis) só fica acessível após autenticação.

## Fluxo

1. Visitante acede a `/` (landing).
2. Pode ler `/termos` e `/privacidade`.
3. Clica em Entrar ou Criar conta → `/login` ou `/register`.
4. Após login, é redirecionado para `/dashboard` (ou para `callbackUrl` se aplicável).
5. Utilizador autenticado que acede a `/` é redirecionado para `/dashboard`.

## Rotas públicas

| Rota | Descrição |
|------|-----------|
| `/` | Landing (marketing) |
| `/termos` | Termos de uso |
| `/privacidade` | Política de privacidade |
| `/login` | Página de login |
| `/register` | Registo com email e senha |
| `/api/auth/*` | NextAuth (sessão, OAuth, etc.) |
| `/api/auth/register` | POST — criação de conta |
| `/api/session/init` | Cookie de sessão anónima (progresso legado) |

## Rotas protegidas (requerem sessão NextAuth)

Todas as outras rotas da aplicação, incluindo entre outras:

- `/dashboard`
- `/area-estudo`, `/area-pratica`
- `/sumulas`, `/questoes`, `/simulado`, `/mapa` (URLs antigas `/resumos` e `/teses-temas` redirecionam para `/sumulas`)
- APIs internas (exceto as listadas como públicas), por exemplo `/api/questions`, `/api/progress/*`, `/api/dashboard/*`, etc.

## Nota legal

Os textos de Termos e Privacidade são **modelos informativos**. Devem ser revistos por profissional habilitado antes de uso em produção.

## Implementação técnica

- Middleware único em `src/middleware.ts` com allowlist de rotas públicas e `NextAuth` (via `auth.config` apenas, sem Prisma no Edge). O ficheiro `middleware.ts` na raiz foi removido para evitar duplicação. Uma versão anterior refrescava cookies do Supabase em `src/middleware.ts`; essa lógica não foi fundida — se o projeto voltar a depender de sessão Supabase no edge, pode reintroduzir-se de forma composta com cuidado.
- Hub antigo da raiz movido para `/dashboard`.
- Registo: `POST /api/auth/register` com validação (zod), hash bcrypt, `User` no Prisma.
