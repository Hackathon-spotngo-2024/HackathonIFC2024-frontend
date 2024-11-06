<script setup>
</script>

<template>
    <div class="pagina-faq">
      <div class="conteudo-faq">
        <h1 class="titulo-faq">Ajuda & FAQ</h1>
        <p class="introducao-faq">
          Aqui você encontra respostas para as perguntas mais frequentes sobre a locação de nossos espaços para festas. Se precisar de mais ajuda, entre em contato conosco!
        </p>
  
        <div class="faq-item">
          <h2 class="pergunta">1. Como faço uma reserva?</h2>
          <p class="resposta">
            Para fazer uma reserva, escolha o espaço desejado e entre na página de reserva. Siga as instruções e finalize o pagamento para confirmar sua reserva.
          </p>
        </div>
  
        <div class="faq-item">
          <h2 class="pergunta">2. Quais são as formas de pagamento aceitas?</h2>
          <p class="resposta">
            Aceitamos pagamentos via cartão de crédito, transferência bancária e boleto. Outras opções podem estar disponíveis dependendo da sua localização.
          </p>
        </div>
  
        <div class="faq-item">
          <h2 class="pergunta">3. Posso cancelar minha reserva?</h2>
          <p class="resposta">
            Sim, você pode cancelar sua reserva. Verifique nossa política de cancelamento para saber as condições e prazos para reembolso.
          </p>
        </div>
  
        <div class="faq-item">
          <h2 class="pergunta">4. O que está incluído no valor da locação?</h2>
          <p class="resposta">
            O valor da locação inclui o uso do espaço e [detalhes adicionais, como mesas, cadeiras, iluminação, etc., conforme aplicável]. Itens adicionais podem ser disponibilizados com custo extra.
          </p>
        </div>
  
        <div class="faq-item">
          <h2 class="pergunta">5. Posso visitar o local antes de reservar?</h2>
          <p class="resposta">
            Sim, agende uma visita para conhecer o espaço antes de reservar. Entre em contato conosco para marcar um horário.
          </p>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.pagina-faq {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
}

.conteudo-faq {
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 800px;
    background-color: #ffffff;
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.titulo-faq {
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 25px;
    font-weight: bold;
    color: #333;
    text-align: center;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
}

.introducao-faq {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
    line-height: 1.6;
    text-align: justify;
}

.faq-item {
    margin-top: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
}

.pergunta {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
}

.resposta {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    text-align: justify;
}

@media (max-width: 768px) {
    .conteudo-faq {
        width: 90%;
        padding: 30px;
    }

    .titulo-faq {
        font-size: 28px;
    }

    .pergunta {
        font-size: 18px;
    }

    .resposta, .introducao-faq {
        font-size: 15px;
    }
}
</style>
