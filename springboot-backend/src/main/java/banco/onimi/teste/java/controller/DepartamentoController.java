package banco.onimi.teste.java.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import banco.onimi.teste.java.entity.Departamento;
import banco.onimi.teste.java.exception.ResourceNotFoundException;
import banco.onimi.teste.java.repository.DepartamentoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class DepartamentoController {

	@Autowired
	private DepartamentoRepository DepartamentoRepository;
	
	// get all Departamentos
	@GetMapping("/Departamentos")
	public List<Departamento> getAllDepartamentos(){
		return DepartamentoRepository.findAll();
	}		
	
	// gera Departamento rest api
	@PostMapping("/Departamentos")
	public Departamento createDepartamento(@RequestBody Departamento Departamento) {
		return DepartamentoRepository.save(Departamento);
	}
	
	// obtem Departamento por id rest api
	@GetMapping("/Departamentos/{id}")
	public ResponseEntity<Departamento> getDepartamentoById(@PathVariable Long id) {
		Departamento Departamento = DepartamentoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Departamento not exist with id :" + id));
		return ResponseEntity.ok(Departamento);
	}
	
	// update Departamento rest api
	@PutMapping("/Departamentos/{id}")
	public ResponseEntity<Departamento> updateDepartamento(@PathVariable Long id, @RequestBody Departamento DepartamentoDetails){
		Departamento Departamento = DepartamentoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Departamento not exist with id :" + id));
		
		Departamento.setCodigo(DepartamentoDetails.getCodigo());
		Departamento.setNome(DepartamentoDetails.getNome());
		Departamento.setLocal(DepartamentoDetails.getLocal());
		Departamento.setCidade(DepartamentoDetails.getCidade());
		Departamento.setEstado(DepartamentoDetails.getEstado());
		Departamento.getDiretoria().setCodigoDiretoria(DepartamentoDetails.getDiretoria().getCodigoDiretoria());
		
		Departamento updatedDepartamento = DepartamentoRepository.save(Departamento);
		return ResponseEntity.ok(updatedDepartamento);
	}
	
	// deleta Departamento rest api
	@DeleteMapping("/Departamentos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDepartamento(@PathVariable Long id){
		Departamento Departamento = DepartamentoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Departamento not exist with id :" + id));
		
		DepartamentoRepository.delete(Departamento);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
