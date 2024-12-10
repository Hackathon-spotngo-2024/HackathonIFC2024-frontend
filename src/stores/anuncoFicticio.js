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
          imgs: ['https://i.pinimg.com/736x/c0/c6/6f/c0c66fb0ed13f00095c397c6dc2fd694.jpg', 'https://i.pinimg.com/736x/cc/1e/1c/cc1e1ccff9bdfca3921a6f2eac393d7c.jpg', 'https://i.pinimg.com/736x/13/4a/98/134a98aec8dd8ed2046d40a4d4c5c47f.jpg', 'https://i.pinimg.com/736x/3f/26/e8/3f26e80e17020d86c618551650352112.jpg', 'https://i.pinimg.com/736x/54/e3/78/54e37835fdddbf70f067b248a3b5ac8c.jpg']
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
          imgs: ['https://i.pinimg.com/736x/55/aa/e1/55aae10d86acc76bd8cb24b07f3bee38.jpg', 'https://i.pinimg.com/736x/0f/d5/16/0fd5167decf315ab3c76740b4731e1eb.jpg', 'https://i.pinimg.com/736x/0c/ca/63/0cca63bc3b63ac71693696011691b72d.jpg', 'https://i.pinimg.com/736x/00/3a/b1/003ab147181dfd5d40a05f882052a317.jpg', 'https://i.pinimg.com/736x/37/90/cd/3790cdfaf9b90e88fbd3f4d45f032b6d.jpg']
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
          imgs: ['https://i.pinimg.com/736x/fc/a6/bd/fca6bdfd27fa04328cc19533e50a3e74.jpg', 'https://i.pinimg.com/736x/33/fe/15/33fe1576afc270a8366f9a42384bde87.jpg', 'https://i.pinimg.com/736x/20/13/af/2013afd60c2145c070c41d89268b0871.jpg', 'https://i.pinimg.com/736x/b1/18/38/b11838ed622509d76c515cb2d3adc4aa.jpg', 'https://i.pinimg.com/736x/b7/42/f7/b742f7f767e3e7ac6c65febf9cd8fadd.jpg']
        }
      ])

      return { anuncios }
})