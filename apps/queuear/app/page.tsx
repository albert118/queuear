import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';
import GetDemoStatus from './statuses';

export default async function Index() {
  const bannerInfo = {
    people: ['tony riggatony', 'juan juan', 'james juan'],
    features: ['Feature A', 'Feature B', 'Feature C'],
    status: GetDemoStatus(),
  };

  return (
    <>
      <div className="wrapper">
        <div className="container auto-center">
          <Greeter />

          <Banner {...bannerInfo} />

          <Footer />
        </div>
      </div>
    </>
  );
}
