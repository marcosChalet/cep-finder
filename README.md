# Address Finder

Este projeto foi desenvolvido com React.js, TypeScript e Tailwind CSS. Siga as instruções abaixo para rodá-lo localmente ou acesse a versão online.
🔗 Confira aqui: ![cep-finder.marcoschalet.com](https://cep-finder.marcoschalet.com)

<br>

<div align="center">
  <a target="_blank" href="https://cep-finder.marcoschalet.com">
    <img src="https://github.com/user-attachments/assets/ac9dadb8-cfce-4ded-b612-36d799d23239">
  </a>
</div>

<br>

## Como Rodar o Projeto

Certifique-se de ter o Git e o Node.js instalados. Em seguida, execute os seguintes comandos no terminal:

```
git clone https://github.com/marcosChalet/tdList-frontend.git
cd tdList-frontend
npm install
npm run dev
```

## Estrutura do Projeto

1. Os endereços são armazenados em um *Map*.
2. O estado dos endereços é gerenciado com *useState*.
3. Foi criado um custom hook para salvar e recuperar os CEPs no localStorage, garantindo que os dados persistam e proporcionando uma melhor experiência ao usuário.

A escolha do Map se deve ao fato de que ele facilita e otimiza o acesso e gerenciamento dos dados, lidando automaticamente com valores duplicados e permitindo buscas e inserções eficientes em tempo constante.

---

⚠️ O ChatGPT foi utilizado apenas para revisar este documento e esclarecer dúvidas sobre a conversão entre Map e objeto no JavaScript.

[![localstorage](https://github.com/user-attachments/assets/22f4f284-69df-4efc-808c-422b88c094ef)](https://cep-finder.marcoschalet.com)
