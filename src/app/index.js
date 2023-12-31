import Link from "next/link";
import Image from "next/image";
import { Flex, Grid, Box, Text, Button } from "@chakra-ui/react";
import { fetchApi, baseUrl } from "../../utils/fetchApi";
export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

function Page({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
      <Banner
        purpose="For Sale"
        title1="Rental home for "
        title2="Everyone"
        desc1="Explore Apartments , Villas , Homes"
        desc2="and more"
        linkName="/search?purpose=for=rent"
        buttonText="Explore Renting"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="BUY A HOME"
        title1="Find , Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments , Villas , Homes"
        desc2="and more"
        linkName="/search?purpose=for=sale"
        buttonText="Explore Buying"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </Box>
  );
}

async function getPropertiesData() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    propertiesForRent: propertyForRent?.hits,
    propertiesForSale: propertyForSale?.hits,
  };
}
Page.getInitialProps = async () => {
  return getPropertiesData();
};
export default Page;
