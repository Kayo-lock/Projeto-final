const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'projeto'
});

app.use(express.static(path.join(__dirname, 'public')));

const dataAtual = new Date();
const dataFormatada = dataAtual.toISOString().slice(0, 19).replace('T', ' ');

app.post('/api/uploadResponses', (req, res) => {
  const data = req.body;
  console.log('Respostas recebidas:', data);
   const query = 'INSERT INTO respostas_consumo_midia (data_envio, genero, idade_faixa, situacao, nivel_ensino, dispositivo_principal, horas_consumo, frequencia_redes_sociais, interfere_rendimento, plataforma_noticias, formato_video_preferencia, influencia_streaming, multitarefa_midiatica, frequencia_fake_news, motivacao_consumo, rede_social, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [dataFormatada, data.genero, data.idade_faixa, data.situacao, data.nivel_ensino, data.dispositivo_principal, data.horas_consumo, data.frequencia_redes_sociais, data.interfere_rendimento, data.plataforma_noticias, data.formato_video_preferencia, data.influencia_streaming, data.multitarefa_midiatica, data.frequencia_fake_news, data.motivacao_consumo, data.rede_social, data.email], (err, results) => {
        if (err) {
            console.error('Erro ao salvar informações:', err);
            return res.status(200).json({ error: 'Erro ao salvar informações.' });
        } }); 
  res.status(200).json({ success: true, message: 'Respostas foram gravadas.' });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



