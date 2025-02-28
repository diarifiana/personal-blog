import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#DB0002] text-white text-[12px]">
      <div className="grid grid-cols-2 p-12 gap-12">
        <div>
          <h3 className="pb-4">Find us on social media</h3>
          <div className="flex gap-4">
            <Facebook />
            <Twitter />
            <Linkedin />
            <Instagram />
          </div>
        </div>

        <div className="m-auto">
          <div className="flex gap-4 pb-4">
            <MapPin width={20} height={20} />
            <p>1010 Cedar Avenue, Lakeside, WA 98000</p>
          </div>

          <div className="flex gap-4 pb-4">
            <Phone width={20} height={20} />
            <p>1-800-555-0100</p>
          </div>

          <div className="flex gap-4 pb-4">
            <Mail width={20} height={20}/>
            <p>carbonzero@dummymail.org</p>
          </div>
        </div>
      </div>

      <h3 className="text-center pb-8">© 2024. This content is for demonstration purposes only.</h3>
    </div>
  );
};

export default Footer;
