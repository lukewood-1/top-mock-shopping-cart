async function fetchData(){
  const req = await fetch('https://fakestoreapi.com/products');
  if(!req.ok){
    throw new Error("couldn't fetch products")
  }
  const json = await req.json()
  return json;
}

export default fetchData