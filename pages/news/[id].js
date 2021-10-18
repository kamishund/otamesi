// pages/blog/[id].js
import Layout from "../../components/Layout";
import { client } from "../../libs/client";
import { useRouter } from 'next/router'
export default function BlogId({ news}) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
      <Layout>
       <h2 className="newstitle">NEWS</h2>
      <main className="newspage">
      <h3 className="newspagetitle">{news.title}</h3>
      <p className="newspagetime">{news.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.body}`,
        }}
      />
    </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.id}`);
  return { paths, fallback: true };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
    revalidate: 3,
  };
};