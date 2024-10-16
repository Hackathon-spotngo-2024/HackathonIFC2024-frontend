<script setup>
import { useEtapa } from '@/stores/dadosEtapa';
import { useEndereco } from '@/stores/dadosEndereco'
const etapaStore = useEtapa()
const enderecoStore = useEndereco()

</script>

<template>
    <section class="etapa-4-container">

        <div class="mensagem">
            <p>Agora, a cara do seu anúncio</p>
        </div>

        <div class="conteudo">
        <div class="titulo-e-descricao">
            <div class="titulo">
                <label for="titulo-input">Título</label>
                <input type="text" id="titulo-input" v-model="enderecoStore.dadosEndereco.titulo" placeholder="Título">
            </div>

            <div class="descricao">
                <label for="descricao-input">Descrição</label>
                <input type="text" id="descricao-input" v-model="enderecoStore.dadosEndereco.descricao"
                    placeholder="Descrição da Locação">
            </div>
        </div>


        <div class="adicionar-fotos">
            <div class="texto-imagens">
                <p>Adicionar fotos</p>
            </div>
            <div class="img-add-foto">
                <img class="imagem" src="/src/assets/add-image.png" href="" />
            </div>
            <button class="publicar">Publicar</button>
        </div>
        </div>
    </section>


    <button class="etapaAnterior" @click="etapaStore.etapaAnterior">Voltar</button>
</template>

<style scoped>

.imagem{
    width: 100px;
    height: 100px;
    align-items: center;
    color: rgb(196, 196, 196);

}

.publicar{
    height: 50px;
    width: 250px;
    border-radius: 15px;
    border: none;
    border: solid 1px rgb(196, 196, 196);
    background-color: var(--cor-principal);
    font-weight: bold;
    color: white;
    font-size: 22px;
    margin-top: 70px;
}

.texto-imagens{
    font-weight: bold;
    font-family: var(--fonte-principal);
    font-size: 20px;
    margin-bottom: 70px;
}

.etapa-4-container{
    display: flex;
    flex-direction: column  ;
    align-items: center;
    justify-content: center;
}
.conteudo{
    display: flex;
    flex-direction: row ;
    align-items: center;
    justify-content: center;    
    gap: 40rem;
}
.mensagem {
    margin-top: 100px;
    margin-bottom: 90px;
    text-align: center;
    font-size: 30px;
    font-family: var(--fonte-principal);
}
p{
    font-family: var(--fonte-principal);
    font-weight: bold;
}
.titulo-e-descricao {
    display: flex;
    place-items: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titulo {
    display: grid;
    grid-auto-columns: auto;
    margin-bottom: 2rem;
    font-weight: bold;
}

#titulo-input {
    border-radius: 8px;
    margin-top: 30px;
    width: 250px;
    height: 35px;
    border: none;
    border: solid 1px rgb(196, 196, 196);
    padding-left: 20px;
}

#titulo-input::placeholder {
    font-size: 15px;
}

label {
    font-weight: bold;
}

.descricao {
    display: grid;
    grid-auto-columns: auto;
}

#descricao-input {
    border-radius: 10px;
    margin-top: 30px;
    width: 270px;
    height: 150px;
    border: none;
    border: solid 1px rgb(196, 196, 196);
}

#descricao-input::placeholder {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 15px;
}

.adicionar-fotos{
    display: flex;
    flex-direction: column;
    place-items: center;
}
</style>