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
    <header className="w-full bg-blue-600 text-white flex items-center justify-between py-6 px-10">
      <img
        src={qrCodeIcon}
        onClick={goQrCode}
        alt="QR Code Icon"
        className="h-10 w-10"
      />
      <img
        src={homeIcon}
        onClick={goHome}
        alt="Home Icon"
        className="h-10 w-10"
      />
      <img
        src={vikingIcon}
        onClick={goBoss}
        alt="Viking Icon"
        className="h-10 w-10"
      />
    </header>
  );
};

export default Header;
