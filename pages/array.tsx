import { useState } from "react";
import {
  Container,
  TextInput,
  Button,
  Stack,
  Group,
  Text,
} from "@mantine/core";
import Link from "next/link";

const ArrayBasic = () => {
  const a = [1, 3, 5, 2, 4];
  // Result1
  const result1 = [];
  for (let i = 0; i < a.length; i++) {
    const num = a[i];
    if (i % 2 === 0) {
      result1.push(num);
    }
  }
  console.log(result1);
// Result2
  const result2 = [];
  for (let i = 0; i < a.length; i++) {
    let num = a[i];
      num = num*num
      result2.push(num);
  }
  console.log(result2);

  // Result3
  const result3 = [];
  for (let i = 0; i < a.length; i++) {
    let num = a[i];
    if (i % 2 === 0) {
      num = num*num
      result3.push(num);
    }
  }
  console.log(result3);

  return (
    <Container size="md" mt="10%">
      <Group position="center" mt={60}>
      <Group position='center'>
      <Link href='./table' style={{margin:'30px'}}>
    <Button>Click me to get data in table</Button>
    </Link>
    </Group>
      <Stack>
          <Text size={20} weight={500}>Result1: {result1}</Text>
          <Text>Result: {result2}</Text>
          <Text>Result3: {result3}</Text>
        </Stack>
        </Group>
    </Container>
  );
};
export default ArrayBasic;
