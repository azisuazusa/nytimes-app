const sortArticle = [
  { label: "Sort by...", value: "" },
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" }
];

const bookList = [
  { label: "Search by...", value: "" },
  { label: "E-Book Fiction", value: "e-book-fiction" },
  { label: "Hardcover Fiction", value: "hardcover-fiction" }
];

const apiKey = 'e09f4fa769a64eb78a7d247ac86b0903';
const baseUrl = 'https://api.nytimes.com/svc/';
const articleUrl = 'search/v2/articlesearch.json';
const bookUrl = 'books/v3/lists.json';

export default { sortArticle, bookList, apiKey, baseUrl, articleUrl, bookUrl };
