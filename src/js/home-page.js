import axios from "axios";

const refs = {
	booklist: document.querySelector(".book-list"),
}

export async function fetchBestBooks() {
	const url = "https://books-backend.p.goit.global/books/top-books";

	const { data } = await axios.get(`${url}`);
	return data;

};
fetchBestBooks().then((books) => {
	console.log(books);
	createBooks(books);
})
// fetchCategory().then((breeds) => {
// 	// console.log(breeds);
// 	create(breeds);
// });

function createBooks(arr) {
	const createMarkup = arr.map(
		({ list_name, books: [{ author, book_image, title }] }) =>
			`<li class="books-item">
			<h2>${list_name}</h2>
			 <img src="${book_image}" alt="${title}" />
			 <h3>${title}</h3>
			 <p>${author}</p>

			 <h2>${list_name}</h2>
			 <img src="${book_image}" alt="${title}" />
			 <h3>${title}</h3>
			 <p>${author}</p>

			 <h2>${list_name}</h2>
			 <img src="${book_image}" alt="${title}" />
			 <h3>${title}</h3>
			 <p>${author}</p>
			<button class="">SEE MORE</button></li>`).join("");
	refs.booklist.insertAdjacentHTML("beforeend", createMarkup);
}