class productController {
  constructor() {
    this.URI = "http://localhost:3000/api/products";
  }
  async getProducts() {
    const response = await fetch(this.URI);
    const products = response.json();
    return products;
  }
  async addProduct(input) {
    console.log(input);
    const response = await fetch(`${this.URI}/add-product`, {
      method: "POST",
      body: input
    });
    const data = response.json();
    console.log(data);
  }
  async deleteProduct(id) {
    const response = await fetch(`${this.URI}/delete-product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = response.json();
    console.log(data);
  }
  async editProduct(id) {
    const response = await fetch(`${this.URI}/${id}`);
    const data = response.json();
    return data;
  }
  async sendEditProduct(id, input) {
    const response = await fetch(`${this.URI}/edit-product/${id}`, {
      method: "PUT",
      body: input
    });
    const data = response.json();
    console.log(data);
  }
  async getProductsFeatureds() {
    const response = await fetch(`${this.URI}/featured/products`);
    const productsFeatureds = response.json();
    return productsFeatureds;
  }
}

export default new productController();
