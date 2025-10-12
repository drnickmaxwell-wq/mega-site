type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Page({ params }: PageProps) {
  return (
    <div>
      {/* TODO: implement page content */}
      <h1>{params.slug}</h1>
    </div>
  );
}
