export const Order = (customerOrder) => {
  return `
    <div class="order">
        <p>Status: ${customerOrder.status.label}</p>
        <p>Order placed at ${customerOrder.timestamp}</p>
    </div>
  `
}
