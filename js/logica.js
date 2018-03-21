$(function(){
	var prueba = new Fecha(30, 2, 2001);
	console.log(prueba.getDia()+"/"+ prueba.getMes() + "/"+ prueba.getAnio());
	prueba.validarFecha();
});

class Fecha {

	constructor(dia, mes, anio){
		this.dia = dia;
		this.mes = mes;
		this.anio =anio;
		this.dias = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
	}

	getDia(){
		return this.dia;
	}

	getMes(){
		return this.mes;
	}

	getAnio(){
		return this.anio;
	}

	anioBiciesto(){

		let anio = parseInt(this.anio);

		if (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0){
			return true;
		}else{
			return false;
		}

	}

	validarFecha(){

		if(this.anioBiciesto()){
			this.dias[2] = 29;
		}else{
			this.dias[2] = 28;
		}

		if(parseInt(this.mes) > 0 && parseInt(this.mes) < 13){
			console.log("Mes ok "+ this.mes + this.dias[this.mes]);
			if(parseInt(this.dia) > 0 && (parseInt(this.dia) <= parseInt(this.dias[this.mes]))){
				return true;
			}else{
				return false;
			}
		}else{
				return false;
		}

/*
		for(var i=0; i< 13; i++){
			if( parseInt(this.mes) == (i+1) && parseInt(this.dia) > 0 && parseInt(this.dia) < this.dias[i+1]){
				console.log(prueba.getDia()+"/"+ prueba.getMes());
				break;
			}
		}*/

	}

}