export const Product = (product, category) => {
  return `
      <section class="baked_good">
          <header>
              <h4>${product.name}</h4>
          </header>
          <div>
              <p>$${product.price}</p>
              <p>${product.description}</p>
              <p>${category.name}</p>
          </div>
      </section>
  `
}
