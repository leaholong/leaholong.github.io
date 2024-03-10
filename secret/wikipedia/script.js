const api_url = "https://en.wikipedia.org/w/api.php";

function test() {
	fetch(api_url)
		.then(response => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then(data => {
			console.log(data);
		})
		.catch(error => {
			console.error("Error:",error);
		});
};