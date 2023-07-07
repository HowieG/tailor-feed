import Header from "~/components/Header";
import MainContainer from "~/components/MainContainer";
import { testProducts } from "~/data/test-data";
import FeedComponent from "~/components/FeedComponent";

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <MainContainer>
        <FeedComponent data={testProducts} />
      </MainContainer>
    </main>
  );
}
