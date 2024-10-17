<script setup>
import { useEtapa } from '@/stores/dadosEtapa';
import { useEndereco } from '@/stores/dadosEndereco'
const etapaStore = useEtapa()
const enderecoStore = useEndereco()

</script>

<template>
    <section class="etapa-4-container">

        <div class="mensagem">
            <p>Agora, a cara do seu anúncio!</p>
        </div>

        <div class="conteudo">
            <div class="titulo-e-descricao">
                <div class="titulo">
                    <label for="titulo-input">Título</label>
                    <input type="text" id="titulo-input" v-model="enderecoStore.dadosEndereco.titulo"
                        placeholder="Título">
                </div>

                <div class="descricao">
                    <label for="descricao-input">Descrição</label>
                    <textarea id="descricao-input" rows="10" v-model="enderecoStore.dadosEndereco.descricao"
                        placeholder="Descrição da Locação">
                </textarea>
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
.etapa-4-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.mensagem {
    margin-top: 100px;
    margin-bottom: 90px;
    text-align: center;
    font-size: 30px;
    font-family: var(--fonte-principal);
}

.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20rem;
}

.titulo-e-descricao {
    display: flex;
    flex-direction: column;
}

.titulo {
    display: flex;
    flex-direction: column;
    margin: 1rem 0 1rem 0;
    font-weight: bold;
}

#titulo-input {
    border-radius: 8px;
    width: 270px;
    height: 45px;
    border: solid 1px rgb(196, 196, 196);
    padding-left: 10px;
    outline: none;
}

#descricao-input::placeholder,
#titulo-input::placeholder {
    font-size: 14px;
}

label {
    margin-left: 1rem;
    margin-bottom: .5rem;
    font-weight: bold;
}

.descricao {
    display: flex;
    flex-direction: column;

}

#descricao-input {
    border-radius: 10px;
    border: solid 1px rgb(196, 196, 196);
    outline: none;
    padding: 10px 0 0 10px;
}

.adicionar-fotos {
    display: flex;
    flex-direction: column;
    place-items: center;
}

.texto-imagens {
    font-weight: bold;
    font-family: var(--fonte-principal);
    font-size: 20px;
    margin-bottom: 70px;
}

.publicar {
    height: 50px;
    width: 250px;
    border-radius: 25px;
    border: none;
    background-color: var(--cor-principal);
    font-weight: bold;
    color: white;
    font-size: 22px;
    margin-top: 70px;
}

.imagem {
    width: 100px;
    height: 100px;
    align-items: center;
}

p {
    font-family: var(--fonte-principal);
    font-weight: bold;
}
</style>