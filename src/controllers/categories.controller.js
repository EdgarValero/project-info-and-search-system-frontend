class categoryController {
  constructor() {
    this.URI = "http://localhost:3000/api/categories";
  }
  async getCategories() {
    const response = await fetch(this.URI);
    const categories = await response.json();
    return categories;
  }
  async addCategory(input) {
    const response = await fetch(`${this.URI}/add-category`, {
      method: "POST",
      body: input
    });
    const data = await response.json();
    console.log(data);
  }
  async deleteCategory(id) {
    const response = await fetch(`${this.URI}/delete-category/${id}`, {
      method: "DELETE"
    });
    const data = await response.json();
    console.log(data);
  }
  async getCategory(id) {
    const response = await fetch(`${this.URI}/${id}`);
    const category = await response.json();
    return category;
  }
  async sendEditCategory(id, input) {
    const response = await fetch(`${this.URI}/edit-category/${id}`, {
      method: "PUT",
      body: input
    });
    const data = await response.json();
    console.log(data);
  }
}

export default new categoryController();
