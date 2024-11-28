<script setup>
</script>

<template>
    <div class="pagina-termos">
      <div class="conteudo-termos">
        <h1 class="titulo-termos">Termos e Condições</h1>
        <p class="introducao-termos">
          Bem-vindo à nossa página de Termos e Condições. Ao utilizar nosso site e alugar nossos espaços para festas, você concorda com os termos descritos abaixo. Recomendamos que leia atentamente para entender as regras e responsabilidades envolvidas.
        </p>
  
        <h2 class="subtitulo-termos">1. Uso do Site</h2>
        <p class="texto-termos">
          Este site é destinado exclusivamente para facilitar a locação de espaços para eventos e festas. Qualquer uso indevido, como tentativa de acesso não autorizado ou uso para fins ilegais, resultará em suspensão imediata de acesso.
        </p>
  
        <h2 class="subtitulo-termos">2. Reservas e Pagamentos</h2>
        <p class="texto-termos">
          As reservas são confirmadas apenas mediante pagamento e conforme disponibilidade do espaço. Os valores e condições de pagamento são informados durante o processo de reserva e devem ser seguidos rigorosamente para garantir a locação.
        </p>
  
        <h2 class="subtitulo-termos">3. Cancelamento e Reembolso</h2>
        <p class="texto-termos">
          Cancelamentos podem ser feitos com antecedência mínima de [número de dias] dias para um reembolso parcial. Cancelamentos feitos após esse período não garantem reembolso. Verifique nossa política de cancelamento detalhada para mais informações.
        </p>
  
        <h2 class="subtitulo-termos">4. Responsabilidades do Locatário</h2>
        <p class="texto-termos">
          O locatário é responsável pela conservação do espaço durante o período de locação, devendo restituí-lo nas mesmas condições em que foi entregue. Danos causados ao local serão cobrados do locatário.
        </p>
  
        <h2 class="subtitulo-termos">5. Limitações de Responsabilidade</h2>
        <p class="texto-termos">
          Não nos responsabilizamos por perdas ou danos causados por eventos fora do nosso controle, como desastres naturais, falhas elétricas ou outros imprevistos que possam impactar o evento.
        </p>
  
        <h2 class="subtitulo-termos">6. Alterações nos Termos</h2>
        <p class="texto-termos">
          Reservamo-nos o direito de atualizar estes Termos e Condições periodicamente. Recomendamos que revise esta página regularmente para estar ciente de quaisquer mudanças.
        </p>
      </div>
    </div>
  </template>  

<style scoped>
.pagina-termos {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
}

.conteudo-termos {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 800px;
    background-color: #ffffff;
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.titulo-termos {
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 25px;
    font-weight: bold;
    color: #333;
    text-align: center;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
}

.introducao-termos {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
    text-align: justify;
}

.subtitulo-termos {
    font-size: 24px;
    margin-top: 25px;
    margin-bottom: 10px;
    font-weight: 600;
    color: #333;
}

.texto-termos {
    font-size: 16px;
    color: #666;
    margin-bottom: 15px;
    line-height: 1.6;
    text-align: justify;
}

.valor-item strong {
    color: #444;
}

ul {
    padding-left: 20px;
    list-style-type: disc;
}

@media (max-width: 768px) {
    .conteudo-termos {
        width: 90%;
        padding: 30px;
    }

    .titulo-termos {
        font-size: 28px;
    }

    .subtitulo-termos {
        font-size: 20px;
    }

    .texto-termos, .introducao-termos {
        font-size: 15px;
    }
}
</style>
