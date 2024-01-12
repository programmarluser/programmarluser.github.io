	
//открывашка модального окна
	var modal = document.getElementById('modal');
	var closeTimeout;
	
	// Функция открытия всплывающего окна
	function openModal() {
	    clearTimeout(closeTimeout);
	    modal.style.opacity = '1';
	    modal.style.display = 'block';
	    modal.style.transition = '0.5s';
	
	}
	
	// Закрывать окно при клике вне его области
	window.onclick = function(event) {
	    clearTimeout(closeTimeout);
	
	    if (event.target != modal) {
	        closeTimeout = setTimeout(function() {
	            modal.style.opacity = '0';
	            modal.style.display = 'none';
	            modal.style.transition = '0.5s';
	
	        }, 0);
	    }
	};


// модальные окна консультации


	let modal_consultant_375px = document.querySelector('.modal_consultant_375px');
	let input_name_375px = document.getElementById('name_375px')
	let input_tel_375px = document.getElementById('tel_375px')


	let modal_consultant_1920px = document.querySelector('.modal_consultant_1920px');
	let input_name_1920px = document.getElementById('name_1920px')
	let input_tel_1920px = document.getElementById('tel_1920px')


	let  overlay_375px = document.querySelector('.overlay_375px');
	let  overlay_1920px = document.querySelector('.overlay_1920px');

	

	// модальное окно 375px

		function closeModal_consultant_375px() {
			modal_consultant_375px.style.display = 'none';
			overlay_375px.style.display = 'none';
		}
	
		function openModal_consultant_375px() {
			modal_consultant_375px.style.display = 'block';
			overlay_375px.style.display = 'block';
		}
	
		function isValidForm_375px(event) {

			event.preventDefault();
			if(validateForm_375px() == true) {
				openModal_consultant_375px();
			} else {
				alert('Пожалуйста заполните все поля');
			}
	
		};
	
		function validateForm_375px() {
			
			if (input_name_375px.value != "" && input_tel_375px.value != "") {
				return true
			} else {
				return false
			}
	
		};

	// модальное окно 1920px

		function closeModal_consultant_1920px() {
			modal_consultant_1920px.style.display = 'none';
			overlay_1920px.style.display = 'none';
		}
	
		function openModal_consultant_1920px() {
			modal_consultant_1920px.style.display = 'block';
			overlay_1920px.style.display = 'block';
		}


		function isValidForm_1920px(event) {
			event.preventDefault();

			if(validateForm_1920px() == true) {
				openModal_consultant_1920px();
			} else {
				alert('Пожалуйста заполните все поля');
			}
	
		};
	
		function validateForm_1920px() {
			
			if (input_name_1920px.value != "" && input_tel_1920px.value != "") {
				return true
			} else {
				return false
			}
	
		};













//слайдер после хедера

	let currentIndex = 0;
	const totalItems = 2;
	
	function moveSlider_after_header() {
	  currentIndex = (currentIndex + 1) % totalItems;
	  const container = document.getElementById('scroll-container');
	  const newPosition = currentIndex * container.clientWidth;
	  container.scrollTo({
	    left: newPosition,
	    behavior: 'smooth'
	  });
	}


//слайдер популярных товаров
	let currentIndex_popular = 0;
	const totalItems_popular = 4;
	
	function moveSlider_popular() {
	  currentIndex = (currentIndex + 1) % totalItems;
	  const container = document.getElementById('popular_1920px');
	  const newPosition = currentIndex * container.clientWidth;
	  container.scrollTo({
	    left: newPosition,
	    behavior: 'smooth'
	  });
	}

//бургер меню
	let burger_menu = document.querySelector('.burger_menu');
	
	
	function open_burger() {
		burger_menu.style.display = "block";	
	}
	
	function close_burger() {
		burger_menu.style.display = "none";	
	}