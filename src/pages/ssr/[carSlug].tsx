import getCarByName from "@/db/getCarByName";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { carSlug } = params as any;
  const carObj = await getCarByName(carSlug);
  console.log(carObj);
  return { props: { carObj } };
};
export default function Page({ carObj }) {
  console.log(carObj[0]);

  return (
    <div>
      {carObj[0].name} is {carObj[0].description}
    </div>
  );
}
