export async function getData(url) {
  const consult = await fetch(url);
  const response = consult.json();
  return response;
}

export async function getGuitar(nameGuitar) {
  const consult = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${nameGuitar}&populate=*`
  );
  const response = consult.json();
  return response;
}

export async function getPost() {
  const consult = await fetch(`${process.env.API_URL}/posts?populate=*`);
  const response = consult.json();
  return response;
}

export function newDate(date) {
  const formatDate = new Date(date);

  const option = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return formatDate.toLocaleDateString("es-ES", option);
}

export async function getPostFilter(url) {
  const consult = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=*`
  );
  const response = consult.json();
  return response;
}

