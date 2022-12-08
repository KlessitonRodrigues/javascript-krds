import { CognitoJwtVerifier } from "aws-jwt-verify";

console.log('running');

const run = async () => {
  // Verifier that expects valid access tokens:
  const verifier = CognitoJwtVerifier.create({
    userPoolId: "us-east-1_pDZaiDzfi",
    tokenUse: "access",
    clientId: "02ed8359-a91f-4759-9929-a28019d5e60b",
  });

  const token =
    "eyJraWQiOiJ0MVkwUngyaG5Eais5RFwvYlZPanNuQmdYYU5QN2VpRUhVMXBRZjB2UFBhMD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIwMmVkODM1OS1hOTFmLTQ3NTktOTkyOS1hMjgwMTlkNWU2MGIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9wRFphaUR6ZmkiLCJjbGllbnRfaWQiOiI2bWloazZyNnEyOW01dTdpYnJxYmw2cGJwbyIsIm9yaWdpbl9qdGkiOiI5YzI0N2M4Yi1mMDU3LTRhYjUtODAwNC1mMTA5Njk2NjQ3OTMiLCJldmVudF9pZCI6IjQwNDA1NDM1LTNjYWEtNGVmZC04ZDJhLTYxZmU5MzVmMzMwMSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NjYyNzM5MzQsImV4cCI6MTY2NjI3NzUzNCwiaWF0IjoxNjY2MjczOTM2LCJqdGkiOiI3OGUzYzE3OS1lOWI4LTRkNGUtYjcwNy0xNmFmMDcxODZlMzAiLCJ1c2VybmFtZSI6IjAyZWQ4MzU5LWE5MWYtNDc1OS05OTI5LWEyODAxOWQ1ZTYwYiJ9.wygqZBcQDomlULmVQW6jEjDkUdSczmLViFNgMTraUxK6YG-p9aSu1GoN8XDJ6v-c7-C2VMVK9EyQYmECnVuGFV22piMtKdFeNHCMdvoxo-c6MbylTlF6MNoZEFzhIl35AzIbOE4IYbA-pszCQ8voZ2wvC9XJ03fxUXJPetYNYOXGdxe33EhyLETt9sTWBgVlpvxLSVL5Zlk1G2DDx_ZLXIm9OcpcraoSo5isyRx36OhMMyABHvQpBIYT1oNcd3HWAB-oZIbFsfyRi7OWMzX9ox9AhMTxS1sh1dSwrDTkJR1Aw3M9Isx9sWek2JD1s9pmckOg0JfnpcAelWTyNhIfOw";

  try {
    const payload = await verifier.verify(token);
    console.log("Token is valid. Payload:", payload);
  } catch {
    console.log("Token not valid!");
  }
};

run().catch((err) => console.log(err));
