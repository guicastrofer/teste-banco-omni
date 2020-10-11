import React, { Component } from 'react'
import DepartamentoService from '../services/DepartamentoService';

class AtualizarDepartamentoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            codigo: '',
            nome: '',
            local: '',
            cidade: '',
            estado: '',
            diretoria: ''
        }
        this.changeCodigoHandler = this.changeCodigoHandler.bind(this);
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeLocalHandler = this.changeLocalHandler.bind(this);
        this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.changeDiretoriaHandler = this.changeDiretoriaHandler.bind(this);
        this.atualizarDepartamento = this.atualizarDepartamento.bind(this);
    }

    componentDidMount(){
        DepartamentoService.getDepartamentoById(this.state.id).then( (res) =>{
            let departamento = res.data;
            this.setState({codigo: departamento.codigo,
                nome: departamento.nome,
                local: departamento.local,
                cidade: departamento.cidade,
                estado: departamento.estado,
                diretoria : departamento.diretoria
            });
        });
    }

    atualizarDepartamento = (e) => {
        e.preventDefault();
        let departamento = {codigo: this.state.codigo, nome: this.state.nome, local: this.state.local, 
            cidade: this.state.cidade, estado: this.state.estado, diretoria: this.state.diretoria};
        console.log('departamento => ' + JSON.stringify(departamento));
        console.log('id => ' + JSON.stringify(this.state.id));
        DepartamentoService.atualizarDepartamento(departamento, this.state.id).then( res => {
            this.props.history.push('/departamentos');
        });
    }
    
    changeCodigoHandler= (event) => {
        this.setState({codigo: event.target.value});
    }

    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeLocalHandler= (event) => {
        this.setState({local: event.target.value});
    }

    changeCidadeHandler= (event) => {
        this.setState({cidade: event.target.value});
    }

    changeEstadoHandler= (event) => {
        this.setState({estado: event.target.value});
    }

    changeDiretoriaHandler= (event) => {
        this.setState({diretoria: event.target.value});
    }

    cancel(){
        this.props.history.push('/departamentos');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Departamentos</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> Codigo: </label>
                                            <input placeholder="Codigo" name="codigo" className="form-control" 
                                                value={this.state.codigo} onChange={this.changeCodigoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nome: </label>
                                            <input placeholder="Nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Local: </label>
                                            <input placeholder="Local" name="local" className="form-control" 
                                                value={this.state.local} onChange={this.changeLocalHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cidade: </label>
                                            <input placeholder="Cidade" name="cidade" className="form-control" 
                                                value={this.state.cidade} onChange={this.changeCidadeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Estado: </label>
                                            <input placeholder="Estado" name="estado" className="form-control" 
                                                value={this.state.estado} onChange={this.changeEstadoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Diretoria: </label>
                                            <input placeholder="Diretoria" name="diretoria" className="form-control" 
                                                value={this.state.diretoria} onChange={this.changeDiretoriaHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.atualizarDepartamento}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AtualizarDepartamentoComponent
