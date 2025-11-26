import type { FC } from "react";
import Page from "../../components/Page";

const Home: FC = () => {
  return (
    <Page className=" overflow-y-scroll p-8">
      <h1 className="flex flex-row gap-2 align-center justify-center font-[Rosewood] text-3xl">
        <span className="text-green-900">Cyber'</span> Trap
      </h1>
      <div>
        <h2 className="mt-10 text-center text-lg font-bold">
          Are you ready to fight against the cyber' trap ?
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
        <p>
          You cannot advance in the board until you answer the question card
          correctly.
        </p>
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
          You can win the boss card by landing on “the boss” space and correctly
          answering the question or fulfilling other activities!{" "}
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
      <div>
        <h2 className="mt-10 text-center text-lg font-bold">
          Elements Required to play :
        </h2>
        <ul className="mt-2 list-disc list-inside">
          <li>1 board</li>
          <li>60 Cards (20 easy, 20 medium and 20 hard)</li>
          <li>1 pawn per player (8 included in the box)</li>
          <li>1 dice (not included)</li>
          <li>app (QR code to the app on the board)</li>
        </ul>
      </div>
    </Page>
  );
};

export default Home;
