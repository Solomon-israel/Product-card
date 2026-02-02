<div className="p-8">
  {products.map((p, id) => (
    <ProductCard p={p} key={id} />
  ))}
</div>;
