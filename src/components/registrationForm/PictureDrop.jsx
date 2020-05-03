import { Box } from "@mui/system";
import React from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "rgba(225, 172, 84, 1)",
};

const acceptStyle = {
  borderColor: "rgba(225, 172, 84, 1)",
  color: "black",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function StyledDropzone({ file, setfile }) {
  const [filename, setfilename] = React.useState("");
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    multiple: false,
    accept: "image/*",
    onDrop: (files) => {
      setfile(files[0]);
      setfilename(files[0].name + "-" + files[0].size + "bytes");
    },
  });
  const style = React.useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Box align="center">
        <i class="fas fa-cloud-upload fa-2x"></i>
        </Box>
        <p>
          {filename
            ? filename
            : "Drag 'n' drop Product Picture here, or click to select Product Picture."}
        </p>
        {file && <img src={file.path} alt="" srcset="" />}
      </div>
    </div>
  );
}

export default StyledDropzone;
