import React from "react";
import {Box, Typography, styled  } from "@mui/material";

import useGetRandomQuote from "../../hooks/useGetRandomQuote";

const Home = () => {
  const quote = useGetRandomQuote();

  return (
    <React.Fragment>
      {quote.isLoading ? (
        <span>loading...</span>
      ) : quote.isError ? (
        <span>Ops something happened...</span>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Box
            component="div"
            sx={{
              resize: 'both',
              whiteSpace: "normal",
              m: 4,
              p: 1,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.100",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <Typography variant="h4" sx={{fontStyle: 'italic'}}>
            {`"${quote.data.data.quote}"`}

            </Typography>
            <Typography variant="h4" sx={{textAlign: 'center', py: 2}}>
              {`Author: "${quote.data.data.author}"`}
            </Typography>
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
};

export default Home;
