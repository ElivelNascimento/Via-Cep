
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-via-cep',
  templateUrl: './via-cep.component.html',
  styleUrls: ['./via-cep.component.css']
})
export class ViaCepComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private http: HttpClient, 
    private formBuilder: FormBuilder,
    
    ) {
      this.consultaCep = this.consultaCep.bind(this);
     }

  ngOnInit(): void {

   this.formulario = this.formBuilder.group({

      cep: [null],
      numero: [null, Validators.required],
      complemento: [null],
      rua: [null, Validators.required],
      bairro: [null, Validators.required],
      cidade: [null, Validators.required],
      estado: [null, Validators.required],
      ibge: [null, Validators.required]
   });
  }

  onSubmit() {
    console.log(this.formulario?.value);
  }

  consultaCep() {
    let cep =this.formulario?.get('cep')?.value;
    
    console.log(cep);
    
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Expressão regular para validar o CEP.
    if (cep != null && cep !== '') {
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosForm();
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe((dados: any) => this.popularDadosViaCep(dados));
      }
    }
  }
  popularDadosViaCep(dados: any) {
    console.log(dados);
    
    this.formulario?.patchValue({
      cep: dados.cep,
      rua: dados.logradouro,
      numero: '',
      complemento: '',
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
      ibge: dados.ibge
    });
  }

  resetaDadosForm() {
    this.formulario?.patchValue({
        cep:null,
        rua:null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
        ibge: null
    });
  }
}

