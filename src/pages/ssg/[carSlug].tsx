import { GetStaticPaths, GetStaticProps } from "next";
import getCarByName from "@/db/getCarByName";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { carSlug } = params as any;
  const carObj = await getCarByName(carSlug);

  const carProp = carObj[0];

  return { props: { carProp } };
};

function Page({ carProp }: any) {
  return (
    <div>
      {carProp?.name} is {carProp?.description}
    </div>
  );
}
export default Page;
