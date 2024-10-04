<script setup>
import { reactive, ref } from 'vue'
const props = defineProps({
    type: Boolean
})
const showModal = ref(true)

const user = reactive({
    name: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    dataDeNascimento: '',
    cpf: ''
})

const closeModal = () => {
    showModal.value = false
}
</script>

<template>

    <div :class="['modal', showModal ? 'visible' : 'hidden']">
        <div class="form-container" >
            <div class="fechar">
                <span class="fa fa-x" @click="closeModal"></span>
            </div>
            <div class="containerInterno">
                <div class="logoLogin">
                    <img class="imgLogin" src="../assets/LogoSimples.png" alt="Logo" />
                </div>

                <p class="title">Bem vindo(a) ao Spot'n Go</p>
                <p class="sub-title">Ache novos imóveis para alugar</p>
                <h1 class="title" id="dynamic-title">{{ title }}</h1>

                <div class="conteudo">
                    <div class="form-item">
                        <label for="name">Nome</label>
                        <input type="text" name="name" id="name" v-model="user.name" placeholder="Nome" />
                    </div>

                    <div class="form-item" id="email-area">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" v-model="user.email" placeholder="Email" />
                    </div>

                    <div class="form-item">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" id="senha" v-model="user.senha" placeholder="Senha" />
                    </div>

                    <div class="form-item" id="confirmarSenha">
                        <label for="confirmar-senha">Confirme sua senha</label>
                        <input type="password" name="confirmarSenha" id="confirmaSenha" v-model="user.confirmarSenha"
                            placeholder="Confirme sua senha" />
                    </div>

                    <div class="form-item">
                        <label for="telefone">Telefone</label>
                        <input type="text" name="telefone" id="telefone" v-model="user.telefone" placeholder="Telefone" />
                    </div>

                    <div class="form-item" id="dataDeNascimento">
                        <label for="dataNascimento">Data de Nascimento</label>
                        <input type="date" name="dataDeNascimento" id="dataDeNascimento" v-model="user.dataDeNascimento" />
                    </div>

                    <div class="form-item" id="cpf">
                        <label for="cpf">CPF</label>
                        <input type="number" name="cpf" id="cpf" v-model="user.cpf" placeholder="CPF" />
                    </div>

                    <button>Continuar</button>
                    <div class="termo">
                        <p>
                            Ao continuar, você concorda com os <br />
                            <a class="link" href="">termo de serviço</a> do Spot'n Go e confirma que <br />
                            leu nossa <a class="link" href="">Politica de Privacidade.</a> <br />
                            <a class="link" href="">Aviso na coleta de informações.</a>
                        </p>
                        <hr class="linha" />
                        <p class="textoFinal">Já tem conta? 
                            <a class="link" href="">Entrar</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000 !important;
    transition: visibility 0.3s, opacity 0.3s;
}

.hidden {
    visibility: hidden;
    opacity: 0;
}

.visible {
    visibility: visible;
    opacity: 1;
}

.form-container {
    width: 460px;
    height: 850px;
    border-radius: 25px;
    background-color: #f2f2f2;
    margin: auto;
    margin-bottom: 50px;
    font-family: 'Montserrat';
    position: relative;
    z-index: 1001;
}

.containerInterno {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: -2rem;
}

.logoLogin {
    text-align: center;
}

.imgLogin {
    width: 55px;
    height: 55px;
}


.title {
    text-align: center;
    font-size: 23px;
    font-family: 'Montserrat';
    font-weight: bold;
    margin-top: 10px;
}

.sub-title {
    text-align: center;
    margin-top: 10px;
    font-family: 'Montserrat';
    font-size: 18px;
}

.form-item {
    display: grid;
    grid-auto-columns: auto;
    margin-top: 5px;
}

input {
    width: 250px;
    height: 35px;
    border-radius: 15px;
    border: solid 1px rgba(79, 79, 79, 1);
    background-color: #f2f2f2;
    margin-bottom: 5px;
    padding: 0 10px;
    outline: none;
}


button {
    padding: 13px 100px;
    border-radius: 25px;
    background-color: var(--cor-principal);
    margin-top: 15px;
    border: none;
    color: #f2f2f2;
    font-weight: bold;
    font-size: 15px;
}

.termo {
    padding: 13px;
    text-align: center;
    font-size: 10px;
    font-family: 'Montserrat';
}

.textoFinal {
    margin-top: 40px;
    font-size: 20px;
}

.linha {
    margin-top: 40px;
}

.link {
    text-decoration: none;
    color: black;
    font-weight: bold;
}


.fechar {
    padding: 25px;
    display: flex;
    justify-content: flex-end;
}

.fechar:hover {
    cursor: pointer;
}


label {
    margin-left: 10px;
    color: black;
    font-size: 12px;
    font-weight: 500;
}
</style>
