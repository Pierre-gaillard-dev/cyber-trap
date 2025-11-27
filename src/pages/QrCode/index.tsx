import { useEffect, useState, type FC } from "react";
import Page from "../../components/Page";
import QRCode from "react-qr-code";
import { getRandomEvent, type RandomEvent } from "./data/random-events";

const QrCode: FC = () => {
  const [value, setValue] = useState<string>("");
  const [event, setEvent] = useState<RandomEvent | null>(null);

  useEffect(() => {
    setInterval(() => {
      setValue(new Date().toString());
    }, 100);
  }, []);

  const handleButtonClick = () => {
    if (event) {
      setEvent(null);
      return;
    }

    const newEvent = getRandomEvent();

    if (newEvent) {
      setEvent(newEvent);
    }
  };

  return (
    <Page>
      <div className="bg-white p-4 flex justify-center items-center aspect-square">
        <QRCode
          value={`https://cyber-trap.pierre-gaillard.mds-vannes.yt/qr-code?t=${value}`}
          size={256}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
        />
      </div>
      <h2 className="text-center mt-4 text-lg font-semibold">
        You just scanned a QR code ?
      </h2>
      <h3 className="text-center mt-2 text-md">
        How dare you to scan a random QR code !
      </h3>
      {!event && (
        <button
          onClick={handleButtonClick}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition mx-3"
        >
          Discover what happens
        </button>
      )}
      {event && (
        <>
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50 mx-3">
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-700">{event.description}</p>
            <p className="mt-4 font-semibold">Effect: {event.effect}</p>
          </div>
          <button
            onClick={handleButtonClick}
            className="my-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition mx-3"
          >
            Try again
          </button>
        </>
      )}
    </Page>
  );
};

export default QrCode;
