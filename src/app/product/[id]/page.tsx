export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <div>{(await params).id}</div>
    </div>
  );
}
