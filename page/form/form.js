const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const fnameError  =document.querySelector('#fnameerror')
const lnameError  =document.querySelector('#lnameerror')
const street =document.getElementById('street')
const streeterror = document.getElementById('streeterror')
const hause =document.getElementById('house')
const houseerror = document.getElementById('houseerror')
const flat =document.getElementById('flat')
const flaterror = document.getElementById('flaterror')
const card = document.querySelector('#card')
const cash = document.querySelector('#cash')
const date = document.getElementById('date')
const dateerror = document.getElementById('dateerror')
const paymenterror = document.getElementById('paymenterror')
const form = document.getElementById('form_name')
const button = document.createElement('button')
const div = document.querySelector('#div')
button.innerHTML = 'Submit'
let count = []
let information = {}
let gifts = []
const digits =['1','2','3','4','5','6','7','8','9','0']
let now = new Date()
let currentdate
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return currentdate =  [year, month, day].join('-');
}
	let checkBoxGroup = document.forms['form_name']['check[]'];			
	let limit = 2;
	for (let i = 0; i < checkBoxGroup.length; i++) {
		checkBoxGroup[i].addEventListener('click', Checked)
    function Checked() {
			let checkedcount = 0;
			for (let i = 0; i < checkBoxGroup.length; i++) {
				checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
			}
			if (checkedcount > limit) {			
				this.checked = false;
			}else if(this.checked = true){
          if(gifts.length < 2){
            gifts.push(checkBoxGroup[i].value)
          }
      }
		}
	}
formatDate(now)
firstName.onblur = function () {
  if (firstName.value.includes(' ') || firstName.value.length < 4 || firstName.value.includes('1') || firstName.value.includes('2') || firstName.value.includes('3') || firstName.value.includes('4') || firstName.value.includes('5') || firstName.value.includes('6') || firstName.value.includes('7') || firstName.value.includes('8') || firstName.value.includes('9') || firstName.value.includes('0')) {
    firstName.classList.add('invalid')
    fnameError.innerHTML = 'Please enter a correct first name.'
    count.push(fnameError.innerHTML)
  }else{
    information.firstName = firstName.value

  }
}
firstName.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid')
    fnameError.innerHTML = ""
    count.pop()
  }
}
lastName.onblur = function () {
  if (lastName.value.includes(' ') || lastName.value.length < 5 || lastName.value.includes('1') || lastName.value.includes('2') || lastName.value.includes('3') || lastName.value.includes('4') || lastName.value.includes('5') || lastName.value.includes('6') || lastName.value.includes('7') || lastName.value.includes('8') || lastName.value.includes('9') || lastName.value.includes('0')) { 
    lastName.classList.add('invalid')
    lnameError.innerHTML = 'Please enter a correct last name.'
    count.push(lnameError.innerHTML)
  }else{
    information.lastName = lastName.value
    valid()
  }
}
lastName.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid')
      lnameError.innerHTML = ""
      count.pop()
    }
}
date.onblur = function(){
  if(date.value <= currentdate){
    date.classList.add('invalid')
    dateerror.innerHTML = 'Please enter a correct date.'
    count.push(dateerror.innerHTML)
  }else{
    information.date = date.value
    valid()
  }
}
date.onfocus = function(){
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid')
    dateerror.innerHTML = ""
    count.pop()
  }
}

street.onblur = function () {
    if (street.value.length < 5) { 
    street.classList.add('invalid')
    streeterror.innerHTML = 'Please enter a correct street.'
    count.push(streeterror.innerHTML)
    }else{
      information.street = street.value
      valid()
    }
}
street.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid')
    streeterror.innerHTML = ""
    count.pop()
  }
}
house.onblur = function () {
  if (house.value.includes('-') || house.value.length ==0) { 
  house.classList.add('invalid')
  houseerror.innerHTML = 'Please enter a correct hause number.'
  count.push(houseerror.innerHTML)
  }else{
    information.house = house.value
    valid()
  }
}
house.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid')
    houseerror.innerHTML = ""
    count.pop()
  }
}
flat.onblur = function () {
  if (flat.value.includes('-') || flat.value.length ==0) { 
  flat.classList.add('invalid')
  flaterror.innerHTML = 'Please enter a correct hause number.'
  count.push(flaterror.innerHTML)
  }else{
    information.flat = flat.value
    valid()
  }
}
flat.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid')
    flaterror.innerHTML = ""
    count.pop()
  }
}

card.addEventListener('click', Radio)
cash.addEventListener('click', Radio)
function Radio (){
  information.payment = this.value
  valid()
}
function valid(){
  if(count.length == 0 && Object.keys(information).length >= 7){
    div.append(button)
  }
}
button.addEventListener('click',Result, Submit)
function Submit(){
  // form.submit()
}
const container = document.getElementById('container')
const div2 = document.createElement('div')
div2.className = 'result'
function Result (){
  div.remove()
    const firstname = document.createElement('p')
    const lastname = document.createElement('p')
    const date = document.createElement('p')
    const street = document.createElement('p')
    const HouseNumber = document.createElement('p')
    const FlatNumber = document.createElement('p')
    const payment = document.createElement('p')
    const gift1  =document.createElement('span')
    const gift2  =document.createElement('span')
    const gift = document.createElement('span')
    const title = document.createElement('h3')
    title.innerHTML = 'The order created'
    title.className = 'title'
    firstname.innerHTML = `<span class="result1">Name:</span> ${information.firstName}`
    lastname.innerHTML = `<span class="result1">Surname:</span> ${information.lastName}`
    date.innerHTML = `<span class="result1">Delivery date:</span> ${information.date}`
    street.innerHTML = `<span class="result1">Street:</span> ${information.street}`
    HouseNumber.innerHTML = `<span class="result1">House number:</span> ${information.house}`
    FlatNumber.innerHTML = `<span class="result1">Flat number:</span> ${information.flat}`
    payment.innerHTML = `<span class="result1">payment type:</span> ${information.payment}`
    gift1.innerHTML =`<span class="result1">Your gifts:</span> ${gifts[0]}`
    gift2.innerHTML = `, ${gifts[1]}`
    div2.append(title)
    div2.append(firstname)
    div2.append(lastname)
    div2.append(date)
    div2.append(street)
    div2.append(HouseNumber)
    div2.append(FlatNumber)
    div2.append(payment)
    gift.append(gift1)
    gift.append(gift2)
    div2.append(gift)
    container.append(div2)
}

