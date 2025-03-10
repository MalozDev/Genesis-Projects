require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(cors());

const AIRTEL_API_URL = process.env.AIRTEL_API_URL;
const CLIENT_ID = process.env.AIRTEL_CLIENT_ID;
const CLIENT_SECRET = process.env.AIRTEL_CLIENT_SECRET;
const COUNTRY = process.env.AIRTEL_X_COUNTRY;
const CURRENCY = process.env.AIRTEL_X_CURRENCY;

// getAccessToken function
async function getAccessToken() {
    console.log("Attempting to get access token..."); // Debugging: Indicate start of function

    try {
        console.log("Client ID:", CLIENT_ID); // Debugging: Log Client ID
        console.log("Client Secret:", CLIENT_SECRET); // Debugging: Log Client Secret
        console.log("API URL:", `${AIRTEL_API_URL}/auth/oauth2/token`); // Debugging: log the full URL.

        const response = await axios.post(`${AIRTEL_API_URL}/auth/oauth2/token`, {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: "client_credentials",
        });

        console.log("Access token retrieval successful."); // Debugging: Indicate success

        return response.data.access_token;
    } catch (error) {
        console.error("Error getting token:", error.response?.data || error.message); // Debugging: Log the error
        if (error.response) {
            console.error("Response data:", error.response.data); // Debugging: Log response data if available
            console.error("Response status:", error.response.status); // Debugging: Log response status if available
            console.error("Response headers:", error.response.headers); //Debugging: log response headers.
        }
        return null;
    }
}

// generateAirtelHeaders function (implement as per Airtel docs)
function generateAirtelHeaders(requestBody, encryptionKey) {
  // Implement encryption and header generation here
    // Example (replace with your actual implementation):
    const signature = crypto.createHmac('sha256', encryptionKey).update(requestBody).digest('base64');

    return {
        'x-signature': signature,
        'x-key': Buffer.from(encryptionKey).toString('base64'),
    };
}

app.post("/pay", async (req, res) => {
    try {
        const { amount, phoneNumber } = req.body;
        const accessToken = await getAccessToken();

        if (!accessToken) return res.status(500).json({ error: "Failed to get token" });

        const requestBody = {
            reference: `ORDER-${Date.now()}`,
            subscriber: { country: COUNTRY, currency: CURRENCY, msisdn: phoneNumber },
            transaction: { amount: amount, country: COUNTRY, currency: CURRENCY, id: `txn_${Date.now()}` },
        };

        const encryptionKey = crypto.randomBytes(32).toString('base64');
        const airtelHeaders = generateAirtelHeaders(JSON.stringify(requestBody), encryptionKey);

        const response = await axios.post(
            `${AIRTEL_API_URL}/merchant/v2/payments/`,
            requestBody,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    ...airtelHeaders,
                },
            }
        );

        res.status(200).json({ message: "Payment initiated!", data: response.data });
    } catch (error) {
        console.error("Payment error:", error.response?.data || error.message);
        res.status(500).json({ error: "Payment failed", details: error.response?.data || error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));