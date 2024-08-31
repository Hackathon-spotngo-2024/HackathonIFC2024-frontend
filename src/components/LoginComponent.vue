<script setup>
import { reactive, ref, computed, defineEmits, defineProps } from 'vue'
defineProps(['title'])

const user = reactive({
    name: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    dataDeNascimento: '',
    cpf: ''
})

</script>

<template>
    <div class="form-container">
        <div class="title-container">
            <h1 class="title">Bem vindo(a) Spot'n GOnp</h1>
            <h4 class="sub-title">Ache novos imoveis para alugar</h4>
            <h1 class="title" id="dynamic-title">{{ title }}</h1>
        </div>

        <div class="form-item">
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" v-model="user.name" placeholder="Nome" />
        </div>

        <div class="form-item" id="email-area">
            <label for="email">Email:</label>
            <input type="email" name="name" id="email" v-model="user.email" placeholder="Email" />
        </div>

        <div class="form-item">
            <label for="senha">Senha:</label>
            <input type="senha" name="senha" id="senha" v-model="user.senha" placeholder="Senha" />
        </div>

        <div class="form-item" id="confirmarSenha">
            <label for="conirmar-senha">Confirme sua senha:</label>
            <input type="password" name="confirmarSenha" id="confirmaSenha" v-model="user.confirmarSenha"
                placeholder="Confirme sua senha" />
        </div>


        <div class="form-item">
            <label for="telefone">Telefone</label>
            <input type="text" name="telefone" id="telefone" v-model="user.telefone" placeholder="Telefone" />
        </div>

        <div class="form-item" id="dataDeNascimento">
            <label for="dataNascimento">Data de Nascimento:</label>
            <input type="date" name="dataDeNascimento" id="dataDeNascimento" v-model="user.dataDeNascimento" />
        </div>

        <div class="form-item" id="cpf">
            <label for="cpf">CPF:</label>
            <input type="number" name="cpf" id="cpf" v-model="user.cpf" placeholder="CPF">
        </div>
        <button> continuar</button>

    </div>


</template>

<style scoped>
input::placeholder{
    padding: 12px;
}
button {
    height: 34px;
    width: 200px;
    border-radius:15px;
    background-color: var(--cor-principal);
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 550px;
    height: 800px;
    border-radius: 25px;
    background-color: #f2f2f2;
    margin: auto;
    gap: 10px;
}

.form {
    display: grid;
    margin: 50px 20px 50px 20px;
    gap: 10px 0;
}

.form-item {
    display: grid;
    grid-auto-columns: auto;
}


input {
    width: 200px;
    height: 30px;
    border-radius: 8px;
    border-color: rgba(235, 235, 235, 1);
    border-style: solid;
    border-width: 1px;
    background-color:rgba(235, 235, 235, 1)#f2f2f2;
}

.title-container {
    margin-bottom: 40px;
    font-weight: bold;
}

.sub-title {
    color: #aeaeae;
    text-align: center;
    margin-top: 15px;
}
</style>