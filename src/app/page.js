import Link from "next/link";
import Image from "next/image";
import { Grid, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
  imageUrl,
}) => {
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {" "}
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Text color="gray.500" fontSize="sm" fontWeight="medium">
      {purpose}
    </Text>
    <Text fontSize="3xl" fontWeight="bold">
      {title1} <br> {title2} </br>
    </Text>
    <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
      {desc1} <br>{desc2}</br>
    </Text>
    <Button fontSize="xl" bg="blue.300" color="white">
      <Link href={linkName}> {buttonText} </Link>
    </Button>
  </Flex>;
};

function Page() {
  return (
    <div>
      <h1>Hello World</h1>
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
    </div>
  );
}
export default Page;
