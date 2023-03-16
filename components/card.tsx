import {SimpleGrid, Card, Image, Text, Badge, Button, Group, Container } from '@mantine/core';

export default function ProductCard() {
  let rawData = [
    {
        name: "John Doe",
        age: 32,
        occupation: "Developer"
        },
        {
        name: "Jane Doe",
        age: 27,
        occupation: "Designer"
        },
        {
        name: "Bob Smith",
        age: 45,
        occupation: "Manager"
        }
    ]
    

  return (
    <Container size='md' mt={30}>
    <SimpleGrid cols={3} spacing='md'>
    <Card shadow="lg"  withBorder >
        <Group position='center'>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={80}
          width={80}
          alt="Norway"
          radius={40}
        />
        </Group>
      <Group position="center" mt="md" mb="xs">
        <Text size={20} weight={500}>Norway Fjord Adventures</Text>
      <Text size={14} weight={600}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>
      <Text size={18} weight={400}>Norway Fjord Adventures</Text>
      </Group>
    </Card>
    </SimpleGrid>
    </Container>
  );
}