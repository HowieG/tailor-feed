import Header from "~/components/Header";
import MainContainer from "~/components/MainContainer";
import { testProducts } from "~/data/test-data";

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <MainContainer data={testProducts}></MainContainer>
    </main>
  );
}
