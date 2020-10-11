package banco.onimi.teste.java.enums;

public enum DiretoriaEnum {
	EIS("EIS", 1), RECUPERACAO("RECUPERACAO", 2), NEGOCIOS("NEGOCIOS", 3);

	private String label;
	private Integer codigoDiretoria;

	private DiretoriaEnum(String label, Integer codigoDiretoria) {
		this.label = label;
		this.codigoDiretoria = codigoDiretoria;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public Integer getCodigoDiretoria() {
		return codigoDiretoria;
	}

	public void setCodigoDiretoria(Integer codigoDiretoria) {
		this.codigoDiretoria = codigoDiretoria;
	}
}
