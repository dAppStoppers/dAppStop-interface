import { Header } from "../components/detail/Header";

export default function Detail() {
  const headerProps = { title: "Dummy Title" };

  return <Header {...headerProps} />;
}
