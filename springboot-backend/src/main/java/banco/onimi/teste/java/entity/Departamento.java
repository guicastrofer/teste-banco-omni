package banco.onimi.teste.java.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import banco.onimi.teste.java.enums.DiretoriaEnum;

@Entity
@Table(name = "departamento")
public class Departamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private Long codigo;
	private String nome;
	private String local;
	private String cidade;
	private String estado;
	private DiretoriaEnum diretoria;

	public Departamento() {

	}

	public Departamento(Long codigo, String nome, String local, String cidade, String estado, DiretoriaEnum diretoria) {
		this.codigo = codigo;
		this.nome = nome;
		this.local = local;
		this.cidade = cidade;
		this.estado = estado;
		this.diretoria = diretoria;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public DiretoriaEnum getDiretoria() {
		return diretoria;
	}

	public void setDiretoria(DiretoriaEnum diretoria) {
		this.diretoria = diretoria;
	}
}
