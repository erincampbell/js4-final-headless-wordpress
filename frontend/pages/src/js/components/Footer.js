import Link from "next/link";
import { allhomesFooter } from './nav-items';
import AllhomesFooter from '@domain-group/fe-co-allhomes-footer';

const Footer = () => (
    <div>
        <AllhomesFooter {...allhomesFooter} />
    </div>
);

export default Footer;
