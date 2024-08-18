import { format } from "date-fns";


function App() {
  const name: string = "T. Y.";
  const hobby: string = "タッチタイピング、プログラミング";
  const age: number = 24;
  const birthday: Date = new Date("2024/08/18");
  const detail: string = "技術力向上のためTechTrainで学習中！";

  return (
    <main>
      <h1 className="text-red-500 text-4xl mb-4 mt-12">自己紹介</h1>
      <h2 className="text-2xl">名前</h2>
      <div className="ml-4">{name}</div>
      <h2 className="text-2xl">生年月日</h2>
      <div className="ml-4">{format(birthday, "yyyy-MM-dd")}</div>
      <h2 className="text-2xl">年齢</h2>
      <div className="ml-4">{age}歳</div>
      <h2 className="text-2xl">趣味</h2>
      <div className="ml-4">{hobby}</div>
      <h2 className="text-2xl">近況</h2>
      <div className="ml-4">{detail}</div>
    </main>
  );
}

export default App
