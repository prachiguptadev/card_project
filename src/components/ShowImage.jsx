import api from "../api";

const ShowImage = ({ data }) => {
  return (
    <>
      {/* <img src={api(data)} alt={data.name} style={{ borderRadius: "8px" }} /> */}
      <video src={api(data)} controls></video>
    </>
  );
};

export default ShowImage;
