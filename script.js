const resultDiv = document.querySelector('.result');

const getURL = (inputURL) => {
  
  inputURL = document.getElementById('inputURL').value;
  
  const encodedParams = new URLSearchParams();
  encodedParams.append("url", inputURL);
  
  const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '27aa1cea45mshb0c23cc5814d6b3p1afd3ejsncb1e5f12b774',
		'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
	},
	body: encodedParams
};
  
  fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
	.then(response => response.json())
	.then(response => {
    console.log(response);
    resultDiv.innerHTML = `<div class="result">Your new <span>url</span> is: ${response.result_url}</div>`;
  })
	.catch(err => console.error(err));
}

// Toggle Menu

const toggleMenu = document.querySelector('.toggleMenu');
const toggleModal = document.querySelector('.toggleModal');

const toggleActive = (_) => {
  toggleMenu.classList.toggle('active');
  toggleModal.classList.toggle('active');
}

toggleMenu.addEventListener('click',toggleActive);