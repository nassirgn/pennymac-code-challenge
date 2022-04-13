import React from "react";
import { Box, Typography } from "@mui/material";
import {randomColor} from 'randomcolor'

import useGetRandomQuote from "../../hooks/useGetRandomQuote";
import theme from "../../theme";

const Home = () => {
  const quote = useGetRandomQuote();

  return (
    <div>
      {quote.isLoading ? (
        <span>loading...</span>
      ) : quote.isError ? (
        <span>Ops something happened...</span>
      ) : (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url('https://images.unsplash.com/photo-1518756131217-31eb79b20e8f')`,
                m: 2,
                p: 1,
              }}
            >
              <Box
                component="div"
                sx={{
                  resize: "both",
                  whiteSpace: "normal",
                  m: 4,
                  p: 1,
                  bgcolor: randomColor({luminosity: 'dark', count: 27}),
                  border: "1px solid",
                  borderColor: "grey.300",
                  borderRadius: 2,
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                <Typography variant="h4" sx={{ fontStyle: "italic", color: theme => theme.palette.primary.contrastText }}>
                  {`"${quote.data.data.quote}"`}
                </Typography>
                <Typography variant="h4" sx={{ textAlign: "center", py: 2, color: 'white' }}>
                  {`Author: "${quote.data.data.author}"`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
