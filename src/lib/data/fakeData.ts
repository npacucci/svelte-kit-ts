let data = [
  { id: 1, title: "Write SvelteKit intro blog post", assigned: "Marco" },
  { id: 2, title: "Write SvelteKit advanced data loading blog post", assigned: "Luigi" },
  { id: 3, title: "Prepare RenderATL talk", assigned: "Giuseppe" },
  { id: 4, title: "Fix all SvelteKit bugs", assigned: "Nicola" },
  { id: 5, title: "Edit Adam's blog posts", assigned: "Giovanni" },
];

export const wait = async (amount?: number) => new Promise(res => setTimeout(res, amount ?? 100));

export async function getData() {
  await wait();

  return data;
}

export async function getItem(id: number) {
  return data.find(t => t.id == id);
}
