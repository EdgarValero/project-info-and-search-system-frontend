class productController {
  constructor() {
    this.URI = "/api/products";
  }
  async getProducts() {
    const response = await fetch(this.URI);
    const products = await response.json();
    return products;
  }
  async addProduct(input) {
    const response = await fetch(`${this.URI}/add-product`, {
      method: "POST",
      body: input
    });
    const data = await response.json();
    return data;
  }
  async deleteProduct(id) {
    const response = await fetch(`${this.URI}/delete-product/${id}`, {
      method: "DELETE"
    });
    const data = await response.json();
    return data;
  }
  async getProduct(id) {
    const response = await fetch(`${this.URI}/${id}`);
    const data = await response.json();
    return data;
  }
  async sendEditProduct(id, input) {
    const response = await fetch(`${this.URI}/edit-product/${id}`, {
      method: "PUT",
      body: input
    });
    const data = await response.json();
    return data;
  }
  async getProductsFeatureds() {
    const response = await fetch(`${this.URI}/featured/products`);
    const productsFeatureds = await response.json();
    return productsFeatureds;
  }
  async getProductsCategoryAlimentosBasicos() {
    const response = await fetch(`${this.URI}/categories/alimentos-basicos`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryCereales() {
    const response = await fetch(`${this.URI}/categories/cereales`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryDulcesSnacks() {
    const response = await fetch(`${this.URI}/categories/dulces-y-snacks`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryCuidadoPersonal() {
    const response = await fetch(`${this.URI}/categories/cuidado-personal`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryCharcuteria() {
    const response = await fetch(`${this.URI}/categories/charcuteria`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryBebidasLiquidas() {
    const response = await fetch(`${this.URI}/categories/bebidas-liquidas`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryBebidasEnPolvo() {
    const response = await fetch(`${this.URI}/categories/bebidas-en-polvo`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryYogurts() {
    const response = await fetch(`${this.URI}/categories/yogurts`);
    const productsCategory = await response.json();
    return productsCategory;
  }
  async getProductsCategoryHelados() {
    const response = await fetch(`${this.URI}/categories/helados`);
    const productsCategory = await response.json();
    return productsCategory;
  }
}

export default new productController();
