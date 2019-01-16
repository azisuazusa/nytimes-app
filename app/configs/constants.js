const sortArticle = [
  { label: "Sort by...", value: "" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" }
];

const bookList = [
  { label: "E-Book Fiction", value: "e-book-fiction" },
  { label: "Hardcover Fiction", value: "hardcover-fiction" }
];

const apiKey = 'GtV5coQBFjF79oGnbCpJZfxYV8GGNmuE';
const baseUrl = 'https://api.nytimes.com/svc/';
const webBaseUrl = 'https://www.nytimes.com/';
const articleUrl = 'search/v2/articlesearch.json';
const bookUrl = 'books/v3/lists.json';

export default { sortArticle, bookList, apiKey, baseUrl, articleUrl, bookUrl, webBaseUrl };
