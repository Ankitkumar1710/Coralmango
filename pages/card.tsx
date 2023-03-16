import React, { useState } from "react";
import Link from "next/link";
import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Button,
  Stack,
  Group,
  Container,
} from "@mantine/core";
import { HeaderMegaMenu } from "../components/header";
// import {rawData} from '../db.json'

function Demo() {
  const [keyword, setKeyword] = useState("");
  let rawData = [
    {
      name: "John Doe",
      age: 32,
      occupation: "Developer",
    },
    {
      name: "Jane Doe",
      age: 27,
      occupation: "Designer",
    },
    {
      name: "Bob Smith",
      age: 45,
      occupation: "Manager",
    },
  ];

  let list = rawData;
  const filtered = rawData.filter(
    (name, index) => rawData.indexOf(name) === index
  );
  console.log(filtered);

  return (
    <>
      <Container size="sm">
        <HeaderMegaMenu />
        <Group position="center">
          <Link href="./table">
            <Button>Click me to get data in table</Button>
          </Link>
        </Group>
            <>
              <div >
                <SimpleGrid
                  cols={3}
                  spacing='lg'
                  mt={40}
                  breakpoints={[
                    { maxWidth: "48rem", cols: 2, spacing: "sm" },
                    { maxWidth: "36rem", cols: 1, spacing: "sm" },
                  ]}
                >
                {list.map((item, index) => (<>
                  <Card  key={index} shadow="lg" withBorder>
                  <Stack>
                    <Group position="center">
                      <Image
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                        height={90}
                        width={90}
                        alt="Norway"
                        radius={60}
                      />
                    </Group>
                    <Group position="center" mt="md" mb="xs">
                      <Stack>
                        <Text size={24} weight={700} align="center">
                          {item.name}
                        </Text>
                        <Text size={18} weight={700} align="center">
                          {item.age}
                        </Text>
                        <Text size={18} weight={400} align="center">
                          {item.occupation}
                        </Text>
                        </Stack>
                    </Group>
                    </Stack>
                  </Card>
                  </>))}
                  </SimpleGrid>
              </div>
            </>
      </Container>
    </>
  );
}

export default Demo;
