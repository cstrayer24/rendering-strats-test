import carArr from "@/data";
import getCarByName from "@/db/getCarByName";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = carArr.map((car) => ({ params: { carSlug: car } }));

  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { carSlug } = params as any;
  const carObj = await getCarByName(carSlug);

  const carProp = carObj[0];

  return { props: { carProp } };
};

function Page({ carProp }: any) {
  return (
    <div>
      {carProp.name} is {carProp.description}
    </div>
  );
}
export default Page;
