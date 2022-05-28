import styled from "styled-components";
import { Text, FormControl, Button, Stack} from "@chakra-ui/react";

export default function FilterBox({
  type,
  options,

}) {

  const TypeContainer = styled.div`
  margin: 2rem 1rem 3rem 1rem;
`;
  
  const stack = options.map((option) => (
    <Button m={1.5} colorScheme='teal' variant='outline'>
      {option}
      </Button>
  ));

  return (
    <TypeContainer>
      <Text fontSize="xl" fontWeight="bold">{type}</Text>
      <FormControl spacing={4} direction="row">
        {stack}
      </FormControl>
    </TypeContainer>
  );
}
