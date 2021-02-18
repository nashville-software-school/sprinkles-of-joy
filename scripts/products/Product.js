export const Product = (product, category) => {
  return `
      <section class="baked_good">
          <header class="baked_good__header">
              <h4>${product.name}</h4>
              <p>${category.name}</p>
          </header>
          <div>
              <p>$${product.price}</p>
              <p>${product.description}</p>
          </div>
      </section>
  `
}
