import type { FC } from "react";
import Page from "../../components/Page";

const Home: FC = () => {
  return (
    <Page className=" overflow-y-scroll">
      <h1 className="flex flex-row gap-2 align-center justify-center font-[Rosewood] text-3xl px-8 py-16">
        {/* <span className="text-green-900">Cyber'</span> Trap */}
        <img
          src="/logo_with_bg.jpeg"
          alt="Cyber' Trap Logo"
          className="flex-1"
        />
      </h1>
      <section className="bg-green-900 text-white p-8">
        <div>
          <h2 className="mt-6 text-center text-lg font-bold">
            Are you ready to fight against the{" "}
            <b className="font-black">cyber' trap</b> ?
          </h2>
        </div>
        <div>
          <h3 className="mt-4 mb-2 text-md font-bold">Set up :</h3>
          <p>There should be 3-6 players</p>
          <p>First person to play is the oldest</p>
          <p>Choose a pawn and grab a dice</p>
        </div>
        <div>
          <h3 className="mt-4 mb-2 text-md font-bold">Ready to fight ?</h3>
          <p>Throw the dice to advance to a space.</p>
          <p>
            Draw a card that corresponds to the color and answer the question.
          </p>
          <p>If you answer correctly, you move to the case</p>
          <p>
            Some questions might be more difficult than others, so you need to
            stay put until you answer a question in the corresponding color
            category correctly.
          </p>
          <p>
            Be careful, you might come across issues or traps or penalties and
            your chance of winning could be delayed !
          </p>
        </div>
        <div>
          <h3 className="mt-4 mb-2 text-md font-bold">
            The final goal is to defeat the BOSS !
          </h3>
          <p>To do that you will need a boss card.</p>
          <p>
            You can win a boss card by landing on a weapon space and correctly
            answering the question
          </p>
          <p>
            If you land at the end of the board without “the boss” card you have
            to go back to the start.
          </p>
          <p>
            Once you reach the end of the board with the boss card, a final
            challenge awaits you on the app.
          </p>
        </div>
      </section>
      <section className="bg-white text-black p-8">
        <h2 className="mt-6 text-center text-lg font-bold">
          Elements Required to play :
        </h2>
        <ul className="mt-2 list-disc list-inside">
          <li className="list-none">- 1 board</li>
          <li className="list-none">
            - 60 Cards (20 easy, 20 medium and 20 hard)
          </li>
          <li className="list-none">
            - 1 pawn per player (8 included in the box)
          </li>
          <li className="list-none">- 1 dice (not included)</li>
          <li className="list-none">- app (QR code to the app on the board)</li>
        </ul>
      </section>
    </Page>
  );
};

export default Home;
