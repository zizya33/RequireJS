//Обновление списка сотрудников
function reSelect(){
	require(['reSelect', 'jquery'], function(reSelect, $){
		reSelect();
	});
}

//Вывод в нумерованный список
function showInfo(name){
	$("#infoSotr").html('');
	$(function(){
    $.getJSON('json/department.json', function(data) {
            for(var i=0;i<data.sotr.length;i++){
            	
            	var nameSurname = data.sotr[i].surname + ' ' + data.sotr[i].name;
            	console.log(nameSurname);
            	sal = localStorage.getItem(nameSurname);
            	console.log(sal);
                if(nameSurname == name) {if(localStorage.getItem(name)!=null){$('#infoSotr').append('<li>' + nameSurname +'</li><li>' + data.sotr[i].dep +'</li><li>' + data.sotr[i].position +'</li><li>' + localStorage.getItem(name) +' $</li>');}
            								else{alert("Не введена информация о сотруднике!");}}
                }
    });
	});
}

//Подсчёт зарплаты
function showSalary(name,rate,exp,pension,breach){
require(['rateCount'], function(rateCount){
		var salary = rateCount(rate);
require(['expCount'], function(expCount){
		salary *= expCount(exp);
require(['specCount'], function(specCount){
		salary *= specCount(spec);
require(['complexityCount'], function(complexityCount){
		salary *= complexityCount(complexity);
		salary=Math.round(salary);

		localStorage.setItem(name, salary);
	});
	});
	});
	});
}

function showAverage(){
	require(['showAverage', 'jquery'], function(showAverage, $){
		showAverage();
	});	
}