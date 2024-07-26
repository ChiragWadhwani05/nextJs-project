import './footer.scss';
import { FaCoffee } from 'react-icons/fa';
import Image from 'next/image';

function Footer() {
  return (
    <div className="footer">
      <Image src="/footer.svg" alt="footer" width={1000} height={1000} />
    </div>
  );
}

export default Footer;
