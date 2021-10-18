
import Layout from "../../components/Layout";
import { client } from "../../libs/client";
import Card from '../../components/card'
export default function newsPage({news}) {
  return (
      <Layout>
       <h2 className="newstitle">NEWS</h2>
      <main className="newspage2">
      <ul>
        {news.map((news) => (
          <Card key={news.id} news={news} />
        ))}
      </ul>
      </main>
    </Layout>
  );
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "news" });
  
    return {
      props: {
        news: data.contents,
      },
      revalidate: 3,
    };
  };