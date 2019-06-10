	
	  var popup=document.querySelector('.modal-block');
	  var button_open=document.querySelector('.search-data-button');
      var adult_mb=popup.querySelector('[name=adult]');
	  var child_mb=popup.querySelector('[name=child]');
	  var departure_mb=popup.querySelector('[name=departure-in]');
	  
	  button_open.addEventListener("click", function(evt) {
	  evt.preventDefault();
	  popup.classList.toggle('js-modal-show');
	  departure_mb.focus();
      });
	  
	  // сохраним в регистр параль и логин, установим курсир на поле ввода
	  // отображаем результаты
	  console.log('форма открыта')
	  console.log(adult_mb.value)
	  console.log(child_mb.value)
	  
	  
	   // закрываем модальное окно Esc
	  window.addEventListener('keydown', function(evt){
		if (evt.keyCode===27){
	      if (popup.classList.contains('js-modal-show')){
	 	    evt.preventDefault();
	 		popup.classList.toggle('js-modal-show');
			console.log('user press Esc to close window')
	 	  }
	    }
	  } )
	  