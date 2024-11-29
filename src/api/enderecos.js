import axios from "axios";
export default class EnderecosApi {
    async buscarTodosOsEnderecos() {
        const { data } = await axios.get("/enderecos/");
        return data.results;
    }
    async adicionarEndereco(endereco) {
        const { data } = await axios.post("/enderecos/", endereco);
        return data.results;
    }
    async atualizarEndereco(endereco) {
        const { data } = await axios.put(`/enderecos/${endereco.id}`, endereco);
        return data.results;
    }
    async excluirEndereco(id) {
        const { data } = await axios.delete(`/enderecos/${id}/`);
        return data.results;
    }
}