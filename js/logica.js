$(function(){
	var prueba = new Fecha(5, 12, 1995);
	console.log(prueba.getDia()+"/"+ prueba.getMes() + "/"+ prueba.getAnio());
});

class Fecha {

	constructor(dia, mes, anio){
		this.dia = dia;
		this.mes = mes;
		this.anio =anio;
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

}