define(function(){
  return function(){

  	var salary=0;
	var i=0;
	$("#surnames option").each(function(){
		if(localStorage.getItem(this.text)==null){alert("Введена не вся информация!"); return false;}
		salary+=+localStorage.getItem(this.text);		
		i++;
	})
	salary/=i;
	alert("Средняя зарплата по отделу: " + salary);
	}
});