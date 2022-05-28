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
    <Stack direction='row' wrap='wrap' align='center' >
    <Button spacing={4} size='md'>
      {option}
      </Button>
      </Stack>
  ));

  return (
    <TypeContainer>
      <Text fontSize="xl" fontWeight="bold">{type}</Text>
      <FormControl>
        {stack}
      </FormControl>

    </TypeContainer>
  );
}
