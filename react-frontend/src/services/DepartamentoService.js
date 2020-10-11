import axios from 'axios';

const DEPARTAMENTO_API_BASE_URL = "http://localhost:8080/api/v1/Departamentos";

class DepartamentoService {

    getDepartamentos(){
        return axios.get(DEPARTAMENTO_API_BASE_URL);
    }

    criarDepartamento(departamento){
        return axios.post(DEPARTAMENTO_API_BASE_URL, departamento);
    }

    getDepartamentoById(departamentoId){
        return axios.get(DEPARTAMENTO_API_BASE_URL + '/' + departamentoId);
    }

    atualizarDepartamento(departamento, departamentoId){
        return axios.put(DEPARTAMENTO_API_BASE_URL + '/' + departamentoId, departamento);
    }

    deleteDepartamento(departamentoId){
        return axios.delete(DEPARTAMENTO_API_BASE_URL + '/' + departamentoId);
    }
}

export default new DepartamentoService()