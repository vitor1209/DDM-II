// Cria um novo item e devolve a lista atualizada (ou null se o nome for vazio)
export function adicionarItem(itens, nome) {
  const nomeLimpo = nome.trim();

  if (nomeLimpo === '') {
    return null;
  }

  const novo = {
    id: String(Date.now()),
    nome: nomeLimpo,
    comprado: false,
  };

  return [...itens, novo];
}
