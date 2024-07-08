export default function Category({ params: {category} }: { params: { category: string } }) {

  console.log(category)

  return (
    <>
      <main className="min-h-[50vh] bg-blue-400" />
    </>
  );
}
