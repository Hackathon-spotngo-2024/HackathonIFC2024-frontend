import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAnuncioFicticio = defineStore('anuncioFicticio', () => {
    const anuncios = reactive([
        {
          id: 1,
          pais: 'Brasil',
          rua: 'Monsenhor Bragantino',
          numero: '252',
          bairro: 'Centro',
          estado: 'Santa Catarina',
          cidade: 'Joinville',
          cep: '89201000',
          limiteVisitantes: 30,
          preco: '120',
          titulo: 'Salão de festa coberto',
          descricao: 'Este salão de festas é um espaço versátil e acolhedor, ideal para eventos sociais e comemorações. Ele possui uma área ampla, bem iluminada, com capacidade para acomodar confortavelmente um grande número de convidados.',
          imgs: ['https://www.afrikanhouse.com.br/images/paginas/casamento-2.jpg']
        },
        {
          id: 2,
          pais: 'Brasil',
          rua: 'Jacarezinho',
          numero: '57',
          bairro: 'Pinheiros',
          estado: 'São Paulo',
          cidade: 'São Paulo',
          cep: '01000-000',
          limiteVisitantes: 120,
          preco: '570',
          titulo: 'Quiosque beira rio',
          descricao: 'Ambiente aconchegante, decorado com madeira e tijolos aparentes. Perfeito para festas ao ar livre e temas campestres.',
          imgs: []
        },
        {
          id: 3,
          pais: 'Brasil',
          rua: 'Av. Faria Lima',
          numero: '03',
          bairro: 'Jardim Europa',
          estado: 'São Paulo',
          cidade: 'São Paulo',
          cep: '01000-000',
          limiteVisitantes: 80,
          preco: '620',
          titulo: 'Salão com jardim',
          descricao: 'Área verde, com iluminação charmosa e estrutura para cerimônias. Ideal para festas diurnas ou casamentos ao pôr do sol.',
          imgs: []
        }
      ])

      return { anuncios }
})