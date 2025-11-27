import type { FC } from "react";
import qrCodeIcon from "@assets/qr-code.svg";
import homeIcon from "@assets/home.svg";
import vikingIcon from "@assets/viking.svg";
import { useNavigate } from "react-router";

const Header: FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goQrCode = () => {
    navigate("/qr-code");
  };

  const goBoss = () => {
    navigate("/boss");
  };

  return (
    <header className="w-full bg-blue-900 text-white flex items-center justify-between py-6">
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src={qrCodeIcon}
          onClick={goQrCode}
          alt="QR Code Icon"
          className="h-10 w-10"
        />
        QR Code
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src={homeIcon}
          onClick={goHome}
          alt="Home Icon"
          className="h-10 w-10"
        />
        Home
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src={vikingIcon}
          onClick={goBoss}
          alt="Viking Icon"
          className="h-10 w-10"
        />
        Boss
      </div>
    </header>
  );
};

export default Header;
