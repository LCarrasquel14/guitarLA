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
