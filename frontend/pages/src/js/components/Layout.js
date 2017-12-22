import Header from "./header";
import Footer from "./footer";

const Layout = props => (
    <div className='page'>
        <Header />
        <div className="page-contents">
          {props.children}
        </div>
        <Footer />

        <style jsx>{`
          .page-contents {
            width: 100%;
            max-width: 980px;
            margin: 0 auto;
          }
        `}</style>
    </div>
);

export default Layout;
