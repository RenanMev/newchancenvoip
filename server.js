const express = require('express');
const app = express();
const port = 3000;

const jsonData = {
  "user": [
    {
      "id": "0.14",
      "nome": "asdas",
      "email": "asdas",
      "telefone": "asdasd",
      "password": "123"
    },
    {
      "id": "2fd2",
      "email": "dasd",
      "password": "asd"
    }
  ]
};

// Endpoint para obter informações de email e password
app.get('/getUserInfo/:id', (req, res) => {
  const userId = req.params.id;
  const user = jsonData.user.find(u => u.id === userId);

  if (user) {
    const { email, password } = user;
    const userInfo = { email, password };
    res.json(userInfo);
  } else {
    res.status(404).json({ error: 'Usuário não encontrado' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});