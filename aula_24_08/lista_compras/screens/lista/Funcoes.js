// Alterna entre comprado / não comprado
export function alternarComprado(itens, id) {
  return itens.map((item) =>
    item.id === id ? { ...item, comprado: !item.comprado } : item
  );
}

// Remove um item da lista
export function removerItem(itens, id) {
  return itens.filter((item) => item.id !== id);
}
