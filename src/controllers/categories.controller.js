class categoryController {
  constructor() {
    this.URI = "http://localhost:3000/api/categories";
  }
  async getCategories() {
    const response = await fetch(this.URI);
    const categories = response.json();
    return categories;
  }
  async addCategory(input) {
    const response = await fetch(`${this.URI}/add-category`, {
      method: "POST",
      body: input
    });
    const data = response.json();
    console.log(data);
  }
  async deleteCategory(id) {
    const response = await fetch(`${this.URI}/delete-category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = response.json();
    console.log(data);
  }
  async editCategory(id) {
    const response = await fetch(`${this.URI}/${id}`);
    const category = response.json();
    return category;
  }
  async sendEditCategory(id, input) {
    const response = await fetch(`${this.URI}/edit-category/${id}`, {
      method: "PUT",
      body: input
    });
    const data = response.json();
    console.log(data);
  }
}

export default new categoryController();
