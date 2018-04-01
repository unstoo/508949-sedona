(function() {
  const typeText = 'text',
    hiddenFormClass = 'form-hidden',
    bookingForm = document.body.querySelector('#form'),
    dateInputs = bookingForm.querySelectorAll('input[type="date"]'),
    calendarIcons = bookingForm.querySelectorAll('.calendar-icon'),
    formButton = document.body.querySelector('#form-button')

  function toggleFormVisibility(e) {
      console.log(bookingForm.classList)
      
      const isItHidden = bookingForm.classList.contains(hiddenFormClass)
      isItHidden ? bookingForm.classList.remove(hiddenFormClass) : bookingForm.classList.add(hiddenFormClass)
  }

  bookingForm.classList.add(hiddenFormClass)

  /* 
  Если JS отключен, то input в букинг форм type=date и иконки календарей скрыты.
  Если JS включен, то меняем input тип на text и делаем иконки календарей видимыми.
  */
  dateInputs.forEach((input) => input.type = typeText)
  calendarIcons.forEach((icon) => icon.classList.remove('visually-hidden'))

  /*
    Вешаем на кнопку ивент переключения видимости формы.
  */
  formButton.addEventListener('click', toggleFormVisibility)

  
  
})()