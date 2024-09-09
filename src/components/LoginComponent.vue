<script setup>
import { reactive, ref, computed } from 'vue'
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
        <div class="fechar">
            <span class="fa fa-x"></span>
        </div>
        <div class="containerInterno">
            <div class="logoLogin">
                <img class="imgLogin" src="../assets/LogoSimples.png" alt="" />
            </div>


            <p class="title">Bem vindo(a) ao Spot'n GOnp</p>
            <p class="sub-title">Ache novos imoveis para alugar</p>
            <h1 class="title" id="dynamic-title">{{ title }}</h1>


            <div class="conteudo">
                <div class="form-item">
                    <label for="name">Nome</label>
                    <input type="text" name="name" id="name" v-model="user.name" placeholder="Nome" />
                </div>


                <div class="form-item" id="email-area">
                    <label for="email">Email</label>
                    <input type="email" name="name" id="email" v-model="user.email" placeholder="Email" />
                </div>


                <div class="form-item">
                    <label for="senha">Senha</label>
                    <input type="senha" name="senha" id="senha" v-model="user.senha" placeholder="Senha" />
                </div>


                <div class="form-item" id="confirmarSenha">
                    <label for="conirmar-senha">Confirme sua senha</label>
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
                    <a class="link" href="">Aviso na coleta fe informções.</a>
                </p>
                <hr class="linha" />
                <p class="textoFinal">ja tem conta? <a class="link" href="">Entrar</a></p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.link {
    text-decoration: none;
    color: black;
    font-weight: bold;
}

.form-container {
    width: 460px;
    height: 850px;
    border-radius: 25px;
    background-color: #f2f2f2;
    margin: auto;
    margin-bottom: 50px;
    font-family: 'Montserrat';
}

.fecharImg {
    width: 25px;
    height: 25px;
}

.fechar {
    padding: 25px;
    display: flex;
    justify-content: flex-end;
}

label {
    margin-left: 5px;
    color: black;
    font-size: 12px;
    margin-left: 10px;
    font-weight: 500;
}

.textoFinal {
    margin-top: 40px;
    font-size: 20px;
}

.linha {
    margin-top: 40px;
    width: 200px;
    margin-left: 50px;
    margin-right: 50px;
}

.termo {
    padding: 13px;
    text-align: center;
    font-size: 10px;
    font-family: 'Montserrat';
}

.title {
    text-align: center;
    font-size: 23px;
    font-family: 'Montserrat';
    font-weight: bold;
    margin-top: 10px;
}

.logoLogin {
    text-align: center;
}

.imgLogin {
    width: 55px;
    height: 55px;
}
button {
    padding: 13px 100px;
    border-radius: 25px;
    background-color: var(--cor-principal);
    margin-top: 10px;
    border: none;
    color: #f2f2f2;
    font-weight: bold;
    font-size: 15px;
    margin-top: 15px;
}

.containerInterno {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: -2rem;
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
    border-width: 1px;
    background-color: #f2f2f2;
    margin-bottom: 5px;
    padding: 0 10px;
    outline: none;
}

.sub-title {
    text-align: center;
    margin-top: 10px;
    font-family: 'Montserrat';
    font-size: 18px;
}
</style>