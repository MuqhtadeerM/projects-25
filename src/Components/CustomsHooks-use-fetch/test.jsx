import useFetch from "./fetch";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pending ! Please wait..</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productsItem) => (
            <p key={productsItem.key}>{productsItem.title}</p>
          ))
        : null}
    </div>
  );
}
