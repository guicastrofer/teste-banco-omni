import React, { Component } from 'react'
import DepartamentoService from '../services/DepartamentoService'

class ListDepartamentosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                departamentos: [],
                listaEstados: ["SELECIONE","AC","AL","AP","AM","BA","CE","DF",
                "ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RR","RO","RR","SC","SP","SE","TO"]
        }
        this.editDepartamento = this.editDepartamento.bind(this);
        this.atualizarDepatamento = this.atualizarDepatamento.bind(this);
        this.deleteDepartamento = this.deleteDepartamento.bind(this);
    }

    deleteDepartamento(id){
        DepartamentoService.deleteDepartamento(id).then( res => {
            this.setState({departamentos: this.state.departamentos.filter(departamento => departamento.id !== id)});
        });
    }
    editDepartamento(id){
        this.props.history.push(`/add-departamento/${id}`);
    }

    componentDidMount(){
        DepartamentoService.getDepartamentos().then((res) => {
            this.setState({ departamentos: res.data});
        });
    }

    salvarOuAtualizarDepartamento = (e) => {
        this.changeCodigoHandler = this.changeCodigoHandler.bind(this);
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeLocalHandler = this.changeLocalHandler.bind(this);
        this.changeCidadeHandler = this.changeCidadeHandler.bind(this);
        this.changeEstadoHandler = this.changeEstadoHandler.bind(this);
        this.changeDiretoriaHandler = this.changeDiretoriaHandler.bind(this);
      
        e.preventDefault();
        let departamento = {codigo: this.state.codigo, nome: this.state.nome, local: this.state.local, 
            cidade: this.state.cidade, estado: this.state.estado, diretoria: this.state.diretoria};
        console.log('departamento => ' + JSON.stringify(departamento));

        if (JSON.stringify(departamento) !== '{}') {
            DepartamentoService.criarDepartamento(departamento).then(res =>{
                this.props.history.push('/departamentos');
            });
            window.location.reload(true);
        }
    }

    atualizarDepatamento(id){
        DepartamentoService.getDepartamentoById(id).then( (res) =>{
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

    

    render() {
        return (


            
            <div>
                 <h2 className="text-center">Cadastro de Departamento</h2>

                 <br></br>
                <div>
                <div className = "card-body">
                                    <form>
                                        <div className = "form-group-codigo">
                                            <label> Codigo: </label>
                                            <input placeholder="Codigo" name="codigo" className="form-control" 
                                                value={this.state.codigo} onChange={this.changeCodigoHandler} />
                                        </div>
                                        <div className = "form-group-nome">
                                            <label> Nome: </label>
                                            <input placeholder="Nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>
                                  
                                        <div className = "form-group-local">
                                            <label> Local: </label>
                                            <input placeholder="Local" name="local" className="form-control" 
                                                value={this.state.local} onChange={this.changeLocalHandler}/>
                                        </div>
                                        <div className = "form-group-cidade">
                                            <label> Cidade: </label>
                                            <input placeholder="Cidade" name="cidade" className="form-control" 
                                                value={this.state.cidade} onChange={this.changeCidadeHandler}/>
                                        </div>
                                        <div className = "form-group-estado">
                                            <label> Estado: </label>
                                            <div>
                                            <select defaultValue={this.state.selectValue} 
                                            onChange={this.changeEstadoHandler}>
                                                <option value="SELECIONE">Selecione</option>
                                                <option value="AC">AC</option>
                                                <option value="AL">AL</option>
                                                <option value="AP">AP</option>
                                                <option value="AM">AM</option> 
                                                <option value="BA">BA</option> 
                                                <option value="CE">CE</option> 
                                                <option value="DF">DF</option>
                                                <option value="ES">ES</option> 
                                                <option value="GO">GO</option> 
                                                <option value="MA">MA</option> 
                                                <option value="MT">MT</option> 
                                                <option value="MS">MS</option> 
                                                <option value="MG">MG</option> 
                                                <option value="PA">PA</option> 
                                                <option value="PB">PB</option> 
                                                <option value="PR">PR</option> 
                                                <option value="PE">PE</option> 
                                                <option value="PI">PI</option> 
                                                <option value="RJ">RJ</option> 
                                                <option value="RN">RN</option> 
                                                <option value="RS">RS</option> 
                                                <option value="RR">RR</option> 
                                                <option value="RO">RO</option> 
                                                <option value="RR">RR</option> 
                                                <option value="SC">SC</option> 
                                                <option value="SP">SP</option> 
                                                <option value="SE">SE</option> 
                                                <option value="TO">TO</option>
                                            </select>
                                            </div>  
                                        </div>

                                        <div className = "label-diretoria">
                                            <label>Diretoria</label>
                                        </div>
                                            <div className = "form-group-diretoria">
                                                <div className="rectangle" />
                                            </div>
                                                <div className = "radio-button-eis">
                                                        <input type="radio" value="0" name="E.I.S" onChange={this.changeDiretoriaHandler}/> E.I.S 
                                                </div>
                                                    <div className = "radio-button-rec">
                                                        <input type="radio" value="1" name="Recuperação" onChange={this.changeDiretoriaHandler} /> Recuperação 
                                                    </div>
                                                        <div className = "radio-button-neg">        
                                                            <input type="radio" value="2" name="Negócios" onChange={this.changeDiretoriaHandler}/> Negócios 
                                                        </div>
                                            {/* <input placeholder="Diretoria" name="diretoria" className="form-control" 
                                                value={this.state.diretoria} onChange={this.changeDiretoriaHandler}/> */}
                                     
                                     
                                    </form>
                                </div>
                </div>

                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                    <th>Codigo</th>
                                    <th> Nome</th>
                                    <th> Local</th>
                                    <th> Cidade</th>
                                    <th> Estado</th>
                                    <th> Diretoria</th>
                                    <th> Ações</th>
                            </thead>
                            <tbody>
                                {
                                    this.state.departamentos.map(
                                        departamento => 
                                        <tr key = {departamento.id}>
                                             <td> {departamento.codigo} </td> 
                                             <td> {departamento.nome} </td>   
                                             <td> {departamento.local}</td>
                                             <td> {departamento.cidade}</td>
                                             <td> {departamento.estado}</td>
                                             <td> {departamento.diretoria}</td>
                                             <td>
                                                 <button onClick={ () => this.atualizarDepatamento(departamento.id)} className="btn btn-info">Atualizar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDepartamento(departamento.id)} className="btn btn-danger">Excluir </button>
                                              </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

                    <button className="btn btn-primary" onClick={this.salvarOuAtualizarDepartamento}>Gravar</button>
                    
            </div>
            
        )
    }
}

export default ListDepartamentosComponent
