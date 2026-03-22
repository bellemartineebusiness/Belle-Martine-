const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;
const PRINTFUL_API_BASE = 'https://api.printful.com';

async function printfulFetch(endpoint: string, options: RequestInit = {}) {
  if (!PRINTFUL_API_KEY) {
    throw new Error('PRINTFUL_API_KEY is not set');
  }
  const res = await fetch(`${PRINTFUL_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${PRINTFUL_API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`Printful API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getStoreProducts() {
  const data = await printfulFetch('/store/products');
  return data.result;
}

export async function getProduct(id: string | number) {
  const data = await printfulFetch(`/store/products/${id}`);
  return data.result;
}

export async function createOrder(orderData: Record<string, unknown>) {
  const data = await printfulFetch('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
  return data.result;
}
