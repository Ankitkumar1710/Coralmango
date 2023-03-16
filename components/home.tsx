import { loadPosts } from  '../lib/api'
import {SimpleGrid, Card, Image, Text, Badge, Button, Group, Container } from '@mantine/core';

export default function Homes({ posts }) {
  return (
    <>
      <div className="grid gap-2 my-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, key) => (
          <div
            
            key={key}
          >
              {/* <div className="pt-3 mb-3 ml-4 mr-2">
                <h3 className="text-xl text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-400 ">{post.body}</p>
              </div> */}
              <SimpleGrid cols={3}>
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
        <Text size={20} weight={500}>{post.title}</Text>
      <Text size={14} weight={600}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>
      <Text size={18} weight={400}>Norway Fjord Adventures</Text>
      </Group>
    </Card>
    </SimpleGrid>
          </div>
        ))}
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
        <Text weight={500}>Norway Fjord Adventures</Text>
      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
      </Group>
    </Card>
    </SimpleGrid>
    </Container>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await loadPosts();
  return { props: { posts } };
} 