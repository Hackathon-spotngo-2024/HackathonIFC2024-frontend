<script setup>

</script>


<template>
    <footer class="rodape">
        <div class="info">

            <div class="empresa">
                <h3>Empresa</h3>
                <div class="links">
                    <p class="sobre">sobre<a href="sobre"></a></p>
                    <p>termo <a href="termo"></a></p>
                </div>
            </div>
            <div class="contato">
                <h3>Contato</h3>
                <div class="links">
                    <p class="contato"> ajuda/FAQ <a href="ajuda"></a></p>
                </div>
            </div>
        </div>
        <div class="linha">
            <hr>
        </div>
        <div>
            <p class="mensagemFinal">2024 Spot'n GO &copy;</p>
        </div>
    </footer>
</template>

<style scoped>
.rodape {
    background-color: rgba(239, 239, 239, 1);
    color: #000000;
    padding: 50px 0;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 300px;
    margin-top: 15px;
}

.info {
    margin-left: 95px;
    display: flex;
    gap: 95px;
    font-family: "Montserrat";
}

h3 {
    margin-bottom: 10px;
}

p {
    font-family: "Montserrat";
    text-decoration: underline;
}

p:hover {
    text-decoration: none;
}

.linha{
margin-left: 30px;  
margin-right: 30px;
margin-top: 208px;
}

.mensagemFinal{
    font-family: "Montserrat";
    margin-top: 30px;
    margin-left: 95px;
}
</style>