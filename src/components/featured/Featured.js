import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=eldoret,nairobi,diani,mombasa,nakuru,kisumu"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
            <div className="featuredItem">
              <img
                src="https://images.unsplash.com/photo-1521667815225-4d95a3f3a31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Eldoret</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://media.istockphoto.com/photos/nairobi-the-capital-city-of-kenya-picture-id507123769?k=20&m=507123769&s=612x612&w=0&h=xnGCKoBAStWNk8w5fsN4U9m-j2rtYzvo-xv2sPjrrqM="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Nairobi</h1>
                <h2>{data[1]}</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/square250/691725.webp?k=ba3cf3ded7b086bb6476b6a605875d22ac350d47d16fc3f1b0982bf54551b2f3&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Diani</h1>
                <h2>{data[2]}</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/square250/685399.webp?k=4410d3272c0ccbc1dd11f53d70243ad7f59ecd89f23a71eb7a93b89382a288da&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Mombasa</h1>
                <h2>{data[3]}</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/square250/957274.webp?k=472afbfc72657120f3c6907f8e48054576c9424be7791a3b58e2cd6026927323&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Nakuru</h1>
                <h2>{data[4]}</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://t-cf.bstatic.com/xdata/images/city/square250/776903.webp?k=1400e6c880c7dd5cb9f71488246ecf4c99679d7c904c1d6f19fbc0ff6d950b22&o="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Kisumu</h1>
                <h2>{data[5]}</h2>
              </div>
            </div>
          </>
      )}
        </div>
      );
      };

      export default Featured;