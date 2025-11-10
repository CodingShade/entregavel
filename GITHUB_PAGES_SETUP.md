# 🚀 Configuração GitHub Pages - Guia de Deploy

## ✅ Mudanças Realizadas

### 1. **vite.config.ts** - Adicionado `base`
```typescript
base: '/entregavel/',
```
Isso garante que todos os assets sejam carregados com o caminho correto no GitHub Pages.

### 2. **package.json** - Adicionado script de deploy
```json
"deploy": "npm run build && gh-pages -d dist"
```

### 3. **.github/workflows/deploy.yml** - CI/CD Automático
- Build automático ao fazer push na branch `main`
- Deploy automático para GitHub Pages
- Usando o token GITHUB_TOKEN (gerado automaticamente)

### 4. **public/.nojekyll** - Arquivo de configuração
Previne que Jekyll processe o site no GitHub Pages

---

## 📋 Passos para Funcionar

### Opção 1: Deploy Manual (Imediato)
```bash
npm run deploy
```

### Opção 2: Deploy Automático (Recomendado)
1. Commit e push as mudanças para a branch `main`:
```bash
git add .
git commit -m "fix: configure GitHub Pages deployment"
git push origin main
```

2. No GitHub:
   - Vá para **Settings** → **Pages**
   - Em "Build and deployment", selecione:
     - **Source**: Deploy from a branch
     - **Branch**: gh-pages (será criada automaticamente)
     - **Folder**: / (root)

3. Aguarde o build automático completar (GitHub Actions)

4. Seu site estará em: `https://CodingShade.github.io/entregavel/`

---

## 🔍 Verificar o Deploy

- Vá para **Actions** no seu repositório no GitHub
- Verifique se o workflow foi executado com sucesso
- Acesse a URL: `https://CodingShade.github.io/entregavel/`

---

## ⚙️ Configurações Importantes

✅ **base**: `/entregavel/` - Garante caminhos corretos  
✅ **gh-pages**: Instalado como devDependency  
✅ **Workflow**: Automatiza build e deploy  
✅ **.nojekyll**: Previne processamento do Jekyll  

Agora seu projeto deve funcionar perfeitamente no GitHub Pages! 🎉
