import {
  Autocomplete,
  Button,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import IntroImage from "./assets/intro.jpg";
import selfie from "./assets/selfie.jpg";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./form.css";
// import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";
import { countries } from "./data";
import StyledDropzone from "./PictureDrop";
import React, { useEffect, useState } from "react";

const SectionHeading = ({ headingText }) => {
  return (
    <Box sx={{ background: "#2C3345", padding: "5% 10%", color: "white" }}>
      <Typography fontSize={{ xs: "1.5em" }}>{headingText}</Typography>
    </Box>
  );
};
function CountrySelect({ setFormData, formData, ref, error }) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          error={error}
          ref={ref}
        />
      )}
      onChange={(e, value) =>
        setFormData({ ...formData, country: value.label })
      }
    />
  );
}
function CountrySelect1({ setFormData, formData, ref, error }) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          error={error}
          ref={ref}
        />
      )}
      onChange={(e, value) =>
        setFormData({ ...formData, country1: value.label })
      }
    />
  );
}
// {
//   setloginModelBoxOpenKaro,
//   setlogoutModelBoxOpenKaro,
//   getData,
//   kycData,
// }
export default function KYCForm() {
  const [otherIdOption, setotherIdOption] = React.useState(false);
  const [participate, setparticipate] = useState(false);

  // const [personCountry, setPersonCountry] = React.useState([]);
  const refs = React.useRef([]);
  const [error, seterror] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    country1: "",
    idType: "Passport",
    idType1: "Registered Lease/Sale Agreement of Residence",
    tokenType: "ETH",
    idNumber: "",
    streetAddress: "",
    streetAddress1: "",
    Postal: "",
    agree: false,
    state: "",
    selfie: "",
    idFront: "",
    idBack: "",
    otherId: "",
    otherIdType: "",
    otherIdNumber: "",
    otherIdFront: "",
    otherIdBack: "",
  });

  const [file1, setfile1] = React.useState("");
  const [file2, setfile2] = React.useState("");
  const [file3, setfile3] = React.useState("");
  const [filename1, setfilename1] = React.useState("");
  const [filename2, setfilename2] = React.useState("");
  const [filename3, setfilename3] = React.useState("");
  useEffect(() => {
    if (filename1) {
      var reader = new FileReader();
      reader.readAsDataURL(filename1);
      reader.onloadend = function (e) {
        setfile1(reader.result);
      };
    }
  }, [filename1]);
  useEffect(() => {
    if (filename2) {
      var reader = new FileReader();
      reader.readAsDataURL(filename2);
      reader.onloadend = function (e) {
        setfile2(reader.result);
      };
    }
  }, [filename2]);
  useEffect(() => {
    if (filename3) {
      var reader = new FileReader();
      reader.readAsDataURL(filename3);
      reader.onloadend = function (e) {
        setfile3(reader.result);
      };
    }
  }, [filename3]);
  // const { account, active } = useWeb3React();

  // useEffect(() => {
  //   console.log(kycData, "kycData");
  //   if (account) {
  //     const finding = kycData.find(
  //       ({ userwalletAddress }) =>
  //         userwalletAddress.toLowerCase() === account.toLowerCase()
  //     );
  //     console.log(finding, "finding");
  //     if (finding) {
  //       setparticipate(true);
  //     }
  //   }
  // }, [kycData, account]);
  // main dataExtracter function
  const scrollToRef = (ref) => window.scrollTo(0, ref.offsetTop - 100);
  const submitHandler = async (event) => {
    event.preventDefault()
    if (!formData.firstName) {
      seterror(true);
      scrollToRef(refs.current[0]);
    } else if (!formData.lastName) {
      seterror(true);
      scrollToRef(refs.current[1]);
    } else if (!formData.dateOfBirth) {
      seterror(true);
      scrollToRef(refs.current[2]);
    } else if (!formData.country) {
      seterror(true);
      scrollToRef(refs.current[3]);
    } else if (!file1) {
      seterror(true);
      scrollToRef(refs.current[16]);
    } else if (!file2) {
      seterror(true);
      scrollToRef(refs.current[17]);
    } else if (!formData.streetAddress) {
      seterror(true);
      scrollToRef(refs.current[4]);
    } else if (!formData.city) {
      seterror(true);
      scrollToRef(refs.current[5]);
    } else if (!formData.state) {
      seterror(true);
      scrollToRef(refs.current[6]);
    } else if (!formData.Postal) {
      seterror(true);
      scrollToRef(refs.current[7]);
    } else if (!formData.country1) {
      seterror(true);
      scrollToRef(refs.current[8]);
    } else if (!formData.phoneNumber) {
      seterror(true);
      scrollToRef(refs.current[9]);
    } else if (!formData.telegramID) {
      seterror(true);
      scrollToRef(refs.current[10]);
    } else if (!formData.email) {
      seterror(true);
      scrollToRef(refs.current[11]);
    } else if (!file3) {
      seterror(true);
      scrollToRef(refs.current[18]);
    } else if (!formData.VIPSlots) {
      seterror(true);
      scrollToRef(refs.current[12]);
    } else if (!formData.VIPwalletAddress) {
      seterror(true);
      scrollToRef(refs.current[13]);
    } else if (!formData.fname) {
      seterror(true);
      scrollToRef(refs.current[14]);
    } else if (!formData.lname) {
      seterror(true);
      scrollToRef(refs.current[15]);
    } else {
      try {
        const data = {
          // userwalletAddress: account,
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
          "Date Of Birth": formData.dateOfBirth,
          Nationality: formData.country,
          "Proof of Identity Type": formData.idType,
          "Proof of Identity Submitted": file1,
          "Selfie with ID & Timestamp": file2,
          "Address for Correspondence": formData.streetAddress,
          City: formData.city,
          "State / Province": formData.state,
          "Postal / Zip Code": formData.Postal,
          Country: formData.country1,
          "Phone Number": formData.phoneNumber,
          "Telegram ID": formData.telegramID,
          Email: formData.email,
          "Proof of Address to be Provided by Applicant": formData.idType1,
          "Proof of Residence Submitted": file3,
          "How many VIP slots will you be taking": formData.VIPSlots,
          "The wallet address where you would like to receive your $KRED":
            formData.VIPwalletAddress,
          "Preferred payment method ": formData.tokenType,
          "First Name of the Applicant": formData.fname,
          "Last Name of the Applicant": formData.lname,
          "Terms Agreement": formData.agree,
        };
        // await addDoc(collection(db, "KYC"), data);
        console.log(data);
        toast.success("You successfully appllied for KYC");
        // getData();
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
  };
  if (participate) {
    return (
      <Box maxWidth="xl" margin="auto" sx={{ background: "#ECEDF3" }}>
        <Box
          margin="auto"
          width="760px"
          component="form" //DrCode is here
          sx={{ background: "white" }}
          onSubmit={submitHandler}
        >
          <center>
            <img src={IntroImage} alt={IntroImage} width="100%" />
          </center>
          <Box sx={{ color: "#2C3345", padding: "10% 10%" }}>
            <Typography fontSize={{ xs: "50px", fontWeight: "bold" }}>
              KYC From
            </Typography>
            <SectionHeading
              headingText={
                "We Received Your KYC appliction. Now you can Visite your Dashbord"
              }
            />
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box maxWidth="xl" margin="auto" sx={{ background: "#ECEDF3" }}>
        <Box
          margin="auto"
          width="760px"
          // component="form"
          component='form'
          method="POST"
          onSubmit={submitHandler}
          sx={{ background: "white" }}
        >
          <center>
            <img src={IntroImage} alt={IntroImage} width="100%" />
          </center>
          {/* HeadingBox */}
          <Box sx={{ color: "#2C3345", padding: "10% 10%" }}>
            <Typography fontSize={{ xs: "50px", fontWeight: "bold" }}>
              KYC From
            </Typography>
          </Box>
          {/* Identity Details */}
          <SectionHeading headingText={"A. Identity Details"} />
          {/* fields */}
          <Container>
            <Grid container alignItems="flex-end" mt={5}>
              <Grid item xs={6}>
                <Typography mb={2}>1. Name of the Applicant</Typography>
                <TextField
                  ref={(element) => {
                    refs.current[0] = element;
                  }}
                  error={error && !formData.firstName}
                  fullWidth
                  value={formData.firstName}
                  id="firstName"
                  sx={{ width: "97%" }}
                  name="LastName"
                  helperText="First and Middle Names"
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  ref={(element) => {
                    refs.current[1] = element;
                  }}
                  error={error && !formData.lastName}
                  value={formData.lastName}
                  id="Last Name"
                  sx={{ width: "97%", marginLeft: "2%" }}
                  name="LastName"
                  helperText="Last Name"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </Grid>
              {/* DOB*/}
              <Grid item xs={12} mt={8}>
                <Typography mb={2}>2. Date of Birth</Typography>
                <TextField
                  fullWidth
                  ref={(element) => {
                    refs.current[2] = element;
                  }}
                  error={error && !formData.dateOfBirth}
                  value={formData.dateOfBirth}
                  type="date"
                  id="dob"
                  sx={{ width: "48%" }}
                  name="dateOfBirth"
                  helperText="Date of Birth"
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                />
              </Grid>
              {/* Nationality */}
              <Grid item xs={12} mt={8}>
                <Typography mb={2}>3. Nationality</Typography>
                <FormControl
                  sx={{ width: "48%" }}
                  ref={(element) => {
                    refs.current[3] = element;
                  }}
                >
                  <CountrySelect
                    error={error && !formData.country}
                    setFormData={setFormData}
                    formData={formData}
                  />
                </FormControl>
              </Grid>

              {/* ID Options */}
              <Grid item xs={12} mt={8}>
                <Typography mb={2}>4. Proof of Identity Submitted</Typography>
                <RadioGroup aria-label="ID" name="ID" value={formData.idType}>
                  <FormControlLabel
                    value="Passport"
                    control={<Radio name="proof-id" />}
                    label="Passport"
                    onClick={() => {
                      setotherIdOption(false);
                      setFormData({ ...formData, idType: "Passport" });
                    }}
                  />
                  <FormControlLabel
                    value="National ID"
                    control={<Radio name="proof-id" />}
                    label="NationalID"
                    onClick={() => {
                      setotherIdOption(false);
                      setFormData({ ...formData, idType: "National ID" });
                    }}
                  />
                </RadioGroup>
                {otherIdOption ? (
                  <TextField
                    fullWidth
                    type="other"
                    id="Last Name"
                    name="other"
                    placeholder="Please Enter Other ID option"
                  />
                ) : null}
              </Grid>

              {/* date */}
              <Grid item xs={12} mt={8}>
                <Typography
                  mb={2}
                  ref={(element) => {
                    refs.current[16] = element;
                  }}
                  sx={{ color: error && !filename1 ? "red" : "black" }}
                >
                  Upload your ID
                </Typography>
                <StyledDropzone setfile={setfilename1} file={filename1} />
              </Grid>

              {/* SelfieSecin */}
              <Grid item xs={12} mt={8}>
                <img src={selfie} alt={selfie} width="100%" />
              </Grid>

              {/* SelfieSecin date */}
              <Grid item xs={12} mt={8}>
                <Typography
                  mb={2}
                  ref={(element) => {
                    refs.current[17] = element;
                  }}
                  sx={{ color: error && !filename2 ? "red" : "black" }}
                >
                  Upload a selfie with your ID {`&`} Timestamp
                </Typography>
                <StyledDropzone setfile={setfilename2} file={filename2} />
                <br />
              </Grid>

              {/* B. Address Details */}
              <Grid item xs={12}>
                <SectionHeading headingText={"B. Address Details"} />
              </Grid>
              <Grid item xs={12} mt={8}>
                <Typography mb={2}>1. Address for Correspondence</Typography>
                <TextField
                  fullWidth
                  id="Street Address"
                  // sx={{ width: "48%" }}
                  name="StreetAddress"
                  helperText="Street Address"
                  value={formData.streetAddress}
                  ref={(element) => {
                    refs.current[4] = element;
                  }}
                  error={error && !formData.streetAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, streetAddress: e.target.value })
                  }
                />
              </Grid>

              {/* city */}
              <Grid item xs={6} mt={3}>
                <TextField
                  fullWidth
                  id="City"
                  sx={{ width: "97%" }}
                  name="City"
                  helperText="City"
                  error={!formData.city}
                  value={formData.city}
                  ref={(element) => {
                    refs.current[5] = element;
                  }}
                  error={error && !formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </Grid>
              {/*  */}
              <Grid item xs={6} mt={3}>
                <TextField
                  fullWidth
                  error={!formData.state}
                  id="StateProvince"
                  sx={{ width: "97%", marginLeft: "2%" }}
                  name="StateProvince"
                  helperText="State / Province"
                  value={formData.state}
                  ref={(element) => {
                    refs.current[6] = element;
                  }}
                  error={error && !formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                />
              </Grid>

              {/* Postal / Zip Code */}
              <Grid item xs={6} mt={3}>
                <TextField
                  fullWidth
                  id="ZipCode"
                  sx={{ width: "97%" }}
                  name="ZipCode"
                  helperText="Postal / Zip Code"
                  value={formData.Postal}
                  ref={(element) => {
                    refs.current[7] = element;
                  }}
                  error={error && !formData.Postal}
                  onChange={(e) =>
                    setFormData({ ...formData, Postal: e.target.value })
                  }
                />
              </Grid>
              {/* Country */}
              <Grid item xs={6} alignItems="center">
                <FormControl
                  sx={{ width: "97%", marginTop: "-20px" }}
                  ref={(element) => {
                    refs.current[8] = element;
                  }}
                >
                  <CountrySelect1
                    error={error && !formData.country1}
                    setFormData={setFormData}
                    formData={formData}
                  />
                </FormControl>
                <Box height="30px"></Box>
              </Grid>
              {/* PhoneNumber */}
              <Grid item xs={6} mt={3}>
                <Typography mb={2}>2. Phone Number</Typography>
                <TextField
                  fullWidth
                  id="PhoneNumber"
                  type="number"
                  sx={{ width: "97%" }}
                  name="PhoneNumber"
                  helperText="Phone Number"
                  value={formData.phoneNumber}
                  ref={(element) => {
                    refs.current[9] = element;
                  }}
                  error={error && !formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                />
              </Grid>
              {/* 3. Telegram ID */}
              <Grid item xs={6} mt={3}>
                <Typography mb={2}>3. Telegram ID</Typography>
                <TextField
                  fullWidth
                  id="telegram"
                  type="text"
                  sx={{ width: "97%" }}
                  name="telegram"
                  helperText="Please enter your telegram ID"
                  ref={(element) => {
                    refs.current[10] = element;
                  }}
                  error={error && !formData.telegramID}
                  value={formData.telegramID}
                  onChange={(e) =>
                    setFormData({ ...formData, telegramID: e.target.value })
                  }
                />
              </Grid>
              {/* 4. Email */}
              <Grid item xs={12} mt={3}>
                <Typography mb={2}>4. Email</Typography>
                <TextField
                  fullWidth
                  id="Email"
                  type="email"
                  sx={{ width: "48%" }}
                  name="Email"
                  helperText="example@example.com"
                  value={formData.email}
                  ref={(element) => {
                    refs.current[11] = element;
                  }}
                  error={error && !formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Grid>
              {/* 5. Proof of Address to be Provided by Applicant */}
              <Grid item xs={12} mt={5}>
                <Typography mb={2}>
                  5. Proof of Address to be Provided by Applicant
                </Typography>
                <Grid container alignItems="center">
                  {[
                    "Registered Lease/Sale Agreement of Residence",
                    "Latest Bank Account Statement/Passbook ",
                    "Latest Telephone Bill ",
                    "Latest Electricity Bill ",
                    "Latest Gas Bill ",
                  ].map((obj) => {
                    return (
                      <Grid item xs={6}>
                        <RadioGroup
                          aria-label="ID"
                          name="proof-id-1"
                          value={formData.idType1}
                        >
                          <FormControlLabel
                            value={obj}
                            control={<Radio name="proof-id-1" />}
                            label={obj}
                            onClick={() =>
                              // setotherIdOption(false);
                              setFormData({ ...formData, idType1: obj })
                            }
                          />
                        </RadioGroup>
                        {/* <FormControlLabel
                        control={
                          <Radio name="proof" onChange={handleChange} label={obj} />
                        }
                        label={obj}
                      /> */}
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              {/* 5. Proof of Address to be Provided by Applicant */}
              <Grid item xs={12} mt={5}>
                <Typography
                  mb={2}
                  sx={{ color: error && !filename3 ? "red" : "black" }}
                >
                  Upload Proof of Residence
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <StyledDropzone
                  ref={(element) => {
                    refs.current[19] = element;
                  }}
                  setfile={setfilename3}
                  file={filename3}
                />
                <br />
              </Grid>

              {/* Slot and Payment Details */}
              <Grid item xs={12}>
                <SectionHeading headingText={"Slot and Payment Details"} />
              </Grid>

              {/* 1. How many VIP slots will you be taking */}
              <Grid item xs={12} mt={3}>
                <Typography mb={2}>
                  1. How many VIP slots will you be taking
                </Typography>
                <TextField
                  fullWidth
                  id="VIPslots"
                  type="number"
                  sx={{ width: "48%" }}
                  name="VIPslots"
                  helperText="Enter a number"
                  value={formData.VIPSlots}
                  ref={(element) => {
                    refs.current[12] = element;
                  }}
                  error={error && !formData.VIPSlots}
                  onChange={(e) =>
                    setFormData({ ...formData, VIPSlots: e.target.value })
                  }
                />
              </Grid>

              {/* 2. The wallet address where you would like to receive your $KRED */}
              <Grid item xs={12} mt={3}>
                <Typography mb={2}>
                  2. The wallet address where you would like to receive your
                  $KRED
                </Typography>
                <TextField
                  id="address"
                  type="address"
                  sx={{ width: "97%" }}
                  name="address"
                  placeholder="Type Here"
                  value={formData.VIPwalletAddress}
                  ref={(element) => {
                    refs.current[13] = element;
                  }}
                  error={error && !formData.VIPwalletAddress}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      VIPwalletAddress: e.target.value,
                    })
                  }
                />
              </Grid>

              {/* 5. Proof of Address to be Provided by Applicant */}
              <Grid item xs={12} mt={5}>
                <Typography mb={2}>5. Your preferred payment method</Typography>
                <Grid container alignItems="center">
                  {["ETH", "BNB", "USDT", "DAI"].map((obj) => {
                    return (
                      <Grid item xs={12}>
                        <RadioGroup
                          aria-label="ID"
                          name="proof-id-1"
                          value={formData.tokenType}
                        >
                          <FormControlLabel
                            value={obj}
                            control={<Radio name="proof-id-1" />}
                            label={obj}
                            onClick={() =>
                              // setotherIdOption(false);
                              setFormData({ ...formData, tokenType: obj })
                            }
                          />
                        </RadioGroup>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>

              {/* Identity Details */}
              <Grid item xs={12}>
                <SectionHeading headingText={"D. Declaration"} />
              </Grid>
              <Grid item xs={12} mt={4} mb={3}>
                <Typography mb={2} p={1}>
                  I hereby declare that the information provided in this form is
                  accurate and complete. I confirm that any information is found
                  incorrect and/or incomplete that leads a violation of
                  regulations may initiate legal actions, and I accept that I am
                  the responsible party for any and all charges, penalties and
                  violations.
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography mb={2}>Name of the Applicant</Typography>

                <TextField
                  fullWidth
                  id="fName"
                  sx={{ width: "97%" }}
                  name="fName"
                  helperText="First and Middle Names"
                  value={formData.fname}
                  ref={(element) => {
                    refs.current[14] = element;
                  }}
                  error={error && !formData.fname}
                  onChange={(e) =>
                    setFormData({ ...formData, fname: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="Last Name"
                  sx={{ width: "97%", marginLeft: "2%" }}
                  name="LastName"
                  value={formData.lname}
                  ref={(element) => {
                    refs.current[15] = element;
                  }}
                  error={error && !formData.lname}
                  onChange={(e) =>
                    setFormData({ ...formData, lname: e.target.value })
                  }
                  helperText="Last Name"
                />
              </Grid>
              {/* Signature of the Applicant*/}

              {/* DOS */}
              {/* <Grid item xs={12} mt={8}>
              <Typography mb={2}>Date</Typography>
              <TextField
                fullWidth
                type="date"
                id="DOS"
                sx={{ width: "48%" }}
                name="DOS"
                helperText="Date"
              />
            </Grid> */}

              {/* ID Options */}
              <Grid item xs={12} mt={8}>
                <FormControlLabel
                  sx={{ color: error && !formData.agree ? "red" : "black" }}
                  control={
                    <Checkbox
                      sx={{ color: error && !formData.agree ? "red" : "black" }}
                      onClick={() =>
                        setFormData({ ...formData, agree: !formData.agree })
                      }
                      name="TcS"
                    />
                  }
                  label={`I agree to`}
                />
                <a href="#terms" target="_blank">
                  terms & conditions.
                </a>
              </Grid>

              {/* end main grid */}
            </Grid>
          </Container>
          <Box textAlign="center" mb={2}>
            <hr />

            <Button
              variant="filled"
              type='submit'
              sx={{
                background: "#2C3345",
                "&:hover": { background: "#2C3345" },
                padding: "20px 90px",
                color: "white",
              }}
            // onClick={submitHandler}
            >
              Submit
            </Button>







            {/* {active ? (
              <Button
                variant="filled"
                sx={{
                  background: "#2C3345",
                  "&:hover": { background: "#2C3345" },
                  padding: "20px 90px",
                  color: "white",
                }}
                onClick={submitHandler}
              >
                
                Submit
              </Button>
            ) : (
              <Button
                variant="filled"
                sx={{
                  background: "#2C3345",
                  "&:hover": { background: "#2C3345" },
                  padding: "20px 90px",
                  color: "white",
                }}
                onClick={() => setloginModelBoxOpenKaro(true)}
              >
                
                Connect to Submit
              </Button>
            )} */}
          </Box>
        </Box>
      </Box>
    );
  }
}
