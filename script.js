const form = document.getElementById('mediaForm');
  
// const formData = new FormData(form);

// document.getElementById('enviaBtn').addEventListener('click', () => {

//   const dataObj = {};
// //   formData.forEach((value, key) => {
// //     dataObj[key] = value;
// //   });




//   console.log('Dados do formulário:', formData);

//   fetch('http://localhost:3333/api/uploadResponses', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   })
//   .then(response => {
//     console.log(dataObj)
//     if (!response.ok) {
//       throw new Error('Resposta não OK: ' + response.status);
//     }
//     return response.json();
//   })
//   .then(result => {
//     console.log('Resposta do servidor:', result);
//     alert('Formulário enviado com sucesso!');
//     form.reset();
//   })
//   .catch(error => {
//     console.error('Erro no envio: ---', error);
//     alert('Ocorreu um erro ao enviar o formulário: ' + error.message);
//   });
// });


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    
    const dados = {
        genero: form.genero.value,
        idade_faixa: form.idade_faixa.value,
        situacao: form.situacao.value,
        nivel_ensino: form.ensino.value,
        dispositivo_principal: form.dispositivo.value,
        horas_consumo: form.horas_consumo.value,
        frequencia_redes_sociais: form.frequencia_rs.value,
        interfere_rendimento: form.interferencia.value,
        plataforma_noticias: form.plataforma_noticias.value,
        formato_video_preferencia: form.formato_video.value,
        influencia_streaming: form.influencia_streaming.value,
        multitarefa_midiatica: form.multitarefa.value,
        frequencia_fake_news: form.freq_fake_news.value,
        motivacao_consumo: form.motivacao.value
    
    };
    
    try {
        const resposta = await fetch('http://localhost:3333/api/uploadResponses', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)     
    });
    const resultado = await resposta.text();
    alert(resultado); 
    form.reset();    
    } catch (error) {
      console.log(error.message)
    }


    

});